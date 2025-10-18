

import React from 'react';
import { Card, Sofa, Text, Stack } from '../src/components';
import { useStyles } from '../src/core/hooks/useStyles';

const ResponsiveDemo = () => {
    const createStyle = useStyles('responsive-demo');
    const responsiveClass = createStyle({
        padding: '1rem',
        backgroundColor: '#ef4444', // Red by default
        color: '#fff',
        borderRadius: '6px',
        textAlign: 'center',
        transition: 'background-color 0.3s',
        '@media': {
            "(minWidth: 'sm')": {
                backgroundColor: '#3b82f6', // Blue on small screens and up
            },
            "(minWidth: 'lg')": {
                 backgroundColor: '#10b981', // Green on large screens and up
            }
        }
    });

    return (
        <div className={responsiveClass}>
            <Text color="#fff">This block changes color based on screen width ('sm', 'lg'). Resize your browser to see it in action.</Text>
        </div>
    )
}

const ThemedStylingDemo = () => {
    const createStyle = useStyles('themed-styling-demo');
    const themedClass = createStyle({
        padding: '1rem',
        borderRadius: '2xl', // This resolves to theme.radii['2xl']
        border: '1px solid rgba(255,255,255,0.2)',
        '@supports (backdrop-filter: none)': {
            backdropFilter: "blur(md)" // This resolves to blur(theme.blur.md)
        },
        backgroundColor: 'rgba(255,255,255,0.1)'
    });

    return (
        <div className={themedClass}>
            <Text color="#fff">This block uses theme keys for `borderRadius` ('2xl') and `backdropFilter` ('blur(md)').</Text>
        </div>
    );
}


export const CardDemo = () => (
  <Sofa>
    <Stack gap="1rem">
      <Text as="h2" size="1.5rem" weight="600">Card</Text>
      <Text>A flexible content container. The "glass" variant adds a semi-transparent, blurred background effect. Now supports an `onClick` prop.</Text>
      <Card>
        <Text>This is a default card. It's great for containing any kind of content, from text to interactive elements.</Text>
      </Card>
      <Card variant="glass">
        <Text>This is a "glass" card. It's perfect for creating a modern, layered look, especially over dynamic backgrounds.</Text>
      </Card>
      <Card onClick={() => alert('Card was clicked!')}>
        <Text>This card is clickable. The cursor changes to a pointer on hover, and an alert will show when you click it.</Text>
      </Card>
      <Text as="h3" size="1.25rem" weight="600" style={{marginTop: '1rem'}}>Responsive Styling</Text>
      <Text>The styling system now supports theme-aware media queries using breakpoint keys like `sm`, `md`, etc.</Text>
      <ResponsiveDemo />
      <Text as="h3" size="1.25rem" weight="600" style={{marginTop: '1rem'}}>Theme-based Styling</Text>
      <Text>The styling system now supports theme-aware property values for things like `borderRadius` and `backdropFilter`.</Text>
      <ThemedStylingDemo />
    </Stack>
  </Sofa>
);