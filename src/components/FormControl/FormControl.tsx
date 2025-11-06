
import React, { createContext, useContext, useId } from 'react';
import { Box } from '../Box/Box';
import { useStyles, useTheme } from '../../core';
import { Text } from '../Text/Text';

interface FormControlContextType {
    id: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
}

const FormControlContext = createContext<FormControlContextType | null>(null);
const useFormControl = () => useContext(FormControlContext);

interface FormControlProps extends React.ComponentProps<typeof Box<'div'>> {
    isInvalid?: boolean;
    isDisabled?: boolean;
}

const FormControlRoot: React.FC<FormControlProps> & {
    Label: React.FC<React.ComponentProps<typeof Text<'label'>>>;
    HelperText: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    ErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    Message: React.FC<React.ComponentProps<typeof Text<'p'>>>;
} = ({ isInvalid, isDisabled, ...props }) => {
    const id = useId();
    const context = { id, isInvalid, isDisabled };
    
    const createStyle = useStyles('form-control');
    const formControlClass = createStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
    });

    return (
        <FormControlContext.Provider value={context}>
            <Box className={formControlClass} {...props} />
        </FormControlContext.Provider>
    );
};

const Label: React.FC<React.ComponentProps<typeof Text<'label'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text 
            as="label"
            htmlFor={context?.id}
            size={theme.typography.fontSizes.sm}
            weight={theme.typography.fontWeights.medium}
            color={theme.colors.textSecondary}
            {...props}
        />
    );
};
Label.displayName = 'FormControl.Label';

const HelperText: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text 
            size={theme.typography.fontSizes.sm}
            color={theme.colors.textSecondary}
            id={context ? `${context.id}-helper-text` : undefined}
            {...props}
        />
    );
};
HelperText.displayName = 'FormControl.HelperText';

const ErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    if (!context?.isInvalid) return null;
    
    return (
        <Text
            color="#f87171" // red-400
            size="0.875rem"
            id={context ? `${context.id}-error-message` : undefined}
            aria-live="polite"
            {...props}
        />
    );
};
ErrorMessage.displayName = 'FormControl.ErrorMessage';

const Message: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text
            size={theme.typography.fontSizes.sm}
            color={theme.colors.textSecondary}
            id={context ? `${context.id}-message` : undefined}
            {...props}
        />
    );
};
Message.displayName = 'FormControl.Message';


FormControlRoot.Label = Label;
FormControlRoot.HelperText = HelperText;
FormControlRoot.ErrorMessage = ErrorMessage;
FormControlRoot.Message = Message;

export const FormControl = FormControlRoot;
