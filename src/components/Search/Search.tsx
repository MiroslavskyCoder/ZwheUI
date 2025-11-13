import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Icon } from '../Icon/Icon';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

export interface SearchProps extends TextInputProps {}

export const Search: React.FC<SearchProps> = ({ className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('search');
    
    const containerClass = createStyle({
        position: 'relative',
        width: '100%',
    });
    
    const iconClass = createStyle({
        position: 'absolute',
        top: '50%',
        left: '12px',
        transform: 'translateY(-50%)',
        color: theme.colors.textSecondary,
        pointerEvents: 'none',
        zIndex: 1,
    });
    
    const inputClass = createStyle({
        paddingLeft: '36px !important',
    });

    return (
        <div className={`${containerClass} ${className}`}>
            <span className={iconClass}>
                <Icon as={SearchIcon} size="1.25em" />
            </span>
            <TextInput className={inputClass} {...props} />
        </div>
    );
};

export default Search;
