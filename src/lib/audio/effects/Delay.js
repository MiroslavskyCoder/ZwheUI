import { Bufferish } from '../bufferish.js';

class Delay {
    constructor(options = {}) {
        this.delayTime = options.delayTime || 0.5; // in seconds
        this.feedback = options.feedback || 0.4; // 0 to 1
        this.mix = options.mix || 0.5; // 0 to 1
        this.delayBuffer = null;
        this.bufferPosition = 0;
    }

    process(audioChunk) {
        const newChunk = audioChunk.clone();
        const sampleRate = audioChunk.format.sampleRate;
        const channels = audioChunk.format.channels;
        const delaySamples = Math.floor(this.delayTime * sampleRate);

        if (!this.delayBuffer || this.delayBuffer.length !== delaySamples * channels * 2) {
            this.delayBuffer = Bufferish.alloc(delaySamples * channels * 2);
        }

        for (let i = 0; i < newChunk.buffer.length; i += (2 * channels)) {
            for (let c = 0; c < channels; c++) {
                const index = i + c * 2;
                const drySample = newChunk.buffer.readInt16LE(index);

                const delayIndex = ((this.bufferPosition - delaySamples + this.delayBuffer.length / 2) % (this.delayBuffer.length / 2)) * channels * 2 + c * 2;
                const wetSample = this.delayBuffer.readInt16LE(delayIndex);
                
                const mixedSample = (drySample * (1 - this.mix)) + (wetSample * this.mix);
                const feedbackSample = mixedSample + (wetSample * this.feedback);
                
                const finalSample = Math.max(-32768, Math.min(32767, Math.floor(mixedSample)));
                newChunk.buffer.writeInt16LE(finalSample, index);

                const finalFeedbackSample = Math.max(-32768, Math.min(32767, Math.floor(feedbackSample)));
                this.delayBuffer.writeInt16LE(finalFeedbackSample, (this.bufferPosition % delaySamples) * channels * 2 + c * 2);
            }
            this.bufferPosition++;
        }
        return newChunk;
    }
}

export default Delay;
