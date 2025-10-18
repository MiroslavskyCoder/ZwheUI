

import React, { useState } from 'react';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';
import { Layout } from '../Layout/Layout';
import { Button } from '../Button';
import { Text } from '../Text/Text';

interface CalendarProps {
    value?: Date;
    onChange: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ value, onChange }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('calendar');
    const [currentDate, setCurrentDate] = useState(value || new Date());

    const containerClass = createStyle({
        padding: theme.spacing.md,
        backgroundColor: theme.colors.backgroundSecondary,
        borderRadius: '8px',
        width: '300px',
        border: `1px solid ${theme.colors.border}`,
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: 'blur(16px)',
        },
    });
    
    const headerClass = createStyle({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    });
    
    const gridClass = createStyle({
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: theme.spacing.sm,
        textAlign: 'center',
    });
    
    const dayNameClass = createStyle({
        fontSize: '12px',
        color: theme.colors.textSecondary,
        fontWeight: 500,
    });

    // FIX: Moved style declarations before their usage to resolve block-scoped variable error.
    const dayButtonClass = createStyle({
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        border: 'none',
        background: 'transparent',
        color: theme.colors.text,
        cursor: 'pointer',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.colors.border,
        },
        '&[data-selected="true"]': {
            backgroundColor: theme.colors.primary,
            color: '#fff',
        }
    });

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    const days = Array.from({ length: startDay }, (_, i) => <div key={`empty-${i}`} />);
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const isSelected = value && date.toDateString() === value.toDateString();
        days.push(
            <button
                key={day}
                onClick={() => onChange(date)}
                className={dayButtonClass}
                data-selected={isSelected}
            >
                {day}
            </button>
        );
    }
    
    const changeMonth = (amount: number) => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + amount, 1));
    };

    return (
        <div className={containerClass}>
            <div className={headerClass}>
                <Button variant="secondary" onClick={() => changeMonth(-1)} style={{padding: '4px'}}>&lt;</Button>
                <Text weight="600">{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</Text>
                <Button variant="secondary" onClick={() => changeMonth(1)} style={{padding: '4px'}}>&gt;</Button>
            </div>
            <div className={gridClass}>
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => <div key={d} className={dayNameClass}>{d}</div>)}
                {days}
            </div>
        </div>
    );
};