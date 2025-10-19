
import { OAuthProvider } from './OAuthProviderBase';

export function Facebook(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'facebook',
        name: 'Facebook',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://www.facebook.com/v15.0/dialog/oauth',
            params: { scope: 'email' }
        },
        token: { url: 'https://graph.facebook.com/oauth/access_token' },
        userinfo: { url: 'https://graph.facebook.com/me?fields=id,name,email,picture' },
        profile: (profile) => {
            return {
                id: profile.id,
                name: profile.name,
                email: profile.email,
                image: profile.picture.data.url,
            };
        },
    });
}
