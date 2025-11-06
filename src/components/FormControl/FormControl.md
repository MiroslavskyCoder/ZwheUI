# FormControl

A set of components that provides context to form inputs for building accessible and structured forms.

## Components

*   **FormControl**: The main wrapper that provides context (`id`, `isInvalid`, `isDisabled`) to its children.
*   **FormControl.Label**: A `<label>` that is automatically associated with the input via the context `id`.
*   **FormControl.HelperText**: Text displayed below the input to provide additional guidance.
*   **FormControl.Message**: A generic message for supplementary information.
*   **FormControl.ErrorMessage**: An error message that is only rendered when `isInvalid` is true on `FormControl`.

## Usage

```tsx
import { FormControl, TextInput } from './src/components';

<FormControl isInvalid={isError}>
  <FormControl.Label>Email Address</FormControl.Label>
  <TextInput type="email" />
  <FormControl.HelperText>We'll never share your email.</FormControl.HelperText>
  <FormControl.ErrorMessage>Your email is invalid.</FormControl.ErrorMessage>
</FormControl>
```
