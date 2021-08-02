/* eslint-disable react/button-has-type */
import {
  Box, Button, Flex,
} from '@chakra-ui/react';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import Spinner from '../../../container/loadingSpinner/ndex';
import ApiService from '../../../utils/services/Apiservice';
import { PaginationStyle } from './styles';
import { Table } from './Table';

interface ICellTableButton {
  row: {
    values:{
      id: number,
      typeProfile: string
    }
  }
}

export const ConsultClient: React.FC = () => {
  const [dataValue, setDataValue] = useState([]);
  const [text, setText] = useState('');
  const [offset, setOffset] = useState(0); // eslint-disable-line
  const [sizePagination, setSizePagination] = useState(0); // eslint-disable-line
  const [initalizeSearchOfName, setInitalizeSearchOfName] = useState('');
  const [loading, setLoading] = useState(false);  // eslint-disable-line

  useEffect(() => {
    loadUsers(); // eslint-disable-next-line
  }, [offset, initalizeSearchOfName]);

  const loadUsers = useCallback(async (a?:string) => { // eslint-disable-line
    setLoading(true);
    await ApiService.listAllTypesUsers().then((result) => {
      try {
        if (result) {
          setDataValue(result);
          setLoading(false);
        }
      } catch (e) {
        setLoading(false);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: 'Nome:',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Tipo de Perfil:',
        accessor: 'typeProfile',
      },
      {
        Header: 'Abrir',
        accessor: 'id',
        Cell: (cell: ICellTableButton) => (
          <Button
            color="#ffff"
            bg="#42427D"
            _hover={{ bg: '#42427D' }}
            h={{ '2xl': '20px', xl: '16px', base: '16px' }}
            font-size={{ '2xl': '20px', xl: '16px', base: '15px' }}
            value={cell?.row.values.id}
          >
            <Link className="color-green retirarLink" to={`/view/${cell?.row.values.typeProfile}/${cell?.row.values.id}`}>Abrir</Link>
          </Button>
        ),
      },
    ],
    [],
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (ev:any) => {
    ev.preventDefault();
    setText(text);
    setInitalizeSearchOfName(text);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onPageChange(page: any) {
    setOffset(page?.selected * 10);
  }

  return (
    <>

      <Flex minW="500px">
        {loading && <Spinner />}
        <Flex direction="column" w="100%" h="100vh">
          <Flex align="center" h="100%" justify="center" direction="column">
            <Flex w="100%" align="center" justify="center" mt="20px">
              <Box>
                <Table
                  columns={columns}
                  data={dataValue}
                  title="Resultado de Pesquisa:"
                />
              </Box>
            </Flex>

            <Flex align="center" justify="center" mt="20px">
              <PaginationStyle>
                <Box id="paginationContainer">
                  <ReactPaginate
                    previousLabel="<"
                    nextLabel=">"
                    pageCount={(sizePagination / 10)}
                    onPageChange={onPageChange}
                    containerClassName="pagination"
                    previousLinkClassName="pagination__link"
                    nextLinkClassName="pagination__link"
                    disabledClassName="pagination__link--disabled"
                    activeClassName="pagination__link--active"
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                  />
                </Box>
              </PaginationStyle>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
