import { Box, Flex, Text } from "@chakra-ui/layout";
import Slideshow from "./Slideshow/Slideshow";

const Home = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      position="relative"
      bg="white"
      overflowX="hidden"
      direction="column"
    >
      <Box w="100%" h="100px" />
      <Slideshow />
    </Flex>
  );
};

export default Home;
