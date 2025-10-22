
export interface OAuthProviderConfig {
    id: string;
    name: string;
    type: 'oauth';
    clientId: string;
    clientSecret: string;
    authorization: {
        url: string;
        params?: Record<string, string>;
    };
    token: {
        url: string;
    };
    userinfo: {
        url: string;
    };
    profile: (profile: any) => { id: string, name?: string | null, email?: string | null, image?: string | null };
}

export function OAuthProvider(config: OAuthProviderConfig) {
    return {
        ...config
    };
}
