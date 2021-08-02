import styled from 'styled-components';

export const Container = styled.div`
  .loader {
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid #17f084;
    width: 100px;
    height: 100px;
    -webkit-animation: rotate 1s linear infinite; /* Safari */
    animation: rotate 1s linear infinite;
    animation: rotate 2s linear infinite;
    pointer-events: none;
  }
  #divLoader{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 1000;
    background-color: #000;
    opacity: 0.9;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
  }
#divLoader .loader{
  margin-top: -75rem;
}
`;
export const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -1000px 0 0 -25px;
  width: 200px;
  height: 200px;
  pointer-events: none;
  #buttonSubmit {
    pointer-events: none;
  }
  & .path {
    stroke: #8D8DBD;;
    stroke-linecap: round;
    animation: dash 2s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
