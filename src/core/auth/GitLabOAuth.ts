
import { OAuthProvider } from './OAuthProviderBase';

export function GitLab(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'gitlab',
        name: 'GitLab',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://gitlab.com/oauth/authorize',
            params: { scope: 'read_user' },
        },
        token: { url: 'https://gitlab.com/oauth/token' },
        userinfo: { url: 'https://gitlab.com/api/v4/user' },
        profile: (profile) => ({
            id: profile.id.toString(),
            name: profile.name,
            email: profile.email,
            image: profile.avatar_url,
        }),
    });
}
