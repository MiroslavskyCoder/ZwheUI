import React, { useState } from 'react';
import { Dialog, Text, Stack, Button, Input, Checkbox } from '../src/components';
import { DemoSection } from './DemoSection';

const DialogConfigurator: React.FC<{
    title: string;
    setTitle: (t: string) => void;
    showActions: boolean;
    setShowActions: (s: boolean) => void;
    isOpen: boolean;
    setIsOpen: (o: boolean) => void;
}> = ({ title, setTitle, showActions, setShowActions, isOpen, setIsOpen }) => (
    <Stack gap="1.5rem">
        <Input label="Title Prop" value={title} onChange={e => setTitle(e.target.value)} />
        <Checkbox label="Show Actions Prop" checked={showActions} onChange={e => setShowActions(e.target.checked)} />
        <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    </Stack>
);

const documentation = `# Dialog

A modal window that interrupts the user with important information or a request for a decision. It's built on top of the \`Modal\` component.

## Props

*   \`isOpen\` (boolean, required): Controls the visibility of the dialog.
*   \`onClose\` (function, required): A callback function to close the dialog.
*   \`title\` (string, required): The title displayed at the top of the dialog.
*   \`children\` (React.ReactNode, required): The main content of the dialog.
*   \`actions\` (array of objects, optional): An array of actions to render as buttons in the footer. Each object is passed as props to a \`Button\` component, with an added \`label\` property for the button text.
*   \`className\` (string, optional): Additional CSS classes for the modal container.

## Usage

\`\`\`tsx
import { Dialog, Button } from './src/components';
import { useState } from 'react';

const [isOpen, setIsOpen] = useState(false);

const dialogActions = [
    { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' },
    { label: 'Confirm', onClick: () => { alert('Confirmed!'); setIsOpen(false); } }
];

<>
    <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
    <Dialog
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      title="Confirm Action"
      actions={dialogActions}
    >
      Are you sure you want to proceed with this action?
    </Dialog>
</>
\`\`\``;

const sourceCode = `import React from 'react';
import { Modal } from '../Modal/Modal';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Button, ButtonProps } from '../Button';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

interface DialogAction extends ButtonProps {
    label: string;
}

export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    actions?: DialogAction[];
    className?: string;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, title, children, actions, className = '' }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('dialog');

    const contentClass = createStyle({
        display: 'grid',
        gap: theme.spacing.md,
    });
    
    const footerClass = createStyle({
        borderTop: \`1px solid \${theme.colors.border}\`,
        paddingTop: theme.spacing.md,
        marginTop: theme.spacing.md,
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} className={className}>
            <div className={contentClass}>
                <div>{children}</div>
                {actions && actions.length > 0 && (
                     <Stack direction="row" className={footerClass} justify="end" gap={theme.spacing.sm}>
                        {actions.map(({ label, ...props }, index) => (
                            <Button key={index} {...props}>{label}</Button>
                        ))}
                    </Stack>
                )}
            </div>
        </Modal>
    );
};

export default Dialog;`;

export const DialogDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState('Delete Item');
    const [showActions, setShowActions] = useState(true);
    
    const dialogActions = showActions ? [
        { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' as const },
        { label: 'Delete', onClick: () => { alert('Deleted!'); setIsOpen(false); }, variant: 'primary' as const }
    ] : undefined;

    return (
        <>
        <DemoSection
            title="Dialog"
            description="A modal window that prompts for a decision, built on top of the Modal component."
            livePreview={
                <Text color="textSecondary">Use the 'Props' tab to configure and open the dialog.</Text>
            }
            propControls={
                <DialogConfigurator 
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    title={title}
                    setTitle={setTitle}
                    showActions={showActions}
                    setShowActions={setShowActions}
                />
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
        <Dialog 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)} 
            title={title}
            actions={dialogActions}
        >
            <Text>Are you sure you want to delete this item? This action cannot be undone.</Text>
        </Dialog>
        </>
    );
};