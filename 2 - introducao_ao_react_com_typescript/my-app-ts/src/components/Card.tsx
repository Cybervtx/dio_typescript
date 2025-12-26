import {
  Input,
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Center,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { DButton } from "./DButton";
import { login } from "../services/login/login";
import { useState } from "react";

export const Card = ({children}: any) => {

  return (
    <Center>
      {children}
    </Center>
  );
};
