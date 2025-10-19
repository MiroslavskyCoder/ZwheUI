
import React, { useState } from 'react';
import { Button, Text, Stack, Input, Checkbox, SegmentedControl } from '../src/components';
import { DemoSection } from './DemoSection';
import { useTheme } from '../src/core';

const ButtonConfigurator: React.FC<{
    variant: 'primary' | 'secondary' | 'accent';
    setVariant: (v: any) => void;
    childrenText: string;
    setChildrenText: (t: string) => void;
    isDisabled: boolean;
    setIsDisabled: (d: boolean) => void;
}> = ({ variant, setVariant, childrenText, setChildrenText, isDisabled, setIsDisabled }) => {
    const { theme } = useTheme();

    return (
        <Stack gap="1.5rem">
             <Stack gap="4px">
                <Text as="label" size={theme.typography.fontSizes.sm} weight={theme.typography.fontWeights.medium} color={theme.colors.textSecondary}>Variant Prop</Text>
                <SegmentedControl
                    options={[{ label: 'Primary', value: 'primary' }, { label: 'Secondary', value: 'secondary' }, { label: 'Accent', value: 'accent' }]}
                    value={variant}
                    onChange={(val) => setVariant(val as any)}
                />
            </Stack>
            <Input label="Children Prop (Text)" value={childrenText} onChange={(e) => setChildrenText(e.target.value)} />
            <Checkbox label="Disabled Prop" checked={isDisabled} onChange={(e) => setIsDisabled(e.target.checked)} />
        </Stack>
    );
};

const documentation = `# Button

A standard, clickable button component with multiple variants and states. It features an enhanced, high-contrast focus state for improved keyboard navigation and accessibility.

## Props

*   \`variant\` (enum: 'primary' | 'secondary' | 'accent', optional, default: 'primary'): The visual style of the button.
*   \`className\` (string, optional): Additional CSS classes for custom styling.
*   All other standard HTML \`<button>\` attributes are supported (e.g., \`onClick\`, \`disabled\`).

## Usage

\`\`\`tsx
import { Button } from './src/components';

// Primary Button
<Button variant="primary" onClick={() => alert('Clicked!')}>
  Submit
</Button>

// Secondary Button
<Button variant="secondary">
  Cancel
</Button>

// Accent Button
<Button variant="accent">
  Confirm
</Button>

// Disabled Button
<Button variant="primary" disabled>
  Loading...
</Button>
\`\`\``;

const sourceCode = `import React from 'react'
import { useStyles } from '../core/hooks/useStyles';
import { useTheme } from '../core/theme/ThemeProvider';

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
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.primary}\`
      },
    }),
    secondary: createStyle({
      backgroundColor: theme.colors.border,
      color: theme.colors.text,
      '&:hover:not(:disabled)': {
        backgroundColor: isDark ? theme.colors.secondary : '#d1d5db' // darker gray
      },
      '&:focus-visible': {
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.secondary}\`
      },
    }),
    accent: createStyle({
      backgroundColor: theme.colors.accent,
      color: '#fff',
      '&:hover:not(:disabled)': {
        filter: 'brightness(0.9)',
      },
      '&:focus-visible': {
        boxShadow: \`0 0 0 2px \${theme.colors.background}, 0 0 0 4px \${theme.colors.accent}\`
      },
    })
  };

  return (
    <button className={\`\${base} \${variants[variant]} \${className}\`} {...rest}>
      {children}
    </button>
  )
}

export default Button`;

export const ButtonDemo = () => {
    const [variant, setVariant] = useState<'primary' | 'secondary' | 'accent'>('primary');
    const [childrenText, setChildrenText] = useState('Click Me');
    const [isDisabled, setIsDisabled] = useState(false);

    return (
        <DemoSection
            title="Button"
            description="A standard button component with primary, secondary, accent, and disabled states."
            livePreview={
                <Button variant={variant} disabled={isDisabled}>
                    {childrenText}
                </Button>
            }
            propControls={
                <ButtonConfigurator 
                    variant={variant} 
                    setVariant={setVariant}
                    childrenText={childrenText}
                    setChildrenText={setChildrenText}
                    isDisabled={isDisabled}
                    setIsDisabled={setIsDisabled}
                />
            }
            documentation={documentation}
            sourceCode={sourceCode}
        />
    );
};
