import {
  ChakraProvider
} from '@chakra-ui/react';
import CreateExperience from './screens/CreateExperience';
import MainRoutes from './utils/MainRoutes';

function App() {
  return (
    <ChakraProvider >
      <MainRoutes/>
    </ChakraProvider>
  );
}

export default App;
