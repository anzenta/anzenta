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


import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';



const Health_PPE= () => {
  const i18n = useI18n();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mb="100px" id='ppe_jump'>
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
            <Text as="h1" color="white" fontSize={["2xl", "6xl"]} p={6} >
            {i18n.t("ppe1")} 
            </Text>
          </HStack>
        </Flex>
        <Image
          src="11.jpg"
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
          {i18n.t("ppe2")}
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
              {i18n.t("ppe3")} 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            
            <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe4")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe5")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe7")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe8")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe9")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe10")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("ppe11")}</ListItem>

            </List>
            
          </AccordionPanel>
        </AccordionItem>

        
      </Accordion>
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
          {i18n.t("ppe12")}
        </Text>
      </Flex>
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
          {i18n.t("ppe13")}
        </Text>
      </Flex>
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
          {i18n.t("ppe14")}
        </Text>
      </Flex>

    </Box>
  );
};

export default Health_PPE