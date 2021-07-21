import React from "react";
import { useSelector } from "react-redux";

import Card from "../layout/card";
import { Text, HStack, Image, Link, VStack, Spinner } from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";

function Repositories() {
  const repos = useSelector((state) => state.repositories.entities);
  const reposLoading = useSelector((state) => state.repositories.status);

  if (reposLoading !== "fulfilled") {
    return (
      <Card>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal"
          size="xl"
          p={[2, 1]}
          m={[2, 2]}
        />
      </Card>
    );
  }
  return repos.map((item) => (
    <Card key={item.name}>
      <VStack>
        <Image
          borderRadius="full"
          boxSize="100px"
          p={[1, 1]}
          src={item.avatar}
          alt={item.name}
        />
        <HStack>
          <HStack>
            <StarIcon />
            <Text fontSize="sm">{item.stars}</Text>
          </HStack>
          <Text fontSize="sm">{item.language}</Text>
        </HStack>
        <Text fontSize="sm">
          <Link color="teal.500" href={item.url}>
            Check out GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
        <VStack>
          <Text fontSize="3xl">{item.name}</Text>
          <Text color="gray" fontSize="md">
            {item.description}
          </Text>
        </VStack>
      </VStack>
    </Card>
  ));
}

export default Repositories;
