# Recipe: Building a Settings Page

This guide demonstrates how to construct a typical user settings page using ZwheUI components. We'll combine layout components, form controls, and data display elements to create a clear and functional interface.

## Final Result

Our goal is a settings page with:
-   A clear page header.
-   Sections for different settings (e.g., Profile, Notifications).
-   Form inputs for editing information.
-   Action buttons to save or cancel changes.

## 1. The Page Structure

We'll start with a `PageHeader` to give the page context and a `Stack` to organize the content vertically.

```tsx
import { PageHeader, Stack, Button } from 'zwheui';

const SettingsPage = () => {
  const breadcrumbs = [
    { label: 'Home', href: '#' },
    { label: 'Account' },
    { label: 'Settings' }
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Stack gap="2rem">
        <PageHeader
          title="Account Settings"
          subtitle="Manage your profile, preferences, and notification settings."
          breadcrumbs={breadcrumbs}
          actions={
            <Stack direction="row" gap="1rem">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </Stack>
          }
        />
        {/* Settings sections will go here */}
      </Stack>
    </div>
  );
};
```

## 2. Creating a Settings Section with `Card`

We can use the `Card` component to group related settings into logical sections. The `FormControl` and `Input` components are perfect for the fields.

```tsx
import { Card, FormControl, FormLabel, FormHelperText, Input, Stack } from 'zwheui';

const ProfileSettings = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Profile</Card.Title>
        <Card.Subtitle>This information will be displayed publicly.</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Stack gap="1.5rem">
          <FormControl>
            <FormLabel>Username</FormLabel>
            <Input defaultValue="janedoe" />
            <FormHelperText>Your unique username.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>Bio</FormLabel>
            <Textarea defaultValue="Frontend Developer at ZwheUI." rows={3} />
          </FormControl>
        </Stack>
      </Card.Body>
    </Card>
  );
};
```

## 3. Creating a Section with Toggles

For notification settings, `Switch` components are a great choice. We'll again use a `Card` to group them.

```tsx
import { Card, Stack, Flex, Switch, Text } from 'zwheui';

const NotificationSettings = () => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Subtitle>We'll only notify you about important events.</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Stack gap="1.5rem">
          <Flex justify="space-between" align="center">
            <Stack gap="0">
              <Text>Comments</Text>
              <Text size="sm" color="textSecondary">Get notified when someone posts a comment on your articles.</Text>
            </Stack>
            <Switch defaultChecked />
          </Flex>
          <Flex justify="space-between" align="center">
            <Stack gap="0">
              <Text>Mentions</Text>
              <Text size="sm" color="textSecondary">Get notified when another user mentions you.</Text>
            </Stack>
            <Switch />
          </Flex>
        </Stack>
      </Card.Body>
    </Card>
  );
};
```

## 4. Putting It All Together

Now we'll place our settings sections inside the main `SettingsPage` component.

```tsx
// ... imports

const ProfileSettings = () => { /* ... */ };
const NotificationSettings = () => { /* ... */ };

const SettingsPage = () => {
  const breadcrumbs = [ /* ... */ ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <Stack gap="2rem">
        <PageHeader
          title="Account Settings"
          subtitle="Manage your profile, preferences, and notification settings."
          breadcrumbs={breadcrumbs}
          actions={
            <Stack direction="row" gap="1rem">
              <Button variant="secondary">Cancel</Button>
              <Button variant="primary">Save Changes</Button>
            </Stack>
          }
        />
        
        <ProfileSettings />
        <NotificationSettings />

      </Stack>
    </div>
  );
};
```

This recipe demonstrates how to build a clean, well-structured settings page by composing various ZwheUI components. The use of `Card` for sectioning and `FormControl` for inputs creates a consistent and accessible user experience.
