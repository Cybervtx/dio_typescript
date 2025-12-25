import { Box, Text } from "@chakra-ui/react";

interface Icardinfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: Icardinfo) => {
  return (
    <Box
      backgroundColor={"#FFFFFF"}
      width={320}
      minHeight={"120px"}
      padding={8}
      borderRadius={5}
    >
      <Text fontSize={'2xl'} fontWeight={'bold'}>
        {mainContent}
      </Text>
      <Text fontSize={'xl'}>{content}</Text>
    </Box>
  );
};
