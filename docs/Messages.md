# Message

A component designed for chat and messaging interfaces. It displays a message bubble with an avatar, author name, and timestamp, and can be styled for either incoming or outgoing messages.

## Props

*   `author` (string, required): The name of the message sender.
*   `avatarFallback` (string, required): Fallback text for the avatar (e.g., initials), displayed if `avatarSrc` is not provided or fails to load.
*   `avatarSrc` (string, optional): The URL for the sender's avatar image.
*   `timestamp` (string, required): A string representing when the message was sent (e.g., "5 minutes ago", "10:32 AM").
*   `isMe` (boolean, optional): If `true`, the message is styled as an outgoing message (sent by the current user), typically aligned to the right. Defaults to `false`.
*   `children` (React.ReactNode, required): The content of the message itself. This can be simple text or other React components.

## Basic Usage

You can use the `Message` component to display individual chat entries. The `isMe` prop controls the alignment and styling.

```tsx
import { Message, Stack } from 'zwheui';

<Stack gap="1.5rem">
    <Message
        author="Jane Doe"
        avatarFallback="JD"
        avatarSrc="https://i.pravatar.cc/150?u=jane"
        timestamp="5 minutes ago"
    >
        This is an incoming message.
    </Message>

    <Message
        author="You"
        avatarFallback="Y"
        timestamp="Just now"
        isMe={true}
    >
        This is an outgoing message.
    </Message>
</Stack>
```

## Advanced Example: Chat with an AI

The `Message` component is flexible. Its `children` can be any React node, allowing you to render rich content like formatted code blocks using the `Markdown` component. This is perfect for building interfaces for AI assistants like GPT-4, DeepSeek, or other models.

```tsx
import { Message, Stack, Markdown } from 'zwheui';

const ChatLog = () => (
    <Stack gap="1.5rem">
        <Message
            author="You"
            avatarFallback="U"
            timestamp="10:45 AM"
            isMe={true}
        >
            Can you give me a simple React component example using hooks?
        </Message>

        <Message
            author="AI Assistant"
            avatarFallback="AI"
            timestamp="10:45 AM"
        >
            <Stack gap="0.5rem">
                <Text>Of course! Here is a simple counter component using the `useState` hook:</Text>
                <Markdown>
                {`
\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
                `}
                </Markdown>
            </Stack>
        </Message>
    </Stack>
);
```
This example demonstrates how you can create a more dynamic and informative chat experience by composing the `Message` component with other elements from the ZwheUI library.
