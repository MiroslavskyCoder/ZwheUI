# Customizing Components

ZwheUI is designed to be flexible, and while the `ThemeProvider` is the primary way to customize the look and feel of your application, there are times when you need to apply specific, one-off styles to a single instance of a component.

## 1. Using `className` and `style` Props

The simplest way to customize a component is by using the standard `className` and `style` props, which are supported by all ZwheUI components.

### `style` Prop

For simple, dynamic, one-off styles, the `style` prop is a quick solution.

```tsx
import { Card, Text } from 'zwheui';

<Card style={{ maxWidth: '400px', boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)' }}>
  <Text>This card has a custom max-width and a red box-shadow.</Text>
</Card>
```

### `className` Prop

If you are using a global CSS file or another styling solution, you can pass a `className` to any component. The class will be appended to the component's existing classes.

```css
/* in your global stylesheet */
.special-button {
  border-radius: 0;
  text-transform: uppercase;
}
```

```tsx
import { Button } from 'zwheui';

<Button className="special-button">
  Custom Styled Button
</Button>
```

## 2. Overriding Styles with `useStyles`

For more complex overrides that need to be theme-aware or require pseudo-selectors, you can use the same `useStyles` hook that the library uses internally. By combining the component's default class with your own generated class, you can create highly specific overrides.

Let's say you want to create a special "warning" button variant that isn't in the theme.

```tsx
import { Button, useStyles, useTheme } from 'zwheui';

const WarningButton = (props) => {
  const { theme } = useTheme();
  const createStyle = useStyles('warning-button-override');

  // Define the override styles
  const warningClass = createStyle({
    backgroundColor: theme.colors.accent,
    color: '#fff',
    '&:hover:not(:disabled)': {
      filter: 'brightness(1.1)',
      boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)',
    },
    '&:focus-visible': {
        boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.accent}`,
    },
  });
  
  // The custom class is passed to the component
  return <Button className={warningClass} {...props} />;
};

// Usage
<WarningButton>Confirm Deletion</WarningButton>
```

Because your custom class is applied directly to the component, its CSS rules will be applied. Depending on CSS specificity, you may need to use more specific selectors if the base styles are not being overridden.

## 3. Creating New Components

The most robust way to create a custom variant of a component is to create a new component that wraps a ZwheUI primitive. This is the recommended approach for creating reusable, custom components for your application's design system.

This involves composing ZwheUI's layout primitives (`Box`, `Flex`, `Stack`) and other components to build your new component from scratch.

```tsx
import { Flex, Icon, Text, useStyles, useTheme } from 'zwheui';

// Create a completely new Chip component
const Chip = ({ icon, children }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('chip');

    const chipClass = createStyle({
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.25rem 0.75rem',
        borderRadius: '999px',
        backgroundColor: theme.colors.secondary,
        color: theme.colors.text,
    });

    return (
        <div className={chipClass}>
            {icon && <Icon as={icon} size={16} />}
            <Text size="sm">{children}</Text>
        </div>
    );
};
```

This approach gives you full control over the structure, style, and logic of your custom components, while still leveraging ZwheUI's theme and primitives.
