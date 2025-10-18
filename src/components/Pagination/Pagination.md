# Pagination

A component to control navigation between a set of pages, often used with tables or lists of data.

## Props

*   `count` (number, required): The total number of pages.
*   `page` (number, required): The current active page (1-based index).
*   `onChange` (function, required): A callback function triggered when the page is changed. It receives the new page number.
*   `className` (string, optional): Additional CSS classes for the container.

## Usage

```tsx
import { Pagination } from './src/components';
import { useState } from 'react';

const [currentPage, setCurrentPage] = useState(5);

<Pagination count={20} page={currentPage} onChange={setCurrentPage} />
```
