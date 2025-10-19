
import React from 'react';
import { 
    FormControl, 
    FormLabel, 
    FormHelperText, 
    FormErrorMessage, 
    Input, 
    Sofa, 
    Text, 
    Stack 
} from '../src/components';

export const FormControlDemo = () => (
  <Sofa>
    <Stack gap="1.5rem">
      <Text as="h2" size="1.5rem" weight="600">Form Control</Text>
      <Text>A group of components for building accessible and structured forms.</Text>
      
      <FormControl>
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter your username" />
          <FormHelperText>Your public display name.</FormHelperText>
      </FormControl>
      
       <FormControl isInvalid>
          <FormLabel>Email</FormLabel>
          <Input placeholder="you@example.com" defaultValue="invalid-email" />
          <FormErrorMessage>This email address is not valid.</FormErrorMessage>
      </FormControl>

    </Stack>
  </Sofa>
);
