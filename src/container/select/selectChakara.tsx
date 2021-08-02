import {
  Box, Icon, Select, SelectProps, FormControl, FormErrorMessage, Flex, useBreakpointValue,
} from '@chakra-ui/react';

import React, {
  ElementType, forwardRef, ForwardRefRenderFunction,
} from 'react';
import { FieldError } from 'react-hook-form';

interface SelectChakaraProps extends SelectProps {
  values: [] | any;
  selectOptions?: string;
  error?: FieldError;
  icon?: any
}

interface IData {
  id: number;
  nome: string;
}

const OptionSelect:React.FC<SelectChakaraProps> = ({
  defaultValue,
  values,
}) => {
  try {
    const lines = values?.map((line:IData) => (
      <Box
        as="option"
        defaultValue={defaultValue}
        value={line?.nome}
        key={line?.id}
        color="#A0AAC8"
      >
        {line?.nome}
      </Box>
    ));
    return lines || null;
  } catch (e) {
    return null;
  }
};

export const SelectChakaraBase: ForwardRefRenderFunction <HTMLSelectElement, SelectChakaraProps> = (
  {
    icon, values, error = null, selectOptions, ...rest
  },
) => {
  const isIconActive = useBreakpointValue({
    xl: true,
    '2xl': true,
    base: false,

  });

  return (

    <FormControl isInvalid={!!error} w="auto">
      <Flex>
        {isIconActive ? icon && (
        <Icon
          as={icon}
          fontSize={{
            '2xl': '25px', xl: '20px', lg: '17px', md: '15px', sm: '12px', base: '12px',
          }}
          mr="5px"
          color="#42427D"
        />
        ) : ''}
        <Select
          placeholder="Select option"
          borderColor="#42427D"
          borderRadius={{
            '2xl': '15px', xl: '11px', lg: '17px', md: '15px', sm: '12px', base: '12px',
          }}
          h={{
            '2xl': '39px', xl: '30px', base: '15px',
          }}
          fontSize={{ '2xl': '13px', xl: '12px', base: '11px' }}
          {...rest}
        >
          <OptionSelect
            values={values}
            selectOptions={selectOptions}
          />
        </Select>
      </Flex>
      {!!error && (
      <FormErrorMessage
        mt={{ '2xl': '-2px', xl: '-2px' }}
        mb={{ '2xl': '-11px', xl: '-6px' }}
        fontSize={{ '2xl': '14px', xl: '14px', base: '11px' }}
        justifyContent="center"
      >
        {error.message}
      </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const SelectChakara = forwardRef(SelectChakaraBase);
