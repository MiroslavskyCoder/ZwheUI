
export interface PasskeyProviderConfig {
    id: string;
    name: string;
    type: 'passkey';
    // Functions to interact with a server for challenges
    getRegistrationChallenge: () => Promise<any>;
    getAuthenticationChallenge: () => Promise<any>;
}

export function Passkey(config: Omit<PasskeyProviderConfig, 'type' | 'id' | 'name'>) {
    return {
        id: 'passkey',
        name: 'Passkey',
        type: 'passkey' as const,
        ...config
    };
}
