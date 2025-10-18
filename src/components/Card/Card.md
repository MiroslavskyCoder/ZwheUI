# Card

A versatile container component that displays content in a distinct bordered box. It supports a default style and a `glass` variant for a blurred, transparent effect.

## Props

*   `title` (string, optional): The title to display at the top of the card.
*   `children` (React.ReactNode): The content to be rendered inside the card.
*   `className` (string, optional): Additional CSS class for custom styling.
*   `variant` (enum: 'default' | 'glass', optional, default: 'default'): The visual style of the card. 'glass' applies a blur effect.
*   `onClick` (function, optional): A callback function to execute when the card is clicked.

## Usage

```tsx
import { Card } from './src/components/Card/Card';

// Default Card
<Card title="My Card">
  <p>This is the content of the card.</p>
</Card>

// Glass Variant Card
<Card variant="glass" title="Glass Card">
  <p>Content with a blurred background effect.</p>
</Card>

// Clickable Card
<Card title="Click Me" onClick={() => alert('Card clicked!')}>
  <p>This card will trigger an alert when clicked.</p>
</Card>
```

## Features

*   Supports a title and arbitrary children.
*   Offers a `glass` variant with backdrop filter for a modern UI aesthetic.
*   Integrates with the theme for consistent styling.
*   Can be made interactive with an `onClick` handler.
*   Accessible: Clickable cards are focusable and can be activated with `Enter` or `Space` keys.
