import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from "@chakra-ui/react";
import { Card } from "../components/Card";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { DButton } from "../components/DButton";
import { login } from "../services/login/login";

export const Home = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box padding={"25px"}>
      <Card>
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </InputGroup>
              </FormControl>
            </VStack>

            <DButton onClick={() => login(email, password)} />
          </VStack>
        </Box>
      </Card>
    </Box>
  );
};
