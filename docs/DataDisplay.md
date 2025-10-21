# Data Display

ZwheUI offers a versatile set of components for displaying data, from simple lists to complex, interactive tables. This guide covers the primary components for data display and when to use them.

## List

The `List` component and its sub-components (`ListItem`, `ListItemText`) are ideal for displaying simple, vertically stacked collections of items. It's great for navigation menus, settings lists, or feeds.

### When to Use
-   For a simple collection of items.
-   When each item has a primary and optional secondary line of text.
-   When you need to intersperse items with actions or dividers.

### Example
```tsx
import { List, ListItem, ListItemText, Divider, Button } from 'zwheui';

<List>
  <ListItem>
    <ListItemText primary="Profile" secondary="Update your personal details" />
  </ListItem>
  <Divider />
  <ListItem>
    <ListItemText primary="Billing" />
    <Button variant="secondary">Manage</Button>
  </ListItem>
</List>
```

---

## Table

The `Table` component family (`TableHeader`, `TableBody`, `TableRow`, etc.) provides semantic HTML elements for displaying tabular data. It's a foundational component for creating structured data grids.

### When to Use
-   For displaying structured, tabular data.
-   When you need full control over the `<table>` structure.
-   As a base for more complex data grid implementations.

### Example
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from 'zwheui';

<Table>
    <TableHeader>
        <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableCell>INV-001</TableCell>
            <TableCell>Paid</TableCell>
        </TableRow>
    </TableBody>
</Table>
```

---

## DataTable

The `DataTable` is a high-level, feature-rich component built on top of `Table`. It includes built-in functionality for pagination, global filtering, column sorting, and row selection.

### When to Use
-   For large datasets that require pagination.
-   When users need to search, sort, or filter the data.
-   When you need to perform bulk actions on selected rows.
-   When you need to allow users to toggle column visibility.

### Example
```tsx
import { DataTable, ColumnDef } from 'zwheui';

interface User { id: number; name: string; status: string; }
const data: User[] = [ /* ... */ ];

const columns: ColumnDef<User>[] = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'status', header: 'Status' },
];

<DataTable data={data} columns={columns} pageSize={5} />
```

---

## Card

The `Card` component is a flexible container for grouping related information. It's perfect for displaying individual items from a collection in a visually appealing way, often within a `Grid`.

### When to Use
-   For displaying items in a collection that have rich content (images, text, actions).
-   When a tabular layout is too rigid or dense.
-   For dashboard items, user profiles, or product listings.

### Example
```tsx
import { Grid, Card, Card.Image, Card.Body, Card.Title } from 'zwheui';

<Grid minItemWidth="300px" gap="1.5rem">
  <Card>
    <Card.Image src="..." alt="..." />
    <Card.Body>
      <Card.Title>Mountain Getaway</Card.Title>
    </Card.Body>
  </Card>
  {/* ... more cards ... */}
</Grid>
```

---

## Stat

The `Stat` component is designed to display a single, key statistic or data point. It's often used on dashboards to provide a high-level overview.

### When to Use
-   For key performance indicators (KPIs).
-   To show a single important number with context (e.g., a trend indicator).

### Example
```tsx
import { Stat, Grid } from 'zwheui';
import { UsersIcon } from 'zwheui/icons';

<Grid minItemWidth="200px" gap="1rem">
    <Stat
      label="Total Users"
      value="12,403"
      icon={UsersIcon}
      indicator="up"
      change="+5.2%"
      helpText="since last month"
    />
    {/* ... more stats ... */}
</Grid>
```
