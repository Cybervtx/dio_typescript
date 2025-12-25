import { useState } from "react";
import { Card } from "./components/Card";
import { Center, ChakraProvider } from "@chakra-ui/react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <ChakraProvider>
      <Center
        minH="100vh"
        bg="linear-gradient(135deg, #9413dc 0%, #6b0f9e 100%)"
        p={{ base: 4, md: 8 }}
      >
        <Card />
      </Center>
    </ChakraProvider>
  );
}

export default App;
