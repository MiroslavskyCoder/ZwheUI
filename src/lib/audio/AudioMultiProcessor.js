class AudioMultiProcessor {
    constructor(env) {
        this.env = env;
        this.effects = [];
    }

    addEffect(effectInstance) {
        this.effects.push(effectInstance);
    }

    clearEffects() {
        this.effects = [];
    }

    getEffects() {
        return this.effects;
    }

    process(inputChunk) {
        this.env.trace('Starting audio processing chain...');
        let currentChunk = inputChunk.clone(); 

        for (const effect of this.effects) {
            this.env.trace(`Applying effect: ${effect.constructor.name}`);
            currentChunk = effect.process(currentChunk);
        }

        this.env.trace('Audio processing chain finished.');
        return currentChunk;
    }
}

export default AudioMultiProcessor;
