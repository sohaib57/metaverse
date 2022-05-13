import {
  ChakraProvider
} from '@chakra-ui/react';
import CreateExperience from './screens/CreateExperience';

function App() {
  return (
    <ChakraProvider >
      <CreateExperience />
    </ChakraProvider>
  );
}

export default App;
