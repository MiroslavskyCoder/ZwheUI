
import React from 'react';
import { Sofa, Stack, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Code, Center } from '../src/components';
import { useTheme } from '../src/core';

interface DemoSectionProps {
    title: string;
    description: React.ReactNode;
    livePreview: React.ReactNode;
    propControls: React.ReactNode;
    documentation: string;
    sourceCode: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ title, description, livePreview, propControls, documentation, sourceCode }) => {
    const { theme } = useTheme();

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">{title}</Text>
                <Text>{description}</Text>
                
                <Tabs defaultValue="preview">
                    <TabList>
                        <Tab value="preview">Preview</Tab>
                        <Tab value="props">Props</Tab>
                        <Tab value="docs">Docs</Tab>
                        <Tab value="source">Source</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="preview">
                            <Sofa style={{ marginTop: '1rem' }}>
                                <Center style={{ minHeight: '150px' }}>
                                    {livePreview}
                                </Center>
                            </Sofa>
                        </TabPanel>
                        <TabPanel value="props">
                            <Sofa style={{ marginTop: '1rem' }}>
                                {propControls}
                            </Sofa>
                        </TabPanel>
                        <TabPanel value="docs">
                            <Sofa style={{ marginTop: '1rem' }}>
                                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '13px', color: theme.colors.textSecondary, lineHeight: '1.5' }}>
                                    {documentation}
                                </pre>
                            </Sofa>
                        </TabPanel>
                        <TabPanel value="source">
                            <Sofa style={{ marginTop: '1rem' }}>
                                <pre style={{ whiteSpace: 'pre-wrap', tabSize: 2, MozTabSize: 2, maxHeight: '500px', overflow: 'auto' }}>
                                    <Code style={{ display: 'block', padding: '1rem' }}>
                                        {sourceCode}
                                    </Code>
                                </pre>
                            </Sofa>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Stack>
        </Sofa>
    );
};
