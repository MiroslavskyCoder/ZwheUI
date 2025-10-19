
import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
    orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({ orientation = 'horizontal', className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('divider');
    const dividerClass = createStyle({
        border: 'none',
        backgroundColor: theme.colors.border,
        ...(orientation === 'horizontal' 
            ? { height: '1px', width: '100%', margin: '0.5rem 0' }
            : { width: '1px', height: 'auto', alignSelf: 'stretch', margin: '0 0.5rem' }
        ),
    });
    return <hr className={`${dividerClass} ${className}`} {...props} />;
}
