import { ChakraProvider, Grid, GridItem } from '@chakra-ui/react'
import RadioTime from './components/RadioTime'
import LanguageSelection from './components/LanguageSelection';
import RepoFetcher from './components/RepoFetcher'

function App() {
  return (
    <ChakraProvider>
      <Grid
          h='100%'
          templateAreas={`
                "header"
                "inputs"
                "body"
              `}
          templateColumns=' 1fr'
          templateRows='auto 1fr auto'
          gap={4}
        >
          <GridItem h="10" bg="tomato" gridArea='header' minWidth={0} overflow='hidden'>
            <h2>trending-api-search</h2>
          </GridItem>
          <GridItem gridArea='inputs' w='33%' overflow='hidden'>
            <RadioTime />
            <LanguageSelection />
          </GridItem>
          <GridItem gridArea='body' minWidth={0}  w='33%' overflow='hidden'>
            <RepoFetcher />
          </GridItem>
        </Grid>
    </ChakraProvider>
  );
}

export default App;
