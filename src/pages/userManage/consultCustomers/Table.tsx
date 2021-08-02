/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useTable } from 'react-table';
import {
  Table as ChakraTable, Thead, Tbody, Th, Tr, Td, Flex, Text, Box,
} from '@chakra-ui/react';

interface IpropsTable {
  columns: Array<any>;
  data: Array<any>;
  title: string;
  shadow?: boolean;
}

function TableData({ columns, data }:any) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <ChakraTable
      as="table"
      w={{
        '2xl': '1415px', xl: '895px', lg: '700px', base: '430px',
      }}
      bg="#F3F6FF"
      _last={{ 'border-top-right-radius': '20px' }}
      _first={{ 'border-top-left-radius': '20px' }}
      {...getTableProps()}
    >
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th
                textTransform="capitalize"
                color="#42427D"
                fontFamily="Inter"
                fontWeight="bold"
                fontSize={{ '2xl': '18px', xl: '16px' }}
                bg="#F5F6FA"
                _last={{ 'border-top-right-radius': '20px' }}
                _first={{ 'border-top-left-radius': '20px' }}
                {...column.getHeaderProps()}
              >
                {column.render('Header')}

              </Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr
              transition="transition"
              _odd={{ background: '#FFFF' }}
              {...row.getRowProps()}
              paddingLeft="20px"

            >
              {row.cells.map((cell) => (
                <Box
                  as="td"
                  h={{ '2xl': '38px', xl: '30px' }}
                  color="#A0AAC8"
                  paddingLeft="20px"
                  fontSize={{ '2xl': '18px', xl: '15px' }}
                  {...cell.getCellProps()}
                >
                  {cell.render('Cell')}
                </Box>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
}

export const Table: React.FC<IpropsTable> = ({
  columns, data, title, shadow,
}) => (
  <>
    <Flex justify="center" mt="5">
      <Text
        color="#42427D"
        mb="5px"
        fontWeight="bold"
        fontSize={{
          '2xl': '24px', xl: '19px', lg: '19px', md: '19px', sm: '19px', base: '19px',
        }}
      >
        {title}

      </Text>
    </Flex>
    <Box
      border="1px solid #42427D"
      borderRadius="20px"
      overflowX="auto"
      h={{ '2xl': '425px', xl: '350' }}
      w={{
        '2xl': '1417px', xl: '900px', lg: '700px', md: '400px', sm: '400px', base: '430px',
      }}
    >
      <TableData
        columns={columns}
        data={data}

      />
    </Box>
  </>
);
