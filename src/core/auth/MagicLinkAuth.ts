
export interface MagicLinkProviderConfig {
    id: string;
    name: string;
    type: 'magiclink';
    sendVerificationRequest: (params: { identifier: string, url: string, provider: MagicLinkProviderConfig }) => Promise<void>;
}

export function MagicLink(config: Omit<MagicLinkProviderConfig, 'type' | 'id' | 'name'>) {
    return {
        id: 'magiclink',
        name: 'Magic Link',
        type: 'magiclink' as const,
        ...config
    };
}
