import React from 'react';
import { Card, Text } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Card (Compound)

A versatile container component that is now composed of multiple sub-components for building flexible and structured layouts.

## Components

*   **Card**: The main container.
*   **Card.Header**: A top section with padding and a bottom border.
*   **Card.Body**: The main content area with padding.
*   **Card.Footer**: A bottom section with padding and a top border.
*   **Card.Image**: An image component optimized for card layouts (e.g., full-bleed).
*   **Card.Title**: A styled heading for the card.
*   **Card.Subtitle**: Smaller, secondary text, often used with a title.
*   **Card.Description**: Secondary text for descriptions.
*   **Card.Text**: Generic paragraph text.
*   **Card.Actions**: A flex container for action buttons, aligned to the end.
*   **Card.Action**: A pre-styled button for use within \`Card.Actions\`.
*   **Card.Item**: A generic container for custom layouts within a card.

## Usage

\`\`\`tsx
<Card>
    <Card.Image src="..." alt="Card Image" />
    <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle>Card Subtitle</Card.Subtitle>
    </Card.Header>
    <Card.Body>
        <Card.Text>
            This is the main content of the card.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Card.Actions>
            <Card.Action>Cancel</Card.Action>
            <Card.Action variant="primary">Confirm</Card.Action>
        </Card.Actions>
    </Card.Footer>
</Card>
\`\`\``;

