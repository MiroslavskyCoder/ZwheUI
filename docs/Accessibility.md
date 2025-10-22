# Accessibility (A11Y)

Accessibility is a core principle of ZwheUI. We believe that web applications should be usable by everyone, regardless of their abilities or the assistive technologies they use. Our components are built from the ground up with accessibility in mind, following the WAI-ARIA (Web Accessibility Initiative – Accessible Rich Internet Applications) standards.

This guide outlines the key accessibility features built into ZwheUI and how you can leverage them to build inclusive applications.

## 1. Semantic HTML

Using the correct HTML element for the job is the foundation of accessibility.
-   **Polymorphic Components**: Components like `Box`, `Flex`, and `Text` use the `as` prop, allowing you to render the semantically correct element (`<nav>`, `<main>`, `<section>`, `<h1>`, etc.) without sacrificing styling or layout capabilities.
-   **Correct Tag Usage**: Components render the appropriate tags by default. `Button` renders a `<button>`, `Nav` renders a `<nav>`, `Header` renders a `<header>`, and so on.

## 2. ARIA Attributes and Roles

For complex components that don't have a native HTML equivalent (like modals, menus, and tabs), ZwheUI uses ARIA roles and attributes to describe their purpose and state to assistive technologies.

-   **Roles**: `Modal` and `Dialog` use `role="dialog"` and `aria-modal="true"`. `Tabs` use `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
-   **State Attributes**:
    -   `aria-expanded`: Used in `Accordion` and `Menu` to indicate whether a section is open or closed.
    -   `aria-selected`: Used in `Tabs` and `TreeView` to indicate the currently selected item.
    -   `aria-invalid`: Automatically applied by `FormControl` to inputs when `isInvalid` is true.
-   **Labels and Descriptions**:
    -   `aria-label`: Used on components like `IconButton` where there is no visible text label.
    -   `aria-labelledby` & `aria-describedby`: `FormControl` automatically links `FormLabel`, `FormHelperText`, and `FormErrorMessage` to the input using these attributes.

## 3. Focus Management

Proper focus management is critical for keyboard-only users.

-   **Focus Trapping**: Components that create an overlay, like `Modal` and `Drawer`, trap focus within them. This means a user cannot accidentally `Tab` to an element on the page behind the modal.
-   **Initial Focus**: When a `Modal` or `Drawer` opens, focus is automatically moved to the first focusable element inside it.
-   **Restoring Focus**: When a `Modal` or `Drawer` closes, focus is automatically returned to the element that triggered it (e.g., the button that opened it).
-   **Clear Focus Styles**: All interactive components (`Button`, `Link`, `Input`, etc.) have a highly visible `:focus-visible` style, ensuring keyboard users can always see where they are on the page.

## 4. Keyboard Navigation

All interactive components can be fully operated with a keyboard.

-   **Standard Interactions**:
    -   `Button`, `Link`, `Checkbox`, etc., can be activated with `Enter` or `Space`.
-   **Complex Interactions**:
    -   `Menu`, `Dropdown`, and `Tabs`: Support arrow key navigation (`ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`) to move between items. `Escape` closes the menu.
    -   `Slider` and `Rating`: Can be controlled with arrow keys.
    -   `TreeView`: Supports full tree navigation, including expanding/collapsing nodes and moving between items.
    -   `Command`: The command palette is fully keyboard-navigable.

## Your Responsibilities

While ZwheUI provides an accessible foundation, you still play a crucial role.
-   **Use Semantic HTML**: Use the `as` prop to choose the right element for the job.
-   **Provide Labels**: Always provide a `label` for form inputs using `FormLabel` or an `aria-label` for components like `IconButton`.
-   **Alternative Text**: Provide descriptive `alt` text for all `Image` components.
-   **Test with a Keyboard**: Navigate your application using only the `Tab`, `Shift+Tab`, `Enter`, `Space`, and arrow keys to ensure everything is reachable and usable.

By using ZwheUI's components as intended, you are already well on your way to building an accessible application.
