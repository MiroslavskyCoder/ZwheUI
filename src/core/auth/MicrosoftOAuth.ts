
import { OAuthProvider } from './OAuthProviderBase';

// This is a generic Microsoft provider (formerly Azure AD v2.0).
// For more specific tenant configurations, see EntraIDOAuth.
export function Microsoft(options: { clientId: string, clientSecret: string, tenantId?: string }) {
    const tenant = options.tenantId || 'common';
    return OAuthProvider({
        id: 'azure-ad',
        name: 'Microsoft',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/authorize`,
            params: { scope: "openid profile email User.Read" }
        },
        token: { url: `https://login.microsoftonline.com/${tenant}/oauth2/v2.0/token` },
        userinfo: { url: 'https://graph.microsoft.com/oidc/userinfo' },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: null,
        }),
    });
}
