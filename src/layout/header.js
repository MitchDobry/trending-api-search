import { Box, Stack, HStack, Center, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

const Header = () => {
  return (
    <Box
      rounded="md"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      height="auto"
      m={[2, 3]}
      p={[1,2]}
      bg="white"
      boxShadow="md"
      w={[350]}
    >
      <Center h="auto">
        <Stack spacing={-3}>
          <Text fontSize="6xl" color="tomato" >
              <HStack>
              <h2>API</h2>
            <SearchIcon w={12} h={12} color="teal" />
              </HStack>
          </Text>
          <Text fontSize="md">
            <h3>The finest API`s</h3>
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Header;
