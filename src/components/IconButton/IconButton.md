# IconButton

A button variant for rendering only an icon. It's crucial to provide an `aria-label` for accessibility.

## Props

*   `icon` (React.ElementType, required): The icon component to render.
*   `aria-label` (string, required): A label for accessibility, as the button has no visible text.
*   `isRound` (boolean, optional): If true, the button will be circular.
*   All other `Button` props (except `children`) are supported.

## Usage

```tsx
import { IconButton } from './src/components';
import { SettingsIcon } from './src/icons';

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  onClick={() => alert('Settings clicked')}
/>

<IconButton
  icon={SettingsIcon}
  aria-label="Settings"
  isRound
/>
```
