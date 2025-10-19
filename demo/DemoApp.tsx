

import React from 'react';
import { Grid, Stack, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Header, Footer, Nav } from '../src/components';
import { useTheme } from '../src/core/theme/ThemeProvider';
import { useBreakpoint } from '../src/core/hooks/useMedia';

// General
import { ButtonDemo } from './Button';
import { IconDemo } from './Icon';
import { TextDemo } from './Text';
import { LinkDemo } from './Link';
import { KbdDemo } from './Kbd';
import { BadgeDemo } from './Badge';
import { TagDemo } from './Tag';
import { CodeDemo } from './Code';

// Layout
import { StackDemo } from './Stack';
import { GridDemo } from './Grid';
import { ContainerDemo } from './Container';
import { SofaDemo } from './Sofa';
import { HeaderDemo } from './Header';
import { FooterDemo } from './Footer';
import { SidebarDemo } from './Sidebar';
import { BoxDemo } from './Box';
import { FlexDemo } from './Flex';
import { CenterDemo } from './Center';
import { AspectRatioDemo } from './AspectRatio';
import { DividerDemo } from './Divider';

// Forms & Input
import { InputDemo } from './Input';
import { TextInputDemo } from './TextInput';
import { TextareaDemo } from './Textarea';
import { CheckboxDemo } from './Checkbox';
import { RadioGroupDemo } from './RadioGroup';
import { SwitchDemo } from './Switch';
import { SelectDemo } from './Select';
import { ComboboxDemo } from './Combobox';
import { SliderDemo } from './Slider';
import { NumberInputDemo } from './NumberInput';
import { FileUploadDemo } from './FileUpload';
import { ColorPickerDemo } from './ColorPicker';
import { DatePickerDemo } from './DatePicker';
import { SearchDemo } from './Search';
import { RatingDemo } from './Rating';
import { ToggleButtonDemo } from './ToggleButton';
import { IconButtonDemo } from './IconButton';
import { ButtonGroupDemo } from './ButtonGroup';
import { FormControlDemo } from './FormControl';
import { PinInputDemo } from './PinInput';
import { EditableDemo } from './Editable';

// Data Display
import { ListDemo } from './List';
import { TableDemo } from './Table';
import { DataTableDemo } from './DataTable';
import { AvatarDemo } from './Avatar';
import { CardDemo } from './Card';
import { AccordionDemo } from './Accordion';
import { TreeViewDemo } from './TreeView';
import { XNodeTreeDemo } from './XNodeTree';
import { TimelineDemo } from './Timeline';
import { ImageDemo } from './Image';

// Feedback & Overlays
import { AlertDemo } from './Alert';
import { ToastDemo } from './Toast';
import { SpinnerDemo } from './Spinner';
import { ProgressDemo } from './Progress';
import { SkeletonDemo } from './Skeleton';
import { ModalDemo } from './Modal';
import { DialogDemo } from './Dialog';
import { DrawerDemo } from './Drawer';
import { PopoverDemo } from './Popover';
import { HoverCardDemo } from './HoverCard';
import { BackdropDemo } from './Backdrop';
import { SnackbarDemo } from './Snackbar';
// import { ContextMenuDemo } from './ContextMenu';
// import { TooltipDemo } from './Tooltip';

// Navigation
import { NavDemo } from './Nav';
import { BreadcrumbsDemo } from './Breadcrumbs';
import { PaginationDemo } from './Pagination';
import { TabsDemo } from './Tabs';
import { StepperDemo } from './Stepper';
import { MenuDemo } from './Menu';
import { DropdownDemo } from './Dropdown';
import { FloatingActionButtonDemo } from './FloatingActionButton';
import { SpeedDialDemo } from './SpeedDial';
import { TransferListDemo } from './TransferList';

// Advanced
import { AnimatedBlockDemo } from './AnimatedBlock';
import { AudioDemo } from './Audio';
import { VideoDemo } from './Video';
import { ChartsDemo } from './Charts';
import { SparklineDemo } from './Sparkline';
import { XmlRendererDemo } from './XmlRenderer';
import { GraphicsNodeEditorDemo } from './GraphicsNodeEditor';
import { PhotoEditorDemo } from './PhotoEditor';

// Examples
import { ExampleFileBrowser, ExampleVideo, ExampleAudio, ExamplePhotoEditor, ExampleSignInPage } from '../examples';


