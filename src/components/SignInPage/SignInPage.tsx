import React, { useState, useMemo, FormEvent } from 'react';
import { Card, Stack, Text, Button, Input, Divider, Alert, Icon, Spinner } from '..';
import { useTheme } from '../../core';
import { GoogleIcon, GithubIcon } from '../../icons';

export interface AuthProvider {
    id: string;
    name: string;
    type: 'oauth' | 'credentials' | 'magiclink' | 'passkey';
}

export interface AuthResponse {
  error?: string;
  success?: string;
}

interface SignInPageProps {
    providers: AuthProvider[];
    signIn: (providerId: string, formData?: Record<string, string>) => Promise<AuthResponse | void>;
    title?: string;
    subtitle?: string;
    className?: string;
}

const providerIcons: Record<string, React.ElementType> = {
    google: GoogleIcon,
    github: GithubIcon,
};

export const SignInPage: React.FC<SignInPageProps> = ({
    providers,
    signIn,
    title = 'Sign In',
    subtitle,
    className,
}) => {
    const { theme } = useTheme();
    const [alert, setAlert] = useState<{ type: 'error' | 'success'; message: string } | null>(null);
    const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
    const [formData, setFormData] = useState<Record<string, string>>({});
    
    const oauthProviders = useMemo(() => providers.filter(p => p.type === 'oauth'), [providers]);
    const credentialsProvider = useMemo(() => providers.find(p => p.type === 'credentials'), [providers]);
    const magicLinkProvider = useMemo(() => providers.find(p => p.type === 'magiclink'), [providers]);
    
    const handleOAuthSignIn = async (providerId: string) => {
        setLoadingProvider(providerId);
        setAlert(null);
        try {
            const response = await signIn(providerId);
            if (response && response.error) {
                setAlert({ type: 'error', message: response.error });
            }
        } catch (e: any) {
            setAlert({ type: 'error', message: e.message || 'An unknown error occurred.' });
        } finally {
            setLoadingProvider(null);
        }
    };

    const handleFormSubmit = async (e: FormEvent, providerId: string) => {
        e.preventDefault();
        setLoadingProvider(providerId);
        setAlert(null);
        try {
            const response = await signIn(providerId, formData);
            if (response) {
                if (response.error) {
                    setAlert({ type: 'error', message: response.error });
                } else if (response.success) {
                    setAlert({ type: 'success', message: response.success });
                }
            }
        } catch (e: any) {
            setAlert({ type: 'error', message: e.message || 'An unknown error occurred.' });
        } finally {
            setLoadingProvider(null);
        }
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <Card className={className} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Stack gap="1.5rem">
                <Stack gap="0.25rem" style={{ textAlign: 'center' }}>
                    <Text as="h1" size="1.5rem" weight="600">{title}</Text>
                    {subtitle && <Text color={theme.colors.textSecondary}>{subtitle}</Text>}
                </Stack>

                {alert && (
                    <Alert title={alert.type === 'error' ? 'Error' : 'Success'} variant={alert.type}>
                        {alert.message}
                    </Alert>
                )}

                {oauthProviders.length > 0 && (
                    <Stack gap="1rem">
                        {oauthProviders.map(provider => {
                            const ProviderIcon = providerIcons[provider.id];
                            return (
                                <Button 
                                    key={provider.id} 
                                    variant="secondary"
                                    onClick={() => handleOAuthSignIn(provider.id)}
                                    disabled={!!loadingProvider}
                                >
                                    {loadingProvider === provider.id ? <Spinner size={20} /> : (ProviderIcon && <Icon as={ProviderIcon} size={20} />)}
                                    <span>Sign in with {provider.name}</span>
                                </Button>
                            );
                        })}
                    </Stack>
                )}

                {(oauthProviders.length > 0 && (credentialsProvider || magicLinkProvider)) && (
                    <Stack direction="row" align="center" gap="1rem">
                        <Divider />
                        <Text size="0.75rem" color={theme.colors.textSecondary}>OR</Text>
                        <Divider />
                    </Stack>
                )}

                {credentialsProvider && (
                    <form onSubmit={e => handleFormSubmit(e, credentialsProvider.id)}>
                        <Stack gap="1rem">
                            <Input name="email" type="email" label="Email Address" placeholder="you@example.com" onChange={handleInputChange} required />
                            <Input name="password" type="password" label="Password" placeholder="••••••••••" onChange={handleInputChange} required />
                            <Button type="submit" variant="primary" disabled={!!loadingProvider}>
                                {loadingProvider === credentialsProvider.id ? <Spinner size={20} /> : 'Sign in with Email'}
                            </Button>
                        </Stack>
                    </form>
                )}

                {magicLinkProvider && (
                    <form onSubmit={e => handleFormSubmit(e, magicLinkProvider.id)}>
                        <Stack gap="1rem">
                            <Input name="email" type="email" label="Email Address" placeholder="you@example.com" onChange={handleInputChange} required />
                            <Button type="submit" variant="primary" disabled={!!loadingProvider}>
                                {loadingProvider === magicLinkProvider.id ? <Spinner size={20} /> : 'Send Magic Link'}
                            </Button>
                        </Stack>
                    </form>
                )}
            </Stack>
        </Card>
    );
};
