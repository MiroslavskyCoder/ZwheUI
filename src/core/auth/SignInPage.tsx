
import React, { useState, useMemo, FormEvent } from 'react';
import { Card, Stack, Text, Button, Divider, Icon, Spinner } from '../../components';
import { useTheme } from '../../core';
import { GoogleIcon, GithubIcon } from '../../icons';
import { AuthResponse } from './AuthResponse';
import { AuthAlert } from './Alerts';
import { CredentialsForm } from './CredentialsForm';
import { MagicLinkForm } from './MagicLinkForm';

// A more generic provider type for the UI
export interface AuthProviderConfig {
    id: string;
    name: string;
    type: 'oauth' | 'credentials' | 'magiclink' | 'passkey';
    // Add other provider-specific properties if needed for UI
    [key: string]: any;
}

interface SignInPageProps {
    providers: AuthProviderConfig[];
    signIn: (providerId: string, formData?: Record<string, any>) => Promise<AuthResponse | void>;
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
    
    const oauthProviders = useMemo(() => providers.filter(p => p.type === 'oauth'), [providers]);
    const credentialsProvider = useMemo(() => providers.find(p => p.type === 'credentials'), [providers]);
    const magicLinkProvider = useMemo(() => providers.find(p => p.type === 'magiclink'), [providers]);
    
    const handleSignIn = async (providerId: string, formData?: Record<string, any>) => {
        setLoadingProvider(providerId);
        setAlert(null);
        try {
            const response = await signIn(providerId, formData);
            if (response) {
                if (response.error) setAlert({ type: 'error', message: response.error });
                else if (response.success) setAlert({ type: 'success', message: response.success });
            }
        } catch (e: any) {
            setAlert({ type: 'error', message: e.message || 'An unknown error occurred.' });
        } finally {
            setLoadingProvider(null);
        }
    };

    return (
        <Card className={className} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Stack gap="1.5rem">
                <Stack gap="0.25rem" style={{ textAlign: 'center' }}>
                    <Text as="h1" size="1.5rem" weight="600">{title}</Text>
                    {subtitle && <Text color={theme.colors.textSecondary}>{subtitle}</Text>}
                </Stack>

                <AuthAlert alert={alert} />

                {oauthProviders.length > 0 && (
                    <Stack gap="1rem">
                        {oauthProviders.map(provider => {
                            const ProviderIcon = providerIcons[provider.id];
                            return (
                                <Button 
                                    key={provider.id} 
                                    variant="secondary"
                                    onClick={() => handleSignIn(provider.id)}
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
                    <CredentialsForm
                        provider={credentialsProvider as any}
                        onSubmit={(formData) => handleSignIn(credentialsProvider.id, formData)}
                    />
                )}
                
                {magicLinkProvider && (
                     <MagicLinkForm
                        provider={magicLinkProvider as any}
                        onSubmit={(formData) => handleSignIn(magicLinkProvider.id, formData)}
                    />
                )}

            </Stack>
        </Card>
    );
};
