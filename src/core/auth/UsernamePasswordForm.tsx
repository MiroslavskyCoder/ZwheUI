
import React from 'react';
import { Credentials } from './CredentialsAuth';
import { CredentialsForm } from './CredentialsForm';
import { AuthResponse } from './AuthResponse';

interface UsernamePasswordFormProps {
    onSubmit: (credentials: Record<string, string>) => Promise<AuthResponse | void>;
}

const defaultCredentialsProvider = Credentials({
    name: 'Email',
    credentials: {
        email: { label: "Email Address", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password", placeholder: "••••••••••" }
    },
    authorize: async (credentials) => {
        // This authorize function would typically live on the server
        // and check credentials against a database.
        console.log("Authorizing with:", credentials);
        if (credentials.email && credentials.password) {
            return { id: '1', name: 'Demo User', email: credentials.email as string };
        }
        return null;
    }
});

export const UsernamePasswordForm: React.FC<UsernamePasswordFormProps> = ({ onSubmit }) => {
    return (
        <CredentialsForm
            provider={defaultCredentialsProvider}
            onSubmit={onSubmit}
        />
    );
};
