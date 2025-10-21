# Component Composition

ZwheUI is designed with a strong emphasis on composition over configuration. Instead of creating monolithic components with dozens of props to control every possible variation, complex UI patterns are built by combining smaller, more focused components. This approach provides greater flexibility, better readability, and improved reusability.

## The "Compound Component" Pattern

Many components in the library follow the **compound component** pattern. This is a pattern where a main component acts as an implicit state and behavior manager for a set of related sub-components. These sub-components are designed to work together and often don't make sense when used in isolation.

This is achieved by attaching the sub-components as properties of the main component (e.g., `Card.Header`) and often using React Context behind the scenes to share state.

### Example: `Card`

The `Card` component is a prime example. An older design might have looked like this:

```jsx
// Anti-pattern: Monolithic component with many props
<Card 
  title="My Title"
  subtitle="A Subtitle"
  imageUrl="..."
  imageAlt="..."
  footerContent={<Button>Action</Button>}
>
  Main content goes here.
</Card>
```

This approach is rigid. What if you want the image below the title? Or two action buttons?

The compound component approach solves this by breaking the card into logical parts:

```tsx
import { Card } from 'zwheui';

// This is more flexible and readable.
<Card>
  <Card.Header>
    <Card.Title>My Title</Card.Title>
    <Card.Subtitle>A Subtitle</Card.Subtitle>
  </Card.Header>
  <Card.Image src="..." alt="..." />
  <Card.Body>
    <Card.Text>Main content goes here.</Card.Text>
  </Card.Body>
  <Card.Footer>
    <Card.Actions>
      <Card.Action>Cancel</Card.Action>
      <Card.Action variant="primary">Confirm</Card.Action>
    </Card.Actions>
  </Card.Footer>
</Card>
```

With this pattern, you can reorder, omit, or even nest other components inside the parts, giving you complete layout control.

## Other Composable Components

This powerful pattern is used across the library for building complex UIs:

-   **`Layout`**:
    -   `Layout.Header`, `Layout.Content`, `Layout.Sider`, `Layout.Footer`
-   **`Accordion`**:
    -   `AccordionItem`, `AccordionTrigger`, `AccordionContent`
-   **`Menu`**:
    -   `MenuButton`, `MenuItems`, `MenuItem`
-   **`Tabs`**:
    -   `TabList`, `Tab`, `TabPanels`, `TabPanel`
-   **`Audio` & `Video`**:
    -   `AudioView`, `AudioControls`, `AudioFilters`, `VideoView`, `VideoControls`, etc. These components share state through the parent `Audio` or `Video` provider.
-   **`Nav`**:
    -   `Nav.List`, `Nav.Item`
-   **`FormControl`**:
    -   `FormLabel`, `FormHelperText`, `FormErrorMessage`

## Benefits of Composition

-   **Flexibility**: You can arrange sub-components in any order you need and omit the ones you don't. Want a card with only an image and a title? No problem.
-   **Readability**: The JSX structure closely mirrors the final rendered HTML structure. The code reads like a description of the UI, making it easier to understand at a glance.
-   **Reusability**: Smaller, focused components are inherently more reusable in different contexts.
-   **Simpler API**: Parent components have fewer props, as layout and content are defined by children, not by a complex configuration object. This makes components easier to learn and use.
-   **Separation of Concerns**: The parent component manages the "how" (state, logic), while the children you provide define the "what" (content, structure).
