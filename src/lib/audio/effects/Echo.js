import Delay from './Delay.js';

class Echo extends Delay {
    constructor(options = {}) {
        super({
            delayTime: options.delayTime || 0.25,
            feedback: options.feedback || 0.6,
            mix: options.mix || 0.4,
            ...options
        });
    }
}

export default Echo;
