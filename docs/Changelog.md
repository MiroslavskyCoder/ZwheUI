# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-07-29

### ✨ Added

-   **New Components**: Added a suite of powerful new components including `DataTable`, `Command`, `ContextMenu`, `Message`, `Stat`, `EmptyState`, `PageHeader`, `Blockquote`, `Carousel`, `CodePreview`, and `Tooltip`.
-   **Advanced Authentication**: Introduced a comprehensive `SignInPage` component and auth provider infrastructure inspired by Auth.js. It supports OAuth (with over 20 preconfigured providers like Google and GitHub), Credentials (email/password), and Magic Links.
-   **AI App Creator**: New major demo showcasing the use of the Gemini API to generate ZwheUI component layouts from natural language prompts, complete with a live, sandboxed iframe preview.
-   **Image Effects Engine**: Added an extensive library of image processing nodes for the `GraphicsNodeEditor`, including `Saturation`, `Vignette`, `Blur`, `Sharpen`, `Tint`, `Sepia`, and more.
-   **`Collapse` Component**: A new utility component for smooth vertical collapse animations, now integrated with `TreeView` and `Accordion` for better user experience.

### 🎨 Improved

-   **`TreeView`**: Rearchitected with a headless `useTreeItem` hook, enabling fully custom item rendering (as seen in the new file-explorer style demo). Added support for multi-selection, programmatic focus via `ref`, and custom transition components via the `groupTransition` prop.
-   **`Grid`**: Refactored into a compound component with `Grid.Item`, supporting `colSpan` and `rowSpan`. Also added a `flow` prop for column-first grid filling.
-   **`Card`**: Converted from a monolithic component to a compound component (`Card.Header`, `Card.Body`, `Card.Title`, etc.) for significantly more flexible and semantic layouts.
-   **`DataTable`**: Enhanced with a "View" dropdown menu to allow users to toggle the visibility of columns.
-   **`Sofa`**: Now accepts `title` and `description` props to render a structured header, improving its utility as a section container.
-   **Layout Components**: Added a `height` prop to `Header` and `Sidebar` for more flexible sizing. Improved `Layout`'s `hasSider` logic.
-   **`Menu`**: `StyledMenu` now has improved handling for item groups and dividers for more complex menu structures.

### 🐛 Fixed

-   **TypeScript & Build Stability**: Resolved a wide range of TypeScript type errors across the library, particularly with polymorphic components, generics, and ref forwarding, ensuring a stable `rollup` build process and accurate type declarations.
-   **`Link` Component**: Removed a broken import for `react-router-dom`'s `Link` and now gracefully falls back to a standard `<a>` tag for the `to` prop to prevent build failures.
-   **`GraphicsNodeEditor`**: Fixed several state management bugs related to socket position registration and node updates, improving reliability during complex interactions.
-   **Focus & Accessibility**: Corrected focus management in `Modal` and `Drawer` to properly trap focus and restore it on close.
-   **Component-Level Fixes**: Addressed minor bugs in `Calendar`, `PinInput`, `Editable`, `ButtonGroup`, `SpeedDial`, `AudioVisualizer`, and the `usePrevious` hook related to refs, state updates, and theme value access.

## [1.0.0] - 2024-07-28

### ✨ Added

-   **Initial Release of ZwheUI!**
-   **80+ Components**: A comprehensive suite of components including `Button`, `Card`, `Input`, `Table`, `Modal`, and many more.
-   **Custom Styling Engine**: A performant, zero-dependency CSS-in-JS solution via the `useStyles` hook.
-   **Theming System**: Full support for dynamic theming with `ThemeProvider` and a `useTheme` hook. Includes default `dark` and `light` themes.
-   **Layout Primitives**: A powerful set of layout components: `Box`, `Flex`, `Stack`, `Grid`, and `Center`.
-   **Composable APIs**: Many components like `Card`, `Accordion`, `Tabs`, and `Layout` use a compound component pattern for maximum flexibility.
-   **Animation Hooks**: `useFade`, `useSlide`, and the advanced `useCurveAnimation` for creating fluid user interfaces.
-   **Utility Hooks**: A collection of helpful hooks like `useClickOutside`, `useDebounce`, and `useLocalStorage`.
-   **Data Visualization**: A composable `Charts` component for line, area, and bar charts, plus standalone `ChartRadar`, `ChartRadial`, and `ChartSparkline` components.
-   **Graphics Node Editor**: A full-featured, interactive node-based graph editor with a plugin system (`GZoom`, `GMenu`).
-   **Advanced Authentication UI**: A new, extensible `SignInPage` component with support for OAuth, credentials, and magic links, inspired by Auth.js.
-   **Icon Library**: A set of over 50 icons, used via a flexible `Icon` component.
-   **Comprehensive Documentation**: A full documentation site and storybook built into the demo application.

### 🐛 Fixed

-   Resolved numerous TypeScript errors related to polymorphic `as` props and generic components by moving to `React.createElement` for complex cases.
-   Corrected dependencies and build configurations for a stable `rollup` build.
-   Fixed focus management and accessibility issues in `Modal`, `Drawer`, and `Menu` components.
-   Ensured all interactive components have proper `:focus-visible` styles for keyboard navigation.
-   Fixed race conditions and state management in the `GraphicsNodeEditor`.
