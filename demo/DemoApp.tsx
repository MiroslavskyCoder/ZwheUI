import React, { useState, useMemo } from 'react';
import { Grid, Stack, Text, Header, Sidebar, SidebarNav, SidebarNavItem, Icon, ThemeSwitcher } from '../src/components';
import { ThemeProvider, useTheme } from '../src/core';
import { Welcome } from './Welcome';

// Import all demos
import { ButtonDemo } from './Button';
import { IconDemo } from './Icon';
import { TextDemo } from './Text';
import { LinkDemo } from './Link';
import { KbdDemo } from './Kbd';
import { BadgeDemo } from './Badge';
import { TagDemo } from './Tag';
import { CodeDemo } from './Code';
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
import { AnimatedBlockDemo } from './AnimatedBlock';
import { AudioDemo } from './Audio';
import { VideoDemo } from './Video';
import { ChartsDemo } from './Charts';
import { SparklineDemo } from './Sparkline';
import { XmlRendererDemo } from './XmlRenderer';
import { GraphicsNodeEditorDemo } from './GraphicsNodeEditor';
import { PhotoEditorDemo } from './PhotoEditor';
import { ExampleFileBrowser, ExampleVideo, ExampleAudio, ExamplePhotoEditor, ExampleSignInPage } from '../examples';
import { LayoutDemo } from './Layout';
import { PageHeaderDemo } from './PageHeader';
import { MarkdownDemo } from './Markdown';
import { StatDemo } from './Stat';
import { EmptyStateDemo } from './EmptyState';

