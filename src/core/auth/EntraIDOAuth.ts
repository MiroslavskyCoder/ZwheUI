
import { Microsoft } from './MicrosoftOAuth';

// Microsoft Entra ID is the new name for Azure Active Directory (Azure AD).
export function EntraID(options: { clientId: string, clientSecret: string, tenantId?: string }) {
    const provider = Microsoft(options);
    provider.id = 'entra-id';
    provider.name = 'Microsoft Entra ID';
    return provider;
}
