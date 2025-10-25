// Simplified IIR Low-pass filter for bass boost
class BassBoost {
    constructor(options = {}) {
        this.gain = options.gain || 6; // dB
        this.frequency = options.frequency || 100; // Hz
        this.lastOutputL = 0;
        this.lastOutputR = 0;
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        const multiplier = Math.pow(10, this.gain / 20);
        
        const omega = 2.0 * Math.PI * this.frequency / audioChunk.format.sampleRate;
        const alpha = Math.sin(omega) / (2.0 * 0.707); // Q = 0.707
        const a0 = 1.0 + alpha;
        const b0 = (1.0 - Math.cos(omega)) / 2.0;
        const b1 = 1.0 - Math.cos(omega);
        const b2 = b0;
        const a1 = -2.0 * Math.cos(omega);
        const a2 = 1.0 - alpha;

        for (let i = 0; i < newChunk.buffer.length; i += 4) {
            const inL = newChunk.buffer.readInt16LE(i);
            const inR = newChunk.buffer.readInt16LE(i + 2);

            const lowL = (b0/a0)*inL + (b1/a0)*this.lastOutputL + (b2/a0)*this.lastOutputL - (a1/a0)*this.lastOutputL - (a2/a0)*this.lastOutputL;
            this.lastOutputL = lowL;
            const boostedL = inL + lowL * (multiplier - 1);

            const lowR = (b0/a0)*inR + (b1/a0)*this.lastOutputR + (b2/a0)*this.lastOutputR - (a1/a0)*this.lastOutputR - (a2/a0)*this.lastOutputR;
            this.lastOutputR = lowR;
            const boostedR = inR + lowR * (multiplier - 1);

            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, Math.floor(boostedL))), i);
            newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, Math.floor(boostedR))), i + 2);
        }

        return newChunk;
    }
}

export default BassBoost;
