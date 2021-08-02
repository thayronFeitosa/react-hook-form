/* eslint-disable react/react-in-jsx-scope */
import {
  FormControl, FormErrorMessage, Icon, Input as ChakraInput,
  InputProps as ChakraInputProps,
  useBreakpointValue,
} from '@chakra-ui/react';
import {
  ElementType, forwardRef, ForwardRefRenderFunction,
} from 'react';

import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  icon?: ElementType;
  error?: FieldError;
  mtError?: string;
  valueDefault?: string

}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    icon, error = null, mtError = '2px', valueDefault = '', ...rest
  }, ref,
) => {
  const isIconActive = useBreakpointValue({
    xl: true,
    '2xl': true,
    base: false,

  });

  return (

    <FormControl isInvalid={!!error} w="auto">
      {isIconActive ? icon && (
      <Icon
        as={icon}
        fontSize={{
          '2xl': '25px', xl: '20px', lg: '17px', md: '15px', sm: '12px', base: '0px',
        }}
        mr="5px"
        color="#42427D"
      />
      ) : ''}
      <ChakraInput
        textAlign="center"
        borderColor="#42427D"
        textColor="gray.50"
        borderRadius={{
          '2xl': '15px', xl: '11px', base: '5px',
        }}
        h={{
          '2xl': '39px', xl: '30px', base: '15px',
        }}
        fontSize={{ '2xl': '13px', xl: '12px', base: '11px' }}
        defaultValue={valueDefault}
        {...rest}
      />
      {!!error && (
      <FormErrorMessage
        mt={{ '2xl': '-2px', xl: '-3px' }}
        mb={{ '2xl': '-11px', xl: '-12px' }}
        fontSize={{ '2xl': '14px', xl: '14px', base: '11px' }}
        justifyContent="center"
      >
        {error.message}
      </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
