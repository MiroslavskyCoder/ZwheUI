# Navigation Patterns

Effective navigation is crucial for a good user experience. ZwheUI provides a suite of components to build various navigation patterns, from global site navigation to contextual, in-page navigation.

## 1. Main Application Navigation

For primary, site-wide navigation, you typically use either a horizontal `Header` with a `Nav` component or a vertical `Sidebar`.

### Horizontal Navigation (`Nav`)

The `Nav` component is designed for creating horizontal navigation bars, often placed inside a `Header`.

```tsx
import { Header, Nav } from 'zwheui';
import { useState } from 'react';

const AppHeader = () => {
  const [active, setActive] = useState('dashboard');

  return (
    <Header>
      <Header.Left>
        <Nav>
          <Nav.List>
            <Nav.Item href="#" isActive={active === 'dashboard'} onClick={() => setActive('dashboard')}>
              Dashboard
            </Nav.Item>
            <Nav.Item href="#" isActive={active === 'projects'} onClick={() => setActive('projects')}>
              Projects
            </Nav.Item>
          </Nav.List>
        </Nav>
      </Header.Left>
      <Header.Right>
        {/* ... user menu, etc. ... */}
      </Header.Right>
    </Header>
  );
};
```

### Vertical Navigation (`Sidebar`)

The `Sidebar` is ideal for applications with many navigation items, such as a dashboard or admin panel. It's typically used with the `Layout` component's `hasSider` prop.

```tsx
import { Layout, Sidebar, SidebarNav, SidebarNavItem, Icon } from 'zwheui';
import { HomeIcon, SettingsIcon } from 'zwheui/icons';

const AppLayout = ({ children }) => (
  <Layout hasSider>
    <Sidebar width="250px">
      <SidebarNav title="Main">
        <SidebarNavItem href="#" icon={HomeIcon} isActive>
          Dashboard
        </SidebarNavItem>
        {/* ... more items ... */}
      </SidebarNav>
    </Sidebar>
    <Layout>
      <Layout.Content>{children}</Layout.Content>
    </Layout>
  </Layout>
);
```

## 2. In-Page / Contextual Navigation

For navigating between different views within the same page or section, `Tabs` are an excellent choice.

### Tabs

The `Tabs` component allows you to organize content into distinct sections that can be switched on the client side without a page reload.

```tsx
import { Tabs, TabList, Tab, TabPanels, TabPanel } from 'zwheui';

const SettingsPage = () => (
  <Tabs defaultValue="profile">
    <TabList>
      <Tab value="profile">Profile</Tab>
      <Tab value="account">Account</Tab>
      <Tab value="notifications">Notifications</Tab>
    </TabList>
    <TabPanels>
      <TabPanel value="profile">{/* ... profile form ... */}</TabPanel>
      <TabPanel value="account">{/* ... account settings ... */}</TabPanel>
      <TabPanel value="notifications">{/* ... notification toggles ... */}</TabPanel>
    </TabPanels>
  </Tabs>
);
```

## 3. Hierarchical Navigation (`Breadcrumbs`)

`Breadcrumbs` provide users with a sense of their location within the application's hierarchy, allowing them to navigate back to parent pages. They are often used in conjunction with a `PageHeader`.

```tsx
import { PageHeader } from 'zwheui';

const breadcrumbs = [
  { label: 'Projects', href: '/projects' },
  { label: 'ZwheUI Project', href: '/projects/zwheui' },
  { label: 'Tasks' }
];

<PageHeader
  title="Task List"
  breadcrumbs={breadcrumbs}
/>
```

## 4. Paginated Content (`Pagination`)

When displaying large sets of data, the `Pagination` component provides controls to navigate between pages. It's a key feature of the `DataTable` but can also be used standalone.

```tsx
import { Pagination, Stack, Text } from 'zwheui';
import { useState } from 'react';

const PaginatedList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  
  const currentItems = items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <Stack>
      <ul>
        {currentItems.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
      <Pagination 
        count={totalPages} 
        page={currentPage} 
        onChange={setCurrentPage} 
      />
    </Stack>
  );
};
```
