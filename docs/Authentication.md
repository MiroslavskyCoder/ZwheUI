# Authentication: SignInPage

ZwheUI includes a powerful and customizable `SignInPage` component that abstracts away the complexity of building a secure and beautiful authentication UI. Inspired by the flexibility of libraries like `Auth.js`, it provides a quick way to generate a ready-to-use authentication page with support for multiple strategies.

## Core Concepts

-   **Providers**: The `SignInPage` is driven by a `providers` array. Each object in the array defines an authentication method (e.g., Google OAuth, credentials form) and its configuration.
-   **`signIn` Function**: You provide a single `signIn` callback function that handles the logic for all providers. This function typically makes a request to your backend authentication API.
-   **Composable & Extensible**: The component is designed to handle common auth flows out of the box but can be extended for more complex scenarios.

## Usage with Multiple Providers

Here is an example of setting up a `SignInPage` with OAuth and a traditional credentials (email/password) form.

```tsx
import { SignInPage, AuthProviderConfig, AuthResponse } from 'zwheui/core/auth';

// 1. Define your providers
const providers: AuthProviderConfig[] = [
    { id: 'google', name: 'Google', type: 'oauth' },
    { id: 'github', name: 'GitHub', type: 'oauth' },
    { 
      id: 'credentials', 
      name: 'Email', 
      type: 'credentials',
      // Define the fields for the credentials form
      credentials: {
        email: { label: "Email Address", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      }
    }
];

// 2. Implement your signIn logic
const handleSignIn = async (providerId, formData): Promise<AuthResponse | void> => {
    console.log(`Attempting to sign in with ${providerId}...`, formData);
    
    // Simulate an API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (providerId === 'credentials' && formData?.password !== 'password123') {
        // Return an error object to display an alert
        return { error: "Invalid password. Please try again." };
    }
    
    // On success, you would typically redirect the user.
    // The component does not handle redirection.
    alert(`Successfully authenticated with ${providerId}!`);
};

// 3. Render the component
<SignInPage 
    providers={providers}
    signIn={handleSignIn}
    title="Log In to Your Account"
/>
```

## OAuth Providers

The `SignInPage` component has built-in support and styling for a wide range of popular OAuth providers. ZwheUI comes with over 80 providers preconfigured, inspired by `Auth.js`. We constantly test ~20 of the most popular ones.

To enable an OAuth provider, simply add it to your `providers` array with `type: 'oauth'`. The component will automatically render a branded button.

**Supported Providers Include:**
- Google
- GitHub
- Facebook
- Microsoft (Entra ID)
- Apple
- Auth0
- AWS Cognito
- GitLab
- Instagram
- LINE
- Okta
- FusionAuth
- Twitter
- TikTok
- LinkedIn
- Slack
- Spotify
- Twitch
- Discord
- Keycloak
- ...and many more.

## Credentials Provider

To render a traditional username/password form, add a provider with `type: 'credentials'`. The `credentials` property is an object where each key represents a form field. The `SignInPage` component uses this object to automatically generate the form with `Input` components.

```ts
const credentialsProvider = { 
  id: 'credentials', 
  name: 'Email', 
  type: 'credentials',
  credentials: {
    email: { label: "Email Address", type: "email", placeholder: "you@example.com" },
    password: { label: "Password", type: "password" }
  }
};
```

When the user submits this form, your `signIn` function will be called with the `providerId` ('credentials') and a `formData` object containing the user's input (e.g., `{ email: '...', password: '...' }`).

## Magic Link (Passwordless)

The component supports passwordless authentication via magic links. To enable this, you need a provider that can handle sending the verification email.

To render a magic link form, include a provider with `type: 'magiclink'`. The component will render a simple form with an email input.

```ts
const magicLinkProvider = {
    id: 'magiclink',
    name: 'Email Magic Link',
    type: 'magiclink'
};
```

When the form is submitted, your `signIn` function is called with the `providerId` and the `formData` (containing the email). Your backend should then send the email. You can return a `success` message in the `AuthResponse` to inform the user.

```ts
const handleSignIn = async (providerId, formData) => {
    if (providerId === 'magiclink') {
        // API call to your backend to send the email
        await sendVerificationRequest(formData.email);
        return { success: `Check your email at ${formData.email} for a magic link to sign in.` };
    }
    // ... other provider logic
};
```
For a full implementation, you'll need a backend service. Libraries like `Auth.js` provide robust solutions for this, including Nodemailer integration for sending emails.

## Passkey Authentication

The `SignInPage` component can be set up to use Passkeys (WebAuthn) for passwordless, secure authentication. Add a provider with `type: 'passkey'` to render a "Sign in with a Passkey" button.

```ts
const passkeyProvider = {
    id: 'passkey',
    name: 'Passkey',
    type: 'passkey'
};
```

The `onClick` handler for this button should trigger your passkey authentication flow, which involves communicating with your server to get challenges and using the `navigator.credentials` browser API.

## Displaying Alerts

Your `signIn` prop can return a promise that resolves with an `AuthResponse` object to display feedback to the user.

```ts
interface AuthResponse {
  error?: string;   // Renders a red error alert
  success?: string; // Renders a green success alert
}
```

This is the primary mechanism for communicating form validation errors or success messages (like for a magic link) back to the user.

## Integration with Authentication Libraries (e.g., Auth.js)

ZwheUI's `SignInPage` is unopinionated about your backend and can be integrated with any authentication library. If you are using Next.js with `Auth.js`, for example, your `signIn` function would call the `signIn` method provided by `next-auth/react`.

**Server Configuration (Conceptual)**

If you are using a library like Auth.js, you will have a server configuration file that defines the provider details, including client IDs and secrets.

```javascript
// Example: /pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    // ... other providers
  ],
});
```
To get the required credentials, you would create an application in the developer settings of the respective OAuth provider (e.g., GitHub, Google).

**Client-Side Integration**

Your client-side `signIn` function would then simply call the library's method.

```tsx
// In your component
import { signIn } from 'next-auth/react';

<SignInPage 
    providers={[{ id: 'github', name: 'GitHub', type: 'oauth' }]}
    signIn={async (providerId, formData) => {
        // The library handles the redirect or API call.
        const result = await signIn(providerId, { redirect: false, ...formData });

        if (result.error) {
            return { error: result.error };
        }
    }}
/>
```
This demonstrates how ZwheUI's component handles the UI and delegates the core authentication logic to a dedicated library, providing a clean separation of concerns.
