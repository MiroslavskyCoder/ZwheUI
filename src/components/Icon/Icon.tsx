import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface IconProps extends React.SVGAttributes<SVGElement> {
    as: React.ElementType;
    size?: number | string;
    className?: string;
}

export const Icon: React.FC<IconProps> = ({ as, size = '1em', className = '', ...props }) => {
    const createStyle = useStyles('icon');
    const { theme } = useTheme();

    const iconClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit', // Inherit color by default
    });

    const IconComponent = as;
    
    const combinedClassName = `${iconClass} ${className}`;

    const style = {
        width: size,
        height: size,
    };

    return (
        <span className={combinedClassName} style={style}>
            <IconComponent {...props} />
        </span>
    );
};
