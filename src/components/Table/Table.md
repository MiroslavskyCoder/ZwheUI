# Table

A set of components for displaying sets of data in rows and columns.

## Components

*   **Table**: The main `<table>` wrapper.
*   **TableHeader**: The `<thead>` element for column headers.
*   **TableBody**: The `<tbody>` element for data rows.
*   **TableRow**: The `<tr>` element for a single row.
*   **TableHead**: The `<th>` element for a header cell.
*   **TableCell**: The `<td>` element for a data cell.

## Usage

```tsx
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
```
