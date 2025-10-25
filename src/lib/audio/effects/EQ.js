import BiquadFilter from './BiquadFilter.js';

class EQ {
    constructor(options = {}) {
        this.lowGain = options.lowGain || 1.0;
        this.midGain = options.midGain || 1.0;
        this.highGain = options.highGain || 1.0;
        
        this.lowFilter = null;
        this.midFilter = null;
        this.highFilter = null;
    }

    process(audioChunk) {
        if (!this.lowFilter) {
            const sampleRate = audioChunk.format.sampleRate;
            this.lowFilter = new BiquadFilter({ type: 'lowshelf', f: 250, gain: this.lowGain, q: 0.707, sampleRate });
            this.midFilter = new BiquadFilter({ type: 'peaking', f: 1500, gain: this.midGain, q: 1.0, sampleRate });
            this.highFilter = new BiquadFilter({ type: 'highshelf', f: 5000, gain: this.highGain, q: 0.707, sampleRate });
        }

        const newChunk = audioChunk.clone();
        const numFrames = newChunk.buffer.length / 4;

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            let sampleL = newChunk.buffer.readInt16LE(offset) / 32768.0;
            let sampleR = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;

            let { outL: l1, outR: r1 } = this.lowFilter.process(sampleL, sampleR);
            let { outL: l2, outR: r2 } = this.midFilter.process(l1, r1);
            let { outL: l3, outR: r3 } = this.highFilter.process(l2, r2);
            
            sampleL = l3;
            sampleR = r3;

            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, sampleL * 32767.0)), offset);
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, sampleR * 32767.0)), offset + 2);
        }
        return newChunk;
    }
}

export default EQ;
