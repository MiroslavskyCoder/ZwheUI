import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Text, Badge } from '../src/components';
import { DemoSection } from './DemoSection';

const invoices = [
    { invoice: 'INV-2024-001', status: 'Paid', amount: '$250.00' },
    { invoice: 'INV-2024-002', status: 'Pending', amount: '$150.00' },
    { invoice: 'INV-2024-003', status: 'Overdue', amount: '$350.00' },
];

const documentation = `# Table

A set of components for displaying sets of data in rows and columns.

## Components

*   **Table**: The main \`<table>\` wrapper.
*   **TableHeader**: The \`<thead>\` element for column headers.
*   **TableBody**: The \`<tbody>\` element for data rows.
*   **TableRow**: The \`<tr>\` element for a single row.
*   **TableHead**: The \`<th>\` element for a header cell.
*   **TableCell**: The \`<td>\` element for a data cell.

## Usage

\`\`\`tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './src/components';

const data = [
    { id: 1, name: 'Product A', price: '$50' },
    { id: 2, name: 'Product B', price: '$75' },
];

<Table>
    <TableHeader>
        <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Price</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {data.map((item) => (
            <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
            </TableRow>
        ))}
    </TableBody>
</Table>
\`\`\``;

const sourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export const Table: React.FC<React.TableHTMLAttributes<HTMLTableElement>> = (props) => { /* ... */ };
export const TableHeader: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => <thead {...props} />;
export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = (props) => <tbody {...props} />;
export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = (props) => { /* ... */ };
export const TableHead: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = (props) => { /* ... */ };
export const TableCell: React.FC<React.HTMLAttributes<HTMLTableCellElement>> = (props) => { /* ... */ };`;


export const TableDemo = () => (
    <DemoSection
        title="Table"
        description="A component for displaying sets of data in rows and columns."
        livePreview={
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((item) => (
                        <TableRow key={item.invoice}>
                            <TableCell>{item.invoice}</TableCell>
                            <TableCell>
                               <Badge 
                                  colorScheme={item.status === 'Paid' ? 'success' : item.status === 'Pending' ? 'accent' : 'error'}
                                >
                                  {item.status}
                                </Badge>
                            </TableCell>
                            <TableCell>{item.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        }
        propControls={
            <Text color="textSecondary">
                These are presentational table components. For a more feature-rich experience with sorting and filtering, see the `DataTable` component.
            </Text>
        }
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);