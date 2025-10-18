
import React, { useState } from 'react';
import { RadioGroup, RadioGroupItem, Sofa, Text, Stack } from '../src/components';

export const RadioGroupDemo = () => {
    const [plan, setPlan] = useState('free');

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Radio Group</Text>
                <Text>A set of checkable buttons, where only one can be selected at a time.</Text>
                <RadioGroup value={plan} onChange={setPlan} name="subscription-plan" label="Select a Plan">
                    <RadioGroupItem value="free" label="Free Tier" />
                    <RadioGroupItem value="pro" label="Pro Tier" />
                    <RadioGroupItem value="enterprise" label="Enterprise Tier" />
                </RadioGroup>
                <Text>Selected plan: {plan}</Text>
            </Stack>
        </Sofa>
    );
};
