class HQ {
    constructor(options = {}) {
        this.clarity = options.clarity || 0.5; // 0-1
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        const numFrames = newChunk.buffer.length / 4;

        // --- Saturation parameters ---
        const saturationAmount = 1 + this.clarity * 0.5; // Increase gain for tanh curve

        // --- Stereo Widening parameters ---
        const width = 1 + this.clarity; // Width from 1 (original) to 2 (wide)

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            let sampleL = newChunk.buffer.readInt16LE(offset) / 32768.0;
            let sampleR = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;

            // --- 1. Stereo Widening via Mid/Side processing ---
            const mid = (sampleL + sampleR) / 2;
            const side = (sampleL - sampleR) / 2;
            const widenedSide = side * width;
            
            let l = mid + widenedSide;
            let r = mid - widenedSide;

            // --- 2. Saturation via tanh waveshaper ---
            l = Math.tanh(l * saturationAmount);
            r = Math.tanh(r * saturationAmount);

            // Clamp and convert back to Int16
            const finalL = Math.max(-32768, Math.min(32767, l * 32767.0));
            const finalR = Math.max(-32768, Math.min(32767, r * 32767.0));

            newChunk.buffer.writeInt16LE(finalL, offset);
            newChunk.buffer.writeInt16LE(finalR, offset + 2);
        }

        return newChunk;
    }
}

export default HQ;
