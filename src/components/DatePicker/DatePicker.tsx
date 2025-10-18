
import React, { useState } from 'react';
import { Popper, PopperTrigger, PopperContent } from '../Popper/Popper';
import { Calendar } from '../Calendar/Calendar';
import { Input } from '../Input/Input';

interface DatePickerProps {
    value?: Date;
    onChange: (date: Date) => void;
    label?: string;
    className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({ value, onChange, label, className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dateString = value ? value.toLocaleDateString() : '';

    const handleDateChange = (date: Date) => {
        onChange(date);
        setIsOpen(false);
    };

    return (
        <Popper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className={className}>
                <PopperTrigger>
                    <Input
                        label={label}
                        value={dateString}
                        readOnly
                        placeholder="Select a date"
                        style={{ cursor: 'pointer' }}
                    />
                </PopperTrigger>
                <PopperContent>
                    <Calendar value={value} onChange={handleDateChange} />
                </PopperContent>
            </div>
        </Popper>
    );
};
