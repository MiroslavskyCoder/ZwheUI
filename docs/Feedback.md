# Providing User Feedback

Clear and timely feedback is essential for a good user experience. ZwheUI provides a range of components to communicate different types of information to the user, from the status of an operation to loading states and important messages.

See also: [Notification Systems](./Notifications.md) for `Toast` and `Snackbar`.

## 1. Contextual Messages (`Alert`)

The `Alert` component is used to display important, contextual information directly within the page layout. It's not dismissible and should be used for persistent feedback related to the current view.

### When to Use
-   Form validation summaries.
-   Displaying success or error messages after a form submission.
-   Warning users about a specific state (e.g., "Your trial is ending soon.").

### Example
```tsx
import { Alert } from 'zwheui';

<Alert title="Update Available" variant="info">
  A new version of this application is available. Please refresh the page.
</Alert>
```

## 2. Interruptive Actions (`Modal` & `Dialog`)

When you need to interrupt the user's workflow to request a decision or present critical information, use a `Modal` or `Dialog`.

-   **`Modal`**: A generic, lower-level component that provides a "blank slate" canvas for any content.
-   **`Dialog`**: A higher-level component built on `Modal` that is specifically designed for prompts with a title, content, and action buttons.

### When to Use
-   Confirming a destructive action (e.g., "Are you sure you want to delete this?").
-   Displaying a form that must be completed before proceeding (e.g., creating a new item).
-   Showing critical, blocking information.

### Example
```tsx
import { Dialog, Button, Text } from 'zwheui';
import { useState } from 'react';

const DeleteButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    const actions = [
        { label: 'Cancel', onClick: () => setIsOpen(false), variant: 'secondary' },
        { label: 'Delete', onClick: () => { /* ... delete logic ... */ }, variant: 'accent' }
    ];

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Delete Item</Button>
            <Dialog 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                title="Confirm Deletion"
                actions={actions}
            >
                <Text>This action cannot be undone.</Text>
            </Dialog>
        </>
    );
};
```

## 3. Loading States

Indicating that content or data is loading is crucial for managing user expectations and preventing the UI from feeling frozen. ZwheUI provides several components for this.

-   **`Spinner` & `CircularProgress`**: Use these for indeterminate loading states where the duration is unknown. `Spinner` is a simple spinner, while `CircularProgress` can also show determinate progress. Place them inside buttons or in place of content that is loading.

-   **`LinearProgress`**: A horizontal progress bar, suitable for showing file upload progress or the progress of a multi-step operation.

-   **`Skeleton`**: The best choice for indicating page or component content loading. It provides a "placeholder" preview of the UI, which improves perceived performance compared to a spinner.

### Example: Skeleton Loading State

```tsx
import { Skeleton, Card, Stack } from 'zwheui';
import { useQuery } from 'your-data-fetching-library';

const UserProfile = () => {
    const { data, isLoading } = useQuery('user-profile');

    if (isLoading) {
        return (
            <Card>
                <Card.Body>
                    <Stack direction="row" gap="1rem" align="center">
                        <Skeleton variant="circle" width="48px" height="48px" />
                        <Stack gap="0.5rem" style={{ flex: 1 }}>
                            <Skeleton height="1.25rem" width="40%" />
                            <Skeleton height="1rem" width="60%" />
                        </Stack>
                    </Stack>
                </Card.Body>
            </Card>
        );
    }
    
    return <UserProfileCard user={data} />;
};
```
