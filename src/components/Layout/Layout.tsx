
import React from 'react'
import { useStyles } from '../../core/hooks/useStyles'

export interface LayoutProps {
    children?: React.ReactNode
    direction?: 'row' | 'column'
    gap?: string
    align?: string
    justify?: string
    className?: string
    style?: React.CSSProperties
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    direction = 'column',
    gap = '0.75rem',
    align = 'stretch',
    justify = 'start',
    className = '',
    style
}) => {
    const createStyle = useStyles('layout')

    const base = createStyle({
        display: 'grid',
        // 'row' (горизонтальный) -> grid-auto-flow: 'column'
        // 'column' (вертикальный) -> grid-auto-flow: 'row'
        gridAutoFlow: direction === 'row' ? 'column' : 'row',
        gap,
        alignItems: align,
        justifyItems: justify
    })
    
    return <div className={`${base} ${className}`} style={style}>{children}</div>
}

export default Layout