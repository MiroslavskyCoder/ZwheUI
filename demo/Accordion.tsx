
import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, Sofa, Text, Stack } from '../src/components';

export const AccordionDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Accordion</Text>
      <Text>A vertically stacked set of interactive headings that each reveal a section of content.</Text>
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
            Yes. It comes with a modern, dark-theme-friendly style that fits the library's aesthetic.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Stack>
  </Sofa>
);
