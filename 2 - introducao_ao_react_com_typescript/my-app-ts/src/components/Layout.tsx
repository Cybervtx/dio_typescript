import { background, Box, Center } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header/Header";

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header texto="Dio Bank" />
      <Center
        minH="100vh"
        bg="linear-gradient(135deg, #9413dc 0%, #6b0f9e 100%)"
        p={{ base: 4, md: 8 }}
      >
        {children}
      </Center>
    </>
  );
};
