
import { AuthResponse } from "./AuthResponse";

export type SignInFunction = (
    providerId: string, 
    formData?: Record<string, any>
) => Promise<AuthResponse | void>;
