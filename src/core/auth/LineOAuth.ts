
import { OAuthProvider } from './OAuthProviderBase';

export function Line(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'line',
        name: 'Line',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://access.line.me/oauth2/v2.1/authorize',
            params: { scope: 'profile openid email' }
        },
        token: { url: 'https://api.line.me/oauth2/v2.1/token' },
        userinfo: { url: 'https://api.line.me/v2/profile' },
        profile: (profile) => ({
            id: profile.userId,
            name: profile.displayName,
            email: profile.email, // Requires email permission
            image: profile.pictureUrl,
        }),
    });
}
