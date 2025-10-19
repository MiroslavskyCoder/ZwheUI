
import React, { useState, FormEvent } from 'react';
import { Stack, Input, Button, Spinner } from '../../components';
import { AuthResponse } from './AuthResponse';
import { MagicLinkProviderConfig } from './MagicLinkAuth';

interface MagicLinkFormProps {
  provider: MagicLinkProviderConfig;
  onSubmit: (credentials: { email: string }) => Promise<AuthResponse | void>;
}

export const MagicLinkForm: React.FC<MagicLinkFormProps> = ({ provider, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ email });
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="1rem">
        <Input
            name="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Spinner size={20} /> : `Send Magic Link`}
        </Button>
      </Stack>
    </form>
  );
};
