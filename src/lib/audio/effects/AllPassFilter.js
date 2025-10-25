// A Schroeder all-pass filter, a common building block for reverb effects.
// This implementation is for mono signals.
class AllPassFilter {
    constructor(size) {
        this.buffer = new Float32Array(size);
        this.index = 0;
    }
    process(sample) {
        const buffered = this.buffer[this.index];
        const output = -sample + buffered;
        // The feedback factor 'g' is fixed at 0.5, a common value for this algorithm.
        this.buffer[this.index] = sample + buffered * 0.5;
        this.index = (this.index + 1) % this.buffer.length;
        return output;
    }
}

export default AllPassFilter;
