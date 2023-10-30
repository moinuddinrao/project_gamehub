import { Box, Flex, Image, useBreakpointValue } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  const isSmallScreen = useBreakpointValue({ base: true, sm: false });

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection={isSmallScreen ? "column" : "row"}
      padding="10px"
    >
      {isSmallScreen ? (
        <>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            width="full"
            marginBottom="10px"
          >
            <Image src={logo} boxSize="60px" />
            <ColorModeSwitch />
          </Flex>
          <Box marginX="10px" width="full">
            <SearchInput onSearch={onSearch} />
          </Box>
        </>
      ) : (
        <>
          <Image src={logo} boxSize="60px" />
          <Box marginX="10px" width="full">
            <SearchInput onSearch={onSearch} />
          </Box>
          <ColorModeSwitch />
        </>
      )}
    </Flex>
  );
};

export default NavBar;
