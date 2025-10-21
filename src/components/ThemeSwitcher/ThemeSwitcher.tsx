import React, { useState, useEffect } from 'react';
// FIX: `defaultTheme` and `Theme` are not exported from `..`. They should be imported from the core library.
import { Card } from '../Card/Card';
import { Input } from '../Input/Input';
import { Stack } from '../Stack/Stack';
import { SegmentedControl } from '../SegmentedControl/SegmentedControl';
import { Text } from '../Text/Text';
import { Theme } from '../../core';
import { useTheme, defaultTheme } from '../../core/theme/ThemeProvider';
import { useDebounce } from '../../core/hooks/useInteractions';


export const ThemeSwitcher: React.FC = () => {
    const { theme, mode, switchTheme, setCustomTheme } = useTheme();
    
    // Local state for custom color inputs, initialized from the current theme
    const [primary, setPrimary] = useState(theme.colors.primary);
    const [background, setBackground] = useState(theme.colors.background);
    const [text, setText] = useState(theme.colors.text);

    // Debounce the local state to avoid excessive re-renders while typing
    const debouncedPrimary = useDebounce(primary, 300);
    const debouncedBackground = useDebounce(background, 300);
    const debouncedText = useDebounce(text, 300);

    // Effect to update the global custom theme when debounced values change
    useEffect(() => {
        if (mode === 'custom') {
            const newCustomTheme: Theme = {
                ...theme, // Inherit all properties from the current theme
                colors: {
                    ...theme.colors, // Inherit all colors
                    primary: debouncedPrimary,
                    background: debouncedBackground,
                    text: debouncedText,
                }
            };
            setCustomTheme(newCustomTheme);
        }
    }, [debouncedPrimary, debouncedBackground, debouncedText, mode]);
    
    // Effect to sync local input state when the global theme/mode changes externally
    useEffect(() => {
        setPrimary(theme.colors.primary);
        setBackground(theme.colors.background);
        setText(theme.colors.text);
    }, [theme.colors.primary, theme.colors.background, theme.colors.text]);

    return (
        <Card>
            <Card.Header>
                <Card.Title>Theme Settings</Card.Title>
            </Card.Header>
            <Card.Body>
                <Stack gap="1rem">
                    <SegmentedControl
                        options={[
                            { label: 'Dark', value: 'dark' },
                            { label: 'Light', value: 'light' },
                            { label: 'Custom', value: 'custom' },
                        ]}
                        value={mode}
                        onChange={(newMode) => switchTheme(newMode as any)}
                    />
                    {mode === 'custom' && (
                        <Stack direction="row" gap="1rem" align="end" style={{ transition: 'opacity 0.3s', opacity: 1 }}>
                            <Input label="Primary" value={primary} onChange={(e) => setPrimary(e.target.value)} />
                            <Input label="Background" value={background} onChange={(e) => setBackground(e.target.value)} />
                            <Input label="Text" value={text} onChange={(e) => setText(e.target.value)} />
                        </Stack>
                    )}
                </Stack>
            </Card.Body>
        </Card>
    );
};
