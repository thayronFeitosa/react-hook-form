import React, { InputHTMLAttributes } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';
// import { Input } from './styles';

type Ipros = InputHTMLAttributes<HTMLInputElement> & {
  setText: (value: string) => void;
};

export const Shearch: React.FC<Ipros> = ({
  placeholder,
  value,
  setText,
  ...rest
}) => (
  <>
    <Flex
      w={{
        '2xl': '428px', xl: '355px', lg: '300px', md: '305px', sm: '250px', base: '250px',
      }}
      bg="#F3F6FF"
      borderRadius="20px 5px"
      direction="row"

    >
      <Box as="div">
        <Box
          w={{
            '2xl': '370px', xl: '307px', lg: '260px', md: '260px', sm: '210px', base: '210px',
          }}
          h={{
            '2xl': '56px', xl: '46px', lg: '40px', md: '40px', sm: '40px', base: '40px',
          }}
          as="input"
          type="search"
          placeholder={placeholder}
          value={value}
          outline="0"
          borderRadius="20px 5px"
          bg="#F3F6FF"
          paddingLeft="20px"
          onChange={(
            ev: React.ChangeEvent<HTMLInputElement>,
          ): void => {
            setText(
              ev.target?.value,
            );
          }}
          {...rest}
        />
        <Icon
          as={FiSearch}
          fontSize={{
            '2xl': '32px', xl: '22px', lg: '18px', md: '18px', sm: '18px', base: '18px',
          }}
          color="#42427D"
        />
      </Box>
    </Flex>
  </>
);
