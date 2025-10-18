import React, { useState } from 'react';
import { Switch, Sofa, Text, Stack } from '../src/components';

export const SwitchDemo = () => {
    const [checked, setChecked] = useState(true);

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Switch</Text>
                <Text>A control that allows the user to toggle between two states.</Text>
                <Stack direction="row" gap="1rem" align="center">
                    <Switch checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                    <Switch checked={true} disabled />
                    <Switch checked={false} disabled />
                </Stack>
                <Text>Notifications are {checked ? 'On' : 'Off'}</Text>
            </Stack>
        </Sofa>
    );
};