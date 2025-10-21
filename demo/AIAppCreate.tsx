

import React, { useState, useMemo, useEffect } from 'react';
import {
    Sofa, Stack, Text, Textarea, Button, Grid, CodeEditor, Spinner, useToast, Icon, Card
} from '../src/components';
import { useTheme } from '../src/core';
import { GoogleGenAI } from '@google/genai';
import { MagicWandIcon } from '../src/icons';

// Expose components to window for iframe access
import * as ZwheUI from '../src/components';
if (typeof window !== 'undefined') {
    (window as any).ZwheUI = ZwheUI;
}


const AIAppCreate = () => {
    const { theme } = useTheme();
    const { addToast } = useToast();
    const [prompt, setPrompt] = useState('A simple login form with a title "Welcome Back", an email input, a password input, and a primary "Sign In" button. Put it inside a Card.');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [iframeKey, setIframeKey] = useState(0);

    const availableComponents = "Alert, Avatar, Badge, Blockquote, Button, Card, Center, Checkbox, Code, Container, Divider, Flex, Grid, Grid.Item, Header, Header.Left, Header.Right, Icon, IconButton, Image, Input, Kbd, Layer, Link, List, ListItem, ListItemText, Markdown, Message, PageHeader, PinInput, Progress, RadioGroup, RadioGroupItem, Rating, Search, Select, Sidebar, SidebarNav, SidebarNavItem, Skeleton, Slider, Sofa, Spinner, Stack, Stat, Switch, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Tabs, TabList, Tab, TabPanels, TabPanel, Tag, Text, Textarea, TextInput, Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent, Tooltip";

    const constructGeminiPrompt = (userPrompt: string) => `You are an expert frontend developer specializing in the ZwheUI component library. Your task is to take a user's description of a user interface and generate the corresponding layout code.

**RULES:**
1.  You MUST ONLY use components from the following list: ${availableComponents}.
2.  The output format MUST be an XML-like structure that can be parsed by an XmlRenderer component.
3.  Do NOT include any explanations, markdown formatting (like \`\`\`xml), or any text outside of the final XML code block.
4.  Attributes should be passed as XML attributes.
5.  For the 'style' attribute, you MUST use a JSON string, for example: \`style='{"color": "red", "padding": "1rem"}'\`.
6.  For icon components (e.g., inside an IconButton), use the component name directly as a self-closing tag, like \`<HomeIcon />\`. Available icons are named like components (e.g., HomeIcon, SettingsIcon, UserIcon, PlusIcon, TrashIcon, etc.).
7.  Keep the layout simple and clean. Use \`Stack\` and \`Grid\` for layout. Wrap content in a \`Card\` or \`Sofa\` where appropriate to make it look good.

**User Request:**
"${userPrompt}"

**Generated ZwheUI XML:**
`;

    const handleGenerate = async () => {
        if (!prompt.trim()) {
            addToast({ title: 'Error', description: 'Prompt cannot be empty.', variant: 'error' });
            return;
        }
        setIsLoading(true);
        setGeneratedCode('');
        try {
            if (!(window as any).aistudio) {
                throw new Error("This feature requires the AI Studio environment. Ensure you are running this within AI Studio.");
            }
            const hasKey = await (window as any).aistudio.hasSelectedApiKey();
            if (!hasKey) {
                await (window as any).aistudio.openSelectKey();
            }

            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const fullPrompt = constructGeminiPrompt(prompt);
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: fullPrompt,
            });

            const code = response.text.trim();
            setGeneratedCode(code);
            setIframeKey(key => key + 1); // Force iframe to re-render

        } catch (error) {
            console.error("Error generating code:", error);
            addToast({
                title: 'Generation Failed',
                description: error.message || 'An unknown error occurred.',
                variant: 'error',
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    // Memoize the srcDoc to prevent re-calculation on every render.
    const iframeSrcDoc = useMemo(() => {
        // We return an empty doc if there is no code, to avoid showing a broken iframe.
        if (!generatedCode) return '<html><body style="background: transparent;"></body></html>';

        const html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>ZwheUI Preview</title>
                <script type="importmap">
                {
                    "imports": {
                        "react-dom/client": "https://aistudiocdn.com/react-dom@^19.2.0/client",
                        "react": "https://aistudiocdn.com/react@^19.2.0"
                    }
                }
                </script>
                <style>
                    html, body { margin: 0; padding: 0; }
                    body {
                        background-color: transparent;
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                        color: #e6edf3;
                    }
                </style>
            </head>
            <body>
                <div id="root"></div>
                <script type="module">
                    try {
                        const React = await import('react');
                        const ReactDOM = await import('react-dom/client');
                        
                        // Access components exposed from the parent window
                        const { ThemeProvider, XmlRenderer, ...allComponents } = window.parent.ZwheUI;
                        
                        // Filter for actual components (PascalCase) and icons
                        const componentMap = {};
                        for (const key in allComponents) {
                            if (key[0] >= 'A' && key[0] <= 'Z') {
                                componentMap[key] = allComponents[key];
                            }
                        }

                        const App = () => {
                            return React.createElement(ThemeProvider, null, 
                                React.createElement('div', { style: { padding: '1rem' } }, 
                                    React.createElement(XmlRenderer, {
                                        xml: \`${generatedCode.replace(/`/g, '\\`')}\`,
                                        components: componentMap
                                    })
                                )
                            );
                        };

                        const root = ReactDOM.createRoot(document.getElementById('root'));
                        root.render(React.createElement(App));
                    } catch(e) {
                        document.body.innerHTML = '<pre style="color: red;">Error rendering preview: ' + e.message + '</pre>';
                        console.error(e);
                    }
                </script>
            </body>
            </html>
        `;
        return html;
    }, [generatedCode]);

    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">AI App Creator</Text>
                <Text color="textSecondary">Describe a user interface, and the AI will generate the code using ZwheUI components. Right-click the preview to inspect elements.</Text>

                <Grid minItemWidth='400px' gap="1.5rem" style={{alignItems: 'start'}}>
                    <Grid.Item colSpan={2}>
                        <Stack>
                            <Textarea
                                value={prompt}
                                onChange={e => setPrompt(e.target.value)}
                                rows={5}
                                placeholder="e.g., A pricing page with three cards in a row..."
                            />
                            <Button onClick={handleGenerate} disabled={isLoading} style={{alignSelf: 'start'}}>
                                {isLoading ? <Spinner size={20} /> : <Icon as={MagicWandIcon} size={16} />}
                                <span>Generate UI</span>
                            </Button>
                        </Stack>
                    </Grid.Item>
                    
                    <Grid.Item colSpan={2}>
                        <Sofa title="Generated Code">
                            <div style={{height: '250px'}}>
                                <CodeEditor value={generatedCode} onChange={setGeneratedCode} />
                            </div>
                        </Sofa>
                    </Grid.Item>

                    <Grid.Item colSpan={2}>
                        <Sofa title="Real Live Preview (in an iframe)">
                            <div style={{
                                height: '400px',
                                border: `1px solid ${theme.colors.border}`,
                                borderRadius: '8px',
                                background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97/B4MhgKIM1ALOBMD2/4E4/L8fBoMAJgA2AAYDAwBxFgXRAO63AAAAAElFTkSuQmCC) repeat',
                                position: 'relative'
                            }}>
                                <iframe
                                    key={iframeKey} // Force re-render on code change
                                    srcDoc={iframeSrcDoc}
                                    title="Live Preview"
                                    sandbox="allow-scripts allow-same-origin"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border: 'none',
                                        borderRadius: 'inherit',
                                        background: 'transparent'
                                    }}
                                />
                            </div>
                        </Sofa>
                    </Grid.Item>
                </Grid>
            </Stack>
        </Sofa>
    );
};

export const AIAppCreateDemo = () => <AIAppCreate />;
