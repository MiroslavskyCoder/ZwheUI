# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
