# Architectural Principles

ZwheUI is built upon a set of architectural principles that prioritize flexibility, developer experience, and customization. Understanding these principles helps in using the library to its full potential.

## Composition Over Configuration

The core philosophy of ZwheUI is **composition over configuration**. Instead of providing large, monolithic components with dozens of boolean props for every possible layout variation, we provide smaller, focused building blocks that you can compose together to create the exact UI you need.

This is most evident in our **compound components** like `Card`, `Layout`, and `Accordion`, where you build the final component by assembling its parts (`Card.Header`, `Card.Body`, etc.).

## Slots for Customization

ZwheUI's architecture provides two primary types of "slots" for customization, allowing you to either replace low-level primitives or override specific parts of a complex component's UI.

### 1. Base Primitive Slots (Future Concept)

*This is a design pattern seen in libraries like MUI and is a future direction for ZwheUI.*

The idea is to allow you to provide your own UI primitives to ZwheUI components. For example, a `baseButton` or `baseSelect` prop on a `DataTable` component would let you replace ZwheUI's `Button` or `Select` with your own custom-styled versions, while keeping all of `DataTable`'s logic.

These slots would receive a generic set of props that are not tied to a specific design system, making integration with other libraries seamless.

```tsx
// Conceptual Example for a future version of DataTable
<DataTable
  // ... other props
  slots={{
    baseButton: MyCustomButton, // Your button component
    baseSelect: MyCustomSelect, // Your select component
  }}
/>
```

This pattern provides the ultimate flexibility for integrating ZwheUI into an existing design system.

### 2. UI Override Slots

The more common type of slot in ZwheUI allows you to override a specific part of a component's UI with a custom implementation. These slots are highly specific to the component they belong to and receive a rich set of props related to that part of the UI.

A prime example is the `item` prop on the `TreeView` component.

```tsx
import { TreeView, TreeItemProps } from 'zwheui';

// This custom component is a "slot override" for the tree item.
// It receives specific props like `node`, `isExpanded`, `isSelected`, etc.
const MyCustomTreeItem: React.FC<TreeItemProps> = (props) => {
  // ... your custom rendering logic
};

<TreeView data={myData} item={MyCustomTreeItem} />
```

Other examples include:
-   The `calendarHeader` slot on a `DateCalendar` component (conceptual).
-   Passing a render function as `children` to components that provide context, like `ChartsDisplay`.

These slots give you fine-grained control over the look and feel of complex components without having to rebuild them from scratch.

## Component Anatomy

Most complex ZwheUI components follow a clear anatomy:
1.  **Context Provider (Parent)**: A main wrapper component that manages state and provides it via React Context (e.g., `Accordion`, `Tabs`, `GraphicsProvider`).
2.  **Sub-components (Children)**: A set of smaller components that consume the context and render a specific part of the UI (e.g., `AccordionItem`, `Tab`, `Node`). They are often attached as properties to the parent component.
3.  **Headless Hook (Optional)**: A hook (e.g., `useTreeItem`, `useAudio`) that exposes the core logic and state from the context, allowing you to build completely custom UI from scratch while reusing the component's underlying functionality.

This layered architecture allows you to choose your level of abstraction: use the high-level components for speed, or drop down to the headless hooks for maximum control.
