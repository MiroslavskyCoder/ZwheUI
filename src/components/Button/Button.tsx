import React from 'react'
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent'
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...rest }) => {
  const { theme, mode } = useTheme();
  const createStyle = useStyles('button');
  const isDark = mode !== 'light';

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
    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.6
    },
    // Remove default outline for all focus states to prevent interference
    '&:focus': {
        outline: 'none',
    }
  });

  const variants = {
    primary: createStyle({
      backgroundColor: theme.colors.primary,
      color: isDark ? '#172554' : '#fff', // Use dark text on light blue, white text on dark blue
      '&:hover:not(:disabled)': {
        filter: isDark ? 'brightness(1.2)' : 'brightness(0.9)',
      },  
       '&:focus-visible': { 
        boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.primary}`
      },
    }),
    secondary: createStyle({
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      '&:hover:not(:disabled)': {
        backgroundColor: isDark ? theme.colors.secondary : '#d1d5db' // darker gray
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.secondary}`
      },
    }),
    accent: createStyle({
      backgroundColor: theme.colors.accent,
      color: '#fff',
      '&:hover:not(:disabled)': {
        filter: 'brightness(0.9)',
      },
      '&:focus-visible': {
        boxShadow: `0 0 0 2px ${theme.colors.background}, 0 0 0 4px ${theme.colors.accent}`
      },
    })
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export default Button