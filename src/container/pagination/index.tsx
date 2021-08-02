/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationStyle } from './styles';

  interface Iprops {
    marginPagesDisplayed: number;
    total: number;
    offset?: number;
    setOffset: any;
  }

const Pangination: React.FC<Iprops> = ({
  marginPagesDisplayed,
  total,
  setOffset,
}) => {
  function onPageChange(page: any) {
    setOffset(page?.selected * 10);
  }
  return (
    <PaginationStyle>
      <div id="paginationContainer">
        <ReactPaginate
          previousLabel="<"
          nextLabel=">"
          pageCount={total}
          onPageChange={onPageChange}
          containerClassName="pagination"
          previousLinkClassName="pagination__link"
          nextLinkClassName="pagination__link"
          disabledClassName="pagination__link--disabled"
          activeClassName="pagination__link--active"
          marginPagesDisplayed={marginPagesDisplayed}
          pageRangeDisplayed={marginPagesDisplayed}
        />
      </div>
    </PaginationStyle>
  );
};

export default Pangination;
