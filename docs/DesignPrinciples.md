# Design Principles

ZwheUI is not just a collection of components; it's a design system built on a set of core principles. Understanding these principles will help you use the library more effectively and build better, more consistent applications.

## 1. Composition Over Configuration

This is the most important principle of ZwheUI. Instead of creating monolithic components with a large number of props to handle every possible use case, we provide smaller, focused components that can be composed together to build complex UIs.

**Why?**
-   **Flexibility**: You are not limited by the permutations imagined by the library author. You can arrange and nest components as you see fit.
-   **Readability**: A component's structure in code (JSX) closely mirrors its visual structure, making it easier to understand and maintain.
-   **Simpler API**: Components have fewer props, reducing cognitive load and making them easier to learn.

**Example**: Instead of a `<Card title="..." image="..." actions={...}>`, we have `<Card>`, `<Card.Title>`, `<Card.Image>`, and `<Card.Actions>`.

## 2. Developer Experience First

A library is only as good as the experience of using it. We prioritize making ZwheUI a joy to work with.

**How?**
-   **TypeScript Native**: The entire library is written in TypeScript, providing excellent autocompletion, type safety, and self-documentation.
-   **Predictable APIs**: Component props are named consistently and predictably.
-   **Composable and Flexible**: As mentioned above, composition allows you to build what you want without fighting the library.
-   **Comprehensive Documentation**: The live showcase is a testament to our commitment to clear, interactive, and thorough documentation.

## 3. Accessible by Default

We believe accessibility (A11Y) is not an afterthought but a core requirement. Components are built with accessibility in mind from the start.

**How?**
-   **Semantic HTML**: Components render appropriate HTML tags by default (e.g., `<nav>`, `<button>`). The `as` prop allows you to maintain semantics in custom layouts.
-   **ARIA Standards**: Components follow WAI-ARIA design patterns for complex interactions like modals, menus, and accordions.
-   **Keyboard Navigation**: All interactive components are fully keyboard-navigable, with clear and consistent focus states.
-   **Screen Reader Support**: Proper use of roles, labels (`aria-label`), and live regions ensures a good experience for screen reader users.

## 4. Performant and Lightweight

ZwheUI aims to be fast and have a minimal impact on your application's bundle size and runtime performance.

**How?**
-   **Zero-Dependency Styling**: Our custom styling solution avoids heavy third-party CSS-in-JS libraries. It's a simple, performant engine that injects static CSS.
-   **Tree-Shakable**: The library is structured to allow modern bundlers to easily tree-shake unused components.
-   **Efficient Renders**: Components are designed to avoid unnecessary re-renders.

## 5. Aesthetically Pleasing

While "beautiful" is subjective, ZwheUI is built with a strong, modern aesthetic. We believe that good design should be built-in, not something you have to fight for.

**How?**
-   **Dark Mode First**: The design system was created with a dark, modern, "glassmorphism" aesthetic as the primary goal.
-   **Consistent Design Tokens**: All styling is derived from a central theme object, ensuring consistency in spacing, colors, typography, and rounding.
-   **Fluid Animation**: Motion is used thoughtfully to provide feedback and create a sense of polish, powered by our custom animation hooks.
