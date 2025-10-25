class Compressor {
    constructor(options = {}) {
        this.threshold = options.threshold || -24; // dB
        this.ratio = options.ratio || 4; // :1
        this.attack = options.attack || 0.003; // seconds
        this.release = options.release || 0.25; // seconds
        this.envelope = 0;
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        const sr = audioChunk.format.sampleRate;

        const thresholdLinear = Math.pow(10, this.threshold / 20);
        const attackSamples = this.attack * sr;
        const releaseSamples = this.release * sr;
        const alphaAttack = Math.exp(-1 / attackSamples);
        const alphaRelease = Math.exp(-1 / releaseSamples);

        for (let i = 0; i < newChunk.buffer.length; i += 2) {
            const sample = newChunk.buffer.readInt16LE(i) / 32768.0;
            const sampleAbs = Math.abs(sample);

            if (sampleAbs > this.envelope) {
                this.envelope = alphaAttack * this.envelope + (1 - alphaAttack) * sampleAbs;
            } else {
                this.envelope = alphaRelease * this.envelope + (1 - alphaRelease) * sampleAbs;
            }

            let gain = 1.0;
            if (this.envelope > thresholdLinear) {
                const overshoot = this.envelope / thresholdLinear;
                const gainReduction = Math.pow(overshoot, 1 / this.ratio - 1);
                gain = gainReduction;
            }

            const compressedSample = sample * gain;
            const finalSample = Math.floor(Math.max(-1, Math.min(1, compressedSample)) * 32767);
            newChunk.buffer.writeInt16LE(finalSample, i);
        }
        return newChunk;
    }
}

export default Compressor;
