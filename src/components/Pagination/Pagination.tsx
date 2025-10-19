
import React from 'react';
import { Button } from '../Button';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface PaginationProps {
    count: number; // total number of pages
    page: number; // current page (1-based)
    onChange: (page: number) => void;
    className?: string;
}

export const Pagination: React.FC<PaginationProps> = ({ count, page, onChange, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('pagination');

    const containerClass = createStyle({
        display: 'inline-grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        gap: theme.spacing.sm,
    });

    const pageButtonClass = createStyle({
        minWidth: '36px',
        height: '36px',
        padding: '0',
        borderRadius: '4px',
        justifyContent: 'center',
    });

    const activePageButtonClass = createStyle({
        backgroundColor: theme.colors.primary,
        color: theme.colors.background,
        borderColor: theme.colors.primary,
        '&:hover:not(:disabled)': {
            backgroundColor: theme.colors.primary,
        }
    });
    
    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= count) {
            onChange(newPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        let startPage: number, endPage: number;

        if (count <= maxPagesToShow) {
            startPage = 1;
            endPage = count;
        } else {
            if (page <= Math.ceil(maxPagesToShow / 2)) {
                startPage = 1;
                endPage = maxPagesToShow;
            } else if (page + Math.floor(maxPagesToShow / 2) >= count) {
                startPage = count - maxPagesToShow + 1;
                endPage = count;
            } else {
                startPage = page - Math.floor(maxPagesToShow / 2);
                endPage = page + Math.floor(maxPagesToShow / 2);
            }
        }
        
        if (startPage > 1) {
             pageNumbers.push(
                 <Button key={1} onClick={() => handlePageChange(1)} variant="secondary" className={pageButtonClass}>1</Button>
             );
             if (startPage > 2) {
                pageNumbers.push(<Text key="start-ellipsis" style={{padding: '0 8px'}} aria-hidden="true">...</Text>);
             }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            const isActive = i === page;
            pageNumbers.push(
                <Button 
                    key={i} 
                    onClick={() => handlePageChange(i)}
                    variant={isActive ? 'primary' : 'secondary'}
                    className={`${pageButtonClass} ${isActive ? activePageButtonClass : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                    disabled={isActive}
                >
                    {i}
                </Button>
            );
        }

        if (endPage < count) {
            if (endPage < count - 1) {
                pageNumbers.push(<Text key="end-ellipsis" style={{padding: '0 8px'}} aria-hidden="true">...</Text>);
            }
            pageNumbers.push(
                 <Button key={count} onClick={() => handlePageChange(count)} variant="secondary" className={pageButtonClass}>{count}</Button>
            );
        }

        return pageNumbers;
    };


    return (
        <nav className={`${containerClass} ${className}`} aria-label="Pagination">
            <Button onClick={() => handlePageChange(page - 1)} disabled={page <= 1} variant="secondary" className={pageButtonClass}>
                &lt;
            </Button>
            {renderPageNumbers()}
            <Button onClick={() => handlePageChange(page + 1)} disabled={page >= count} variant="secondary" className={pageButtonClass}>
                &gt;
            </Button>
        </nav>
    );
};

export default Pagination;