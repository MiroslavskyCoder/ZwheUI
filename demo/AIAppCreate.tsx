import React, { useState, useMemo, useEffect } from 'react';
import {
    Sofa, Stack, Text, Textarea, Button, Grid, CodeEditor, Spinner, useToast, Icon, Card,
    XmlRenderer,
    IconButton,
    Input,
    Select,
    Switch,
    Slider,
    ColorPicker,
    ButtonGroup,
    Command,
    Code,
    DataTable,
    Flex,
    Tooltip,
    Alert,
    Stat,
    Modal
} from '../src/components';
import { useTheme } from '../src/core';
import { GoogleGenAI } from '@google/genai';
import { ArrowDownIcon, ArrowUpIcon, MagicWandIcon, MenuIcon, MinusSquareIcon, PlusIcon } from '../src/icons';
import { CodePreview } from '../src/components/Code/CodePreview';

const AIAppCreate = () => {
    const { theme } = useTheme();
    const { addToast } = useToast();
    const [prompt, setPrompt] = useState('A simple login form with a title "Welcome Back", an email input, a password input, and a primary "Sign In" button. Put it inside a Card.');
    const [generatedCode, setGeneratedCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [iframeKey, setIframeKey] = useState(0); 
    const [keyAPI, setKeyAPI] = useState('');

    const availableComponents = "Alert, Avatar, Badge, Blockquote, Button, Card, Card.Header, Card.Body, Card.Footer, Card.Title, Card.Subtitle, Card.Text, Card.Image, Card.Actions, Card.Action, Center, Checkbox, Code, Container, Divider, Flex, Grid, Grid.Item, Header, Header.Left, Header.Right, Icon, IconButton, Image, Input, Kbd, Layer, Link, List, ListItem, ListItemText, Markdown, Message, PageHeader, PinInput, Progress, RadioGroup, RadioGroupItem, Rating, Search, Select, Sidebar, SidebarNav, SidebarNavItem, Skeleton, Slider, Sofa, Spinner, Stack, Stat, Switch, Table, TableHeader, TableBody, TableRow, TableHead, TableCell, Tabs, TabList, Tab, TabPanels, TabPanel, Tag, Text, Textarea, TextInput, Timeline, TimelineItem, TimelineConnector, TimelineDot, TimelineContent, Tooltip";

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
            const ai = new GoogleGenAI({ apiKey: keyAPI });
            const fullPrompt = constructGeminiPrompt(prompt);
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: fullPrompt,
            });

            const code = response.text.trim();
            setGeneratedCode(code);
            setIframeKey(key => key + 1); // Force iframe to re-render

        } catch (error: any) {
            console.error("Error generating code:", error);
            if (error.message && error.message.includes('Requested entity was not found.')) {
                addToast({
                    title: 'API Key Error',
                    description: 'The selected API key appears to be invalid. Please select a valid key.',
                    variant: 'error',
                }); 
            } else {
                addToast({
                    title: 'Generation Failed',
                    description: error.message || 'An unknown error occurred.',
                    variant: 'error',
                });
            }
        } finally {
            setIsLoading(false);
        }
    }; 
    return (
        <Sofa>
            <Stack gap="1.5rem">
                <Text as="h2" size="1.5rem" weight="600">AI App Creator</Text>
                <Text color="textSecondary">Describe a user interface, and the AI will generate the code using ZwheUI components. Right-click the preview to inspect elements.</Text>

                <Grid minItemWidth='400px' gap="1.5rem" style={{alignItems: 'start'}}>
                    <Grid.Item colSpan={2}>
                        <Textarea
                            value={keyAPI}
                            onChange={e => setKeyAPI(e.target.value)}
                            rows={2}
                            placeholder="e.g., AIAppCreatorKey"
                        />
                    </Grid.Item>
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
                                <CodeEditor value={generatedCode} onChange={setGeneratedCode} showLineNumbers />
                            </div>
                        </Sofa>
                    </Grid.Item>

                    <Grid.Item colSpan={2}>
                        <Sofa title="Real Live Preview">
                            <XmlRenderer 
                                xml={generatedCode.replace(/`/g, '\\`')} 
                                key={iframeKey}
                                components={{
                                    Sofa,
                                    Stack,
                                    Text,
                                    Textarea,
                                    Button,
                                    Grid,
                                    CodeEditor,
                                    Icon,
                                    Card,
                                    XmlRenderer,
                                    IconButton,
                                    Input,
                                    Select, 
                                    Switch,
                                    Slider,
                                    ColorPicker,
                                    "Grid.Item": Grid.Item,
                                    "Card.Item": Card.Item,
                                    "Card.Header": Card.Header,
                                    "Card.Footer": Card.Footer,
                                    "Card.Body": Card.Body,
                                    "Card.Title": Card.Title,
                                    "Card.Description": Card.Description,
                                    "Card.Image": Card.Image,
                                    "Card.Actions": Card.Actions,
                                    "Card.Action": Card.Action,
                                    "Card.Subtitle": Card.Subtitle,
                                    "Card.Text": Card.Text,
                                    ButtonGroup, 
                                    Spinner,
                                    MagicWandIcon, 
                                    PlusIcon,
                                    MinusSquareIcon,
                                    ArrowUpIcon,
                                    ArrowDownIcon,
                                    MenuIcon, 
                                    Code,
                                    CodePreview,
                                    DataTable,
                                    Flex,
                                    Tooltip,
                                    Alert,
                                    Stat,
                                    Modal 
                                }}
                            />
                        </Sofa>
                    </Grid.Item>
                </Grid>
            </Stack>
        </Sofa>
    );
};

// Sofa 16:9 size, градиент неон, вход с использованием Passkey

export const AIAppCreateDemo = () => <AIAppCreate />;