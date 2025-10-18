
import React from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Sofa, Text, Stack, Badge } from '../src/components';

const invoices = [
    { invoice: 'INV-2024-001', status: 'Paid', amount: '$250.00' },
    { invoice: 'INV-2024-002', status: 'Pending', amount: '$150.00' },
    { invoice: 'INV-2024-003', status: 'Overdue', amount: '$350.00' },
];

export const TableDemo = () => (
    <Sofa>
        <Stack gap="1rem">
            <Text as="h2" size="1.5rem" weight="600">Table</Text>
            <Text>A component for displaying sets of data in rows and columns.</Text>
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
        </Stack>
    </Sofa>
);
