
import React, { useState } from 'react';
import { FileUpload, Sofa, Text, Stack } from '../src/components';

export const FileUploadDemo = () => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <Sofa>
            <Stack gap="1rem">
                <Text as="h2" size="1.5rem" weight="600">File Upload</Text>
                <Text>A drag-and-drop file input component.</Text>
                <FileUpload onFileSelect={setFile} />
                {file && <Text size="14px">File ready for upload: {file.name} ({Math.round(file.size / 1024)} KB)</Text>}
            </Stack>
        </Sofa>
    );
};
