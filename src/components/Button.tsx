import React from 'react'
import { useStyles } from '../core/hooks/useStyles';
import { useTheme } from '../core/theme/ThemeProvider';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const { theme } = useTheme();
  const createStyle = useStyles('button');
  const isDark = theme.colors.background.startsWith('#');

  const base = createStyle({
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    display: 'inline-grid',
    gridAutoFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'all 0.2s',
    border: '1px solid transparent',
    '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
        backdropFilter: 'blur(8px)',
    },
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 0 2px ${isDark ? '#111' : '#fff'}, 0 0 0 4px ${theme.colors.primary}`
    },
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6
    }
  });

  const variants = {
    primary: createStyle({
      backgroundColor: isDark ? theme.colors.backgroundSecondary : theme.colors.primary,
      color: isDark ? theme.colors.text : '#fff',
      borderColor: theme.colors.border,
      '&:hover:not(:disabled)': {
        backgroundColor: isDark ? theme.colors.border : '#1d4ed8' // darker blue
      },
    }),
    secondary: createStyle({
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      '&:hover:not(:disabled)': {
        backgroundColor: isDark ? theme.colors.secondary : '#d1d5db' // darker gray
      }
    })
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button