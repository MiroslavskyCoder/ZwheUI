export type CurveType = 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce' | 'elastic'

export interface CurveConfig {
    duration: number
    from: number
    to: number
    type: CurveType
    bounceStrength?: number // For bounce animation
    elasticity?: number // For elastic animation
}

export interface AnimationState {
    value: number
    progress: number
    isRunning: boolean
}

export class CurveContextAnimation {
    private animationFrame: number | null = null
    private startTime: number | null = null
    private config: CurveConfig
    private onUpdate: (state: AnimationState) => void
    private onComplete?: () => void

    constructor(config: CurveConfig, onUpdate: (state: AnimationState) => void, onComplete?: () => void) {
        this.config = config
        this.onUpdate = onUpdate
        this.onComplete = onComplete
    }

    private easingFunctions = {
        linear: (t: number) => t,
        easeIn: (t: number) => t * t,
        easeOut: (t: number) => 1 - (1 - t) * (1 - t),
        easeInOut: (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
        bounce: (t: number) => {
            const strength = this.config.bounceStrength || 3
            const bounce = Math.exp(-strength * t) * Math.cos(2 * Math.PI * t)
            return 1 - bounce
        },
        elastic: (t: number) => {
            const elasticity = this.config.elasticity || 0.3
            return Math.pow(2, -10 * t) * Math.sin((t - elasticity / 4) * (2 * Math.PI) / elasticity) + 1
        }
    }

    private interpolate(progress: number): number {
        const easingFn = this.easingFunctions[this.config.type]
        const easedProgress = easingFn(progress)
        return this.config.from + (this.config.to - this.config.from) * easedProgress
    }

    private animate = (currentTime: number) => {
        if (!this.startTime) this.startTime = currentTime
        
        const elapsed = currentTime - this.startTime
        const progress = Math.min(elapsed / this.config.duration, 1)
        
        const currentValue = this.interpolate(progress)
        
        this.onUpdate({
            value: currentValue,
            progress,
            isRunning: progress < 1
        })

        if (progress < 1) {
            this.animationFrame = requestAnimationFrame(this.animate)
        } else {
            this.stop()
            this.onComplete?.()
        }
    }

    public start(): void {
        if (this.animationFrame !== null) return
        this.startTime = null
        this.animationFrame = requestAnimationFrame(this.animate)
    }

    public stop(): void {
        if (this.animationFrame !== null) {
            cancelAnimationFrame(this.animationFrame)
            this.animationFrame = null
        }
    }

    public updateConfig(newConfig: Partial<CurveConfig>): void {
        this.config = { ...this.config, ...newConfig }
    }
}