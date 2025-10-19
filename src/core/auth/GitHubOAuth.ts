
import { OAuthProvider } from './OAuthProviderBase';

export function GitHub(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'github',
        name: 'GitHub',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://github.com/login/oauth/authorize',
            params: { scope: 'read:user user:email' }
        },
        token: { url: 'https://github.com/login/oauth/access_token' },
        userinfo: { url: 'https://api.github.com/user' },
        profile: (profile) => {
            return {
                id: profile.id.toString(),
                name: profile.name ?? profile.login,
                email: profile.email,
                image: profile.avatar_url,
            };
        },
    });
}
