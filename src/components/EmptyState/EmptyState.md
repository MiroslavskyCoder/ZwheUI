# EmptyState

A component used to indicate that a list, table, or other content area is empty. It typically includes an icon, a message, and an optional call-to-action.

## Props

*   `icon` (React.ElementType, optional): An icon to display above the title.
*   `title` (string, required): The main heading for the empty state message.
*   `description` (string, required): A more detailed message explaining the empty state.
*   `action` (React.ReactNode, optional): A call-to-action element, typically a `Button`, to guide the user.

## Usage

```tsx
import { EmptyState, Button } from './src/components';
import { FolderIcon } from './src/icons';

<EmptyState
  icon={FolderIcon}
  title="No Projects Found"
  description="Get started by creating a new project."
  action={<Button>Create Project</Button>}
/>
```
