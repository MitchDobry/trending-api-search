import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
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
        templateColumns=" 1fr"
        templateRows="auto 1fr auto"
        gap={4}
        bg="gray.50"
      >
        <GridItem gridArea="header" minWidth={0} overflow="hidden">
          <Header></Header>
        </GridItem>
        <GridItem gridArea="inputs" overflow="hidden">
          <Card>
            <RadioTime />
            <LanguageSelection />
            <SortSwitch />
          </Card>
        </GridItem>
        <GridItem gridArea="body" minWidth={0} overflow="hidden">
          <Repositories />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
