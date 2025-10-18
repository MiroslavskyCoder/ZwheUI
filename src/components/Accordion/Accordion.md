# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Components

*   **Accordion**: The main wrapper that manages the state.
*   **AccordionItem**: A container for a single accordion section.
*   **AccordionTrigger**: The clickable header that toggles the content's visibility.
*   **AccordionContent**: The collapsible content panel.

## Props

### Accordion
*   `defaultValue` (string, optional): The `value` of the `AccordionItem` that should be open by default.
*   `children` (React.ReactNode): Should be a series of `AccordionItem` components.

### AccordionItem
*   `value` (string, required): A unique identifier for the item.
*   `children` (React.ReactNode): Should contain an `AccordionTrigger` and an `AccordionContent`.

## Usage

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './src/components';

<Accordion defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern for accordions.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with a modern, dark-theme-friendly style.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```
