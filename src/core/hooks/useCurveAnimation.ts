import { useCallback, useEffect, useRef, useState } from 'react'
import { CurveContextAnimation, CurveConfig, AnimationState } from '../animation/CurveContextAnimation'

interface UseCurveAnimationConfig extends Omit<CurveConfig, 'from' | 'to'> {
    initialValue?: number
    autoStart?: boolean
}

export const useCurveAnimation = (config: UseCurveAnimationConfig) => {
    const {
        initialValue = 0,
        duration = 1000,
        type = 'easeInOut',
        bounceStrength,
        elasticity,
        autoStart = false
    } = config

    const [state, setState] = useState<AnimationState>({
        value: initialValue,
        progress: 0,
        isRunning: false
    })

    const animationRef = useRef<CurveContextAnimation | null>(null)

    const createAnimation = useCallback((from: number, to: number) => {
        if (animationRef.current) {
            animationRef.current.stop()
        }

        animationRef.current = new CurveContextAnimation(
            {
                duration,
                from,
                to,
                type,
                bounceStrength,
                elasticity
            },
            setState
        )
    }, [duration, type, bounceStrength, elasticity])

    const animate = useCallback((targetValue: number) => {
        createAnimation(state.value, targetValue)
        animationRef.current?.start()
    }, [state.value, createAnimation])

    const stop = useCallback(() => {
        animationRef.current?.stop()
    }, [])

    useEffect(() => {
        return () => {
            animationRef.current?.stop()
        }
    }, [])

    return {
        ...state,
        animate,
        stop
    }
}

// Example usage:
/*
const MyComponent = () => {
  const animation = useCurveAnimation({
    duration: 1000,
    type: 'bounce',
    bounceStrength: 3
  })

  return (
    <div
      style={{
        transform: `translateX(${animation.value}px)`
      }}
    >
      <button onClick={() => animation.animate(200)}>
        Move Right
      </button>
    </div>
  )
}
*/