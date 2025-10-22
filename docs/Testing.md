# Testing

Testing is a critical part of building robust and reliable applications. ZwheUI is designed to be highly testable, and its components follow accessibility best practices that make them easy to query and interact with in a testing environment. This guide provides best practices for testing your components and applications built with ZwheUI.

We recommend using **[Jest](https://jestjs.io/)** as a test runner and **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** for rendering and interacting with components in a Node.js environment.

## Guiding Principles

-   **Test User Behavior, Not Implementation Details**: React Testing Library encourages you to write tests that resemble how a user interacts with your application. Instead of querying for CSS classes or component state, query for elements by their accessible role, label, or text content.
-   **Accessibility is Key**: ZwheUI components are built with ARIA roles and attributes. Use these to your advantage. For example, query a button by its role (`getByRole('button', { name: /Submit/i })`) rather than a class name.
-   **Render with Providers**: Components that rely on ZwheUI's theme or other contexts (`useTheme`, `useToast`, etc.) must be wrapped in the corresponding providers (`ThemeProvider`, `ToastProvider`) during testing.

## Setting Up a Test Helper

To avoid repeatedly wrapping components in providers for every test, create a custom render function.

```tsx
// src/test-utils.tsx

import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider, ToastProvider, SnackbarProvider } from 'zwheui';

const AllTheProviders: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <SnackbarProvider>
          {children}
        </SnackbarProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything from React Testing Library
export * from '@testing-library/react';

// Override the default render method
export { customRender as render };
```

Now, in your test files, you can import `render` from this utility file instead of directly from `@testing-library/react`.

## Example: Testing a Form Component

Let's test a simple form that uses ZwheUI components.

```tsx
// src/components/LoginForm.tsx
import { useState } from 'react';
import { Stack, FormControl, FormLabel, Input, Button, FormErrorMessage } from 'zwheui';

export const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError('Please enter a valid email.');
            return;
        }
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack gap="1rem">
                <FormControl isInvalid={!!error}>
                    <FormLabel>Email Address</FormLabel>
                    <Input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                {/* ... password field ... */}
                <Button type="submit">Log In</Button>
            </Stack>
        </form>
    );
};
```

### Writing the Test

```tsx
// src/components/LoginForm.test.tsx
import { render, screen, fireEvent } from '../test-utils'; // Import from your helper!
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('submits the form with email and password', () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    // Query elements by their accessible labels
    const emailInput = screen.getByLabelText(/Email Address/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const submitButton = screen.getByRole('button', { name: /Log In/i });

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.click(submitButton);

    // Assert that the submit handler was called with the correct data
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'test@example.com',
      password: 'password123',
    });
  });

  it('shows an error message for an invalid email', () => {
    const handleSubmit = jest.fn();
    render(<LoginForm onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('button', { name: /Log In/i }));

    // Assert that an error message is displayed
    // `findByText` is async and waits for the element to appear
    const errorMessage = await screen.findByText(/Please enter a valid email/i);
    expect(errorMessage).toBeInTheDocument();

    // Assert that the submit handler was not called
    expect(handleSubmit).not.toHaveBeenCalled();
  });
});
```

By following these patterns, you can write effective tests that ensure your application behaves as expected from a user's perspective, while leveraging the accessible foundation provided by ZwheUI.
