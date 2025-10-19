
import React from 'react';
import { Button } from '../../components';
import { PasskeyProviderConfig } from './PasskeyAuth';

interface PasskeyFormProps {
  provider: PasskeyProviderConfig;
}

export const PasskeyForm: React.FC<PasskeyFormProps> = ({ provider }) => {
  const handlePasskeySignIn = () => {
    alert("Passkey authentication flow would start here.");
    // 1. Call provider.getAuthenticationChallenge()
    // 2. Use navigator.credentials.get() with the challenge
    // 3. Send the result to the server for verification
  };

  return (
    <Button variant="secondary" onClick={handlePasskeySignIn}>
      Sign in with a Passkey
    </Button>
  );
};
