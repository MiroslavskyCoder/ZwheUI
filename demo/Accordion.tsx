import React, { useState } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent, SegmentedControl, Stack, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const AccordionConfigurator: React.FC<{
    defaultValue: string;
    setDefaultValue: (value: string) => void;
}> = ({ defaultValue, setDefaultValue }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">DefaultValue Prop</Text>
        <Text size="sm">This control remounts the component with a new default value to see the effect.</Text>
        <SegmentedControl value={defaultValue || 'none'} onChange={(val) => setDefaultValue(val === 'none' ? '' : val)} options={[
            { label: 'Item 1', value: 'item-1' }, 
            { label: 'Item 2', value: 'item-2' },
            { label: 'None', value: 'none' }
        ]}/>
    </Stack>
);

const documentation = `# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

## Components

*   **Accordion**: The main wrapper that manages the state.
*   **AccordionItem**: A container for a single accordion section.
*   **AccordionTrigger**: The clickable header that toggles the content's visibility.
*   **AccordionContent**: The collapsible content panel.

## Props

### Accordion
*   \`defaultValue\` (string, optional): The \`value\` of the \`AccordionItem\` that should be open by default.
*   \`children\` (React.ReactNode): Should be a series of \`AccordionItem\` components.

### AccordionItem
*   \`value\` (string, required): A unique identifier for the item.
*   \`children\` (React.ReactNode): Should contain an \`AccordionTrigger\` and an \`AccordionContent\`.

## Usage

\`\`\`tsx
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
\`\`\``;

const sourceCode = `import React, { useState, createContext, useContext } from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface AccordionContextType {
    activeItem: string | null;
    setActiveItem: (id: string | null) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error('Accordion components must be used within an Accordion provider.');
    }
    return context;
};

export const Accordion: React.FC<{ children: React.ReactNode; defaultValue?: string; className?: string }> = ({ children, defaultValue, className }) => {
    const [activeItem, setActiveItem] = useState<string | null>(defaultValue || null);
    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
};

export const AccordionItem: React.FC<{ children: React.ReactNode; value: string; className?: string }> = ({ children, value, className }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-item');
    const itemClass = createStyle({
        borderBottom: \`1px solid \${theme.colors.border}\`,
        '&:last-child': {
            borderBottom: 'none',
        },
    });

    return <div className={\`\${itemClass} \${className}\`}>{React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { value }) : child)}</div>;
};

export const AccordionTrigger: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem, setActiveItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-trigger');
    const isOpen = activeItem === value;

    const triggerClass = createStyle({
        width: '100%',
        padding: \`\${theme.spacing.md} 0\`,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        color: theme.colors.text,
        cursor: 'pointer',
        fontSize: '1rem',
        textAlign: 'left',
        '&::after': {
            content: '"▼"',
            fontSize: '10px',
            color: theme.colors.textSecondary,
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'none',
        }
    });

    return (
        <button
            className={\`\${triggerClass} \${className}\`}
            onClick={() => setActiveItem(isOpen ? null : value!)}
            aria-expanded={isOpen}
            aria-controls={\`accordion-content-\${value}\`}
        >
            {children}
        </button>
    );
};

export const AccordionContent: React.FC<{ children: React.ReactNode; value?: string; className?: string }> = ({ children, value, className }) => {
    const { activeItem } = useAccordion();
    const { theme } = useTheme();
    const createStyle = useStyles('accordion-content');
    const isOpen = activeItem === value;
    
    const contentClass = createStyle({
        overflow: 'hidden',
        transition: 'max-height 0.3s ease, padding 0.3s ease',
        maxHeight: isOpen ? '500px' : '0',
    });

    const innerClass = createStyle({
         paddingBottom: isOpen ? theme.spacing.md : '0',
         color: theme.colors.textSecondary,
    });

    return (
        <div id={\`accordion-content-\${value}\`} className={\`\${contentClass} \${className}\`} aria-hidden={!isOpen}>
            <div className={innerClass}>{children}</div>
        </div>
    );
};`;

export const AccordionDemo = () => {
    const [defaultValue, setDefaultValue] = useState('item-1');

    return (
        <DemoSection
            title="Accordion"
            description="A vertically stacked set of interactive headings that each reveal a section of content."
            livePreview={
                <Accordion defaultValue={defaultValue} key={defaultValue}>
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
            }
            propControls={<AccordionConfigurator defaultValue={defaultValue} setDefaultValue={setDefaultValue} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