export const DemoApp = () => {
    const { theme } = useTheme();
    const isMobile = !useBreakpoint('sm');

    const demos = {
        general: [
            <ButtonDemo key="button" />, <IconDemo key="icon" />, <TextDemo key="text" />,
            <LinkDemo key="link" />, <KbdDemo key="kbd" />, <BadgeDemo key="badge" />,
            <TagDemo key="tag" />, <CodeDemo key="code" />,
        ],
        layout: [
            <BoxDemo key="box" />, <FlexDemo key="flex" />, <CenterDemo key="center" />,
            <StackDemo key="stack" />, <GridDemo key="grid" />, <ContainerDemo key="container" />,
            <AspectRatioDemo key="aspect-ratio" />, <DividerDemo key="divider" />, <SofaDemo key="sofa" />,
            <HeaderDemo key="header" />, <FooterDemo key="footer" />, <SidebarDemo key="sidebar" />,
        ],
        forms: [
            <FormControlDemo key="form-control" />, <InputDemo key="input" />, <TextInputDemo key="text-input" />,
            <TextareaDemo key="textarea" />, <CheckboxDemo key="checkbox" />, <RadioGroupDemo key="radio-group" />,
            <SwitchDemo key="switch" />, <SelectDemo key="select" />, <ComboboxDemo key="combobox" />,
            <SliderDemo key="slider" />, <NumberInputDemo key="number-input" />, <PinInputDemo key="pin-input" />,
            <EditableDemo key="editable" />, <FileUploadDemo key="file-upload" />, <ColorPickerDemo key="color-picker" />,
            <DatePickerDemo key="date-picker" />, <SearchDemo key="search" />, <RatingDemo key="rating" />,
            <ToggleButtonDemo key="toggle-button" />, <IconButtonDemo key="icon-button" />, <ButtonGroupDemo key="button-group" />,
        ],
        dataDisplay: [
            <ListDemo key="list" />, <TableDemo key="table" />, <DataTableDemo key="data-table" />,
            <AvatarDemo key="avatar" />, <CardDemo key="card" />, <AccordionDemo key="accordion" />,
            <TreeViewDemo key="tree-view" />, <XNodeTreeDemo key="x-node-tree" />, <TimelineDemo key="timeline" />,
            <ImageDemo key="image" />,
        ],
        feedback: [
            <AlertDemo key="alert" />, <ToastDemo key="toast" />, <SnackbarDemo key="snackbar" />, <SpinnerDemo key="spinner" />,
            <ProgressDemo key="progress" />, <SkeletonDemo key="skeleton" />, <ModalDemo key="modal" />,
            <DialogDemo key="dialog" />, <DrawerDemo key="drawer" />, <PopoverDemo key="popover" />,
            <HoverCardDemo key="hover-card" />, <BackdropDemo key="backdrop" />,
        ],
        navigation: [
            <NavDemo key="nav" />, <BreadcrumbsDemo key="breadcrumbs" />, <PaginationDemo key="pagination" />,
            <TabsDemo key="tabs" />, <StepperDemo key="stepper" />, <MenuDemo key="menu" />,
            <DropdownDemo key="dropdown" />, <FloatingActionButtonDemo key="fab" />, <SpeedDialDemo key="speed-dial" />,
            <TransferListDemo key="transfer-list" />,
        ],
        advanced: [
            <AnimatedBlockDemo key="animated-block" />, <AudioDemo key="audio" />, <VideoDemo key="video" />,
            <ChartsDemo key="charts" />, <SparklineDemo key="sparkline" />, <XmlRendererDemo key="xml-renderer" />,
            <GraphicsNodeEditorDemo key="graphics-node-editor" />, <PhotoEditorDemo key="photo-editor" />,
        ],
        examples: [
            <ExampleSignInPage key="signin-page" />, <ExampleFileBrowser key="file-browser" />, <ExampleVideo key="video-player" />, <ExampleAudio key="audio-player" />, <ExamplePhotoEditor key="photo-editor" />
        ]
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%', background: theme.colors.background, transition: 'background-color 0.3s', minWidth: '320px' }}>
            <Header>
                <Header.Left>
                    <Stack direction="row" gap={theme.spacing.sm} align="center">
                        <Text as="h1" size={isMobile ? '1.25rem' : '1.5rem'} weight="700">ZwheUI</Text>
                        {!isMobile && <Text color={theme.colors.textSecondary}>Component Showcase</Text>}
                    </Stack>
                </Header.Left>
                <Header.Right>
                    <Nav container>
                        <Nav.List>
                            <Nav.Item href="#" isActive>Home</Nav.Item>
                            <Nav.Item href="#">About</Nav.Item>
                            <Nav.Item href="#">Contact</Nav.Item>
                        </Nav.List>
                    </Nav>
                </Header.Right>
            </Header>

            <main style={{ flex: 1, padding: isMobile ? theme.spacing.md : theme.spacing.lg }}>
                <Tabs defaultValue="examples">
                    <Stack align="center" justify="center" gap={theme.spacing.lg}>
                        <TabList>
                            <Tab value="general">General</Tab>
                            <Tab value="layout">Layout</Tab>
                            <Tab value="forms">Forms & Input</Tab>
                            <Tab value="data">Data Display</Tab>
                            <Tab value="feedback">Feedback</Tab>
                            <Tab value="navigation">Navigation</Tab>
                            <Tab value="advanced">Advanced</Tab>
                            <Tab value="examples">Examples</Tab>
                        </TabList>
                    </Stack>
                    <TabPanels>
                        <TabPanel value="general"><Grid>{demos.general}</Grid></TabPanel>
                        <TabPanel value="layout"><Grid>{demos.layout}</Grid></TabPanel>
                        <TabPanel value="forms"><Grid>{demos.forms}</Grid></TabPanel>
                        <TabPanel value="data"><Grid>{demos.dataDisplay}</Grid></TabPanel>
                        <TabPanel value="feedback"><Grid>{demos.feedback}</Grid></TabPanel>
                        <TabPanel value="navigation"><Grid>{demos.navigation}</Grid></TabPanel>
                        <TabPanel value="advanced"><Grid>{demos.advanced}</Grid></TabPanel>
                        <TabPanel value="examples"><Grid>{demos.examples}</Grid></TabPanel>
                    </TabPanels>
                </Tabs>
            </main>
            
            <Footer>
                <Text size="14px">© {new Date().getFullYear()} ZwheUI. All rights reserved.</Text>
            </Footer>
        </div>
    );
};