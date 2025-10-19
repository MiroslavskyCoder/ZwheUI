# Tag

A component for labeling and categorizing content. It's similar to a `Badge` but supports different sizes and can include an optional close button.

## Props

*   `variant` (enum: 'solid' | 'outline', optional): The visual style.
*   `colorScheme` (enum: 'primary' | 'accent' | 'success' | 'error', optional): The color theme.
*   `size` (enum: 'sm' | 'md' | 'lg', optional): The size of the tag.

## Components

*   **Tag.CloseButton**: An optional button to render inside the tag, typically for removal.

## Usage

```tsx
import { Tag } from './src/components';

<Tag colorScheme="success" size="lg">
  Completed
  <Tag.CloseButton onClick={() => alert('Closing!')} />
</Tag>
```
