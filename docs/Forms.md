# Building Forms

ZwheUI provides a comprehensive set of components for building accessible, robust, and beautifully styled forms. This guide covers how to use these components together to create a seamless user experience.

## Core Form Components

-   **`FormControl`**: The foundation for an accessible form field. It groups a label, input, helper text, and error message, and provides context to link them together automatically.
-   **`FormLabel`**: An accessible label that connects to the form input via the `FormControl` context.
-   **`FormHelperText`**: Provides additional guidance or hints for the input.
-   **`FormErrorMessage`**: Displays a validation error message only when the `FormControl`'s `isInvalid` prop is true.

## Input Components

ZwheUI offers a wide range of input components for different data types:

-   **`Input`**: A wrapper around `TextInput` that includes a `label` and `error` prop for convenience.
-   **`TextInput`**: The base single-line text input.
-   **`Textarea`**: A multi-line text input.
-   **`Checkbox`**: For true/false values.
-   **`RadioGroup` & `RadioGroupItem`**: For selecting one option from a list.
-   **`Switch`**: A toggle-style alternative to a checkbox.
-   **`Select`**: A custom-styled dropdown for single-option selection.
-   **`Combobox`**: A combination of a text input and a dropdown, allowing users to search and select.
-   **`Slider`**: For selecting a value from a range.
-   **`NumberInput`**: A text input with stepper controls for numerical values.
-   **`PinInput`**: For entering codes or PINs.
-   **`FileUpload`**: For file selection via click or drag-and-drop.
-   **`DatePicker`**: For selecting a date from a calendar.
-   **`ColorPicker`**: For selecting a color.
-   **`Rating`**: For star-based rating input.

## Building an Accessible Form

The `FormControl` component is key to building accessible forms. It automatically generates a unique ID and passes it to the `FormLabel` and the input, ensuring they are correctly associated for screen readers.

```tsx
import { 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    FormErrorMessage,
    Input 
} from 'zwheui';

function EmailField({ isError }) {
  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email Address</FormLabel>
      <Input type="email" placeholder="you@example.com" />
      <FormHelperText>We'll never share your email.</FormHelperText>
      <FormErrorMessage>Your email address is invalid.</FormErrorMessage>
    </FormControl>
  );
}
```

## Handling State and Validation

ZwheUI components are controlled components, meaning their state (like the value of an `Input`) is managed by your React component's state.

Here's a simple example of a login form with basic state management and validation.

```tsx
import { useState } from 'react';
import { Stack, FormControl, FormLabel, Input, Button, FormErrorMessage } from 'zwheui';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors

        if (!email.includes('@')) {
            setError('Please enter a valid email address.');
            return;
        }

        if (password.length < 8) {
            setError('Password must be at least 8 characters long.');
            return;
        }

        console.log('Submitting:', { email, password });
        // ... submit to API
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="1.5rem">
                <FormControl isInvalid={!!error}>
                    <FormLabel>Email</FormLabel>
                    <Input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </FormControl>

                <FormControl isInvalid={!!error}>
                    <FormLabel>Password</FormLabel>
                    <Input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    {/* Display the single error message at the bottom */}
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>

                <Button type="submit" variant="primary">
                    Log In
                </Button>
            </Stack>
        </form>
    );
};
```

For more complex forms, consider using a form management library like **React Hook Form** or **Formik**. ZwheUI's input components are fully compatible and can be easily integrated.
