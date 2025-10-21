# Recipe: Building a Chat Interface

This guide demonstrates how to build a simple but elegant chat interface using ZwheUI components. We will use `Layout`, `Stack`, `Message`, `Avatar`, and `Input` to create the structure and appearance of a chat window.

## Final Result

We aim to create a chat view with:
-   A header with the conversation partner's name.
-   A scrollable area for messages.
-   An input field at the bottom to type new messages.

## 1. The Main Layout

We'll use a `Layout` component to structure the chat window with a header, content (the message list), and footer (the input area).

```tsx
import { Layout, Card } from 'zwheui';

const ChatWindow = () => {
  return (
    <Card style={{ width: '400px', height: '600px', display: 'flex' }}>
      <Layout>
        <Layout.Header>
          {/* Header content goes here */}
        </Layout.Header>
        <Layout.Content>
          {/* Messages go here */}
        </Layout.Content>
        <Layout.Footer>
          {/* Message input goes here */}
        </Layout.Footer>
      </Layout>
    </Card>
  );
};
```
*Note: We wrap the `Layout` in a `Card` to give it a container and set a fixed size for this example.*

## 2. The Header

The header will contain the user's avatar and name. We'll use `Flex`, `Avatar`, and `Text`.

```tsx
import { Flex, Avatar, Text, Stack } from 'zwheui';

const ChatHeader = () => (
  <Flex align="center" gap="1rem" style={{ padding: '1rem' }}>
    <Avatar src="https://i.pravatar.cc/150?u=jane" fallback="JD" />
    <Stack gap="0">
      <Text weight="600">Jane Doe</Text>
      <Text size="sm" color="textSecondary">Online</Text>
    </Stack>
  </Flex>
);
```

## 3. The Message List

The main content area will be a scrollable `Stack` of `Message` components.

```tsx
import { Stack, Message } from 'zwheui';

const MessageList = () => (
  <Stack gap="1.5rem" style={{ padding: '1rem', overflowY: 'auto', flex: 1 }}>
    <Message
      author="Jane Doe"
      avatarFallback="JD"
      avatarSrc="https://i.pravatar.cc/150?u=jane"
      timestamp="5 minutes ago"
    >
      Hey, did you get the latest designs?
    </Message>
    <Message
      author="You"
      avatarFallback="Y"
      timestamp="2 minutes ago"
      isMe={true}
    >
      Just saw them. They look great!
    </Message>
    {/* ... more messages */}
  </Stack>
);
```

## 4. The Message Input

The footer will contain a `TextInput` for composing messages and a `Button` to send.

```tsx
import { Flex, TextInput, IconButton } from 'zwheui';
import { SendIcon } from 'zwheui/icons';

const MessageInput = () => (
  <Flex align="center" gap="0.5rem" style={{ padding: '0.5rem 1rem' }}>
    <TextInput placeholder="Type a message..." style={{ flex: 1 }} />
    <IconButton icon={SendIcon} aria-label="Send message" />
  </Flex>
);
```

## 5. Putting It All Together

Now, let's assemble all the pieces into the final component.

```tsx
import { Layout, Card, Flex, Avatar, Stack, Text, Message, TextInput, IconButton } from 'zwheui';
import { SendIcon } from 'zwheui/icons';

// Sub-components from above
const ChatHeader = () => { /* ... */ };
const MessageList = () => { /* ... */ };
const MessageInput = () => { /* ... */ };

export const ChatInterface = () => {
  return (
    <Card style={{ width: '400px', height: '600px', display: 'flex' }}>
      <Layout>
        <Layout.Header style={{ borderBottom: '1px solid var(--z-border)' }}>
          <ChatHeader />
        </Layout.Header>
        <Layout.Content>
          <MessageList />
        </Layout.Content>
        <Layout.Footer style={{ borderTop: '1px solid var(--z-border)' }}>
          <MessageInput />
        </Layout.Footer>
      </Layout>
    </Card>
  );
};
```

This recipe shows how easily you can create a realistic and common UI pattern by composing ZwheUI's flexible components.
