import styled from 'styled-components';

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;

  #paginationContainer {
    margin: 5px;

    .pagination {
      display: flex;
      justify-content: space-between;
      list-style: none;
      cursor: pointer;
    }

    .pagination a {
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #A0AAC8;
      color: #A0AAC8;
      margin: 1px;
    }

    .pagination__link {
      font-weight: bold;
    }

    .pagination__link--active a {
      color: #fff;
      background: #42427D;
    }

    .pagination__link--disabled a {
      color: rgb(198, 197, 202);
      border: 1px solid rgb(198, 197, 202);
    }
  }
`;
