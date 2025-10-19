import React from 'react';
import { Sofa, Text, Stack, DataTable, ColumnDef, Badge, Button, useToast, Icon } from '../src/components';
import { TrashIcon } from '../src/icons';

// 1. Define the data type
interface User {
    id: number;
    name: string;
    email: string;
    role: 'Admin' | 'Member' | 'Guest';
    status: 'Active' | 'Inactive' | 'Pending';
    createdAt: string;
}

// 2. Create mock data
const mockData: User[] = [
    { id: 1, name: 'John Doe', email: 'john.d@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane.s@example.com', role: 'Member', status: 'Active', createdAt: '2024-02-20' },
    { id: 3, name: 'Sam Wilson', email: 'sam.w@example.com', role: 'Member', status: 'Pending', createdAt: '2024-03-01' },
    { id: 4, name: 'Alice Johnson', email: 'alice.j@example.com', role: 'Guest', status: 'Inactive', createdAt: '2023-12-10' },
    { id: 5, name: 'Michael Brown', email: 'michael.b@example.com', role: 'Member', status: 'Active', createdAt: '2024-01-25' },
    { id: 6, name: 'Emily Davis', email: 'emily.d@example.com', role: 'Admin', status: 'Active', createdAt: '2023-11-30' },
    { id: 7, name: 'Chris Green', email: 'chris.g@example.com', role: 'Member', status: 'Pending', createdAt: '2024-04-05' },
    { id: 8, name: 'Patricia White', email: 'patricia.w@example.com', role: 'Guest', status: 'Inactive', createdAt: '2024-03-15' },
    { id: 9, name: 'Robert Harris', email: 'robert.h@example.com', role: 'Member', status: 'Active', createdAt: '2024-02-10' },
    { id: 10, name: 'Linda Martinez', email: 'linda.m@example.com', role: 'Member', status: 'Active', createdAt: '2023-10-05' },
    { id: 11, name: 'James Taylor', email: 'james.t@example.com', role: 'Guest', status: 'Pending', createdAt: '2024-05-01' },
    { id: 12, name: 'Mary Anderson', email: 'mary.a@example.com', role: 'Admin', status: 'Inactive', createdAt: '2024-01-01' },
    { id: 13, name: 'David Thomas', email: 'david.t@example.com', role: 'Member', status: 'Active', createdAt: '2024-04-20' },
    { id: 14, name: 'Jennifer Garcia', email: 'jennifer.g@example.com', role: 'Member', status: 'Active', createdAt: '2024-03-22' },
];


export const DataTableDemo = () => {
    const { addToast } = useToast();

    // 3. Define columns
    const columns: ColumnDef<User>[] = [
        { accessorKey: 'name', header: 'Name' },
        { accessorKey: 'email', header: 'Email' },
        { accessorKey: 'role', header: 'Role' },
        {
            accessorKey: 'status',
            header: 'Status',
            cell: (status) => {
                const colorScheme = status === 'Active' ? 'success' : status === 'Pending' ? 'accent' : 'error';
                return <Badge colorScheme={colorScheme}>{status}</Badge>;
            }
        },
        { accessorKey: 'createdAt', header: 'Created At' },
    ];
    
    // 4. Define actions for selected items
    const tableActions = (selectedItems: User[], clearSelection: () => void) => (
        <Button
            variant="accent"
            onClick={() => {
                addToast({
                    title: `Deleted ${selectedItems.length} user(s)`,
                    description: selectedItems.map(u => u.name).join(', '),
                    variant: 'error'
                });
                clearSelection();
            }}
        >
            <Icon as={TrashIcon} size={16} />
            <span>Delete Selected</span>
        </Button>
    );

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Data Table</Text>
                <Text>A powerful table component with built-in pagination, sorting, filtering, selection, and contextual actions.</Text>
                <DataTable
                    data={mockData}
                    columns={columns}
                    pageSize={5}
                    actions={tableActions}
                />
            </Stack>
        </Sofa>
    );
};