const fullSourceCode = `import React from 'react';
import { useStyles } from '../../core/hooks/useStyles';
import { useTheme } from '../../core/theme/ThemeProvider';
import { Text } from '../Text/Text';
import { Image as ImageComponent, ImageProps } from '../Image/Image';
import { Stack } from '../Stack/Stack';
import { Button, ButtonProps } from '../Button';

// Main Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'default' | 'glass';
    onClick?: (event: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>) => void;
}

const CardRoot: React.FC<CardProps> & {
    Header: React.FC<React.HTMLAttributes<HTMLDivElement>>;
    Body: React.FC<React.HTMLAttributes<HTMLDivElement>>;
    Footer: React.FC<React.HTMLAttributes<HTMLDivElement>>;
    Title: React.FC<React.ComponentProps<typeof Text<'h3'>>>;
    Subtitle: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    Description: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    Text: React.FC<React.ComponentProps<typeof Text<'p'>>>;
    Image: React.FC<ImageProps>;
    Actions: React.FC<React.ComponentProps<typeof Stack>>;
    Action: React.FC<ButtonProps>;
    Item: React.FC<React.HTMLAttributes<HTMLDivElement>>;
} = ({ children, className = '', variant = 'default', onClick, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('card');

    const cardClass = createStyle({
        borderRadius: '8px',
        backgroundColor: variant === 'glass' ? 'rgba(28, 28, 28, 0.75)' : theme.colors.backgroundSecondary,
        border: \`1px solid \${theme.colors.border}\`,
        height: '100%',
        transition: 'all 0.3s ease',
        cursor: onClick ? 'pointer' : 'default',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        '@supports (backdrop-filter: none) or (-webkit-backdrop-filter: none)': {
            backdropFilter: variant === 'glass' ? 'blur(16px)' : undefined,
        },
        '&:hover': onClick ? {
            transform: 'translateY(-4px)',
            borderColor: 'rgba(255, 255, 255, 0.25)',
            boxShadow: \`0 8px 24px rgba(0, 0, 0, 0.5)\`,
        } : {},
        '&:focus-visible': onClick ? {
            outline: \`2px solid \${theme.colors.primary}\`,
            outlineOffset: '2px',
        } : {},
    });

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (onClick && (event.key === 'Enter' || event.key === ' ')) {
            event.preventDefault();
            onClick(event);
        }
    };

    const interactiveProps = onClick ? {
        role: 'button',
        tabIndex: 0,
        onKeyDown: handleKeyDown,
    } : {};

    return (
        <div 
            className={\`\${cardClass} \${className}\`} 
            onClick={onClick ? (e) => onClick(e) : undefined}
            {...interactiveProps}
            {...props}
        >
            {children}
        </div>
    );
};

const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('card-header');
    const headerClass = createStyle({
        padding: theme.spacing.md,
        borderBottom: \`1px solid \${theme.colors.border}\`,
    });
    return <div className={\`\${headerClass} \${className}\`} {...props} />;
};
CardHeader.displayName = 'Card.Header';

const CardBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('card-body');
    const bodyClass = createStyle({
        padding: theme.spacing.md,
        flex: '1 1 auto',
    });
    return <div className={\`\${bodyClass} \${className}\`} {...props} />;
};
CardBody.displayName = 'Card.Body';

const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const { theme } = useTheme();
    const createStyle = useStyles('card-footer');
    const footerClass = createStyle({
        padding: theme.spacing.md,
        borderTop: \`1px solid \${theme.colors.border}\`,
        marginTop: 'auto',
    });
    return <div className={\`\${footerClass} \${className}\`} {...props} />;
};
CardFooter.displayName = 'Card.Footer';

const CardTitle: React.FC<React.ComponentProps<typeof Text<'h3'>>> = (props) => {
    const { theme } = useTheme();
    return <Text as="h3" size={theme.typography.fontSizes.lg} weight={theme.typography.fontWeights.semibold} {...props} />;
};
CardTitle.displayName = 'Card.Title';

const CardSubtitle: React.FC<React.ComponentProps<typeof Text<'p'>>> = ({style, ...props}) => {
    const { theme } = useTheme();
    return <Text as="p" size={theme.typography.fontSizes.sm} color={theme.colors.textSecondary} style={{marginTop: '0.25rem', ...style}} {...props} />;
};
CardSubtitle.displayName = 'Card.Subtitle';

const CardDescription: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    const { theme } = useTheme();
    return <Text as="p" size={theme.typography.fontSizes.base} color={theme.colors.textSecondary} {...props} />;
};
CardDescription.displayName = 'Card.Description';

const CardText: React.FC<React.ComponentProps<typeof Text<'p'>>> = (props) => {
    return <Text as="p" {...props} />;
};
CardText.displayName = 'Card.Text';

const CardImage: React.FC<ImageProps> = ({ className, ...props }) => {
    return <ImageComponent className={className} {...props} />;
};
CardImage.displayName = 'Card.Image';

const CardActions: React.FC<React.ComponentProps<typeof Stack>> = ({ className, ...props }) => {
    return <Stack direction="row" justify="end" gap="0.5rem" className={className} {...props} />;
};
CardActions.displayName = 'Card.Actions';

const CardAction: React.FC<ButtonProps> = (props) => {
    return <Button variant="secondary" {...props} />;
};
CardAction.displayName = 'Card.Action';

const CardItem: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    return <div {...props} />;
};
CardItem.displayName = 'Card.Item';

CardRoot.Header = CardHeader;
CardRoot.Body = CardBody;
CardRoot.Footer = CardFooter;
CardRoot.Title = CardTitle;
CardRoot.Subtitle = CardSubtitle;
CardRoot.Description = CardDescription;
CardRoot.Text = CardText;
CardRoot.Image = CardImage;
CardRoot.Actions = CardActions;
CardRoot.Action = CardAction;
CardRoot.Item = CardItem;

export const Card = CardRoot;
export default Card;`;


const initialCode = `<Card style={{ maxWidth: '350px' }}>
    <Card.Image 
        src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400" 
        alt="A beautiful landscape" 
    />
    <Card.Header>
        <Card.Title>Mountain Getaway</Card.Title>
        <Card.Subtitle>Explore the serene alps.</Card.Subtitle>
    </Card.Header>
    <Card.Body>
        <Card.Text>
            Discover breathtaking views and peaceful trails. An unforgettable adventure awaits you in the heart of nature.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <Card.Actions>
            <Card.Action>Learn More</Card.Action>
            <Card.Action variant="primary">Book Now</Card.Action>
        </Card.Actions>
    </Card.Footer>
</Card>`;

export const CardDemo = () => {
    return (
        <DemoSection
            title="Card"
            description="A flexible content container, now built with compound components for more structured layouts."
            initialCode={initialCode}
            propControls={
                <Text color="textSecondary">
                    The Card component is now composed of sub-components. See the "Editable Code" and "Documentation" panels for examples of how to use them.
                </Text>
            }
            documentation={documentation}
            fullSourceCode={fullSourceCode}
        />
    );
};
