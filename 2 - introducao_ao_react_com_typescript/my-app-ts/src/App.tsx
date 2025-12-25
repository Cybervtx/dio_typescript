import {
  ChakraProvider,
  Input,
  Box,
  Center,
  Button,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { login } from "./services/login/login";

function App() {
  return (
    <ChakraProvider>
      <Center
        minH="100vh"
        bg="linear-gradient(135deg, #9413dc 0%, #6b0f9e 100%)"
        p={{ base: 4, md: 8 }}
      >
        <Box
          bg="white"
          borderRadius="2xl"
          p={{ base: 6, md: 10 }}
          w="100%"
          maxW="420px"
          boxShadow="2xl"
        >
          <VStack spacing={6}>
            <Heading
              as="h1"
              size={{ base: "lg", md: "xl" }}
              color="purple.700"
              textAlign="center"
            >
              Faça seu login
            </Heading>

            <VStack spacing={4} w="100%">
              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Email
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="purple.400" />
                  </InputLeftElement>
                  <Input
                    placeholder="Digite seu email"
                    type="email"
                    focusBorderColor="purple.500"
                    _hover={{ borderColor: "purple.300" }}
                  />
                </InputGroup>
              </FormControl>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Senha
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <LockIcon color="purple.400" />
                  </InputLeftElement>
                  <Input
                    placeholder="Digite sua senha"
                    type="password"
                    focusBorderColor="purple.500"
                    _hover={{ borderColor: "purple.300" }}
                  />
                </InputGroup>
              </FormControl>
            </VStack>

            <Button
              onClick={login}
              colorScheme="purple"
              size="lg"
              w="100%"
              mt={2}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.2s"
            >
              Entrar
            </Button>
          </VStack>
        </Box>
      </Center>
    </ChakraProvider>
  );
}

export default App;
