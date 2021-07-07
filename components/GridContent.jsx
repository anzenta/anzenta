import Icon from "@chakra-ui/icon";
import { Box, VStack, Text, Flex, HStack } from "@chakra-ui/layout";
import { Button, ButtonGroup, Link } from "@chakra-ui/react";

import {
  ArrowForwardIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import { useState } from "react";
import router from "next/router";

const GridContent = ({ gridcontent, isTitleTooLong }) => {
  const [isHovered, setHovered] = useState(false);

  
  return (
    <Flex
    bg="white"
    p={[3, 5]}
    borderRadius="15px"
    boxShadow="0px 0px 2px 2px lightGray"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    cursor="pointer"
    transition="transform 0.3s"
    w="100%"
    maxW="100%"
    onClick={() => router.push(gridcontent.to)}
    >
      <Flex
        color="darkGray"
        flexDirection="column"
        justifyContent="flex-start"
        overflow="hidden"
      >
        <HStack alignItems="baseline">
          <Icon as={gridcontent.icon} color="red" boxSize="20px" />

          <Text fontSize={["xl", "xl", "xl", "2xl", "2xl"]} fontWeight="bold">
            {gridcontent.title}
          </Text>
        </HStack>

        <Flex
          pt={4}
          w="200%"
          transform={isHovered ? "translateX(-50%)" : "translateX(0)"}
          transition="transform 0.6s"
          h="full"
        >
          <Text
            w="100%"
            fontSize={["sm", "md", "md", "md", "lg"]}
            textAlign="justify"
            opacity={isHovered ? "0" : "100%"}
            transition="opacity 0.6s"
          >
            {gridcontent.content}
          </Text>

          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            w="100%"
          >
            <Button
              //rightIcon={<Icon as={ChevronRightIcon} boxSize={10} />}
              colorScheme="darkGray"
              borderRadius="0px"
              variant="outline"
              borderWidth="0"
              borderRightWidth="5px"
              borderRightColor="red"
              visibility={isHovered ? "visible" : "hidden"}
              fontSize={["md", "lg", "xl", "2xl", "2xl"]}
              fontWeight="normal"
            >
              Learn more
            </Button>
          </Box>
        </Flex>
        <Flex w="100%" justifyContent="center" mt="auto">
          <Icon
            as={ChevronDownIcon}
            boxSize={10}
            transform={isHovered ? "rotateZ(180deg)" : "none"}
            transition="transform 0.6s"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GridContent;

