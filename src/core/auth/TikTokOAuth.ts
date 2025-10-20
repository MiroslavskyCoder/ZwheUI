
import { OAuthProvider } from './OAuthProviderBase';

export function TikTok(options: { clientId: string, clientSecret: string }) {
    return OAuthProvider({
        id: 'tiktok',
        name: 'TikTok',
        type: 'oauth',
        clientId: options.clientId,
        clientSecret: options.clientSecret,
        authorization: {
            url: 'https://www.tiktok.com/v2/auth/authorize/',
            params: { scope: 'user.info.basic' }
        },
        token: { url: 'https://open.tiktokapis.com/v2/oauth/token/' },
        userinfo: { url: 'https://open.tiktokapis.com/v2/user/info/?fields=open_id,union_id,avatar_url,display_name' },
        profile: (profile) => ({
            id: profile.data.user.union_id,
            name: profile.data.user.display_name,
            email: null,
            image: profile.data.user.avatar_url,
        }),
    });
}
