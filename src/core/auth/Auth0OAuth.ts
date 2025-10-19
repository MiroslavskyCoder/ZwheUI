
import { OAuthProvider } from './OAuthProviderBase';

export function Auth0(options: { clientId: string, clientSecret: string, issuer: string }) {
    const domain = new URL(options.issuer).host;
    return OAuthProvider({
        id: 'auth0',
        name: 'Auth0',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `https://${domain}/authorize`,
            params: { scope: 'openid profile email' },
        },
        token: { url: `https://${domain}/oauth/token` },
        userinfo: { url: `https://${domain}/userinfo` },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
        }),
    });
}
