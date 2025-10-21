# Recipe: Building a Dashboard

This guide will walk you through building a responsive dashboard layout using ZwheUI components. We'll combine layout primitives, data display components, and charts to create a common application UI.

## Final Result

Our goal is to create a dashboard with:
-   A main sidebar for navigation.
-   A header with the page title and user actions.
-   A main content area with stat cards and charts.

## 1. The Main Layout Structure

We'll use the `Layout` compound component to create the main structure with a sidebar.

```tsx
import { Layout, Sidebar, Header, Footer } from 'zwheui';

const Dashboard = () => {
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <Sidebar style={{ width: '250px' }}>
        {/* Sidebar content goes here */}
      </Sidebar>
      <Layout>
        <Header>
          {/* Header content goes here */}
        </Header>
        <Layout.Content>
          {/* Main content goes here */}
        </Layout.Content>
        <Footer>
          {/* Footer content goes here */}
        </Footer>
      </Layout>
    </Layout>
  );
};
```

## 2. Populating the Sidebar

Let's add navigation to the `Sidebar` using `SidebarNav` and `SidebarNavItem`.

```tsx
import { Sidebar, SidebarNav, SidebarNavItem, Icon, Text } from 'zwheui';
import { HomeIcon, SettingsIcon, UsersIcon } from 'zwheui/icons';

const AppSidebar = () => (
  <Sidebar width="250px">
    <Stack gap="2rem">
      <Text as="h1" size="1.5rem" weight="bold">Dashboard</Text>
      <SidebarNav title="Menu">
        <SidebarNavItem href="#" isActive>
          <Icon as={HomeIcon} /> Dashboard
        </SidebarNavItem>
        <SidebarNavItem href="#">
          <Icon as={UsersIcon} /> Users
        </SidebarNavItem>
      </SidebarNav>
      <SidebarNav title="Account">
        <SidebarNavItem href="#">
          <Icon as={SettingsIcon} /> Settings
        </SidebarNavItem>
      </SidebarNav>
    </Stack>
  </Sidebar>
);
```

## 3. Building the Header

The `PageHeader` component is perfect for creating a consistent header for our content area.

```tsx
import { PageHeader, Button } from 'zwheui';

const breadcrumbs = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard' }
];

const AppHeader = () => (
    <PageHeader
      title="Analytics Dashboard"
      subtitle="Welcome back, Admin!"
      breadcrumbs={breadcrumbs}
      actions={<Button variant="primary">New Report</Button>}
    />
);
```

## 4. Creating the Content Area

The main content area will display key statistics and charts. We'll use `Grid`, `Stat`, and `Charts` components.

```tsx
import { Grid, Stat, Charts, ChartAxis, ChartLine, ChartArea, Card, Text } from 'zwheui';
import { UsersIcon, CoinsIcon } from 'zwheui/icons';

const chartData = [
    // ... your chart data array
];

const AppContent = () => (
  <Stack gap="1.5rem" style={{ padding: '2rem' }}>
    <AppHeader />
    
    <Grid minItemWidth="250px" gap="1.5rem">
      <Stat 
        label="Total Users" 
        value="12,403" 
        icon={UsersIcon} 
        indicator="up" 
        change="+5.2%" 
      />
      <Stat 
        label="Revenue" 
        value="$4,805" 
        icon={CoinsIcon} 
        indicator="down" 
        change="-1.8%" 
      />
      {/* ... more Stat components ... */}
    </Grid>

    <Card>
      <Card.Header>
        <Card.Title>User Growth</Card.Title>
      </Card.Header>
      <Card.Body>
        <Charts data={chartData} xAccessor={d => d.month} yAccessor={d => d.users} style={{ height: '300px' }}>
          <ChartAxis dimension="x" />
          <ChartAxis dimension="y" />
          <ChartArea />
          <ChartLine />
        </Charts>
      </Card.Body>
    </Card>
  </Stack>
);
```

## 5. Putting It All Together

Now we combine all the pieces into our final dashboard layout.

```tsx
import { Layout, Sidebar, Header, Footer /* ... and all other components ... */ } from 'zwheui';

const DashboardPage = () => {
  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <AppSidebar />
      <Layout>
        {/* The Header component from Layout provides the container */}
        <Layout.Header style={{ padding: 0, border: 'none' }}>
           {/* We don't need the PageHeader's Divider here */}
        </Layout.Header>
        <Layout.Content style={{ overflowY: 'auto' }}>
          <AppContent />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
```
This recipe demonstrates how you can quickly assemble a complex, professional-looking dashboard by composing ZwheUI's layout and data display components.
