import { Grid, GridItem, Flex, Show, Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `
        "nav" "main"
      `,
        lg: `
        "nav nav" "aside main"
      `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "15vw 1fr",
      }}
    >
      <GridItem gridArea="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" paddingX={3}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        <Box paddingX={3}>
          <GameHeading gameQuery={gameQuery} />
          <Flex direction={{ base: "column", sm: "row" }} marginY={3}>
            <Box
              marginRight={{ base: 0, sm: 3 }}
              marginBottom={{ base: 3, sm: 0 }}
              width={{ base: "100%", sm: "auto" }}
            >
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
            </Box>
            <Box width={{ base: "100%", sm: "auto" }}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSort={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
