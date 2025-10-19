
import { OAuthProvider } from './OAuthProviderBase';

export function Apple(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'apple',
        name: 'Apple',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://appleid.apple.com/auth/authorize',
            params: { scope: 'name email', response_mode: 'form_post', response_type: 'code' },
        },
        token: { url: 'https://appleid.apple.com/auth/token' },
        userinfo: { url: '' }, // User info is in the id_token
        profile: (profile) => ({
            id: profile.sub,
            name: profile.name,
            email: profile.email,
            image: null,
        }),
    });
}
