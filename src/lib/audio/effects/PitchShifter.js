class PitchShifter {
    constructor(options = {}, format) {
        this.shift = options.shift || 1.2;
        
        this.grainSize = 1024;
        this.hopSize = this.grainSize / 4;
        this.sampleRate = format.sampleRate;

        this.inputBuffer = new Float32Array(this.grainSize * 2);
        this.outputBuffer = new Float32Array(this.grainSize * 2);
        this.inputBufferPos = 0;
        
        this.window = new Float32Array(this.grainSize);
        for (let i = 0; i < this.grainSize; i++) {
            this.window[i] = 0.5 * (1 - Math.cos(2 * Math.PI * i / this.grainSize)); // Hanning window
        }
    }

    process(audioChunk) {
        console.warn("[PitchShifter] This is a simplified, low-quality implementation and may have audible artifacts.");
        const newChunk = audioChunk.clone();
        const numFrames = audioChunk.buffer.length / 4;

        for (let i = 0; i < numFrames; i++) {
            const offset = i * 4;
            this.inputBuffer[this.inputBufferPos] = newChunk.buffer.readInt16LE(offset) / 32768.0;
            this.inputBuffer[this.inputBufferPos + 1] = newChunk.buffer.readInt16LE(offset + 2) / 32768.0;
            this.inputBufferPos += 2;

            if (this.inputBufferPos >= this.grainSize) {
                // Process a grain
                const grain = new Float32Array(this.grainSize);
                for (let j = 0; j < this.grainSize; j++) {
                    grain[j] = this.inputBuffer[j] * this.window[j];
                }

                const resampledGrain = this.resample(grain, this.shift);
                
                // Overlap-add
                for (let j = 0; j < resampledGrain.length && j < this.outputBuffer.length; j++) {
                    this.outputBuffer[j] += resampledGrain[j];
                }

                const outSamples = Math.floor(this.hopSize);
                for(let j = 0; j < outSamples; j++) {
                    const writeOffset = (i - (this.grainSize / 2) + j) * 4;
                    if(writeOffset >= 0 && writeOffset < newChunk.buffer.length) {
                        const val = this.outputBuffer[j];
                        newChunk.buffer.writeInt16LE(Math.max(-32768, Math.min(32767, val * 32767.0)), writeOffset);
                    }
                }
                
                // Shift buffers
                this.inputBuffer.copyWithin(0, this.hopSize);
                this.outputBuffer.copyWithin(0, outSamples);
                for(let j = this.outputBuffer.length - outSamples; j < this.outputBuffer.length; j++) {
                    this.outputBuffer[j] = 0;
                }
                this.inputBufferPos -= this.hopSize;
            }
        }
        return newChunk;
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
            
            newBuffer[i] = v_low + (v_high - v_low) * frac;
        }
        return newBuffer;
    }
}

export default PitchShifter;
