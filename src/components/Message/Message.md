# Message

A component designed for chat and messaging interfaces. It displays a message bubble with an avatar, author name, and timestamp.

## Props

*   `author` (string, required): The name of the message sender.
*   `avatarFallback` (string, required): Fallback text for the avatar (e.g., initials).
*   `avatarSrc` (string, optional): The URL for the sender's avatar image.
*   `timestamp` (string, required): A string representing when the message was sent.
*   `isMe` (boolean, optional): If true, the message is styled as an outgoing message (aligned to the right). Defaults to `false`.
*   `children` (React.ReactNode, required): The content of the message.

## Usage

```tsx
import { Message } from './src/components';

<Message
    author="Jane Doe"
    avatarFallback="JD"
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
```
