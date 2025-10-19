
import { OAuthProvider } from './OAuthProviderBase';

export function Google(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'google',
        name: 'Google',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://accounts.google.com/o/oauth2/v2/auth',
            params: {
                scope: 'openid email profile',
                response_type: 'code',
            }
        },
        token: { url: 'https://oauth2.googleapis.com/token' },
        userinfo: { url: 'https://www.googleapis.com/oauth2/v3/userinfo' },
        profile: (profile) => {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            };
        },
    });
}
