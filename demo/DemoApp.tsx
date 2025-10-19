import React from 'react';
// FIX: `useBreakpoint` is not exported from `../src/components`. It should be imported from `../src/core`.
import { Grid, Stack, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Header, Footer } from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';
import { useBreakpoint } from '../src/core/hooks/useMedia';

import { AccordionDemo } from './Accordion';
import { AlertDemo } from './Alert';
import { AnimatedBlockDemo } from './AnimatedBlock';
import { AudioDemo } from './Audio';
import { AvatarDemo } from './Avatar';
import { BackdropDemo } from './Backdrop';
import { BadgeDemo } from './Badge';
import { BreadcrumbsDemo } from './Breadcrumbs';
import { ButtonDemo } from './Button';
import { CardDemo } from './Card';
import { ChartsDemo } from './Charts';
import { CheckboxDemo } from './Checkbox';
import { ColorPickerDemo } from './ColorPicker';
import { ComboboxDemo } from './Combobox';
import { ContainerDemo } from './Container';
import { DataTableDemo } from './DataTable';
import { DatePickerDemo } from './DatePicker';
import { DialogDemo } from './Dialog';
import { DrawerDemo } from './Drawer';
import { DropdownDemo } from './Dropdown';
import { FileUploadDemo } from './FileUpload';
import { FloatingActionButtonDemo } from './FloatingActionButton';
import { FooterDemo } from './Footer';
import { GraphicsNodeEditorDemo } from './GraphicsNodeEditor';
import { GridDemo } from './Grid';
import { HeaderDemo } from './Header';
import { HoverCardDemo } from './HoverCard';
import { IconDemo } from './Icon';
import { InputDemo } from './Input';
import { KbdDemo } from './Kbd';
import { LinkDemo } from './Link';
import { ListDemo } from './List';
import { MenuDemo } from './Menu';
import { ModalDemo } from './Modal';
import { NavDemo } from './Nav';
import { NumberInputDemo } from './NumberInput';
import { PaginationDemo } from './Pagination';
import { PopoverDemo } from './Popover';
import { ProgressDemo } from './Progress';
import { RadioGroupDemo } from './RadioGroup';
import { RatingDemo } from './Rating';
import { SearchDemo } from './Search';
import { SegmentedControlDemo } from './SegmentedControl';
import { SelectDemo } from './Select';
import { SidebarDemo } from './Sidebar';
import { SkeletonDemo } from './Skeleton';
import { SliderDemo } from './Slider';
import { SofaDemo } from './Sofa';
import { SparklineDemo } from './Sparkline';
import { SpeedDialDemo } from './SpeedDial';
import { SpinnerDemo } from './Spinner';
import { StackDemo } from './Stack';
import { StepperDemo } from './Stepper';
import { SwitchDemo } from './Switch';
import { TableDemo } from './Table';
import { TabsDemo } from './Tabs';
import { TextDemo } from './Text';
import { TextareaDemo } from './Textarea';
import { TextInputDemo } from './TextInput';
import { ThemeSwitcher } from '../src/components/ThemeSwitcher/ThemeSwitcher';
import { TimelineDemo } from './Timeline';
import { ToastDemo } from './Toast';
import { ToggleButtonDemo } from './ToggleButton';
import { TransferListDemo } from './TransferList';
import { TreeViewDemo } from './TreeView';
import { VideoDemo } from './Video';
import { XmlRendererDemo } from './XmlRenderer';
import { XNodeTreeDemo } from './XNodeTree';

import { ExampleAudio, ExampleFileBrowser, ExampleVideo } from '../examples';

