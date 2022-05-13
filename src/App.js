import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={theme}>
      Hello world
    </ChakraProvider>
  );
}

export default App;
