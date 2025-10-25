import Reverb from './Reverb.js';

class RoomReverb extends Reverb {
    constructor(options = {}) {
        super({
            roomSize: 0.5,
            damping: 0.4,
            mix: 0.25,
            ...options
        });
    }
}

export default RoomReverb;