export const DemoApp = () => {
    const { theme } = useTheme();
    const isMobile = !useBreakpoint('sm');

    const demos = [
        <AlertDemo key="alert" />,
        <AnimatedBlockDemo key="animated-block" />,
        <BackdropDemo key="backdrop" />,
        <ButtonDemo key="button" />,
        <CardDemo key="card" />,
        <CheckboxDemo key="checkbox" />,
        <ColorPickerDemo key="color-picker" />,
        <ComboboxDemo key="combobox" />,
        <DialogDemo key="dialog" />,
        <GridDemo key="grid" />,
        <InputDemo key="input" />,
        <ListDemo key="list" />,
        <MenuDemo key="menu" />,
        <ModalDemo key="modal" />,
        <PaginationDemo key="pagination" />,
        <PopoverDemo key="popover" />,
        <ProgressDemo key="progress" />,
        <RatingDemo key="rating" />,
        <SearchDemo key="search" />,
        <SelectDemo key="select" />,
        <SkeletonDemo key="skeleton" />,
        <SliderDemo key="slider" />,
        <SofaDemo key="sofa" />,
        <StackDemo key="stack" />,
        <TabsDemo key="tabs" />,
        <TextDemo key="text" />,
        <TextareaDemo key="textarea" />,
        <TextInputDemo key="text-input" />,
        <XmlRendererDemo key="xml-renderer" />,
    ];
    
    const newDemos = [
        <AccordionDemo key="accordion" />,
        <AudioDemo key="audio" />,
        <AvatarDemo key="avatar" />,
        <BadgeDemo key="badge" />,
        <BreadcrumbsDemo key="breadcrumbs" />,
        <ContainerDemo key="container" />,
        <DataTableDemo key="datatable" />,
        <DatePickerDemo key="datepicker" />,
        <DrawerDemo key="drawer" />,
        <DropdownDemo key="dropdown" />,
        <FileUploadDemo key="fileupload" />,
        <FloatingActionButtonDemo key="fab" />,
        <FooterDemo key="footer" />,
        <HeaderDemo key="header" />,
        <HoverCardDemo key="hovercard" />,
        <IconDemo key="icon" />,
        <KbdDemo key="kbd" />,
        <LinkDemo key="link" />,
        <NavDemo key="nav" />,
        <NumberInputDemo key="numberinput" />,
        <RadioGroupDemo key="radiogroup" />,
        <SegmentedControlDemo key="segmentedcontrol" />,
        <SpeedDialDemo key="speeddial" />,
        <SpinnerDemo key="spinner" />,
        <SwitchDemo key="switch" />,
        <StepperDemo key="stepper" />,
        <TableDemo key="table" />,
        <TimelineDemo key="timeline" />,
        <ToastDemo key="toast" />,
        <ToggleButtonDemo key="togglebutton" />,
        <TransferListDemo key="transferlist" />,
        <TreeViewDemo key="treeview" />,
        <XNodeTreeDemo key="xnodetree" />,
        <VideoDemo key="video" />,
    ];

    const chartDemos = [
        <ChartsDemo key="charts" />,
        <SparklineDemo key="sparkline" />,
    ];
    
    const layoutDemos = [
        <SidebarDemo key="sidebar" />,
    ];

    const exampleDemos = [
        <ExampleFileBrowser key="file-browser" />,
        <ExampleVideo key="video-player" />,
        <ExampleAudio key="audio-player" />,
        <GraphicsNodeEditorDemo key="node-editor" />,
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: theme.colors.background, transition: 'background-color 0.3s' }}>
            <Header>
                <Header.Left>
                    <Stack direction="row" gap={theme.spacing.sm} align="center">
                        <Text as="h1" size={isMobile ? '1.25rem' : '1.5rem'} weight="700">ZwheUI</Text>
                        {!isMobile && <Text color={theme.colors.textSecondary}>Component Showcase</Text>}
                    </Stack>
                </Header.Left>
                <Header.Right>
                    <ThemeSwitcher />
                </Header.Right>
            </Header>

            <main style={{ flex: 1, padding: isMobile ? theme.spacing.md : theme.spacing.lg }}>
                <Tabs defaultValue="new">
                    <Stack align="center" gap={theme.spacing.lg}>
                        <TabList>
                            <Tab value="new">Newly Added</Tab>
                            <Tab value="original">Original Components</Tab>
                            <Tab value="layout">Layout & Charting</Tab>
                            <Tab value="examples">Examples</Tab>
                        </TabList>
                    </Stack>
                    <TabPanels>
                        <TabPanel value="new">
                            <Grid minItemWidth="350px" gap="1.5rem">
                                {newDemos}
                            </Grid>
                        </TabPanel>
                         <TabPanel value="original">
                            <Grid minItemWidth="350px" gap="1.5rem">
                                {demos}
                            </Grid>
                        </TabPanel>
                         <TabPanel value="layout">
                            <Grid minItemWidth="450px" gap="1.5rem">
                                {layoutDemos}
                                {chartDemos}
                            </Grid>
                        </TabPanel>
                         <TabPanel value="examples">
                            <Grid minItemWidth="400px" gap="1.5rem">
                                {exampleDemos}
                            </Grid>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </main>
            
            <Footer>
                <Text size="14px">© {new Date().getFullYear()} ZwheUI. All rights reserved.</Text>
            </Footer>
        </div>
    );
};