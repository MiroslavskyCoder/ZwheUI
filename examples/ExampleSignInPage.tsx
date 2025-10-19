
import React, { useState } from 'react';
import { Sofa, Text, Stack, SegmentedControl, useToast } from '../src/components';
// Import the NEW SignInPage and its types from the core auth module
import { SignInPage, AuthProviderConfig } from '../src/core/auth/SignInPage';
import { AuthResponse } from '../src/core/auth/AuthResponse';

const allProviders: AuthProviderConfig[] = [
    { id: 'google', name: 'Google', type: 'oauth' },
    { id: 'github', name: 'GitHub', type: 'oauth' },
    { 
      id: 'credentials', 
      name: 'Email', 
      type: 'credentials',
      // This config is used by CredentialsForm to generate inputs
      credentials: {
        email: { label: "Email Address", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password", placeholder: "••••••••••" }
      }
    },
    { id: 'magiclink', name: 'Magic Link', type: 'magiclink' }
];

const mockSignIn = async (providerId: string, formData?: Record<string, string>): Promise<AuthResponse | void> => {
    console.log('Attempting sign in with:', providerId, formData);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (providerId === 'credentials' && formData?.password !== 'password123') {
        return { error: 'Invalid password. Hint: the password is "password123".' };
    }
    
    if (providerId === 'magiclink') {
        return { success: `Check your email at ${formData?.email} for a magic link!` };
    }
    
    // On success (e.g., for OAuth), we would typically redirect.
    // For this demo, a toast will be shown by the caller.
    return Promise.resolve();
};

export const ExampleSignInPage = () => {
    const { addToast } = useToast();
    const [mode, setMode] = useState<'all' | 'credentials' | 'magiclink'>('all');
    
    // Filter providers based on the selected demo mode
    const providers = {
        all: allProviders,
        credentials: allProviders.filter(p => p.type === 'oauth' || p.type === 'credentials'),
        magiclink: allProviders.filter(p => p.type === 'oauth' || p.type === 'magiclink'),
    }[mode];

    const handleSignIn = async (providerId: string, formData?: Record<string, any>) => {
        const response = await mockSignIn(providerId, formData);
        // If the sign-in function returns an error or success message, display it.
        if (response) {
            return response;
        }
        // Otherwise, assume success and show a toast.
        addToast({
            title: 'Sign In Successful!',
            description: `You are now signed in with ${providerId}.`,
            variant: 'success'
        });
    };

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Example: Advanced Sign-In Page</Text>
                <Text>A showcase of the new, extensible authentication UI. Use the controls to switch between different provider configurations.</Text>
                
                <SegmentedControl 
                    value={mode}
                    onChange={(v) => setMode(v as any)}
                    options={[
                        { label: 'All Providers', value: 'all' },
                        { label: 'Credentials', value: 'credentials' },
                        { label: 'Magic Link', value: 'magiclink' }
                    ]}
                />

                <SignInPage
                    key={mode} // Re-mount component to reset state on mode change
                    providers={providers}
                    signIn={handleSignIn}
                    title="Welcome Back"
                    subtitle="Sign in to continue to ZwheUI"
                />
            </Stack>
        </Sofa>
    );
};
