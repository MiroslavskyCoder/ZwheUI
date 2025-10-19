
import React from 'react';
import { useStyles } from '../../core';

type FlexProps<C extends React.ElementType> = {
    as?: C;
    direction?: React.CSSProperties['flexDirection'];
    align?: React.CSSProperties['alignItems'];
    justify?: React.CSSProperties['justifyContent'];
    wrap?: React.CSSProperties['flexWrap'];
    gap?: React.CSSProperties['gap'];
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

export const Flex = <C extends React.ElementType = 'div'>({
    direction,
    align,
    justify,
    wrap,
    gap,
    as: Component = 'div' as C,
    className,
    ...props
}: FlexProps<C>) => {
    const createStyle = useStyles('flex');

    const flexClass = createStyle({
        display: 'flex',
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        gap: gap,
    });

    const finalClassName = [flexClass, className].filter(Boolean).join(' ');

    return React.createElement(Component, { ...props, className: finalClassName });
};
