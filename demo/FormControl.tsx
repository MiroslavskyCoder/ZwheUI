
import React, { useState } from 'react';
import { 
    FormControl, 
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
*   **FormControl.Label**: A \`<label>\` that is automatically associated with the input via the context \`id\`.
*   **FormControl.HelperText**: Text displayed below the input to provide additional guidance.
*   **FormControl.Message**: A generic message for supplementary information.
*   **FormControl.ErrorMessage**: An error message that is only rendered when \`isInvalid\` is true on \`FormControl\`.

## Usage

\`\`\`tsx
import { FormControl, TextInput } from './src/components';

<FormControl isInvalid={isError}>
  <FormControl.Label>Email Address</FormControl.Label>
  <TextInput type="email" />
  <FormControl.HelperText>We'll never share your email.</FormControl.HelperText>
  <FormControl.ErrorMessage>Your email is invalid.</FormControl.ErrorMessage>
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

const FormControlRoot: React.FC<FormControlProps> & {
    Label: React.FC<React.ComponentProps<typeof Text<'label'>>>;
    HelperText: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    ErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    Message: React.FC<React.ComponentProps<typeof Text<'p'>>>;
} = ({ isInvalid, isDisabled, ...props }) => {
    // ...
};

const Label: React.FC<React.ComponentProps<typeof Text<'label'>>> = (props) => { /* ... */ };
const HelperText: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => { /* ... */ };
const ErrorMessage: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => { /* ... */ };
const Message: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => { /* ... */ };

FormControlRoot.Label = Label;
FormControlRoot.HelperText = HelperText;
FormControlRoot.ErrorMessage = ErrorMessage;
FormControlRoot.Message = Message;

export const FormControl = FormControlRoot;`;

export const FormControlDemo = () => {
    const [isInvalid, setIsInvalid] = useState(false);

    return (
        <DemoSection
            title="Form Control"
            description="A group of components for building accessible and structured forms."
            livePreview={
                <FormControl isInvalid={isInvalid} style={{width: '300px'}}>
                    <FormControl.Label>Email Address</FormControl.Label>
                    <Input placeholder="you@example.com" />
                    <FormControl.HelperText>We'll never share your email.</FormControl.HelperText>
                    <FormControl.Message>This is a generic message text.</FormControl.Message>
                    <FormControl.ErrorMessage>This email address is not valid.</FormControl.ErrorMessage>
                </FormControl>
            }
            propControls={<FormControlConfigurator isInvalid={isInvalid} setIsInvalid={setIsInvalid} />}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};
