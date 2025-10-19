
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
    profile: (profile: any) => { id: string, name?: string, email?: string, image?: string };
}

export function OAuthProvider(config: OAuthProviderConfig) {
    return {
        ...config
    };
}
