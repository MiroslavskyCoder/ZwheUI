import React, { useState } from 'react';
import { Search, Text, Stack, Input } from '../src/components';
import { DemoSection } from './DemoSection';

const SearchConfigurator: React.FC<{
    placeholder: string;
    setPlaceholder: (p: string) => void;
}> = ({ placeholder, setPlaceholder }) => (
    <Input label="Placeholder Prop" value={placeholder} onChange={e => setPlaceholder(e.target.value)} />
);

const documentation = `# Search

A styled text input component specifically designed for search queries, featuring a leading search icon. It is built upon the \`TextInput\` component.

## Props

*   All props from \`TextInput\` are supported (e.g., \`placeholder\`, \`value\`, \`onChange\`).
*   \`className\` (string, optional): Additional CSS classes for the container \`div\`.

## Usage

\`\`\`tsx
import { Search } from './src/components';

<Search placeholder="Search documentation..." />
\`\`\``;

const sourceCode = `import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

const SearchIcon = () => ( /* ... svg ... */ );

export interface SearchProps extends TextInputProps {}

export const Search: React.FC<SearchProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('search');
    
    const containerClass = createStyle({ /* ... styles ... */ });
    const iconClass = createStyle({ /* ... styles ... */ });
    const inputClass = createStyle({ paddingLeft: '36px' });

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <span className={iconClass}>
                <SearchIcon />
            </span>
            <TextInput className={inputClass} {...props} />
        </div>
    );
};

export default Search;`;

export const SearchDemo = () => {
    const [placeholder, setPlaceholder] = useState("Search documentation...");
    return (
        <DemoSection
            title="Search"
            description="A styled text input component specifically designed for search queries, featuring a leading search icon."
            livePreview={
                <Search placeholder={placeholder} style={{width: '300px'}} />
            }
            propControls={<SearchConfigurator placeholder={placeholder} setPlaceholder={setPlaceholder} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};