import { Box, Center,Text } from "@chakra-ui/react";
import "./Header.css";

interface IHeader {
  texto: string;
}

export const Header = ({ texto }: IHeader) => {
  return (
    <Box backgroundColor={'orange'}>
      <Center>
        <Text fontSize={'3xl'} >{texto}</Text>
      </Center>
    </Box>
  );
};
