import React, { useState } from 'react';
import { 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    FormErrorMessage, 
    Input, 
    Text, 
    Stack,
    Checkbox
} from '../src/components';
import { DemoSection } from './DemoSection';

const FormControlConfigurator: React.FC<{
    isInvalid: boolean;
    setIsInvalid: (invalid: boolean) => void;
}> = ({ isInvalid, setIsInvalid }) => (
    <Checkbox label="Is Invalid Prop" checked={isInvalid} onChange={e => setIsInvalid(e.target.checked)} />
);

const documentation = `# FormControl

A set of components that provides context to form inputs for building accessible and structured forms.

## Components

*   **FormControl**: The main wrapper that provides context (\`id\`, \`isInvalid\`, \`isDisabled\`) to its children.
*   **FormLabel**: A \`<label>\` that is automatically associated with the input via the context \`id\`.
*   **FormHelperText**: Text displayed below the input to provide additional guidance.
*   **FormErrorMessage**: An error message that is only rendered when \`isInvalid\` is true on \`FormControl\`.

## Usage

\`\`\`tsx
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, TextInput } from './src/components';

<FormControl isInvalid={isError}>
  <FormLabel>Email Address</FormLabel>
  <TextInput type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>Your email is invalid.</FormErrorMessage>
</FormControl>
\`\`\``;

const sourceCode = `import React, { createContext, useContext, useId } from 'react';
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

export const FormControl: React.FC<FormControlProps> = ({ isInvalid, isDisabled, ...props }) => {
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

export const FormLabel: React.FC<React.ComponentProps<typeof Text<'label'>>> = (props) => {
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

export const FormHelperText: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    const { theme } = useTheme();
    return (
        <Text 
            size={theme.typography.fontSizes.sm}
            color={theme.colors.textSecondary}
            id={context ? \`\${context.id}-helper-text\` : undefined}
            {...props}
        />
    );
};

export const FormErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const context = useFormControl();
    if (!context?.isInvalid) return null;
    
    return (
        <Text
            color="#f87171" // red-400
            size="0.875rem"
            id={context ? \`\${context.id}-error-message\` : undefined}
            aria-live="polite"
            {...props}
        />
    );
};`;

export const FormControlDemo = () => {
    const [isInvalid, setIsInvalid] = useState(false);

    return (
        <DemoSection
            title="Form Control"
            description="A group of components for building accessible and structured forms."
            livePreview={
                <FormControl isInvalid={isInvalid} style={{width: '300px'}}>
                    <FormLabel>Email Address</FormLabel>
                    <Input placeholder="you@example.com" />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <FormErrorMessage>This email address is not valid.</FormErrorMessage>
                </FormControl>
            }
            propControls={<FormControlConfigurator isInvalid={isInvalid} setIsInvalid={setIsInvalid} />}
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
