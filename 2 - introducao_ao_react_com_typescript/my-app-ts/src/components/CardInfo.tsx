import { Box } from "@chakra-ui/react";

interface Icardinfo {
  text: string;
}

export const CardInfo = ({ text }: Icardinfo) => {
  return (
    <Box
      backgroundColor={"#FFFFFF"}
      width={320}
      minHeight={"120px"}
      padding={8}
      borderRadius={5}
    >
      {text}
    </Box>
  );
};
