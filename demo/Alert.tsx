
import React from 'react';
import { Alert, Sofa, Text, Stack } from '../src/components';

export const AlertDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Alert</Text>
      <Text>Provides contextual feedback messages for typical user actions, with variants for different severity levels.</Text>
      <Alert title="Info" variant="info">This is an informational message.</Alert>
      <Alert title="Success" variant="success">Your profile has been updated successfully.</Alert>
      <Alert title="Warning" variant="warning">Your session is about to expire.</Alert>
      <Alert title="Error" variant="error">Failed to upload the file. Please try again.</Alert>
    </Stack>
  </Sofa>
);
