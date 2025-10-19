
// This file would typically be used to initialize and export a configured
// array of providers based on environment variables.

import { Google } from './GoogleOAuth';
import { GitHub } from './GitHubOAuth';
import { Credentials } from './CredentialsAuth';

// Example configuration
export const configuredProviders = [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID || '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    GitHub({
        clientId: process.env.GITHUB_CLIENT_ID || '',
        clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    Credentials({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
            // Your logic to verify credentials
            if (credentials?.username === 'admin' && credentials?.password === 'admin') {
                return { id: '1', name: 'Admin', email: 'admin@example.com' };
            }
            return null;
        }
    })
];
