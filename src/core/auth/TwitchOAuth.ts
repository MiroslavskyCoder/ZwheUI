
import { OAuthProvider } from './OAuthProviderBase';

export function Twitch(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'twitch',
        name: 'Twitch',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://id.twitch.tv/oauth2/authorize',
            params: { scope: 'user:read:email' }
        },
        token: { url: 'https://id.twitch.tv/oauth2/token' },
        userinfo: { url: 'https://api.twitch.tv/helix/users' },
        profile: (profile) => ({
            id: profile.data[0].id,
            name: profile.data[0].display_name,
            email: profile.data[0].email,
            image: profile.data[0].profile_image_url,
        }),
    });
}
