import React from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Error } from '../Error/Error';
import { Text } from '../Text/Text';
import { useTheme } from '../../core/theme/ThemeProvider';
import { useStyles } from '../../core/hooks/useStyles';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
}

export const Input: React.FC<InputProps> = ({ label, id, error, className = '', ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('input-wrapper');

    const containerClass = createStyle({
        display: 'grid',
        gap: '4px',
        width: '100%',
    });

    return (
        <div className={`${containerClass} ${className}`}>
            {label && (
                <label htmlFor={id}>
                    <Text as="span" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>
                        {label}
                    </Text>
                </label>
            )}
            <TextInput id={id} {...props} />
            <Error>{error}</Error>
        </div>
    );
};
