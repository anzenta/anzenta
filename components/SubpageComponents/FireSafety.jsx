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
          bg="linear-gradient(240deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 50%),linear-gradient(300deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 50%), linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20%)"
          transition="width 0.7s"
          top="0"
          right="0"
          position="absolute"
        />
        <Flex
          top="0"
          right="0"
          position="absolute"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          p={4}
        >
          <HStack>
            <Icon as={AiFillFire} boxSize={16} _hover={{ color: "red" }} />
            <Text as="h1" color="darkGray" fontSize={["3xl", "6xl"]} p={6}>
            {i18n.t("Fire_1")}
            </Text>
          </HStack>
          <Text
            color="darkGray"
            fontSize={["3xl", "3xl"]}
            p={6}
            boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
            textAlign="right"
            maxW="40%"
          >
          {i18n.t("Fire_2")}
          </Text>
        </Flex>

        <Image
          src="fire-2653211_1920.jpg"
          // top="0"
          // left="0"
          // position="absolute"
        />
      </Box>

      <Flex
        w="75%"
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
          fontSize={["3xl", "xl"]}
          p={6}
          pt="0"
          textAlign="left"
        >
          {i18n.t("Fire_3")}
        </Text>
      </Flex>

      <Flex
        w="75%"
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        marginTop="40px"
        flexDirection="column"
      >
        
        <Text
          color="darkGray"
          fontSize={["3xl", "xl"]}
        
          textAlign="left"
          maxW="100%"
        >
          {i18n.t("Fire_4")}
        </Text>
      </Flex>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w="75%"
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