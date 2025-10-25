class AllPassFilter {
    constructor() {
        this.delayL = 0;
        this.delayR = 0;
    }
    process(sampleL, sampleR, coefficient) {
        const outL = sampleL * -coefficient + this.delayL;
        this.delayL = outL * coefficient + sampleL;
        const outR = sampleR * -coefficient + this.delayR;
        this.delayR = outR * coefficient + sampleR;
        return { outL, outR };
    }
}

class Phaser {
    constructor(options = {}) {
        this.rate = options.rate || 0.5; // LFO rate in Hz
        this.depth = options.depth || 0.8; // 0-1
        this.feedback = options.feedback || 0.7; // 0-1
        this.mix = options.mix || 0.5;
        
        this.phase = 0;
        this.stages = 4;
        this.filters = Array.from({ length: this.stages }, () => new AllPassFilter());
        this.lastFeedbackL = 0;
        this.lastFeedbackR = 0;
        
        this.sampleRate = null;
        this.lfoIncrement = null;
    }

    process(audioChunk) {
        if (!this.sampleRate) {
            this.sampleRate = audioChunk.format.sampleRate;
            this.lfoIncrement = 2 * Math.PI * this.rate / this.sampleRate;
        }

        const newChunk = audioChunk.clone();
        const numFrames = newChunk.buffer.length / 4;
        const minFreq = 440;
        const maxFreq = 1600;

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            const dryL = newChunk.buffer.readInt16LE(offset) / 32768.0;
            const dryR = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;

            this.phase += this.lfoIncrement;
            if (this.phase > 2 * Math.PI) this.phase -= 2 * Math.PI;

            const lfo = (Math.sin(this.phase) + 1) / 2; // 0 to 1
            const centerFreq = minFreq + (maxFreq - minFreq) * lfo * this.depth;
            const coefficient = (1 - centerFreq / (this.sampleRate / 2)) / (1 + centerFreq / (this.sampleRate / 2));

            let wetL = dryL + this.lastFeedbackL * this.feedback;
            let wetR = dryR + this.lastFeedbackR * this.feedback;

            for (const filter of this.filters) {
                const { outL, outR } = filter.process(wetL, wetR, coefficient);
                wetL = outL;
                wetR = outR;
            }

            this.lastFeedbackL = wetL;
            this.lastFeedbackR = wetR;

            const outL = dryL * (1 - this.mix) + wetL * this.mix;
            const outR = dryR * (1 - this.mix) + wetR * this.mix;
            
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, outL * 32767.0)), offset);
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, outR * 32767.0)), offset + 2);
        }

        return newChunk;
    }
}

export default Phaser;
