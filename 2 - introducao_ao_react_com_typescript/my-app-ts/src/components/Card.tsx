import {
  Input,
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { DButton } from "./DButton";
import { login } from "../services/login/login";
import { useState, useEffect } from "react";
import { api } from "../api";

interface UserData {
  email: string;
  password: string;
  name: string;
}

export const Card = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState<UserData | null>();

  useEffect(() => {
    const getData = async () => {
      const data: UserData | any = await api; 
      setUserData(data);
    };
    getData();
  })

  return (
    <Box
      bg="white"
      borderRadius="2xl"
      p={{ base: 6, md: 10 }}
      w="100%"
      maxW="420px"
      boxShadow="2xl"
    >
      <VStack spacing={6}>
        { 
          userData === null || userData === undefined ? 
          <h1>Loading ...</h1> :
          <h1>Informações carregadas</h1>
        }
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
  );
};
