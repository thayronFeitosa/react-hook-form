import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <ChakraProvider>
        <Routes />
      </ChakraProvider>
    </AppProvider>
  </Router>
);

export default App;
