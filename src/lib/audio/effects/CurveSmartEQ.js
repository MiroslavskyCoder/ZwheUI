import BiquadFilter from './BiquadFilter.js';

class CurveSmartEQ {
    constructor(options = {}) {
        this.curvePoints = options.curvePoints || [{f: 100, g: 3}, {f: 1000, g: -2}, {f: 5000, g: 4}];
        this.filters = null; // Defer initialization
    }

    process(audioChunk) {
        // Initialize filters on first run when we have the format
        if (!this.filters) {
            this.filters = this.curvePoints.map(point => new BiquadFilter({
                type: 'peaking',
                f: point.f,
                g: point.g,
                q: 1.414,
                sampleRate: audioChunk.format.sampleRate
            }));
        }
        
        const newChunk = audioChunk.clone();
        const numFrames = newChunk.buffer.length / 4; // 2 channels * 2 bytes/sample

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            let sampleL = newChunk.buffer.readInt16LE(offset) / 32768.0;
            let sampleR = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;
            
            for (const filter of this.filters) {
                const { outL, outR } = filter.process(sampleL, sampleR);
                sampleL = outL;
                sampleR = outR;
            }

            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, sampleL * 32767.0)), offset);
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, sampleR * 32767.0)), offset + 2);
        }

        return newChunk;
    }
}

export default CurveSmartEQ;
