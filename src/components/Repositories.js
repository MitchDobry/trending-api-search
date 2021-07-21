import React from "react";
import { useSelector } from "react-redux";

import Card from "../layout/card";
import {
  Text,
  HStack,
  Image,
  Link,
  VStack,
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";


function Repositories() {
  const repos = useSelector((state) => state.repositories.entities);
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
