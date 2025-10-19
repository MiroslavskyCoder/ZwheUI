
import { Callbacks } from "./AuthJsCallbacks";
import { AuthProviderConfig } from "./SignInPage";

export interface AuthConfig {
  providers: AuthProviderConfig[];
  pages?: {
    signIn?: string;
    signOut?: string;
    error?: string;
    verifyRequest?: string;
  };
  callbacks?: Callbacks;
  secret?: string;
  // Other options like session strategy, JWT options, etc.
}
