import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiFillFire } from "react-icons/ai";
import { useI18n } from "next-localization";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const FireSafety = () => {
  const [isLoaded, setLoaded] = useState(false);
  const i18n = useI18n();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mb="100px">
      <Box w="100%" h="70px" />

      <Box position="relative" h="100%">
        <Box
          w={isLoaded ? "100%" : 0}
          h="full"
          bg="linear-gradient(to bottom , transparent, black 99%)"
          transition="width 0s"
          top="0"
          right="0"
          position="absolute"
        />
        <Flex
          bottom="0"
          position="absolute"
          flexDirection="column"
          p={4}
        >
          <HStack >
            <Text as="h1" color="white" fontSize={["2xl", "6xl"]} p={6}>
            {i18n.t("Fire_1")} 
            </Text>
          </HStack>
        </Flex>
        <Image
          src="43.jpg"
          maxWidth={["100%","100%"]}
          // top="0"
          // left="0"
          // position="absolute"
        />
      </Box>
      <Flex
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
        marginTop="30px"
      >

        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
          {i18n.t("Fire_2")}
        </Text>
      </Flex>
      <Flex
      mt="60px"
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
      >
        <Text color="darkGray" fontSize={["3xl", "3xl"]} p={6} textAlign="left">
        {i18n.t("Fire_14")}
        </Text>
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
          {i18n.t("Fire_3")}
        </Text>
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          textAlign="justify"
          p={6}
          pt="0"
        >
          {i18n.t("Fire_4")}
        </Text>
      </Flex>

      <Accordion
      mt="40px"
        defaultIndex={[0]}
        allowMultiple
        w={["100%","75%"]}
        mx="auto"
        
        bg="red"
        color="white"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              {i18n.t("Fire_5")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray">
            {i18n.t("Fire_6")}
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              {i18n.t("Fire_7")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray">
          {i18n.t("Fire_8")}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              {i18n.t("Fire_9")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray">
          {i18n.t("Fire_10")}
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
              {i18n.t("Fire_11")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray">
          {i18n.t("Fire_12")}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FireSafety;