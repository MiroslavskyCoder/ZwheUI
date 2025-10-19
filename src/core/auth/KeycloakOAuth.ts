
import { OAuthProvider } from './OAuthProviderBase';

export function Keycloak(options: { clientId: string, clientSecret: string, issuer: string }) {
    return OAuthProvider({
        id: 'keycloak',
        name: 'Keycloak',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `${options.issuer}/protocol/openid-connect/auth`,
            params: { scope: 'openid email profile' },
        },
        token: { url: `${options.issuer}/protocol/openid-connect/token` },
        userinfo: { url: `${options.issuer}/protocol/openid-connect/userinfo` },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
        }),
    });
}
