import React from 'react';
import { Container, StyledSpinner } from './styles';

const Spinner: React.FC = () => (
  <Container>
    <div id="divLoader">
      <StyledSpinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="4"
        />
      </StyledSpinner>
    </div>
  </Container>
);

export default Spinner;
