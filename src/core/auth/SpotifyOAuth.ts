
import { OAuthProvider } from './OAuthProviderBase';

export function Spotify(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'spotify',
        name: 'Spotify',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://accounts.spotify.com/authorize',
            params: { scope: 'user-read-email' }
        },
        token: { url: 'https://accounts.spotify.com/api/token' },
        userinfo: { url: 'https://api.spotify.com/v1/me' },
        profile: (profile) => ({
            id: profile.id,
            name: profile.display_name,
            email: profile.email,
            image: profile.images?.[0]?.url,
        }),
    });
}
