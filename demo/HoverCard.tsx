import React from 'react';
import { HoverCard, HoverCardTrigger, HoverCardContent, Text, Stack, Link, Avatar } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Hover Card

A popover that appears when a user hovers their mouse over a trigger element.

## Components

*   **HoverCard**: The main wrapper that manages the hover state.
*   **HoverCardTrigger**: The element that triggers the popover on hover.
*   **HoverCardContent**: The content that appears in the popover.

## Usage

\`\`\`tsx
import { HoverCard, HoverCardTrigger, HoverCardContent, Link, Text } from './src/components';

<p>
    Hover over the <HoverCard>
        <HoverCardTrigger>
            <Link href="#">@username</Link>
        </HoverCardTrigger>
        <HoverCardContent>
            <Text>User profile information goes here.</Text>
        </HoverCardContent>
    </HoverCard> profile link.
</p>
\`\`\``;

const sourceCode = `import React, { useState, useRef } from 'react';
import { Popper, PopperContent, PopperTrigger } from '../Popper/Popper';
import { PopoverContent as StyledContent } from '../Popover/Popover';

interface HoverCardContextType {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HoverCard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const handleOpen = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleClose = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 100); // Small delay to allow moving mouse into card
    };
    
    const contextValue = { isOpen, setIsOpen, handleOpen, handleClose };

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                {children}
            </div>
        </Popper>
    );
};

export const HoverCardTrigger: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <PopperTrigger>{children}</PopperTrigger>;
};

export const HoverCardContent: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
    return <StyledContent className={className}>{children}</StyledContent>;
};`;

export const HoverCardDemo = () => (
    <DemoSection
        title="Hover Card"
        description="A popover that appears when a user hovers over a trigger element."
        livePreview={
            <Text>
                Hover over the{' '}
                <HoverCard>
                    <HoverCardTrigger>
                        <Link href="#" onClick={(e) => e.preventDefault()}>@zwhe</Link>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <Stack direction="row" gap="1rem" align="center">
                           <Avatar fallback="ZW" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                           <Stack gap="0.25rem">
                               <Text weight="600">Zwhe UI</Text>
                               <Text size="14px" color="textSecondary">The component library you're looking at.</Text>
                           </Stack>
                        </Stack>
                    </HoverCardContent>
                </HoverCard>
                {' '}profile link.
            </Text>
        }
        propControls={
            <Text color="textSecondary">This is an interactive demo. No props are available to configure.</Text>
        }
        documentation={documentation}
        fullSourceCode={sourceCode}
    />
);