# Radio Group

A set of checkable buttons where only one option can be selected at a time.

## Components

*   **RadioGroup**: The main wrapper that manages state and provides context.
*   **RadioGroupItem**: A single radio button option with a label.

## Props

### RadioGroup
*   `value` (string, required): The `value` of the currently selected `RadioGroupItem`.
*   `onChange` (function, required): A callback function triggered when the selection changes.
*   `name` (string, required): A name for the group, passed to the underlying radio inputs for accessibility.
*   `label` (string, optional): An accessible label for the entire group.

### RadioGroupItem
*   `value` (string, required): A unique value for this option.
*   `label` (string, required): The text label for this option.

## Usage

```tsx
import { RadioGroup, RadioGroupItem } from './src/components';
import { useState } from 'react';

const [plan, setPlan] = useState('free');

<RadioGroup
  value={plan}
  onChange={setPlan}
  name="subscription-plan"
  label="Select a Plan"
>
    <RadioGroupItem value="free" label="Free Tier" />
    <RadioGroupItem value="pro" label="Pro Tier" />
</RadioGroup>
```
