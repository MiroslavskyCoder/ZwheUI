# ZwheUI Component Library

A showcase of a modern, reusable, and aesthetically pleasing React component library built with TypeScript. This project demonstrates a complete design system with a focus on dark-mode aesthetics, smooth animations, and a highly composable architecture.

## ✨ Features

*   **Comprehensive Component Set**: Over 50+ components, ranging from basic form elements to complex data visualization charts.
*   **Built with React & TypeScript**: Type-safe and modern component architecture.
*   **Zero-Dependency Styling**: A custom CSS-in-JS solution (`useStyles` hook) provides scoped styles without external libraries.
*   **Dynamic Theming**: Easily switch between dark, light, and a fully customizable theme in real-time.
*   **Responsive & Accessible**: Components are designed to be responsive and include ARIA attributes for accessibility.
*   **Composable by Design**: Complex components like `Audio`, `Video`, and `Charts` are built from smaller, reusable parts.
*   **Animation Hooks**: Custom hooks for creating fluid animations and transitions (`useFade`, `useSlide`, `useCurveAnimation`).

## 🚀 Live Showcase

This application itself serves as a live interactive showcase. You can see all the components in action, test their functionality, and switch themes to see how they adapt.

## 📦 Available Components

The library is organized into several logical categories:

### Layout
- `Layout`
- `Grid`
- `Stack`
- `Layer`
- `Sidebar`
- `Sofa` (Styled container)

### Forms
- `Button`
- `Input` / `TextInput`
- `Textarea`
- `Checkbox`
- `RadioGroup`
- `Switch`
- `Select`
- `Combobox`
- `NumberInput`
- `Slider`
- `Rating`
- `FileUpload`
- `DatePicker` / `Calendar`
- `ColorPicker`

### Feedback & Overlays
- `Alert`
- `Modal` / `Dialog`
- `Drawer`
- `Popover` / `Popper`
- `HoverCard`
- `Tooltip`
- `Toast` (via `useToast` hook)
- `Backdrop`
- `CircularProgress` / `LinearProgress`
- `Spinner`
- `Skeleton`

### Navigation
- `Menu` / `StyledMenu`
- `Dropdown`
- `Tabs`
- `Breadcrumbs`
- `Pagination`
- `Stepper`
- `Link`

### Data Display
- `Card`
- `List` / `ListItem`
- `Avatar` / `AvatarGroup`
- `Badge`
- `Table`
- `Timeline`
- `Kbd` (Keyboard shortcut)
- `Text`
- `XmlRenderer`
- `Accordion`

### Media
- `Audio` (Composable Player)
- `Video` (Composable Player)

### Data Visualization (Charts)
- `Charts` (Main context)
- `ChartLine`
- `ChartArea`
- `ChartBar`
- `ChartAxis`
- `ChartTooltip`
- `ChartSparkline`
- `ChartRadial`
- `ChartRadar`
- `ChartHeatmap`

### Utilities
- `AnimatedBlock`
- `ThemeSwitcher`

## Core System

The library is built upon a small, robust core system.

### Styling with `useStyles`

A custom hook, `useStyles`, is used for all component styling. It takes a style object (similar to CSS-in-JS libraries) and injects the required CSS into a `<style>` tag in the document head, returning a unique class name. This approach provides scoped styling with zero external dependencies. It also supports pseudo-selectors, keyframes, and theme-aware media queries.

**Example:**
```tsx
import { useStyles } from './src/core';

const MyComponent = () => {
    const createStyle = useStyles('my-component');
    
    const containerClass = createStyle({
        padding: '1rem',
        backgroundColor: '#333',
        borderRadius: '8px',
    });

    return <div className={containerClass}>Hello, World!</div>
}
```

**Example with Media Queries:**
The styling system can use breakpoint keys defined in the theme (`sm`, `md`, `lg`, etc.) for creating responsive styles.
```tsx
const responsiveClass = createStyle({
    fontSize: '1rem',
    '@media': {
        "(minWidth: 'md')": {
            fontSize: '1.25rem', // Becomes @media (min-width: 768px)
        }
    }
});
```

### Theming with `ThemeProvider`

Theming is handled via React Context. The `ThemeProvider` wraps the application and provides theme values to all components through the `useTheme` hook. The `ThemeSwitcher` component demonstrates how to dynamically change the theme, including a custom theme editor.

```tsx
import { useTheme } from './src/core';

const ThemedComponent = () => {
    const { theme } = useTheme();

    return <div style={{ color: theme.colors.primary }}>This text uses the primary theme color.</div>
}
```

## 📋 Example Usage

Using a component is straightforward. Import it from the `src/components` directory and use it in your JSX.

```tsx
import React from 'react';
import { Card, Text, Button, Stack } from './src/components';

function UserProfile() {
  return (
    <Card title="User Profile">
      <Stack gap="1rem">
        <Text>Welcome back to your dashboard.</Text>
        <Button variant="primary">View Details</Button>
      </Stack>
    </Card>
  );
}
```

## 📂 Project Structure

-   **/src**: Contains all the source code for the component library.
    -   **/components**: Individual component source files, styles, and documentation.
    -   **/core**: The core systems like theming, styling hooks, and animation logic.
-   **/demo**: Contains the demo components used in the main application showcase.
-   **/examples**: Contains examples of how to combine multiple components to build more complex UI patterns.