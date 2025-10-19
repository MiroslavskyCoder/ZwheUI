
import React, { useState } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextInput } from '../TextInput/TextInput';
import { ButtonGroup, IconButton } from '..';
import { Flex } from '../Flex/Flex';

// FIX: The CheckIcon and CloseIcon were not exported from the icons module.
// The incorrect import has been removed, and these local placeholder definitions are used instead.
const CheckIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>;
const CloseIcon = () => <svg viewBox="0 0 24 24" width="1em" height="1em" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>;


interface EditableProps {
    defaultValue: string;
    onSave: (value: string) => void;
}

export const Editable: React.FC<EditableProps> = ({ defaultValue, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(defaultValue);

    const handleSave = () => {
        onSave(value);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setValue(defaultValue);
        setIsEditing(false);
    };

    if (isEditing) {
        return (
            <Flex align="center" gap="0.5rem">
                <TextInput
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSave();
                        if (e.key === 'Escape') handleCancel();
                    }}
                    autoFocus
                />
                <ButtonGroup isAttached>
                    <IconButton icon={CheckIcon} aria-label="Save" onClick={handleSave} />
                    <IconButton icon={CloseIcon} aria-label="Cancel" onClick={handleCancel} />
                </ButtonGroup>
            </Flex>
        );
    }

    return (
        <Text onClick={() => setIsEditing(true)} style={{ cursor: 'pointer', borderBottom: '1px dashed grey', padding: '0.5rem 0.75rem' }}>
            {value}
        </Text>
    );
};
