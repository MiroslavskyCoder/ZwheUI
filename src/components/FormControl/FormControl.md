# FormControl

A set of components that provides context to form inputs for building accessible and structured forms.

## Components

*   **FormControl**: The main wrapper that provides context (`id`, `isInvalid`, `isDisabled`) to its children.
*   **FormLabel**: A `<label>` that is automatically associated with the input via the context `id`.
*   **FormHelperText**: Text displayed below the input to provide additional guidance.
*   **FormErrorMessage**: An error message that is only rendered when `isInvalid` is true on `FormControl`.

## Usage

```tsx
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, TextInput } from './src/components';

<FormControl isInvalid={isError}>
  <FormLabel>Email Address</FormLabel>
  <TextInput type="email" />
  <FormHelperText>We'll never share your email.</FormHelperText>
  <FormErrorMessage>Your email is invalid.</FormErrorMessage>
</FormControl>
```
