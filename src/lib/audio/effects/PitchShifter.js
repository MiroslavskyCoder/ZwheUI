// A simplified real-time pitch shifter based on a granular, overlap-add method.
// NOTE: This is a basic implementation and will have audible artifacts, especially
// on complex material. A high-quality real-time pitch shifter (like a phase vocoder or PSOLA)
// is significantly more complex.

class PitchShifter {
    constructor(options = {}, format = {}) {
        this.semitones = options.shift !== undefined ? options.shift : 0;
        this.pitchFactor = Math.pow(2, this.semitones / 12.0);

        this.grainSize = 1024;
        this.hopSize = this.grainSize / 4;
        this.sampleRate = format.sampleRate || 44100;

        // Buffers for Left and Right channels, non-interleaved
        this.inputBufferL = new Float32Array(this.grainSize);
        this.inputBufferR = new Float32Array(this.grainSize);
        this.outputBufferL = new Float32Array(this.grainSize * 2);
        this.outputBufferR = new Float32Array(this.grainSize * 2);
        
        this.inputBufferPos = 0;
        this.outputSamplesReady = 0;

        this.window = new Float32Array(this.grainSize);
        for (let i = 0; i < this.grainSize; i++) {
            this.window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / this.grainSize)); // Hanning window
        }
    }

    resample(buffer, factor) {
        const newLength = Math.round(buffer.length / factor);
        const newBuffer = new Float32Array(newLength);
        for (let i = 0; i < newLength; i++) {
            const index = i * factor;
            const i_low = Math.floor(index);
            const i_high = Math.ceil(index);
            const frac = index - i_low;
            const v_low = buffer[i_low] || 0;
            const v_high = buffer[i_high] || 0;
            newBuffer[i] = v_low + (v_high - v_low) * frac; // Linear interpolation
        }
        return newBuffer;
    }

    process(audioChunk) {
        // Since effects are re-created on change, we can just read from the constructor values.
        this.pitchFactor = Math.pow(2, this.semitones / 12.0);

        const newChunk = audioChunk.clone();
        const numFrames = audioChunk.buffer.length / 4; // 2 channels * 2 bytes/sample

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            
            // 1. Write available output samples to the current chunk
            if (this.outputSamplesReady > 0) {
                newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, this.outputBufferL[0] * 32767.0)), offset);
                newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, this.outputBufferR[0] * 32767.0)), offset + 2);
                
                // Shift the output buffer to consume the sample
                this.outputBufferL.copyWithin(0, 1);
                this.outputBufferR.copyWithin(0, 1);
                this.outputSamplesReady--;
            } else {
                // If we're lagging (not enough output), fill with silence to avoid old data
                newChunk.buffer.writeInt16LE(0, offset);
                newChunk.buffer.writeInt16LE(0, offset + 2);
            }

            // 2. Add the current input sample to our buffer
            this.inputBufferL[this.inputBufferPos] = audioChunk.buffer.readInt16LE(offset) / 32768.0;
            this.inputBufferR[this.inputBufferPos] = audioChunk.buffer.readInt16LE(offset + 2) / 32768.0;
            this.inputBufferPos++;
            
            // 3. If the input buffer is full, process a grain
            if (this.inputBufferPos >= this.grainSize) {
                // Window the grain
                const grainL = new Float32Array(this.grainSize);
                const grainR = new Float32Array(this.grainSize);
                for (let j = 0; j < this.grainSize; j++) {
                    grainL[j] = this.inputBufferL[j] * this.window[j];
                    grainR[j] = this.inputBufferR[j] * this.window[j];
                }
                
                // Resample (pitch shift)
                const resampledGrainL = this.resample(grainL, this.pitchFactor);
                const resampledGrainR = this.resample(grainR, this.pitchFactor);
                
                // Overlap-add to the output buffer
                for (let j = 0; j < resampledGrainL.length; j++) {
                    this.outputBufferL[j] += resampledGrainL[j];
                    this.outputBufferR[j] += resampledGrainR[j];
                }
                
                // Mark that we have new samples ready in the output buffer
                this.outputSamplesReady += this.hopSize;
                
                // Shift the input buffer to make room for new samples
                this.inputBufferL.copyWithin(0, this.hopSize);
                this.inputBufferR.copyWithin(0, this.hopSize);
                this.inputBufferPos -= this.hopSize;
            }
        }
        return newChunk;
    }
}
export default PitchShifter;
