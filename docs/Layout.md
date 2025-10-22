# Layout Primitives

ZwheUI provides a set of powerful and flexible layout primitives built on flexbox and grid. These components are the foundation for building any layout in your application, from simple arrangements to complex, responsive pages. They are designed to be highly composable and customizable.

## Box

The `Box` component is the most fundamental layout primitive. It's a polymorphic component that renders a `div` by default but can be changed to any other HTML element using the `as` prop. It's a blank slate for you to apply styles to and serves as the base for other layout components.

### Usage

```tsx
import { Box, Text } from 'zwheui';

// Renders a div
<Box style={{ padding: '1rem', border: '1px solid gray' }}>
  This is a box.
</Box>

// Renders a semantic <section> element
<Box as="section" style={{ marginTop: '2rem' }}>
  <Text as="h2">A New Section</Text>
</Box>
```

## Flex

`Flex` extends `Box` and adds convenient props for controlling `display: flex` layouts. It's your go-to component for one-dimensional layouts.

### Props

-   `direction`: Sets `flex-direction` (e.g., `'row'`, `'column'`).
-   `align`: Sets `align-items` (e.g., `'center'`, `'flex-start'`).
-   `justify`: Sets `justify-content` (e.g., `'space-between'`, `'center'`).
-   `wrap`: Sets `flex-wrap` (e.g., `'wrap'`, `'nowrap'`).
-   `gap`: Sets the `gap` between flex items.

### Usage

```tsx
import { Flex, Avatar, Text } from 'zwheui';

<Flex gap="1rem" align="center">
  <Avatar fallback="A" />
  <Text>User A</Text>
</Flex>
```

## Center

`Center` is a specialized `Flex` component that centers its children both horizontally and vertically. It's a shortcut for `<Flex align="center" justify="center">`.

### Usage

```tsx
import { Center, Spinner } from 'zwheui';

// Useful for loading states or hero sections
<Center style={{ height: '200px', background: 'rgba(0,0,0,0.2)' }}>
  <Spinner />
</Center>
```

## Stack

`Stack` is another specialized `Flex` component designed for stacking items either vertically (`column`, default) or horizontally (`row`) with a consistent `gap`. It's a highly readable shortcut for a very common UI pattern.

### Props

-   `direction`: `'row'` or `'column'` (default).
-   `gap`: The space between items.
-   Other `Flex` props like `align` and `justify` are also supported.

### Usage

```tsx
import { Stack, Input, Button } from 'zwheui';

// A vertical form layout
<Stack gap="0.5rem">
  <Input label="Name" />
  <Input label="Email" />
  <Button>Submit</Button>
</Stack>
```

## Grid

The `Grid` component provides a powerful way to create two-dimensional, grid-based layouts. It can create a responsive grid that automatically wraps items based on a `minItemWidth`, or a grid with a fixed number of `columns`. It also supports spanning with the `Grid.Item` sub-component.

### Props

-   `columns` (number): Creates a grid with a fixed number of columns.
-   `minItemWidth` (string): Creates a responsive grid where columns are added as space allows, with each column being at least this wide.
-   `gap`: The space between grid items.

### Usage

```tsx
import { Grid, Card, Text } from 'zwheui';

// A responsive grid of cards
<Grid minItemWidth="250px" gap="1.5rem">
  <Card><Text>Item 1</Text></Card>
  <Card><Text>Item 2</Text></Card>
  <Card><Text>Item 3</Text></Card>
</Grid>

// A fixed 4-column grid with a spanning item
<Grid columns={4} gap="1rem">
  <Grid.Item colSpan={2}><Card><Text>Spans 2 columns</Text></Card></Grid.Item>
  <Grid.Item><Card><Text>Item B</Text></Card></Grid.Item>
  <Grid.Item><Card><Text>Item C</Text></Card></Grid.Item>
</Grid>
```
