
import { OAuthProvider } from './OAuthProviderBase';

// Note: Twitter OAuth 2.0 requires PKCE and is more complex.
// This is a simplified representation.
export function Twitter(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'twitter',
        name: 'Twitter',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://twitter.com/i/oauth2/authorize',
            params: { scope: 'users.read tweet.read offline.access' }
        },
        token: { url: 'https://api.twitter.com/2/oauth2/token' },
        userinfo: { url: 'https://api.twitter.com/2/users/me' },
        profile: (profile) => ({
            id: profile.data.id,
            name: profile.data.name,
            email: null,
            image: profile.data.profile_image_url,
        }),
    });
}
