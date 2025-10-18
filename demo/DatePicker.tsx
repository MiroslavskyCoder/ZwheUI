
import React, { useState } from 'react';
import { DatePicker, Sofa, Text, Stack } from '../src/components';

export const DatePickerDemo = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">Date Picker</Text>
                <Text>An input that allows users to select a date from a calendar.</Text>
                <DatePicker label="Event Date" value={date} onChange={setDate} />
                <Text>Selected Date: {date ? date.toDateString() : 'None'}</Text>
            </Stack>
        </Sofa>
    );
};
