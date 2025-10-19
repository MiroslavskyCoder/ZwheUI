import React from 'react';
import { Text, Stack, SpeedDial } from '../src/components';
import { ShareIcon, PrintIcon, CopyIcon } from '../src/icons';
import { DemoSection } from './DemoSection';

const speedDialActions = [
  { icon: CopyIcon, label: 'Copy', onClick: () => alert('Copy clicked') },
  { icon: ShareIcon, label: 'Share', onClick: () => alert('Share clicked') },
  { icon: PrintIcon, label: 'Print', onClick: () => alert('Print clicked') },
];

const documentation = `# Speed Dial

A component that displays a floating action button (FAB) which, upon being clicked, animates to reveal a set of related, secondary actions.

## Props

*   \`actions\` (array of objects, required): An array of action objects to display. Each object must have:
    *   \`icon\` (React.ElementType): The icon for the action's button.
    *   \`label\` (string): The text label for the action (appears next to the button).
    *   \`onClick\` (function): The callback function to execute when the action is clicked.
*   \`position\` (object, optional): An object with \`top\`, \`bottom\`, \`left\`, \`right\` properties to position the Speed Dial. Defaults to \`{ bottom: '2rem', right: '2rem' }\`.

## Usage

\`\`\`tsx
import { SpeedDial } from './src/components';
import { ShareIcon, PrintIcon, CopyIcon } from './src/icons';

const actions = [
  { icon: CopyIcon, label: 'Copy', onClick: () => alert('Copy') },
  { icon: ShareIcon, label: 'Share', onClick: () => alert('Share') },
  { icon: PrintIcon, label: 'Print', onClick: () => alert('Print') },
];

<SpeedDial actions={actions} />
\`\`\``;

const sourceCode = `import React, { useState } from 'react';
import { FloatingActionButton } from '../FloatingActionButton/FloatingActionButton';
import { PlusIcon, TimesIcon } from '../../icons';
import { useStyles, useTheme } from '../../core';
import { useClickOutside } from '../../core/hooks/useInteractions';
import { Stack } from '../Stack/Stack';
import { Text } from '../Text/Text';

interface SpeedDialAction {
    icon: React.ElementType;
    label: string;
    onClick: () => void;
}

interface SpeedDialProps {
    actions: SpeedDialAction[];
    position?: { bottom?: string; right?: string; top?: string; left?: string };
}

export const SpeedDial: React.FC<SpeedDialProps> = ({ actions, position = { bottom: '2rem', right: '2rem' } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const createStyle = useStyles('speed-dial');
    const containerRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

    const containerClass = createStyle({
        position: 'fixed',
        ...position,
        zIndex: 45,
        display: 'flex',
        flexDirection: 'column-reverse',
        alignItems: 'center',
        gap: '1rem',
    });

    const actionClass = (index: number) => createStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        transition: \`all 0.3s ease \${index * 0.05}s\`,
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
    });

    const labelClass = createStyle({
        backgroundColor: theme.colors.backgroundSecondary,
        color: theme.colors.text,
        padding: '0.25rem 0.75rem',
        borderRadius: '4px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
        whiteSpace: 'nowrap',
    });

    return (
        <div ref={containerRef} className={containerClass}>
            <FloatingActionButton
                icon={isOpen ? TimesIcon : PlusIcon}
                label={isOpen ? "Close actions" : "Open actions"}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Stack direction="column-reverse" align="end" gap="1.5rem">
                {actions.map((action, index) => (
                    <div key={action.label} className={actionClass(index)}>
                        <div className={labelClass}>
                            <Text size={theme.typography.fontSizes.sm}>{action.label}</Text>
                        </div>
                        <FloatingActionButton
                            icon={action.icon}
                            label={action.label}
                            onClick={() => {
                                action.onClick();
                                setIsOpen(false);
                            }}
                            size="small"
                            position={{}}
                            style={{ position: 'relative' }}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    );
};`;

export const SpeedDialDemo = () => (
    <>
        <DemoSection
            title="Speed Dial"
            description="A FAB that displays a list of related actions when clicked. The button is fixed to the viewport, not this container."
            livePreview={
                <Text color="textSecondary">
                    The Speed Dial is positioned at the bottom right of the screen. Click it to see the actions.
                </Text>
            }
            propControls={
                <Text color="textSecondary">
                    The `actions` prop is a complex object not suitable for simple controls. The `position` prop is also demonstrated with a fixed value.
                </Text>
            }
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
        <SpeedDial actions={speedDialActions} />
    </>
);