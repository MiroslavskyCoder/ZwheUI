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

### Layout & Structure
*   [Accordion](./src/components/Accordion/Accordion.md)
*   [Card](./src/components/Card/Card.md)
*   [Container](./src/components/Container/Container.md)
*   [Footer](./src/components/Footer/Footer.md)
*   [Grid](./src/components/Grid/Grid.md)
*   [Header](./src/components/Header/Header.md)
*   [Layer](./src/components/Layer/Layer.md)
*   [Sidebar](./src/components/Sidebar/Sidebar.md)
*   [Sofa](./src/components/Sofa/Sofa.md) (Styled container)
*   [Stack](./src/components/Stack/Stack.md)
*   [Tabs](./src/components/Tabs/Tabs.md)

### Forms & Inputs
*   [Button](./src/components/Button.md)
*   [Calendar](./src/components/Calendar/Calendar.md)
*   [Checkbox](./src/components/Checkbox/Checkbox.md)
*   [ColorPicker](./src/components/ColorPicker/ColorPicker.md)
*   [Combobox](./src/components/Combobox/Combobox.md)
*   [DatePicker](./src/components/DatePicker/DatePicker.md)
*   [FileUpload](./src/components/FileUpload/FileUpload.md)
*   [Input](./src/components/Input/Input.md) / [TextInput](./src/components/TextInput/TextInput.md)
*   [NumberInput](./src/components/NumberInput/NumberInput.md)
*   [RadioGroup](./src/components/RadioGroup/RadioGroup.md)
*   [Rating](./src/components/Rating/Rating.md)
*   [Search](./src/components/Search/Search.md)
*   [Select](./src/components/Select/Select.md)
*   [Slider](./src/components/Slider/Slider.md)
*   [Switch](./src/components/Switch/Switch.md)
*   [Textarea](./src/components/Textarea/Textarea.md)
*   [ToggleButton](./src/components/ToggleButton/ToggleButton.md)
*   [TransferList](./src/components/TransferList/TransferList.md)

### Feedback & Overlays
*   [Alert](./src/components/Alert/Alert.md)
*   [Backdrop](./src/components/Backdrop/Backdrop.md)
*   [Dialog](./src/components/Dialog/Dialog.md)
*   [Drawer](./src/components/Drawer/Drawer.md)
*   [HoverCard](./src/components/HoverCard/HoverCard.md)
*   [Modal](./src/components/Modal/Modal.md)
*   [Popover](./src/components/Popover/Popover.md) / [Popper](./src/components/Popper/Popper.md)
*   [Progress](./src/components/Progress/Progress.md) (Circular & Linear)
*   [Skeleton](./src/components/Skeleton/Skeleton.md)
*   [Spinner](./src/components/Spinner/Spinner.md)
*   [Toast](./src/components/Toast/Toast.md) (via `useToast` hook)
*   [Tooltip](./src/components/Tooltip/Tooltip.md)

### Navigation
*   [Breadcrumbs](./src/components/Breadcrumbs/Breadcrumbs.md)
*   [Dropdown](./src/components/Dropdown/Dropdown.md)
*   [FloatingActionButton](./src/components/FloatingActionButton/FloatingActionButton.md)
*   [Link](./src/components/Link/Link.md)
*   [Menu](./src/components/Menu/Menu.md) / [StyledMenu](./src/components/Menu/Menu.md)
*   [Nav](./src/components/Nav/Nav.md)
*   [Pagination](./src/components/Pagination/Pagination.md)
*   [SpeedDial](./src/components/SpeedDial/SpeedDial.md)
*   [Stepper](./src/components/Stepper/Stepper.md)

### Data Display
*   [Avatar](./src/components/Avatar/Avatar.md) / [AvatarGroup](./src/components/Avatar/Avatar.md)
*   [Badge](./src/components/Badge/Badge.md)
*   [Icon](./src/components/Icon/Icon.md)
*   [Kbd](./src/components/Kbd/Kbd.md) (Keyboard shortcut)
*   [List](./src/components/List/List.md)
*   [Table](./src/components/Table/Table.md)
*   [Text](./src/components/Text/Text.md)
*   [Timeline](./src/components/Timeline/Timeline.md)
*   [TreeView](./src/components/TreeView/TreeView.md)

### Media
*   [Audio](./src/components/Audio/Audio.md) (Composable Player)
*   [Video](./src/components/Video/Video.md) (Composable Player)

### Data Visualization (Charts)
*   [Charts](./src/components/Charts/Charts.md) (Main context)
*   [ChartArea](./src/components/Charts/ChartArea.md)
*   [ChartAxis](./src/components/Charts/ChartAxis.md)
*   [ChartBar](./src/components/Charts/ChartBar.md)
*   [ChartHeatmap](./src/components/Charts/ChartHeatmap.md)
*   [ChartLine](./src/components/Charts/ChartLine.md)
*   [ChartRadar](./src/components/Charts/ChartRadar.md)
*   [ChartRadial](./src/components/Charts/ChartRadial.md)
*   [ChartSparkline](./src/components/Charts/ChartSparkline.md)
*   [ChartTooltip](./src/components/Charts/ChartTooltip.md)

### Advanced & Utilities
*   [AnimatedBlock](./src/components/AnimatedBlock/AnimatedBlock.md)
*   [GraphicsNodeEditor](./src/components/GraphicsNodeEditor/GraphicsNodeEditor.md)
*   [ThemeSwitcher](./src/components/ThemeSwitcher/ThemeSwitcher.md)
*   [XmlRenderer](./src/components/XmlRenderer/XmlRenderer.md)


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

**Example with Responsive and Themed Styles:**
The styling system can use breakpoint keys for media queries and theme keys for property values.
```tsx
const responsiveClass = createStyle({
    fontSize: '1rem',
    borderRadius: 'lg', // uses theme.radii.lg
    '@supports (backdrop-filter: none)': {
        backdropFilter: 'blur(md)', // uses theme.blur.md
    },
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

### User Profile Card

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

### Simple Form

```tsx
import React, { useState } from 'react';
import { Input, Checkbox, Button, Stack } from './src/components';

function LoginForm() {
  const [remember, setRemember] = useState(false);
  return (
    <Stack as="form" gap="1.5rem">
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" />
      <Checkbox label="Remember me" checked={remember} onChange={e => setRemember(e.target.checked)} />
      <Button variant="primary" type="submit">Sign In</Button>
    </Stack>
  );
}
```

### Modal Dialog

```tsx
import React, { useState } from 'react';
import { Modal, Button, Text } from './src/components';

function ConfirmationModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="accent" onClick={() => setIsOpen(true)}>Delete Account</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Deletion"
      >
        <Text>Are you sure you want to delete your account? This action cannot be undone.</Text>
      </Modal>
    </>
  );
}
```

## 📂 Project Structure

-   **/src**: Contains all the source code for the component library.
    -   **/components**: Individual component source files, styles, and documentation.
    -   **/core**: The core systems like theming, styling hooks, and animation logic.
-   **/demo**: Contains the demo components used in the main application showcase.
-   **/examples**: Contains examples of how to combine multiple components to build more complex UI patterns.