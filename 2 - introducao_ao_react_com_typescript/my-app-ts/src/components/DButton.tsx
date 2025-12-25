import { Button } from "@chakra-ui/react";

export const DButton = ({onClick}: any) => {
  return (
    <Button
      onClick={onClick}
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
  );
};
