import { Flex, Box, Text, Grid, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";

import GridContent from "./GridContent";
import { gridcontents } from "./gridcontents";

const Services = () => {
  const [isLoaded, setLoaded] = useState(null);

  useEffect(() => {
    const img = new Image();

    img.src = "0.png";
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <Flex h="100%" w="100%" direction="column" position="relative" bg="white">
      <Flex w="100%" bg="rgba(73,73,72)" justifyContent="flex-end " py={10}>
        <VStack spacing={5} alignItems="flex-start" pl={12} color="white">
          <Text fontSize={["3xl", "4xl"]} pr={4} maxW="80%">
            Your needs - our expertise
          </Text>
          <Text fontSize={["xl", "2xl"]} fontWeight="300" pr={4}>
            Learn more about one of our services that we offer.
          </Text>
        </VStack>
      </Flex>

      <Grid
        maxW="100%"
        templateColumns={[
          "minmax(200px, 1fr)",
          "minmax(200px, 1fr)",
          "minmax(200px, 1fr) minmax(200px, 1fr)",
          "minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) ",
          "minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)",
        ]}
        gap={14}
        p={12}
        px={[4, 6, 8, 16]}
        // backgroundImage={`url(${isLoaded ? "2.png" : ""})`}
        backgroundPosition={["left", "left", "left", "bottom"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        {gridcontents.map((stackcontent, index) => (
          <GridContent
            gridcontent={stackcontent}
            key={index}
            isTitleTooLong={index === 1 || index === 5}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Services;
