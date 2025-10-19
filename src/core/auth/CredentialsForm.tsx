
import React, { useState, FormEvent } from 'react';
import { Stack, Input, Button, Spinner } from '../../components';
import { AuthResponse } from './AuthResponse';
import { CredentialsProviderConfig } from './CredentialsAuth';

interface CredentialsFormProps {
  provider: CredentialsProviderConfig;
  onSubmit: (credentials: Record<string, string>) => Promise<AuthResponse | void>;
}

export const CredentialsForm: React.FC<CredentialsFormProps> = ({ provider, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(formData);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap="1rem">
        {Object.entries(provider.credentials).map(([key, props]) => (
          <Input
            key={key}
            name={key}
            type={props.type}
            label={props.label}
            placeholder={props.placeholder}
            onChange={handleInputChange}
            required
          />
        ))}
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? <Spinner size={20} /> : `Sign in with ${provider.name}`}
        </Button>
      </Stack>
    </form>
  );
};
