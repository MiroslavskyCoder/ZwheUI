class Gain {
    constructor(options = {}) {
        this.gain = options.gain || 1.0; // Multiplier
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        for (let i = 0; i < newChunk.buffer.length; i += 2) {
            const sample = newChunk.buffer.readInt16LE(i);
            const newSample = Math.max(-32768, Math.min(32767, Math.floor(sample * this.gain)));
            newChunk.buffer.writeInt16LE(newSample, i);
        }
        return newChunk;
    }
}

export default Gain;
