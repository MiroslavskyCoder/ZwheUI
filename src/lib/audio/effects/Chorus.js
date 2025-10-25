class Chorus {
    constructor(options = {}) {
        this.rate = options.rate || 1.5; // LFO rate in Hz
        this.depth = options.depth || 0.002; // depth in seconds
        this.mix = options.mix || 0.7;
        this.phase = 0;
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        const sr = audioChunk.format.sampleRate;
        const depthSamples = this.depth * sr;
        const increment = 2 * Math.PI * this.rate / sr;

        for (let i = 0; i < newChunk.buffer.length / 2; i++) {
            const lfo = Math.sin(this.phase);
            this.phase += increment;
            if (this.phase > 2 * Math.PI) this.phase -= 2 * Math.PI;

            const delay = depthSamples * (1 + lfo) / 2;
            const intDelay = Math.floor(delay);
            const fracDelay = delay - intDelay;
            
            const drySample = newChunk.getSample(i);

            const pastIndex1 = i - intDelay;
            const pastIndex2 = pastIndex1 - 1;

            const prevSample1 = (pastIndex1 >= 0) ? newChunk.getSample(pastIndex1) : 0;
            const prevSample2 = (pastIndex2 >= 0) ? newChunk.getSample(pastIndex2) : 0;
            
            const wetSample = prevSample1 * (1 - fracDelay) + prevSample2 * fracDelay;

            const mixedSample = (drySample * (1 - this.mix)) + (wetSample * this.mix);
            newChunk.setSample(i, Math.floor(mixedSample));
        }

        return newChunk;
    }
}

export default Chorus;
