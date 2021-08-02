import React from 'react';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  children: string;
}

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <ChakraButton
    width={{ xl: '297', '2xl': '405' }}
    borderRadius={32}
    {...rest}
  >
    {children}
  </ChakraButton>

);
