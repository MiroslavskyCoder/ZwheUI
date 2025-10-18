import React, { useState, useMemo } from 'react';
import {
    Tabs, TabList, Tab, TabPanels, TabPanel, Stack, Grid,
    Sofa, Text, Button, SegmentedControl
} from '../src/components';
import { CharacterSelector } from '../temp/CharacterSelector';
import { ChatView } from '../temp/ChatView';
import { characters, dummyCharacter } from '../temp/dummyData';
import { UserDrawerInformation } from '../temp/UserDrawerInformation';
import { InstructionsGettingTokenDrawer } from '../temp/InstructionsGettingTokenDrawer';
import { DynamicBackground, backgroundEffects } from '../temp/DynamicBackground';
import Fireworks from '../temp/Fireworks';
import { ContextMenu } from '../temp/ContextMenu';
import { ContextMenuCommandsInput } from '../temp/ContextMenuCommandsInput';
import { MarkdownEditContextMenu } from '../temp/MarkdownEditContextMenu';
import { COMMANDS } from '../temp/constants';
import { Character } from '../temp/types';

const WidgetsDemo = () => {
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
    const [isInstructionsDrawerOpen, setIsInstructionsDrawerOpen] = useState(false);
    const [bgEffect, setBgEffect] = useState<backgroundEffects>('default');

    return (
        <Stack gap="2rem">
            <DynamicBackground effect={bgEffect} />
            <Sofa>
                <Stack gap="1rem">
                    <Text as="h2" size="1.5rem" weight="600">Drawer Components</Text>
                    <Text>These drawers have been refactored to use the ZwheUI &lt;Drawer&gt; component.</Text>
                    <Stack direction="row" gap="1rem">
                        <Button onClick={() => setIsUserDrawerOpen(true)}>Open User Info Drawer</Button>
                        <Button onClick={() => setIsInstructionsDrawerOpen(true)}>Open Instructions Drawer</Button>
                    </Stack>
                </Stack>
            </Sofa>

            <Sofa>
                 <Stack gap="1rem">
                    <Text as="h2" size="1.5rem" weight="600">Context Menus</Text>
                    <Text>Various context menu examples, refactored with ZwheUI components.</Text>
                    <Grid minItemWidth='300px' gap="1rem">
                        <ContextMenu x={0} y={0} isOpen={true} onClose={() => {}} />
                        <MarkdownEditContextMenu onFormat={(f) => alert(`Format: ${f}`)} />
                        <div style={{position: 'relative', minHeight: '200px', width: '100%'}}>
                             <ContextMenuCommandsInput commands={COMMANDS} selectedIndex={0} onSelect={(c) => alert(c.name)} />
                        </div>
                    </Grid>
                </Stack>
            </Sofa>
            
            <Sofa>
                <Stack gap="1rem">
                    <Text as="h2" size="1.5rem" weight="600">Tabs Component</Text>
                    <Text>A simple demonstration of the Tabs component.</Text>
                    <Tabs defaultValue="tab1">
                        <TabList>
                            <Tab value="tab1">Tab 1</Tab>
                            <Tab value="tab2">Tab 2</Tab>
                            <Tab value="tab3">Tab 3</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel value="tab1">
                                <Text style={{ padding: '1rem 0' }}>This is the content for Tab 1.</Text>
                            </TabPanel>
                            <TabPanel value="tab2">
                                <Text style={{ padding: '1rem 0' }}>This is the content for Tab 2.</Text>
                            </TabPanel>
                            <TabPanel value="tab3">
                                <Text style={{ padding: '1rem 0' }}>This is the content for Tab 3.</Text>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Stack>
            </Sofa>

            <Sofa>
                 <Stack gap="1rem">
                    <Text as="h2" size="1.5rem" weight="600">Background Effects &amp; Fireworks</Text>
                    <Text>Dynamic backgrounds using HTML Canvas, now selectable via a ZwheUI SegmentedControl.</Text>
                    <SegmentedControl
                        value={bgEffect}
                        onChange={(val) => setBgEffect(val as backgroundEffects)}
                        options={[
                            { label: 'Default', value: 'default' },
                            { label: 'Anime Rays', value: 'animeRays' },
                            { label: 'Matrix', value: 'matrix' },
                            { label: 'Starlight', value: 'starlight' },
                            { label: 'MiSide', value: 'miside' },
                            { label: 'Confetti', value: 'confetti' },
                        ]}
                    />
                     <div style={{position: 'relative', height: '200px', border: '1px solid #333', borderRadius: '8px', overflow: 'hidden'}}>
                        <Fireworks />
                        <div style={{position: 'absolute', inset: 0, display: 'grid', placeContent: 'center'}}>
                            <Text>Fireworks Effect Container</Text>
                        </div>
                    </div>
                </Stack>
            </Sofa>

            {/* Drawer instances */}
            <UserDrawerInformation
                isOpen={isUserDrawerOpen}
                onClose={() => setIsUserDrawerOpen(false)}
                onOpenSettings={() => alert('Open settings!')}
            />
            <InstructionsGettingTokenDrawer
                isOpen={isInstructionsDrawerOpen}
                onClose={() => setIsInstructionsDrawerOpen(false)}
            />
        </Stack>
    );
}


export const TempDemo = () => {
    const [view, setView] = useState('selector');
    const [selectedCharacter, setSelectedCharacter] = useState<Character>(dummyCharacter);

    const handleSelectCharacter = (character: Character) => {
        setSelectedCharacter(character);
        setView('chat');
    };

    const chatView = useMemo(() => {
        return (
            <div style={{minHeight: 'calc(100vh - 20rem)'}}>
                 {view === 'chat' 
                    ? <ChatView character={selectedCharacter} onBack={() => setView('selector')} />
                    : <CharacterSelector characters={characters} onSelectCharacter={handleSelectCharacter} />
                }
            </div>
        )
    }, [view, selectedCharacter]);


    return (
        <Tabs defaultValue="chat">
            <Stack align="center" style={{marginBottom: '2rem'}}>
                 <TabList>
                    <Tab value="chat">AI Chat Demo</Tab>
                    <Tab value="widgets">Widgets &amp; FX</Tab>
                </TabList>
            </Stack>
            <TabPanels>
                <TabPanel value="chat">
                    {chatView}
                </TabPanel>
                <TabPanel value="widgets">
                    <WidgetsDemo />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};