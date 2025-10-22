import React from 'react';
import { Message, Stack, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Message

A component designed for chat and messaging interfaces. It displays a message bubble with an avatar, author name, and timestamp.

## Props
*   \`author\` (string, required)
*   \`avatarFallback\` (string, required)
*   \`avatarSrc\` (string, optional)
*   \`timestamp\` (string, required)
*   \`isMe\` (boolean, optional): If true, aligns the message to the right.
*   \`children\` (React.ReactNode, required): The message content.
`;

const sourceCode = `import React from 'react';
import { useStyles, useTheme } from '../../core';
import { Stack, Text, Avatar } from '..';

interface MessageProps { /* ... */ }

export const Message: React.FC<MessageProps> = (props) => {
    // ... logic for styling based on 'isMe' prop
    return (
        <div className={containerClass}>
            <Avatar />
            <Stack>
                {/* Author & Timestamp */}
                <div className={messageBubbleClass}>
                    {children}
                </div>
            </Stack>
        </div>
    );
};`;

export const MessageDemo = () => {
    return (
        <DemoSection
            title="Message"
            description="A component for displaying chat messages."
            livePreview={
                <Stack gap="1.5rem">
                    <Message
                        author="Jane Doe"
                        avatarFallback="JD"
                        avatarSrc="https://i.pravatar.cc/150?u=a042581f4e29026704e"
                        timestamp="5 minutes ago"
                    >
                        Hey, did you get the latest designs for the ZwheUI project? I think they look great!
                    </Message>
                    <Message
                        author="You"
                        avatarFallback="Y"
                        timestamp="2 minutes ago"
                        isMe={true}
                    >
                        Just saw them. The new data table component is amazing.
                    </Message>
                </Stack>
            }
            propControls={<Text color="textSecondary">This is a presentational demo. See documentation for prop details.</Text>}
            documentation={documentation}
            fullSourceCode={sourceCode}
        />
    );
};