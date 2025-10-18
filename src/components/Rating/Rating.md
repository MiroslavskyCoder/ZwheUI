# Rating

A star rating component to display and collect user ratings.

## Props

*   `value` (number, required): The current rating value (number of filled stars).
*   `onChange` (function, optional): A callback function triggered when the rating is changed by the user.
*   `max` (number, optional, default: 5): The total number of stars to display.
*   `readonly` (boolean, optional, default: false): If true, the rating is display-only and cannot be changed.
*   `size` (enum: 'small' | 'medium' | 'large', optional, default: 'medium'): The size of the stars.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { Rating } from './src/components';
import { useState } from 'react';

const [rating, setRating] = useState(3);

// Interactive rating
<Rating value={rating} onChange={setRating} max={5} />

// Read-only rating
<Rating value={4} readonly />
```
