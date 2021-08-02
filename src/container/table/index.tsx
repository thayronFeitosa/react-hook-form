/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useTable } from 'react-table';
import {
  Table as ChakraTable, Thead, Tbody, Th, Tr, Td, Flex, TableProps,
} from '@chakra-ui/react';

interface IpropsTable {
  columns: Array<any>;
  data: Array<any>;
  title: string;
  shadow?: boolean;
}

interface TableDataProps extends TableProps {
  title: string;

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
    <ChakraTable {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => (
          <Tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
            ))}
          </Tr>
        ))}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>)}
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
    <Flex>
      <p>{title}</p>
    </Flex>
    <Flex id="table">
      <TableData columns={columns} data={data} />
    </Flex>
  </>
);
