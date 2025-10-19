# SignInPage

A customizable sign-in UI component that abstracts away the complexity of wiring together a secure authentication page for your application. It supports multiple authentication strategies including OAuth, credentials (email/password), and magic links.

## Props

*   `providers` (array of `AuthProvider`, required): An array of provider configurations that determines which sign-in methods are displayed.
*   `signIn` (function, required): An async function that handles the sign-in logic. It receives the `providerId` and optional `formData`. It should return a promise that resolves with an `AuthResponse` object or nothing.
*   `title` (string, optional): The main title of the sign-in form. Defaults to "Sign In".
*   `subtitle` (string, optional): A subtitle displayed below the main title.
*   `className` (string, optional): Custom CSS class for the container.

## Data Structures

### `AuthProvider`
Defines a sign-in method to be displayed.
```ts
interface AuthProvider {
    id: string; // e.g., 'google', 'github', 'credentials'
    name: string; // e.g., 'Google', 'GitHub'
    type: 'oauth' | 'credentials' | 'magiclink' | 'passkey';
}
```

### `AuthResponse`
The expected return type from the `signIn` function to display alerts.
```ts
interface AuthResponse {
  error?: string;  // Message to display in an error alert
  success?: string; // Message to display in a success alert
}
```

## Usage

### Example with Multiple Providers
```tsx
import { SignInPage, AuthProvider, AuthResponse } from './src/components';
import { useState } from 'react';

const providers: AuthProvider[] = [
    { id: 'google', name: 'Google', type: 'oauth' },
    { id: 'github', name: 'GitHub', type: 'oauth' },
    { id: 'credentials', name: 'Email & Password', type: 'credentials' },
    { id: 'magiclink', name: 'Email Magic Link', type: 'magiclink' }
];

const handleSignIn = async (providerId: string, formData?: Record<string, string>): Promise<AuthResponse | void> => {
    console.log('Attempting sign in with:', providerId, formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (providerId === 'credentials' && formData?.password !== 'password123') {
        return { error: 'Invalid password. Please try again.' };
    }
    
    if (providerId === 'magiclink') {
        return { success: 'Check your email for a magic link to sign in.' };
    }
    
    // On success, you would typically redirect the user.
    // For this demo, we'll just log it.
    console.log(`Successfully signed in with ${providerId}`);
};

<SignInPage 
    providers={providers}
    signIn={handleSignIn}
    title="Log in to ZwheUI"
    subtitle="to access your components"
/>
```