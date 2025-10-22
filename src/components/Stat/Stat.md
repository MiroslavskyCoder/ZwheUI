# Stat

A component for displaying a single statistic, typically including a label, a value, and optional contextual information like a trend indicator or help text.

## Props

*   `label` (string, required): The title or label for the statistic.
*   `value` (string, required): The main value of the statistic.
*   `icon` (React.ElementType, optional): An icon to display in the header of the stat card.
*   `helpText` (string, optional): Additional descriptive text, displayed at the bottom.
*   `indicator` (enum: 'up' | 'down', optional): Displays an up or down arrow to indicate a trend.
*   `change` (string, optional): Text to display next to the trend indicator (e.g., "+5.2%").

## Usage

```tsx
import { Stat } from './src/components';
import { UsersIcon } from './src/icons';

<Stat
  label="Total Users"
  value="12,403"
  icon={UsersIcon}
  indicator="up"
  change="+5.2%"
  helpText="since last month"
/>
```