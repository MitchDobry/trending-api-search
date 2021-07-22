import { ChakraProvider, Grid, GridItem, SimpleGrid } from "@chakra-ui/react";
import Dispacher from "./components/Dispatcher";

import RadioTime from "./components/RadioTime";
import LanguageSelection from "./components/LanguageSelection";
import SortSwitch from "./components/SortSwitch";
import Card from "./layout/card";
import Header from "./layout/header";

import Repositories from "./components/Repositories";

function App() {
  return (
    <ChakraProvider>
      <Dispacher />
      <Grid
        h="100%"
        templateAreas={`
                "header"
                "inputs"
                "body"
              `}
        templateColumns="1fr"
        templateRows="auto 1fr auto"
        gap={4}
        bg="gray.50"
      >
        <GridItem gridArea="header" minWidth={0} overflow="hidden">
          <Header></Header>
        </GridItem>
        <GridItem gridArea="inputs" overflow="hidden">
          <Card>
            <SimpleGrid columns={[1, null, 3]}>
              <LanguageSelection />
              <RadioTime />
              <SortSwitch />
            </SimpleGrid>
          </Card>
        </GridItem>
        <GridItem gridArea="body" minWidth={0} overflow="hidden">
          <SimpleGrid columns={[1, null, 4]}>
            <Repositories />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
