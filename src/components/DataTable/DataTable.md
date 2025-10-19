# DataTable

A powerful and feature-rich table component for displaying complex datasets. It includes built-in support for pagination, global filtering, column sorting, and row selection with contextual actions.

## Props

*   `data` (array of objects, required): The array of data to display. Each object in the array must have a unique `id` property of type `string` or `number`.
*   `columns` (array of `ColumnDef`, required): An array of objects that define the table's columns.
*   `pageSize` (number, optional, default: 10): The number of rows to display per page.
*   `enableFiltering` (boolean, optional, default: true): Toggles the visibility and functionality of the global search filter.
*   `enableSorting` (boolean, optional, default: true): Toggles the ability to sort columns by clicking their headers.
*   `enableSelection` (boolean, optional, default: true): Toggles the row selection functionality (checkboxes).
*   `actions` (function, optional): A render function that receives an array of the selected items and a `clearSelection` callback function. It should return a React node (e.g., buttons for bulk actions). The UI appears when one or more rows are selected. The callback can be used to deselect all items after an action is performed.
*   `className` (string, optional): A custom class name for the root `Card` element.

## Column Definition (`ColumnDef`)

The `columns` prop takes an array of objects with the following shape:

```ts
interface ColumnDef<T> {
  accessorKey: keyof T;
  header: string;
  cell?: (value: T[keyof T], row: T) => React.ReactNode;
  enableSorting?: boolean;
}
```
*   `accessorKey`: The key from your data object to display in this column.
*   `header`: The text to display in the table header for this column.
*   `cell`: An optional render function for custom cell content. It receives the cell's value and the entire row object.
*   `enableSorting`: An optional boolean to disable sorting for a specific column, overriding the global prop.

## Usage

```tsx
import { DataTable, ColumnDef, Badge, Button, Icon } from './src/components';
import { TrashIcon } from './src/icons';

// 1. Define your data type
interface User {
    id: number;
    name: string;
    status: 'Active' | 'Inactive';
}

// 2. Create your data
const myData: User[] = [
    { id: 1, name: 'John Doe', status: 'Active' },
    { id: 2, name: 'Jane Smith', status: 'Inactive' },
];

// 3. Define your columns
const columns: ColumnDef<User>[] = [
    { accessorKey: 'name', header: 'Name' },
    { 
      accessorKey: 'status', 
      header: 'Status',
      cell: (status) => <Badge colorScheme={status === 'Active' ? 'success' : 'error'}>{status}</Badge>
    },
];

// 4. (Optional) Define actions
const tableActions = (selectedItems: User[], clearSelection: () => void) => (
    <Button variant="accent" onClick={() => {
        alert(`Deleting ${selectedItems.length} users...`);
        clearSelection();
    }}>
      <Icon as={TrashIcon} size={16} /> Delete
    </Button>
);

// 5. Render the component
<DataTable
    data={myData}
    columns={columns}
    pageSize={5}
    actions={tableActions}
/>
```