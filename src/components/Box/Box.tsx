
import React from 'react';

type BoxProps<C extends React.ElementType> = {
    as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

// FIX: Changed to pass props directly to React.createElement to resolve complex generic type issues.
export const Box = <C extends React.ElementType = 'div'>({
    as: Component = 'div' as C,
    ...props
}: BoxProps<C>) => {
    return React.createElement(Component, props);
};
