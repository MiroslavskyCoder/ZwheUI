import React, { useState } from 'react';
import { Combobox, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'solid', label: 'SolidJS' },
];

const ComboboxConfigurator: React.FC<{
    placeholder: string;
    setPlaceholder: (p: string) => void;
    value: string;
}> = ({ placeholder, setPlaceholder, value }) => (
    <Stack gap="1.5rem">
        <Input label="Placeholder Prop" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
        <Text>Selected value: <code style={{background: 'rgba(255,255,255,0.1)', padding: '2px 4px', borderRadius: '4px'}}>{value || 'None'}</code></Text>
    </Stack>
);

const documentation = `# Combobox

An input field that combines a text input with a dropdown list. It allows users to filter a list of options and select one.

## Props

*   \`items\` (array of objects, required): The list of options to display. Each object must have \`value\` and \`label\` properties.
*   \`value\` (string, required): The \`value\` of the currently selected item.
*   \`onChange\` (function, required): A callback function triggered when an item is selected.
*   \`placeholder\` (string, optional): Placeholder text for the input field.

## Usage

\`\`\`tsx
import { Combobox } from './src/components';
import { useState } from 'react';

const frameworks = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue.js' },
  { value: 'svelte', label: 'Svelte' },
];

const [selectedValue, setSelectedValue] = useState('react');

<Combobox
  items={frameworks}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Select a framework..."
/>
\`\`\``;

const sourceCode = `import React, { useState, useMemo, useRef } from 'react';
import { Popper, PopperTrigger, PopperContent } from '../Popper/Popper';
import { TextInput } from '../TextInput/TextInput';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useClickOutside } from '../../core/hooks/useInteractions';

interface ComboboxItem {
    value: string;
    label: string;
}

interface ComboboxProps {
    items: ComboboxItem[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const Combobox: React.FC<ComboboxProps> = ({ items, value, onChange, placeholder }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('combobox');
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [activeIndex, setActiveIndex] = useState(-1);
    const comboboxRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const selectedItem = useMemo(() => items.find(item => item.value === value), [items, value]);

    React.useEffect(() => {
        setInputValue(selectedItem?.label || '');
    }, [selectedItem]);

    const filteredItems = useMemo(() => {
        if (!inputValue) return items;
        return items.filter(item => item.label.toLowerCase().includes(inputValue.toLowerCase()));
    }, [items, inputValue]);

    const handleSelect = (item: ComboboxItem) => {
        onChange(item.value);
        setInputValue(item.label);
        setIsOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActiveIndex(prev => (prev + 1) % filteredItems.length);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActiveIndex(prev => (prev - 1 + filteredItems.length) % filteredItems.length);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeIndex >= 0 && filteredItems[activeIndex]) {
                handleSelect(filteredItems[activeIndex]);
            }
        } else if (e.key === 'Escape') {
            setIsOpen(false);
        }
    };

    const optionsListClass = createStyle({
        maxHeight: '200px',
        overflowY: 'auto',
        display: 'grid',
        gap: '4px',
    });

    const optionClass = createStyle({
        padding: '8px 12px',
        borderRadius: '4px',
        cursor: 'pointer',
        color: theme.colors.textSecondary,
        transition: 'all 0.2s ease',
        '&:hover': {
            backgroundColor: theme.colors.border,
            color: theme.colors.text,
        },
        '&[data-active="true"]': {
            backgroundColor: theme.colors.border,
            color: theme.colors.text,
        }
    });

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div ref={comboboxRef} style={{width: '250px'}}>
                <PopperTrigger>
                    <TextInput
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={(e) => {
                            setInputValue(e.target.value);
                            setIsOpen(true);
                            onChange('');
                        }}
                        onFocus={() => setIsOpen(true)}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                    />
                </PopperTrigger>
                <PopperContent>
                    <div className={optionsListClass}>
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item, index) => (
                                <div
                                    key={item.value}
                                    className={optionClass}
                                    data-active={index === activeIndex}
                                    onClick={() => handleSelect(item)}
                                    onMouseMove={() => setActiveIndex(index)}
                                >
                                    {item.label}
                                </div>
                            ))
                        ) : (
                            <div style={{ padding: '8px 12px', color: theme.colors.textSecondary }}>
                                No results found.
                            </div>
                        )}
                    </div>
                </PopperContent>
            </div>
        </Popper>
    );
};`;

export const ComboboxDemo = () => {
    const [value, setValue] = useState('react');
    const [placeholder, setPlaceholder] = useState('Select a framework...');
    
    return (
        <DemoSection
            title="Combobox"
            description="An input field that combines a text input with a dropdown list for filtering and selecting options."
            livePreview={
                <Combobox items={frameworks} value={value} onChange={setValue} placeholder={placeholder} />
            }
            propControls={
                <ComboboxConfigurator placeholder={placeholder} setPlaceholder={setPlaceholder} value={value} />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
