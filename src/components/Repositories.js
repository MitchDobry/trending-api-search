import React from "react";
import { useSelector } from "react-redux";

import Card from "../layout/card";
import {
  Text,
  HStack,
  Image,
  Link,
  VStack,
  Alert,
  AlertIcon,
  Box,
} from "@chakra-ui/react";
import { StarIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  XHR_STATUS_IDLE,
  XHR_STATUS_PENDING,
  XHR_STATUS_REJECTED,
  XHR_STATUS_FULFILLED,
} from "../consts";

const Repository = (props) => (
  <Card key={props.name}>
    <VStack>
      <Image
        borderRadius="full"
        boxSize="100px"
        p={[1, 1]}
        src={props.avatar}
        alt={props.name}
      />
      <HStack>
        <HStack>
          <StarIcon />
          <Text fontSize="sm">{props.stars}</Text>
        </HStack>
        <Text fontSize="sm">{props.language}</Text>
      </HStack>
      <Text fontSize="sm">
        <Link color="teal.500" href={props.url}>
          Check out GitHub <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
      <VStack>
        <Text fontSize="3xl">{props.name}</Text>
        <Text color="gray" fontSize="md">
          {props.description}
        </Text>
      </VStack>
    </VStack>
  </Card>
);

function Repositories() {
  const repositories = useSelector((state) => state.repositories.entities);
  const status = useSelector((state) => state.repositories.status);
  const sortByStars = useSelector((state) => state.userSettings.sortByStars);

  switch (status) {
    case XHR_STATUS_IDLE:
      return (
        <Alert status="info">
          <AlertIcon />
          Please whait.
        </Alert>
      );
    case XHR_STATUS_PENDING:
      return (
        <Alert status="info">
          <AlertIcon />
          Data is loading
        </Alert>
      );
    case XHR_STATUS_REJECTED:
      return (
        <Alert status="error">
          <AlertIcon />
          There was an error, oh my :()
        </Alert>
      );
    case XHR_STATUS_FULFILLED:
      return [...repositories]
        .sort((a, b) => {
          if (a.stars < b.stars) {
            return sortByStars === "desc" ? 1 : -1;
          }
          if (a.stars > b.stars) {
            return sortByStars === "desc" ? -1 : 1;
          }
          return 0;
        })
        .map((repository) => (
          <Box>
            <Repository key={repository.name} {...repository} />
          </Box>
        ));
    default:
      return null;
  }
}

export default Repositories;
