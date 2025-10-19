
import { OAuthProvider } from './OAuthProviderBase';

export function Discord(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'discord',
        name: 'Discord',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://discord.com/api/oauth2/authorize',
            params: { scope: 'identify email' }
        },
        token: { url: 'https://discord.com/api/oauth2/token' },
        userinfo: { url: 'https://discord.com/api/users/@me' },
        profile: (profile) => ({
            id: profile.id,
            name: profile.username,
            email: profile.email,
            image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
        }),
    });
}
