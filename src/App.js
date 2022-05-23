import {
  ChakraProvider
} from '@chakra-ui/react';
import MainRoutes from './utils/MainRoutes.jsx'

function App() {
  return (
    <ChakraProvider >
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;
