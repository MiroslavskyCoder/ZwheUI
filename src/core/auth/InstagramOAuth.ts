
import { OAuthProvider } from './OAuthProviderBase';

export function Instagram(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'instagram',
        name: 'Instagram',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://api.instagram.com/oauth/authorize',
            params: { scope: 'user_profile' }
        },
        token: { url: 'https://api.instagram.com/oauth/access_token' },
        userinfo: { url: 'https://graph.instagram.com/me?fields=id,username' },
        profile: (profile) => ({
            id: profile.id,
            name: profile.username,
            email: undefined,
            image: undefined,
        }),
    });
}
