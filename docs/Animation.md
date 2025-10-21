# Animation Hooks

ZwheUI includes a set of custom hooks to make adding animations and transitions to your components simple and declarative. These hooks abstract away the complexities of managing component mounting/unmounting and CSS transitions.

## `useFade`

The `useFade` hook provides a simple way to fade elements in and out by transitioning their `opacity`. It handles the tricky part of delaying unmounting until the fade-out animation is complete.

-   **`useFade(initialState, duration)`**
    -   `initialState` (boolean): Whether the component is visible initially.
    -   `duration` (number, optional): The duration of the fade in milliseconds. Defaults to 300.

**Returns an object with:**
-   `isRendered` (boolean): Use this to conditionally render the component in the DOM.
-   `isVisible` (boolean): Reflects the current visibility state (used for styling).
-   `style` (object): A style object with `transition` and `opacity` properties to apply directly to your component.
-   `show`, `hide`, `toggle`: Callback functions to control the state.

### Usage

```tsx
import { useFade, Button, Card } from 'zwheui';
import { useState } from 'react';

const FadingComponent = () => {
  const [show, setShow] = useState(false);
  const { isRendered, style } = useFade(show, 300);

  return (
    <>
      <Button onClick={() => setShow(s => !s)}>Toggle Fade</Button>
      {isRendered && (
        <div style={style}>
          <Card>
            <p>I fade in and out!</p>
          </Card>
        </div>
      )}
    </>
  );
};
```

## `useSlide`

Similar to `useFade`, `useSlide` transitions a component in from off-screen using a CSS `transform`.

-   **`useSlide(initialState, options)`**
    -   `initialState` (boolean): Initial visibility.
    -   `options` (object):
        -   `duration` (number, optional): Transition duration in ms.
        -   `direction` ('left' | 'right' | 'up' | 'down', optional): The direction from which the component slides in. Defaults to `'right'`.

**Returns:** The same object as `useFade`, but the `style` object contains a `transform` property instead of `opacity`.

### Usage

```tsx
const SlidingComponent = () => {
  const [show, setShow] = useState(false);
  const { isRendered, style } = useSlide(show, { direction: 'left', duration: 500 });

  return (
    <>
      <Button onClick={() => setShow(s => !s)}>Toggle Slide</Button>
      {isRendered && (
          <div style={style}>
            <Card><p>I slide in from the left!</p></Card>
          </div>
      )}
    </>
  );
};
```

## `useCurveAnimation` (Advanced)

This hook is for animating a single numerical value over time using different easing functions ("curves"). It's perfect for creating custom, physics-based animations that go beyond simple CSS transitions. It uses `requestAnimationFrame` for smooth animations.

-   **`useCurveAnimation(config)`**
    -   `config` (object):
        -   `duration` (number): Animation duration in ms.
        -   `type` ('linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce' | 'elastic'): The easing function to use.
        -   `bounceStrength` (number, optional): Controls the "bounciness" for the `bounce` type.
        -   `elasticity` (number, optional): Controls the "elasticity" for the `elastic` type.
        -   `initialValue` (number, optional): The starting value.

**Returns an object with:**
-   `value` (number): The current animated numerical value. You apply this to a CSS property like `transform` or `opacity`.
-   `progress` (number): The animation progress from 0 to 1.
-   `isRunning` (boolean): Whether the animation is currently active.
-   `animate(targetValue)`: A function to start the animation from the current value to a new target value.

### Usage

```tsx
import { useCurveAnimation, Button } from 'zwheui';

const BouncingBlock = () => {
  const animation = useCurveAnimation({ 
      duration: 1000, 
      type: 'bounce',
      bounceStrength: 4
  });

  const handleClick = () => {
    // Animate to 200 if at 0, otherwise animate back to 0
    animation.animate(animation.value === 0 ? 200 : 0);
  };

  return (
    <div>
      <div style={{ 
          transform: `translateX(${animation.value}px)`, 
          width: '50px', 
          height: '50px', 
          background: 'blue',
          borderRadius: '8px'
      }} />
      <Button onClick={handleClick}>
        Animate
      </Button>
    </div>
  );
};
```
See the `AnimatedBlock` component for a live demonstration of all curve types.
