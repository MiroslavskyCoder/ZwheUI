import React from 'react';
import { Card, List, ListItem, ListItemText, Sofa, Stack, Text, Divider } from '../src/components';

const FolderIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>;
const FileIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>;


const files = [
    { type: 'folder', name: 'Documents', modified: 'Yesterday' },
    { type: 'folder', name: 'Photos', modified: 'June 5, 2024' },
    { type: 'file', name: 'project-brief.pdf', modified: 'June 3, 2024' },
    { type: 'file', name: 'logo-final.svg', modified: 'May 28, 2024' },
];


export const ExampleFileBrowser = () => {
    return (
        <Sofa>
            <Stack gap="1rem">
                 <Text as="h2" size="1.5rem" weight="600">Example: File Browser</Text>
                 <Text>A showcase of how components like Card, List, and Stack can be combined to build a common UI pattern.</Text>
                 <Card title="My Files">
                    <List>
                        {files.map((file, index) => (
                           <React.Fragment key={file.name}>
                                <ListItem>
                                    <Stack direction="row" gap="1rem" align="center">
                                        {file.type === 'folder' ? <FolderIcon /> : <FileIcon />}
                                        <ListItemText primary={file.name} secondary={file.modified} />
                                    </Stack>
                                </ListItem>
                                {index < files.length - 1 && <Divider />}
                           </React.Fragment>
                        ))}
                    </List>
                 </Card>
            </Stack>
        </Sofa>
    );
};