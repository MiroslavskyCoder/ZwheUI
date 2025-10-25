import AllPassFilter from './AllPassFilter.js';

class CombFilter {
    constructor(size, feedback, damping) {
        this.buffer = new Float32Array(size);
        this.index = 0;
        this.feedback = feedback;
        this.damping = damping;
        this.last = 0;
    }
    process(sample) {
        const output = this.buffer[this.index];
        this.last = output * (1 - this.damping) + this.last * this.damping;
        this.buffer[this.index] = sample + this.last * this.feedback;
        this.index = (this.index + 1) % this.buffer.length;
        return output;
    }
}

class Reverb {
    constructor(options = {}) {
        this.roomSize = options.roomSize || 0.8; // 0-1
        this.damping = options.damping || 0.5; // 0-1
        this.mix = options.mix || 0.33; // 0-1
        
        // Defer initialization to process method
        this.sampleRate = null;
        this.combFiltersL = [];
        this.combFiltersR = [];
        this.allPassFiltersL = [];
        this.allPassFiltersR = [];
        this.initialized = false;
    }
    
    initializeFilters() {
        const sr = this.sampleRate;
        const scale = v => Math.floor(v * (sr / 44100));

        const combTunings = [scale(1116), scale(1188), scale(1277), scale(1356), scale(1422), scale(1491), scale(1557), scale(1617)];
        const allPassTunings = [scale(556), scale(441), scale(341), scale(225)];
        const feedback = 0.84;
        
        this.combFiltersL = combTunings.map(size => new CombFilter(size, this.roomSize * feedback, this.damping));
        this.combFiltersR = combTunings.map(size => new CombFilter(size, this.roomSize * feedback, this.damping));
        this.allPassFiltersL = allPassTunings.map(size => new AllPassFilter(size));
        this.allPassFiltersR = allPassTunings.map(size => new AllPassFilter(size));
        this.initialized = true;
    }

    process(audioChunk) {
        if (!this.initialized) {
            this.sampleRate = audioChunk.format.sampleRate;
            this.initializeFilters();
        }

        const newChunk = audioChunk.clone();
        const numFrames = newChunk.buffer.length / 4;

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            const dryL = newChunk.buffer.readInt16LE(offset) / 32768.0;
            const dryR = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;
            
            const monoInput = (dryL + dryR) * 0.5;

            let wetL = 0;
            let wetR = 0;

            this.combFiltersL.forEach(f => wetL += f.process(monoInput));
            this.combFiltersR.forEach(f => wetR += f.process(monoInput));
            
            wetL /= this.combFiltersL.length;
            wetR /= this.combFiltersR.length;

            this.allPassFiltersL.forEach(f => wetL = f.process(wetL));
            this.allPassFiltersR.forEach(f => wetR = f.process(wetR));
            
            const outL = dryL * (1 - this.mix) + wetL * this.mix;
            const outR = dryR * (1 - this.mix) + wetR * this.mix;

            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, outL * 32767.0)), offset);
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, outR * 32767.0)), offset + 2);
        }
        return newChunk;
    }
}

export default Reverb;
