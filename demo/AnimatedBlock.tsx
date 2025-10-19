
import React from 'react';
import { AnimatedBlock, Sofa, Text, Stack } from '../src/components';
import { DemoSection } from './DemoSection';

const documentation = `# Animated Block

An interactive demonstration of the \`useCurveAnimation\` hook. It allows you to visually test different animation timing functions like ease, bounce, and elastic.

## Props

*   \`className\` (string, optional): Additional CSS classes for custom styling.

## Usage

This component is primarily for demonstration purposes and is self-contained.

\`\`\`tsx
import { AnimatedBlock } from './src/components';

<AnimatedBlock />
\`\`\``;

const sourceCode = `
import React, { useState } from 'react'
import { useCurveAnimation } from '../../core/hooks/useCurveAnimation'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'
import { CurveType } from '../../core/animation/CurveContextAnimation'

interface AnimatedBlockProps {
    className?: string
}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({ className = '' }) => {
    const { theme } = useTheme()
    const createStyle = useStyles('animated-block')
    const [curveType, setCurveType] = useState<CurveType>('easeInOut')

    const animation = useCurveAnimation({
        duration: 1000,
        type: curveType,
        bounceStrength: 3,
        elasticity: 0.3
    })

    const blockClass = createStyle({
        width: '100px',
        height: '100px',
        backgroundColor: theme.colors.primary,
        borderRadius: '8px',
        transition: 'background-color 0.3s'
    })

    const containerClass = createStyle({
        padding: theme.spacing.lg,
        display: 'grid',
        gap: theme.spacing.md
    })

    const controlsClass = createStyle({
        display: 'grid',
        gap: theme.spacing.sm,
        gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))'
    })

    const buttonClass = createStyle({
        padding: \`\${theme.spacing.sm} \${theme.spacing.md}\`,
        backgroundColor: theme.colors.secondary,
        color: theme.colors.background,
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        }
    })

    const curveTypes: CurveType[] = ['linear', 'easeIn', 'easeOut', 'easeInOut', 'bounce', 'elastic']

    return (
        <div className={\`\${containerClass} \${className}\`}>
            <div style={{ position: 'relative', height: '100px', overflow: 'hidden' }}>
                <div 
                className={blockClass}
                style={{ 
                    transform: \`translateX(\${animation.value}px)\`,
                    position: 'absolute'
                }}
                />
            </div>

            <div className={controlsClass}>
                {curveTypes.map(type => (
                <button
                    key={type}
                    className={buttonClass}
                    onClick={() => {
                        setCurveType(type)
                        animation.animate(animation.value === 0 ? 200 : 0)
                    }}
                >
                    {type}
                </button>
                ))}
            </div>

            <div>Progress: {Math.round(animation.progress * 100)}%</div>
        </div>
    )
}

export default AnimatedBlock`;

export const AnimatedBlockDemo = () => (
    <DemoSection
        title="Animated Block"
        description="An interactive demonstration of the `useCurveAnimation` hook. The buttons in the preview control the animation. The 'Props' tab is empty as this is a self-contained demo component."
        livePreview={<AnimatedBlock />}
        propControls={<Text color="textSecondary">This is a self-contained demo. Use the controls in the 'Preview' tab to test different animation curves.</Text>}
        documentation={documentation}
        sourceCode={sourceCode}
    />
);
