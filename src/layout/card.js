import { Box, HStack, Center, Flex } from "@chakra-ui/react";

const Card = (props) => {
  return (
    <Box
      rounded="md"
      overflow="hidden"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      height="auto"
      m={[2, 3]}
      bg="white"
      boxShadow="md"
    >
      <Center h="auto">
        <HStack p={[3, 3]}>
          <Flex direction={["column", "column", "row"]}>{props.children}</Flex>
        </HStack>
      </Center>
    </Box>
  );
};

export default Card;
