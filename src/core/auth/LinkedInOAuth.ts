
import { OAuthProvider } from './OAuthProviderBase';

export function LinkedIn(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'linkedin',
        name: 'LinkedIn',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://www.linkedin.com/oauth/v2/authorization',
            params: { scope: 'r_liteprofile r_emailaddress' }
        },
        token: { url: 'https://www.linkedin.com/oauth/v2/accessToken' },
        userinfo: { url: 'https://api.linkedin.com/v2/me' }, // Basic profile
        profile: (profile) => ({
            id: profile.id,
            name: `${profile.firstName.localized.en_US} ${profile.lastName.localized.en_US}`,
            email: undefined, // Email requires a separate API call
            image: undefined,
        }),
    });
}
