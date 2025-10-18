import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'
import { useTheme } from '../../core/theme/ThemeProvider'

export interface LayerProps {
    children?: React.ReactNode
    z?: number
    className?: string
    style?: React.CSSProperties
}

export const Layer: React.FC<LayerProps> = ({ children, z = 0, className = '', style }) => {
    const createStyle = useStyles('layer')
    const { theme } = useTheme()

    const base = createStyle({
        position: 'relative',
        zIndex: z,
        background: 'transparent',
        color: theme.colors.text
    })

    return (
        <div className={`${base} ${className}`} style={style} data-layer={z}>
            {children}
        </div>
    )
}

export default Layer
