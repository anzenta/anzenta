import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
import { useI18n } from "next-localization";

const ConstructionSafety = () => {
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
          bg="linear-gradient(240deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 50%),linear-gradient(300deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 50%), linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 20%)"
          transition="width 0.7s"
          top="0"
          right="0"
          position="absolute"
        />
        <Flex
          w="75%"
          top="0"
          position="absolute"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="flex-end"
          p={4}
        >
          <HStack>
            <Text as="h1" color="darkGray" fontSize={["3xl", "6xl"]} p={6}>
            {i18n.t("Construction_1")} 
            </Text>
          </HStack>
         
        </Flex>

        <Image
          src="1.jpg"
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
        
        <Text
          color="darkGray"
          fontSize={["3xl", "xl"]}
          p={6}
          pt="0"
          textAlign="left"
        >
        {i18n.t("Construction_2")} 
        </Text>
      </Flex>

      <Flex
        w="75%"
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
      >

        <Text
          color="darkGray"
          fontSize={["3xl", "xl"]}
          p={6}
          pt="0"
          paddingTop="30px"
          textAlign="left"
          maxW="100%"
        >
        {i18n.t("Construction_3")} 
        </Text>
      </Flex>


      <Accordion
        defaultIndex={[0]}
        allowMultiple
        w="75%"
        mx="auto"
        mt="30px"
        bg="red"
        color="white"
      >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="24px">
              {i18n.t("Construction_4")} 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            
            <List spacing={5}>
              <ListItem>
                <ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_5")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_6")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_7")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_8")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_9")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_10")} </ListItem>
            </List>
            
          </AccordionPanel>
        
        </AccordionItem>
        </Accordion>
        <Flex
        w="75%"
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        
        flexDirection="column"
        marginTop="35px"
      >
        <Text
          marginTop="30px"
          color="darkGray"
          fontSize={["3xl", "1xl"]}
          pt="0"
          textAlign="left"
          maxW="100%"
          
        >
        {i18n.t("Construction_11")} 
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
              <Box flex="1" textAlign="left" fontSize="24px">
              {i18n.t("Construction_12")} 
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_13")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_14")} </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontSize="24px">
              {i18n.t("Construction_15")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray" fontSize="18px">
            <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_16")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_17")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_18")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Construction_12")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>We are prepared to build subcontractor safety systems to inform and monitor your contractors and their activities.</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default ConstructionSafety