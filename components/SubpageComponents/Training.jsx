import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useI18n } from "next-localization";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import React from 'react';
import ReactList from 'react-list';

import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';



const Training = () => {
  const i18n = useI18n();
  const [isLoaded, setLoaded] = useState(false);
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
            {i18n.t("Training_1")} 
            </Text>
          </HStack>
        </Flex>
        <Image
          src="36.jpg"
          maxWidth={["100%","100%"]}
          // top="0"
          // left="0"
          // position="absolute"
        />
      </Box>

      <Flex
        
        mx="auto"
        justifyContent="flex-start"
        mt="20px"
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
        
      >
        
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
          {i18n.t("Training_2")}
        </Text>
      </Flex>

      <Flex
        
        mx="auto"
        justifyContent="flex-start"
        
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
      >
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="10"
          textAlign="justify"
          maxW="100%"
        >
      {i18n.t("Training_3")}
        </Text>
      </Flex>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        
        mx="auto"
        mt="30px"
        bg="red"
        color="white"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="24px">
              {i18n.t("Training_4")} 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            
            <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_5")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_7")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_8")}</ListItem>
            </List>
            
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="24px">
              {i18n.t("Training_9")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_11")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_12")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_13")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_14")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_15")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_16")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_17")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_18")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_19")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_20")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_21")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Training_22")}</ListItem>

            </List>
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
    </Box>
  );
};

export default Training