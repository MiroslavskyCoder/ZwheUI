
import React, { useState, useEffect } from 'react';
import { 
    Sofa, Stack, Text, Accordion, AccordionItem, AccordionTrigger, AccordionContent, 
    CodeEditor, Grid, CodePreview
} from '../src/components';
import { useTheme } from '../src/core';


interface DemoSectionProps {
    title: string;
    description: React.ReactNode;
    initialCode?: string;
    livePreview?: React.ReactNode;
    propControls: React.ReactNode;
    documentation: string;
    fullSourceCode: string;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ 
    title, 
    description, 
    initialCode,
    livePreview,
    propControls, 
    documentation, 
    fullSourceCode 
}) => {
    const { theme } = useTheme();
    const [code, setCode] = useState(initialCode || '');

    // When the props change from the configurator, update the code in the editor.
    useEffect(() => {
        if (initialCode !== undefined) {
            setCode(initialCode);
        }
    }, [initialCode]);

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Stack>
                    <Text as="h2" size="1.5rem" weight="600">{title}</Text>
                    <Text>{description}</Text>
                </Stack>
                
                <Grid minItemWidth="300px" gap="2rem" style={{ alignItems: 'start' }}>
                    <Grid.Item>
                        <Accordion defaultValue="props" >
                            <AccordionItem value="props">
                                <AccordionTrigger><Text weight="600">Props</Text></AccordionTrigger>
                                <AccordionContent>
                                    <Stack gap="1.5rem" style={{ paddingTop: '1rem' }}>
                                        {propControls}
                                    </Stack>
                                </AccordionContent>
                            </AccordionItem>
                             <AccordionItem value="docs">
                                <AccordionTrigger><Text weight="600">Documentation</Text></AccordionTrigger>
                                <AccordionContent>
                                     <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace', fontSize: '13px', color: theme.colors.textSecondary, lineHeight: '1.5', paddingTop: '1rem' }}>
                                        {documentation}
                                    </pre>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </Grid.Item>

                    <Grid.Item colSpan={2}>
                        <Stack gap="1.5rem">
                            <Sofa title="Live Preview">
                                {livePreview ?? <CodePreview code={code} />}
                            </Sofa>

                            {initialCode !== undefined && (
                                <Sofa title="Editable Code">
                                    <div style={{ height: '250px' }}>
                                        <CodeEditor value={code} onChange={setCode} />
                                    </div>
                                    <Text size="xs" color={theme.colors.textSecondary} style={{marginTop: '0.5rem'}}>
                                        Note: Editing the code here directly may be overwritten if you change a value in the "Props" panel.
                                    </Text>
                                </Sofa>
                            )}

                             <Sofa title="Full Component Source">
                                <div style={{ height: '300px', overflow: 'auto' }}>
                                     <CodeEditor value={fullSourceCode} onChange={() => {}} />
                                </div>
                            </Sofa>

                        </Stack>
                    </Grid.Item>
                </Grid>
            </Stack>
        </Sofa>
    );
};