
import React from 'react';
import { Alert } from '../../components/Alert/Alert';

interface AlertMessageProps {
  type: 'error' | 'success';
  message: string;
}

export const AuthAlert: React.FC<{ alert: AlertMessageProps | null }> = ({ alert }) => {
  if (!alert) return null;
  
  return (
    <Alert title={alert.type === 'error' ? 'Error' : 'Success'} variant={alert.type}>
      {alert.message}
    </Alert>
  );
};