const demos = {
    general: [
        { id: 'button', label: 'Button', component: <ButtonDemo /> },
        { id: 'icon', label: 'Icon', component: <IconDemo /> },
        { id: 'text', label: 'Text', component: <TextDemo /> },
        { id: 'link', label: 'Link', component: <LinkDemo /> },
        { id: 'kbd', label: 'Kbd', component: <KbdDemo /> },
        { id: 'badge', label: 'Badge', component: <BadgeDemo /> },
        { id: 'tag', label: 'Tag', component: <TagDemo /> },
        { id: 'code', label: 'Code', component: <CodeDemo /> },
    ],
    layout: [
        { id: 'box', label: 'Box', component: <BoxDemo /> },
        { id: 'flex', label: 'Flex', component: <FlexDemo /> },
        { id: 'center', label: 'Center', component: <CenterDemo /> },
        { id: 'stack', label: 'Stack', component: <StackDemo /> },
        { id: 'grid', label: 'Grid', component: <GridDemo /> },
        { id: 'container', label: 'Container', component: <ContainerDemo /> },
        { id: 'aspect-ratio', label: 'AspectRatio', component: <AspectRatioDemo /> },
        { id: 'divider', label: 'Divider', component: <DividerDemo /> },
        { id: 'sofa', label: 'Sofa', component: <SofaDemo /> },
        { id: 'header', label: 'Header', component: <HeaderDemo /> },
        { id: 'footer', label: 'Footer', component: <FooterDemo /> },
        { id: 'sidebar', label: 'Sidebar', component: <SidebarDemo /> },
        { id: 'layout', label: 'Layout', component: <LayoutDemo /> },
        { id: 'page-header', label: 'PageHeader', component: <PageHeaderDemo /> },
    ],
    forms: [
        { id: 'form-control', label: 'FormControl', component: <FormControlDemo /> },
        { id: 'input', label: 'Input', component: <InputDemo /> },
        { id: 'text-input', label: 'TextInput', component: <TextInputDemo /> },
        { id: 'textarea', label: 'Textarea', component: <TextareaDemo /> },
        { id: 'checkbox', label: 'Checkbox', component: <CheckboxDemo /> },
        { id: 'radio-group', label: 'RadioGroup', component: <RadioGroupDemo /> },
        { id: 'switch', label: 'Switch', component: <SwitchDemo /> },
        { id: 'select', label: 'Select', component: <SelectDemo /> },
        { id: 'combobox', label: 'Combobox', component: <ComboboxDemo /> },
        { id: 'slider', label: 'Slider', component: <SliderDemo /> },
        { id: 'number-input', label: 'NumberInput', component: <NumberInputDemo /> },
        { id: 'pin-input', label: 'PinInput', component: <PinInputDemo /> },
        { id: 'editable', label: 'Editable', component: <EditableDemo /> },
        { id: 'file-upload', label: 'FileUpload', component: <FileUploadDemo /> },
        { id: 'color-picker', label: 'ColorPicker', component: <ColorPickerDemo /> },
        { id: 'date-picker', label: 'DatePicker', component: <DatePickerDemo /> },
        { id: 'search', label: 'Search', component: <SearchDemo /> },
        { id: 'rating', label: 'Rating', component: <RatingDemo /> },
        { id: 'toggle-button', label: 'ToggleButton', component: <ToggleButtonDemo /> },
        { id: 'icon-button', label: 'IconButton', component: <IconButtonDemo /> },
        { id: 'button-group', label: 'ButtonGroup', component: <ButtonGroupDemo /> },
    ],
    dataDisplay: [
        { id: 'list', label: 'List', component: <ListDemo /> },
        { id: 'table', label: 'Table', component: <TableDemo /> },
        { id: 'data-table', label: 'DataTable', component: <DataTableDemo /> },
        { id: 'avatar', label: 'Avatar', component: <AvatarDemo /> },
        { id: 'card', label: 'Card', component: <CardDemo /> },
        { id: 'accordion', label: 'Accordion', component: <AccordionDemo /> },
        { id: 'tree-view', label: 'TreeView', component: <TreeViewDemo /> },
        { id: 'x-node-tree', label: 'XNodeTree', component: <XNodeTreeDemo /> },
        { id: 'timeline', label: 'Timeline', component: <TimelineDemo /> },
        { id: 'image', label: 'Image', component: <ImageDemo /> },
        { id: 'markdown', label: 'Markdown', component: <MarkdownDemo /> },
        { id: 'stat', label: 'Stat', component: <StatDemo /> },
    ],
    feedback: [
        { id: 'alert', label: 'Alert', component: <AlertDemo /> },
        { id: 'toast', label: 'Toast', component: <ToastDemo /> },
        { id: 'snackbar', label: 'Snackbar', component: <SnackbarDemo /> },
        { id: 'spinner', label: 'Spinner', component: <SpinnerDemo /> },
        { id: 'progress', label: 'Progress', component: <ProgressDemo /> },
        { id: 'skeleton', label: 'Skeleton', component: <SkeletonDemo /> },
        { id: 'modal', label: 'Modal', component: <ModalDemo /> },
        { id: 'dialog', label: 'Dialog', component: <DialogDemo /> },
        { id: 'drawer', label: 'Drawer', component: <DrawerDemo /> },
        { id: 'popover', label: 'Popover', component: <PopoverDemo /> },
        { id: 'hover-card', label: 'HoverCard', component: <HoverCardDemo /> },
        { id: 'backdrop', label: 'Backdrop', component: <BackdropDemo /> },
        { id: 'empty-state', label: 'EmptyState', component: <EmptyStateDemo /> },
    ],
    navigation: [
        { id: 'nav', label: 'Nav', component: <NavDemo /> },
        { id: 'breadcrumbs', label: 'Breadcrumbs', component: <BreadcrumbsDemo /> },
        { id: 'pagination', label: 'Pagination', component: <PaginationDemo /> },
        { id: 'tabs', label: 'Tabs', component: <TabsDemo /> },
        { id: 'stepper', label: 'Stepper', component: <StepperDemo /> },
        { id: 'menu', label: 'Menu', component: <MenuDemo /> },
        { id: 'dropdown', label: 'Dropdown', component: <DropdownDemo /> },
        { id: 'fab', label: 'FloatingActionButton', component: <FloatingActionButtonDemo /> },
        { id: 'speed-dial', label: 'SpeedDial', component: <SpeedDialDemo /> },
        { id: 'transfer-list', label: 'TransferList', component: <TransferListDemo /> },
    ],
    advanced: [
        { id: 'animated-block', label: 'AnimatedBlock', component: <AnimatedBlockDemo /> },
        { id: 'audio', label: 'Audio', component: <AudioDemo /> },
        { id: 'video', label: 'Video', component: <VideoDemo /> },
        { id: 'charts', label: 'Charts', component: <ChartsDemo /> },
        { id: 'sparkline', label: 'Sparkline', component: <SparklineDemo /> },
        { id: 'xml-renderer', label: 'XmlRenderer', component: <XmlRendererDemo /> },
        { id: 'graphics-node-editor', label: 'GraphicsNodeEditor', component: <GraphicsNodeEditorDemo /> },
        { id: 'photo-editor', label: 'PhotoEditor', component: <PhotoEditorDemo /> },
    ],
    examples: [
        { id: 'signin-page', label: 'Sign-In Page', component: <ExampleSignInPage /> },
        { id: 'file-browser', label: 'File Browser', component: <ExampleFileBrowser /> },
        { id: 'video-player', label: 'Video Player', component: <ExampleVideo /> },
        { id: 'audio-player', label: 'Audio Player', component: <ExampleAudio /> },
        { id: 'photo-editor-example', label: 'Photo Editor', component: <ExamplePhotoEditor /> },
    ]
};

