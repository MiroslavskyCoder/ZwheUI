
import { OAuthProvider } from './OAuthProviderBase';

export function Okta(options: { clientId: string, clientSecret: string, issuer: string }) {
    return OAuthProvider({
        id: 'okta',
        name: 'Okta',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `${options.issuer}/v1/authorize`,
            params: { scope: 'openid profile email' },
        },
        token: { url: `${options.issuer}/v1/token` },
        userinfo: { url: `${options.issuer}/v1/userinfo` },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: profile.picture,
        }),
    });
}
