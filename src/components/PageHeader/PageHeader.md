# PageHeader

A component for creating a standardized header for a page or content section. It typically includes a title, subtitle, breadcrumbs, and a set of actions.

## Props

*   `title` (string, required): The main title for the page.
*   `subtitle` (string, optional): A short description displayed below the title.
*   `breadcrumbs` (array of `BreadcrumbItem`, optional): An array of items to be passed to the `Breadcrumbs` component.
*   `actions` (React.ReactNode, optional): A set of action components, typically `Button`s, displayed on the right side.

## Usage

```tsx
import { PageHeader, Button } from './src/components';

const breadcrumbItems = [
    { label: 'Projects', href: '/projects' },
    { label: 'ZwheUI' },
];

<PageHeader
  title="ZwheUI Project"
  subtitle="Manage your component library settings."
  breadcrumbs={breadcrumbItems}
  actions={
    <Button variant="primary">New Task</Button>
  }
/>
```
