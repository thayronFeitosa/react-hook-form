import styled from 'styled-components';

export const TitleName = styled.div`
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;


  p {
    margin-bottom: 50px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 54px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #42427D;
   }
`;

export const Container = styled.div`
  display: flex;

  /* height: 100vh; */
  /* background: red;; */

  #submit {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      display: block;
      height: 50%;
      width: 100%;
      text-align: center;
    }

    button {
      margin-top: 50px;
      width: 290px;
      height:59px;
    }

    & button {
      margin-left: 50px;
    }
  }

`;
export const ContainerInpoutWidht = styled.div`
  width: 800px;
  div {
    input {
      height:  63px;
    }

   & + div {
    margin-top: 5px;
    }
  }

  @media(max-height: 800px) {
    width: 536px;

    div {
      input {
        height:  42px;
      }

      & + div {
        margin-top: 3px;
      }
    }
  }

`;

export const MarginLeftInput = styled.div`
  display: flex;
  width: 800px;

  div {
    input {
      height:  63px;
    }
  }

  @media(max-height: 800px) {
    width: 536px;

    div {
      input {
        height:  42px;
      }
    }
  }
`;
export const ContainerInpoutLine = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;

  input {
  width: 100%
  }

  @media(max-height: 800px) {
    margin-top: 67px;
  }
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
