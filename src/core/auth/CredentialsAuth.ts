
export interface CredentialsProviderConfig {
    id: string;
    name: string;
    type: 'credentials';
    credentials: Record<string, { label: string, type: string, placeholder?: string }>;
    authorize: (credentials: Record<string, string>) => Promise<{ id: string, name?: string, email?: string } | null>;
}

export function Credentials(config: Omit<CredentialsProviderConfig, 'type' | 'id'>) {
    return {
        id: 'credentials',
        type: 'credentials' as const,
        ...config
    };
}
