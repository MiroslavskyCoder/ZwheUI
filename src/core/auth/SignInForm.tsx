
import React from 'react';
import { Stack } from '../../components';

export const SignInForm: React.FC<{ children: React.ReactNode; onSubmit: (e: React.FormEvent) => void }> = ({ children, onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <Stack gap="1rem">{children}</Stack>
        </form>
    );
};
