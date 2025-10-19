import React, { useState } from 'react';
import { Pagination, Text, Stack, Slider } from '../src/components';
import { DemoSection } from './DemoSection';

const PaginationConfigurator: React.FC<{
    count: number;
    setCount: (c: number) => void;
}> = ({ count, setCount }) => (
    <Stack gap="1rem">
        <Text as="label" size="sm" weight="medium" color="textSecondary">Count Prop (Total Pages)</Text>
        <Slider value={count} onChange={setCount} min={1} max={50} showValue />
    </Stack>
);

const documentation = `# Pagination

A component to control navigation between a set of pages, often used with tables or lists of data.

## Props

*   \`count\` (number, required): The total number of pages.
*   \`page\` (number, required): The current active page (1-based index).
*   \`onChange\` (function, required): A callback function triggered when the page is changed. It receives the new page number.
*   \`className\` (string, optional): Additional CSS classes for the container.

## Usage

\`\`\`tsx
import { Pagination } from './src/components';
import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(5);

<Pagination count={20} page={currentPage} onChange={setCurrentPage} />
\`\`\``;

const sourceCode = `import React from 'react';
import { Button } from '../Button';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface PaginationProps {
    count: number;
    page: number;
    onChange: (page: number) => void;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ count, page, onChange, className = '' }) => {
    /* ... internal logic for rendering page numbers and ellipsis ... */

    return (
        <nav className={\`\${containerClass} \${className}\`} aria-label="Pagination">
            <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>&lt;</Button>
            {renderPageNumbers()}
            <Button onClick={() => handlePageChange(page + 1)} disabled={page >= count}>&gt;</Button>
        </nav>
    );
};`;

export const PaginationDemo = () => {
    const [count, setCount] = useState(20);
    const [page, setPage] = useState(5);
    
    return (
        <DemoSection
            title="Pagination"
            description="A component to control navigation between a set of pages."
            livePreview={
                <Pagination count={count} page={page} onChange={setPage} />
            }
            propControls={
                <PaginationConfigurator count={count} setCount={setCount} />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};