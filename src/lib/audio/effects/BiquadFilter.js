// A standard Biquad Filter implementation for audio processing.
// Supports Peaking, Low-shelf, and High-shelf filter types.
class BiquadFilter {
    constructor(options) {
        this.sampleRate = options.sampleRate;
        this.b0 = this.b1 = this.b2 = 0;
        this.a1 = this.a2 = 0;
        // State variables for 2 channels (L/R)
        this.x1L = this.x2L = this.y1L = this.y2L = 0;
        this.x1R = this.x2R = this.y1R = this.y2R = 0;
        this.calcCoeffs(options);
    }

    // Calculates filter coefficients based on type, frequency, gain, and Q.
    // Supports gain as a linear multiplier ('gain') or in decibels ('g').
    calcCoeffs({ type, f, g, gain, q }) {
        const V = gain !== undefined ? gain : Math.pow(10, Math.abs(g) / 20);
        const gainInDb = g !== undefined ? g : (gain ? 20 * Math.log10(gain) : 0);
        const K = Math.tan(Math.PI * f / this.sampleRate);
        q = q || 0.707; // Default Q value if not provided

        if (type === 'peaking') {
             if (gainInDb >= 0) { // Boost
                const norm = 1 / (1 + (1 / q) * K + K * K);
                this.b0 = (1 + (V / q) * K + K * K) * norm;
                this.b1 = 2 * (K * K - 1) * norm;
                this.b2 = (1 - (V / q) * K + K * K) * norm;
                this.a1 = this.b1;
                this.a2 = (1 - (1 / q) * K + K * K) * norm;
            } else { // Cut
                const norm = 1 / (1 + (V / q) * K + K * K);
                this.b0 = (1 + (1 / q) * K + K * K) * norm;
                this.b1 = 2 * (K * K - 1) * norm;
                this.b2 = (1 - (1 / q) * K + K * K) * norm;
                this.a1 = this.b1;
                this.a2 = (1 - (V / q) * K + K * K) * norm;
            }
        } else if (type === 'lowshelf') {
            const norm = 1 / (1 + Math.sqrt(2) * K + K * K);
            this.b0 = (1 + Math.sqrt(2 * V) * K + V * K * K) * norm;
            this.b1 = 2 * (V * K * K - 1) * norm;
            this.b2 = (1 - Math.sqrt(2 * V) * K + V * K * K) * norm;
            this.a1 = 2 * (K * K - 1) * norm;
            this.a2 = (1 - Math.sqrt(2) * K + K * K) * norm;
        } else if (type === 'highshelf') {
            const norm = 1 / (1 + Math.sqrt(2) * K + K * K);
            this.b0 = (V + Math.sqrt(2 * V) * K + K * K) * norm;
            this.b1 = 2 * (K * K - V) * norm;
            this.b2 = (V - Math.sqrt(2 * V) * K + K * K) * norm;
            this.a1 = 2 * (K * K - 1) * norm;
            this.a2 = (1 - Math.sqrt(2) * K + K * K) * norm;
        }
    }

    // Processes a stereo audio sample using the Direct Form I structure.
    process(sampleL, sampleR) {
        const outL = this.b0 * sampleL + this.b1 * this.x1L + this.b2 * this.x2L - this.a1 * this.y1L - this.a2 * this.y2L;
        this.x2L = this.x1L; this.x1L = sampleL;
        this.y2L = this.y1L; this.y1L = outL;

        const outR = this.b0 * sampleR + this.b1 * this.x1R + this.b2 * this.x2R - this.a1 * this.y1R - this.a2 * this.y2R;
        this.x2R = this.x1R; this.x1R = sampleR;
        this.y2R = this.y1R; this.y1R = outR;
        
        return { outL, outR };
    }
}

export default BiquadFilter;
