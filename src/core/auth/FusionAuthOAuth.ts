
import { OAuthProvider } from './OAuthProviderBase';

export function FusionAuth(options: { clientId: string, clientSecret: string, issuer: string, tenantId?: string }) {
    const tenant = options.tenantId ? `/${options.tenantId}` : '';
    return OAuthProvider({
        id: 'fusionauth',
        name: 'FusionAuth',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `${options.issuer}/oauth2/authorize`,
            params: { scope: 'openid email profile offline_access' }
        },
        token: { url: `${options.issuer}/oauth2/token` },
        userinfo: { url: `${options.issuer}/oauth2/userinfo` },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.preferred_username,
            email: profile.email,
            image: profile.picture,
        }),
    });
}
