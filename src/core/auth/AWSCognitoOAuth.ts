
import { OAuthProvider } from './OAuthProviderBase';

export function AWSCognito(options: { clientId: string, clientSecret: string, issuer: string }) {
    const domain = new URL(options.issuer).host;
    return OAuthProvider({
        id: 'cognito',
        name: 'Cognito',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: `https://${domain}/oauth2/authorize`,
            params: { scope: 'openid profile email' },
        },
        token: { url: `https://${domain}/oauth2/token` },
        userinfo: { url: `https://${domain}/oauth2/userInfo` },
        profile: (profile) => ({
            id: profile.sub,
            name: profile.username,
            email: profile.email,
            image: undefined,
        }),
    });
}
