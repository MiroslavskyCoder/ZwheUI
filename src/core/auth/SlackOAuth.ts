
import { OAuthProvider } from './OAuthProviderBase';

export function Slack(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'slack',
        name: 'Slack',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://slack.com/oauth/v2/authorize',
            params: { scope: 'users:read users:read.email' }
        },
        token: { url: 'https://slack.com/api/oauth.v2.access' },
        userinfo: { url: 'https://slack.com/api/users.identity' },
        profile: (profile) => ({
            id: profile.user.id,
            name: profile.user.name,
            email: profile.user.email,
            image: profile.user.image_512,
        }),
    });
}
