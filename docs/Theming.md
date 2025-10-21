# Theming

ZwheUI is built with a dynamic and flexible theming system that allows you to control the look and feel of your entire application from a single source. The system is powered by React Context and a custom `useTheme` hook.

## `ThemeProvider`

The `ThemeProvider` is the cornerstone of the theming system. It's a context provider that must wrap your entire application (or the part of it that uses ZwheUI components). It supplies the theme object to all descendant components.

```tsx
import { ThemeProvider } from 'zwheui';

function App() {
  return (
    <ThemeProvider>
      {/* ... The rest of your application ... */}
    </ThemeProvider>
  );
}
```

## `useTheme` Hook

To access theme values or change the current theme, you use the `useTheme` hook. This hook can be called from any component that is a descendant of `ThemeProvider`.

It returns an object with the following properties:

-   `theme`: The current, active theme object.
-   `mode`: A string representing the current theme mode (`'dark'`, `'light'`, or `'custom'`).
-   `switchTheme`: A function to change the active theme.
-   `setCustomTheme`: A function to update the custom theme object.

```tsx
import { useTheme, Text } from 'zwheui';

const MyComponent = () => {
  const { theme, mode } = useTheme();

  return (
    <Text style={{ color: theme.colors.primary }}>
      This text is in the primary color of the '{mode}' theme.
    </Text>
  );
};
```

## The Theme Object

The `theme` object is a deeply nested JavaScript object that contains all the design tokens for the component library. All components reference this object for their styling.

The structure of the default theme is as follows:

```ts
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    backgroundSecondary: string;
    border: string;
    text: string;
    textSecondary: string;
    [key: string]: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  typography: {
    fontSizes: { /* ... */ };
    fontWeights: { /* ... */ };
    lineHeights: { /* ... */ };
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
    full: string;
  };
  blur: {
    sm: string;
    md: string;
    lg: string;
  };
  maxWidths: {
    container: string;
    /* ... */
  };
}
```

## Switching Themes

ZwheUI comes with two built-in themes: `'dark'` (the default) and `'light'`. You can switch between them using the `switchTheme` function.

```tsx
import { useTheme, Button } from 'zwheui';

const ThemeSwitcher = () => {
  const { mode, switchTheme } = useTheme();

  const toggleTheme = () => {
    const nextMode = mode === 'dark' ? 'light' : 'dark';
    switchTheme(nextMode);
  };

  return (
    <Button onClick={toggleTheme}>
      Switch to {mode === 'dark' ? 'Light' : 'Dark'} Mode
    </Button>
  );
};
```

## Custom Themes

You can provide your own theme object to create a unique look for your application. The best practice is to import the `defaultTheme` from the library, spread it into a new object, and then override the specific values you want to change.

To apply the custom theme, call `switchTheme` with `'custom'` as the mode and your theme object as the second argument.

```tsx
import { useTheme, Button, Theme, defaultTheme } from 'zwheui';

// 1. Define your custom theme by extending the default
const corporateTheme: Theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: '#00529b', // A corporate blue
    accent: '#ff9900',  // An orange accent
    background: '#ffffff',
    text: '#222222',
  },
  radii: {
    ...defaultTheme.radii,
    lg: '4px', // Sharper corners
  },
};

const CustomThemeButton = () => {
  const { switchTheme } = useTheme();

  return (
    <Button onClick={() => switchTheme('custom', corporateTheme)}>
      Apply Corporate Theme
    </Button>
  );
};
```

You can also update the custom theme dynamically using the `setCustomTheme` function, which is useful for building live theme editors. See the `ThemeSwitcher` component for a practical example.
