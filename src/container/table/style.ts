import styled, { css } from 'styled-components';

interface ContainerProps {
  shadow?: boolean;

}

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-bottom:26px;
    color: #42427D;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
  }
`;

export const ContainerTable = styled.div`
  box-sizing: border-box;
  border: 1px solid #42427D;
  border-radius: 20px;
  width: 1419px;
  height: 465px;
 table {
  width: 100%;
  border-spacing: 0;

    tr {
      height: 4px;
      :last-child {
        td {
          border-bottom: 0;
        }
      }
      :nth-child(even) {
        background: #F3F6FF;
        border-radius: 0px;
      }

      :last-child td{
        :last-child {
          border-bottom-right-radius: 20px;
          text-align: center;
        }

        :first-child {
          border-bottom-left-radius: 20px;
        }
      }

    }

    th {
      text-align: left;
      background: #F5F6FA;
      padding: 6px 0px 6px 10px;
      color: #42427D;
      font-family: Inter;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 29px;
      height: 50%;


      :last-child {
        border-top-right-radius: 20px;
        text-align: center;
      }

      :nth-child(2){
        text-align: center;

      }

      :first-child {
        border-top-left-radius: 20px;
      }

    }
    td {
      height: 30px;
      margin: 0;
      color: #A0AAC8;
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      padding-left: 10px;

      :last-child {
        border-right: 0;

      }
      :nth-child(2){
        text-align: center;

      }
      :last-child {
        text-align: center;

      }

      button {
        color: #FFFF;
        background: #42427D;
        border-radius: 8px;
        width: 45%;
        margin: 9px;
        a {
          text-decoration: none;
          color: #FFFF;
        }
      }
    }
  }

`;
