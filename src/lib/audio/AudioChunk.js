import Bufferish from './bufferish.js';

class AudioChunk {
    constructor(buffer, format) {
        this.buffer = buffer; // Bufferish instance
        this.format = {
            sampleRate: format.sampleRate || 44100,
            channels: format.channels || 2,
            bitDepth: format.bitDepth || 16,
        };
    }

    clone() {
        const newBuffer = Bufferish.from(this.buffer);
        return new AudioChunk(newBuffer, { ...this.format });
    }

    getSample(index) {
        const bytesPerSample = this.format.bitDepth / 8;
        if (this.format.bitDepth === 16) {
            return this.buffer.readInt16LE(index * bytesPerSample);
        } else if (this.format.bitDepth === 32) {
            return this.buffer.readFloatLE(index * bytesPerSample * this.format.channels);
        }
        return this.buffer.readInt8(index * bytesPerSample * this.format.channels);
    }

    setSample(index, value) {
        const bytesPerSample = this.format.bitDepth / 8;
        if (this.format.bitDepth === 16) {
            this.buffer.writeInt16LE(value, index * bytesPerSample);
        } else if (this.format.bitDepth === 32) {
            this.buffer.writeFloatLE(value, index * bytesPerSample * this.format.channels);
        } else {
            this.buffer.writeInt8(value, index * bytesPerSample * this.format.channels);
        }
    }

    get duration() {
        const bytesPerSample = this.format.bitDepth / 8;
        const numSamples = this.buffer.length / bytesPerSample / this.format.channels;
        return numSamples / this.format.sampleRate;
    }
}

export default AudioChunk;
