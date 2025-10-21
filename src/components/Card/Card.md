# Card (Compound)

A versatile container component that is now composed of multiple sub-components for building flexible and structured layouts.

## Components

*   **Card**: The main container.
*   **Card.Header**: A top section with padding and a bottom border.
*   **Card.Body**: The main content area with padding.
*   **Card.Footer**: A bottom section with padding and a top border.
*   **Card.Image**: An image component optimized for card layouts (e.g., full-bleed).
*   **Card.Title**: A styled heading for the card.
*   **Card.Subtitle**: Smaller, secondary text, often used with a title.
*   **Card.Description**: Secondary text for descriptions.
*   **Card.Text**: Generic paragraph text.
*   **Card.Actions**: A flex container for action buttons, aligned to the end.
*   **Card.Action**: A pre-styled button for use within `Card.Actions`.
*   **Card.Item**: A generic container for custom layouts within a card.

## Usage

```tsx
import { Card } from './src/components';

<Card>
    <Card.Image src="https://example.com/image.jpg" alt="Card Image" />
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
    </Card.Header>
    <Card.Body>
        <Card.Text>
            This is the main content of the card. You can place any components you like in here.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Card.Actions>
            <Card.Action>Cancel</Card.Action>
            <Card.Action variant="primary">Confirm</Card.Action>
        </Card.Actions>
    </Card.Footer>
</Card>
```

## Features

*   **Composable**: Mix and match sub-components to create any card layout.
*   **Flexible**: The main `Card` container has no padding, allowing for full-bleed content like images.
*   **Theme-Aware**: All components are styled according to the current theme.
*   **Accessible**: Clickable cards are focusable and can be activated with `Enter` or `Space` keys.
