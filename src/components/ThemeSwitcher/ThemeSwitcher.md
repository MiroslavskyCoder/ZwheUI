# Theme Switcher

An interactive component that allows users to toggle between 'light', 'dark', and a 'custom' theme for the entire application. When 'custom' is selected, it provides inputs to change primary, background, and text colors in real-time.

## Features

*   Uses the `useTheme` hook to manage and apply themes globally.
*   Provides live, debounced updates for custom theme colors.
*   Serves as a demonstration of the library's dynamic theming capabilities.

## Usage

This component is designed to be placed at a high level in your application layout.

```tsx
import { ThemeSwitcher } from './src/components';

function AppLayout() {
  return (
    <div>
      <ThemeSwitcher />
      {/* ... rest of the app */}
    </div>
  );
}
```
