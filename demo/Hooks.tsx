import React, { useState, useEffect } from 'react';
import {
    useToggle, useDocumentTitle, useTimeout, useInterval, useWindowSize, useOnlineStatus,
    useCopyToClipboard, useGeolocation, useUpdateEffect, useEventListener,
    Text, Stack, Sofa, Button, Kbd, useToast, Spinner
} from '../src/components';
import { DemoSection } from './DemoSection';

const ToggleDemo = () => {
    const [isOn, toggle] = useToggle(false);
    useDocumentTitle(isOn ? 'Hooks Demo - Toggled ON' : 'Hooks Demo - Toggled OFF');

    return (
        <Sofa title="useToggle & useDocumentTitle">
            <Stack gap="1rem" align="start">
                <Text>Toggle the switch and check the document title in your browser tab.</Text>
                <Button onClick={toggle}>Toggle</Button>
                <Text>State: {isOn ? 'ON' : 'OFF'}</Text>
            </Stack>
        </Sofa>
    );
};

const TimerHooksDemo = () => {
    const [timeoutText, setTimeoutText] = useState('Waiting for 3 seconds...');
    const [intervalCount, setIntervalCount] = useState(0);

    useTimeout(() => setTimeoutText('Boom! 💥'), 3000);
    useInterval(() => setIntervalCount(c => c + 1), 1000);

    return (
        <Sofa title="useTimeout & useInterval">
            <Stack gap="1rem">
                <Text>Timeout Message: {timeoutText}</Text>
                <Text>Interval Count: {intervalCount}</Text>
            </Stack>
        </Sofa>
    );
};

const BrowserAPIsDemo = () => {
    const { width, height } = useWindowSize();
    const isOnline = useOnlineStatus();

    return (
        <Sofa title="useWindowSize & useOnlineStatus">
            <Stack gap="1rem">
                <Text>Window Size: {width}px x {height}px</Text>
                <Text>Online Status: {isOnline ? '✅ Online' : '❌ Offline'}</Text>
            </Stack>
        </Sofa>
    );
};

const ClipboardDemo = () => {
    const { addToast } = useToast();
    const [copiedText, copy] = useCopyToClipboard();

    const handleCopy = async () => {
        const success = await copy('Hello from ZwheUI hooks!');
        if (success) {
            addToast({ title: 'Copied!', description: 'Text copied to clipboard.', variant: 'success' });
        } else {
            addToast({ title: 'Failed', description: 'Could not copy text.', variant: 'error' });
        }
    };

    return (
        <Sofa title="useCopyToClipboard">
            <Stack gap="1rem" align="start">
                <Button onClick={handleCopy}>Copy Text</Button>
                <Text size="sm">Last copied: {copiedText || 'none'}</Text>
            </Stack>
        </Sofa>
    );
};

const GeolocationDemo = () => {
    const geoState = useGeolocation();

    return (
        <Sofa title="useGeolocation">
            {geoState.loading ? (
                <Spinner />
            ) : geoState.error ? (
                <Text color="error">{geoState.error}</Text>
            ) : (
                <pre style={{ fontSize: '12px', whiteSpace: 'pre-wrap' }}>
                    {JSON.stringify({
                        latitude: geoState.latitude,
                        longitude: geoState.longitude,
                        accuracy: geoState.accuracy,
                    }, null, 2)}
                </pre>
            )}
        </Sofa>
    );
};

const UpdateEffectDemo = () => {
    const [count, setCount] = useState(0);
    const { addToast } = useToast();

    useEffect(() => {
        addToast({ title: 'useEffect', description: 'Runs on initial mount AND updates.' });
    }, [count]);

    useUpdateEffect(() => {
        addToast({ title: 'useUpdateEffect', description: 'Runs ONLY on updates.' });
    }, [count]);

    return (
        <Sofa title="useUpdateEffect">
             <Stack gap="1rem" align="start">
                 <Text>Compare `useEffect` (runs on mount) with `useUpdateEffect` (skips mount). Check the toast notifications.</Text>
                <Button onClick={() => setCount(c => c + 1)}>Increment ({count})</Button>
            </Stack>
        </Sofa>
    );
};

const EventListenerDemo = () => {
    const [key, setKey] = useState('');
    useEventListener('keydown', (e: KeyboardEvent) => {
        setKey(e.key);
    });

    return (
        <Sofa title="useEventListener">
            <Stack gap="1rem">
                <Text>Press any key to see it registered here.</Text>
                <Text>Last key pressed: <Kbd>{key}</Kbd></Text>
            </Stack>
        </Sofa>
    )
}

export const HooksDemo = () => {
    const documentation = `# Utility Hooks
    
A collection of useful hooks for managing timers, state, browser APIs, and effects.`;

    const fullSourceCode = `// Showing useToggle as an example.
// See src/core/hooks/ for all implementations.
import { useState, useCallback } from 'react';

export const useToggle = (initialState: boolean = false): [boolean, () => void] => {
    const [state, setState] = useState(initialState);
    const toggle = useCallback(() => setState(state => !state), []);
    return [state, toggle];
};`;

    return (
        <DemoSection
            title="Utility Hooks"
            description="A showcase of the various utility hooks available in ZwheUI for common development patterns."
            livePreview={
                <Stack gap="2rem">
                    <ToggleDemo />
                    <TimerHooksDemo />
                    <BrowserAPIsDemo />
                    <ClipboardDemo />
                    <GeolocationDemo />
                    <UpdateEffectDemo />
                    <EventListenerDemo />
                </Stack>
            }
            propControls={
                <Text color="textSecondary">
                    These are interactive demonstrations. Interact with the previews to see the hooks in action.
                </Text>
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
