import React from 'react';
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
    title?: string;
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
        borderTop: `1px solid ${theme.colors.border}`,
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

export default Dialog;