const allDemos = Object.values(demos).flat();

const AppContent = () => {
    const [activeDemoId, setActiveDemoId] = useState('welcome');
    const { theme } = useTheme();

    const activeDemo = useMemo(() => {
        if (activeDemoId === 'welcome') return <Welcome onNavigate={setActiveDemoId} />;
        return allDemos.find(d => d.id === activeDemoId)?.component || null;
    }, [activeDemoId]);

    const handleNavClick = (e: React.MouseEvent, id: string) => {
        e.preventDefault();
        setActiveDemoId(id);
    };
    
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw', backgroundColor: theme.colors.background }}>
            <Sidebar width="280px" height='auto'>
                <Stack justify="space-between" style={{ height: '100%' }}>
                    <Stack gap="2rem" style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                        <div onClick={(e) => handleNavClick(e, 'welcome')} style={{ cursor: 'pointer', padding: '0 1rem' }}>
                            <Text as="h1" size="1.5rem" weight="700">ZwheUI</Text>
                            <Text size="0.875rem" color="textSecondary">Component Showcase</Text>
                        </div>
                        <div style={{ flex: '1 1 0', minHeight: 0, overflowY: 'auto', paddingRight: '0.5rem' }}>
                            <Stack gap="1.5rem">
                                <SidebarNav title="Examples"><NavItems items={demos.examples} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="General"><NavItems items={demos.general} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Layout"><NavItems items={demos.layout} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Forms & Input"><NavItems items={demos.forms} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Data Display"><NavItems items={demos.dataDisplay} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Feedback & Overlays"><NavItems items={demos.feedback} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Navigation"><NavItems items={demos.navigation} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                                <SidebarNav title="Advanced"><NavItems items={demos.advanced} activeId={activeDemoId} onClick={handleNavClick} /></SidebarNav>
                            </Stack>
                        </div>
                    </Stack>
                </Stack>
            </Sidebar>

            <main style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100vh', minWidth: 0 }}>
                <Header height="60px">
                    <Header.Left>
                        <Text weight="600" size="1.125rem">{(allDemos.find(d => d.id === activeDemoId)?.label || 'Welcome')}</Text>
                    </Header.Left>
                    <Header.Right>
                        <></>
                    </Header.Right>
                </Header>
                <div style={{ flex: 1, overflowY: 'auto', padding: '2rem' }}>
                    <Grid minItemWidth="600px" gap="2rem">{activeDemo}</Grid>
                </div>
            </main>
        </div>
    );
};

const NavItems = ({ items, activeId, onClick }: { items: { id: string, label: string }[], activeId: string, onClick: (e: React.MouseEvent, id: string) => void }) => (
    <>
        {items.map(item => (
            <SidebarNavItem key={item.id} href="#" isActive={activeId === item.id} onClick={(e) => onClick(e, item.id)}>
                {item.label}
            </SidebarNavItem>
        ))}
    </>
);


export const DemoApp = () => ( 
    <AppContent />
);
