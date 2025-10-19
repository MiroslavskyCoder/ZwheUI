import React, { useState, useMemo } from 'react';
import {
    Table, TableHeader, TableBody, TableRow, TableHead, TableCell,
    Checkbox, Pagination, Search, Stack, Button, Text, Icon, Card
} from '..';
import { useTheme } from '../../core';
import { SortAscendingIcon, SortDescendingIcon, SelectorIcon } from '../../icons';

// Column definition
export interface ColumnDef<T> {
  accessorKey: keyof T;
  header: string;
  cell?: (value: T[keyof T], row: T) => React.ReactNode;
  enableSorting?: boolean;
}

// Main component props
export interface DataTableProps<T extends { id: string | number }> {
  data: T[];
  columns: ColumnDef<T>[];
  pageSize?: number;
  enableFiltering?: boolean;
  enableSorting?: boolean;
  enableSelection?: boolean;
  actions?: (selectedItems: T[]) => React.ReactNode;
  className?: string;
}

export const DataTable = <T extends { id: string | number }>({
  data,
  columns,
  pageSize = 10,
  enableFiltering = true,
  enableSorting = true,
  enableSelection = true,
  actions,
  className = '',
}: DataTableProps<T>) => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: 'asc' | 'desc' } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selection, setSelection] = useState<Set<string | number>>(new Set());

  // 1. Filtering
  const filteredData = useMemo(() => {
    if (!filter) return data;
    return data.filter(row =>
      columns.some(col => {
        const value = row[col.accessorKey];
        return String(value).toLowerCase().includes(filter.toLowerCase());
      })
    );
  }, [data, columns, filter]);

  // 2. Sorting
  const sortedData = useMemo(() => {
    if (!sortConfig) return filteredData;
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
    return sorted;
  }, [filteredData, sortConfig]);

  // 3. Pagination
  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, pageSize]);
  
  const handleSort = (key: keyof T) => {
    if (!enableSorting) return;
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1); // Reset to first page on sort
  };

  const handleSelect = (id: string | number) => {
    setSelection(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(id)) {
        newSelection.delete(id);
      } else {
        newSelection.add(id);
      }
      return newSelection;
    });
  };

  const handleSelectAll = () => {
    const pageIds = paginatedData.map(item => item.id);
    const newSelection = new Set(selection);
    const allOnPageSelected = pageIds.length > 0 && pageIds.every(id => newSelection.has(id));
    
    if (allOnPageSelected) {
        pageIds.forEach(id => newSelection.delete(id));
    } else {
        pageIds.forEach(id => newSelection.add(id));
    }
    setSelection(newSelection);
  };
  
  const selectedItems = useMemo(() => data.filter(item => selection.has(item.id)), [data, selection]);
  
  const isAllOnPageSelected = paginatedData.length > 0 && paginatedData.every(item => selection.has(item.id));

  return (
    <Card className={className}>
      <Stack gap="1.5rem">
        {(enableFiltering || (actions && selection.size > 0)) && (
          <Stack direction="row" justify="space-between" align="center">
            {enableFiltering ? (
              <div style={{minWidth: '250px'}}>
                <Search
                  placeholder="Search table..."
                  value={filter}
                  onChange={(e) => {
                    setFilter(e.target.value);
                    setCurrentPage(1); // Reset to first page on filter
                  }}
                />
              </div>
            ) : <div />}
            
            {actions && (
              <div style={{
                transition: 'opacity 0.3s, transform 0.3s',
                opacity: selection.size > 0 ? 1 : 0,
                transform: selection.size > 0 ? 'translateY(0)' : 'translateY(-10px)',
                pointerEvents: selection.size > 0 ? 'auto' : 'none'
              }}>
                  <Stack direction="row" align="center" gap="1rem">
                      <Text size={theme.typography.fontSizes.sm} color={theme.colors.textSecondary}>{selection.size} selected</Text>
                      {actions(selectedItems)}
                  </Stack>
              </div>
            )}
          </Stack>
        )}

        <div style={{ overflowX: 'auto' }}>
          <Table>
            <TableHeader>
              <TableRow>
                {enableSelection && (
                  <TableHead style={{ width: '40px' }}>
                    <Checkbox
                      checked={isAllOnPageSelected}
                      onChange={handleSelectAll}
                      aria-label="Select all items on this page"
                      disabled={paginatedData.length === 0}
                    />
                  </TableHead>
                )}
                {columns.map(col => (
                  <TableHead
                    key={String(col.accessorKey)}
                    onClick={() => col.enableSorting !== false && handleSort(col.accessorKey)}
                    style={{ cursor: (col.enableSorting !== false && enableSorting) ? 'pointer' : 'default', whiteSpace: 'nowrap' }}
                  >
                    <Stack direction="row" align="center" gap="0.5rem">
                      <span>{col.header}</span>
                      {enableSorting && col.enableSorting !== false && (
                        <Icon 
                          as={
                            sortConfig?.key === col.accessorKey 
                              ? (sortConfig.direction === 'asc' ? SortAscendingIcon : SortDescendingIcon)
                              : SelectorIcon
                          }
                          size={14}
                          style={{ color: sortConfig?.key === col.accessorKey ? theme.colors.text : theme.colors.textSecondary, opacity: sortConfig?.key === col.accessorKey ? 1 : 0.5 }}
                        />
                      )}
                    </Stack>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedData.map(row => (
                <TableRow key={row.id} data-selected={selection.has(row.id)} style={{backgroundColor: selection.has(row.id) ? 'rgba(59, 130, 246, 0.1)' : 'transparent'}}>
                  {enableSelection && (
                    <TableCell>
                      <Checkbox
                        checked={selection.has(row.id)}
                        onChange={() => handleSelect(row.id)}
                        aria-label={`Select row ${row.id}`}
                      />
                    </TableCell>
                  )}
                  {columns.map(col => (
                    <TableCell key={`${row.id}-${String(col.accessorKey)}`}>
                      {col.cell ? col.cell(row[col.accessorKey], row) : String(row[col.accessorKey])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {paginatedData.length === 0 && (
            <Stack align="center" style={{padding: '2rem'}}>
                <Text color={theme.colors.textSecondary}>{filter ? 'No results found.' : 'No data available.'}</Text>
            </Stack>
        )}
        
        {totalPages > 1 && (
          <Stack direction="row" justify="space-between" align="center" style={{ marginTop: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
            <Text size={theme.typography.fontSizes.sm} color={theme.colors.textSecondary}>
                Page {currentPage} of {totalPages}
            </Text>
            <Pagination count={totalPages} page={currentPage} onChange={setCurrentPage} />
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
