import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.div`
      width: 83%;
      flex-direction: row;
      display: flex;
      margin-top: 100px;
    div {
        height: 64px;
        width: 564px;
        border-radius: 20px 5px;

        background: #F3F6FF;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 8px 8px rgba(50, 50, 71, 0.08), 0px 8px 16px rgba(50, 50, 71, 0.06);
    }

    input {
        background: #F3F6FF;
        border: none;
        color: #7979B2;
        padding-left: 20px;
        width: 500px;
        height:54px;
        border-radius: 20px 5px;
        ::-webkit-input-placeholder {
            color: #7979B2;
        }

      outline: 0;
    }
    svg {
      margin-left:5px;
      /* padding-top: 5px; */
      font-size:40px;
      color: #42427D;
    }
    ::-webkit-input-placeholder {
      color: orange;
      font: 12px verdana, arial, sans-serif;
    }
    @media(max-height: 800px) {
      margin-top: 66px;
      div {
        height: 42px;
        width: 377px;
        border-radius: 20px 5px;
      }
      input {
        padding-left: 13px;
        width: 335px;
        height:36px;
        border-radius: 16px 3px;
        outline: 0;

      }

      svg {
        margin-left:3px;
        font-size:26px;
      }
    }
`;
