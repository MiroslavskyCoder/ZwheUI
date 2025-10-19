
import React from 'react';
import { Flex } from '../Flex/Flex';

type CenterProps<C extends React.ElementType> = React.ComponentProps<typeof Flex<C>>;

export const Center = <C extends React.ElementType = 'div'>(props: CenterProps<C>) => {
    return (
        <Flex
            align="center"
            justify="center"
            {...props}
        />
    );
};
