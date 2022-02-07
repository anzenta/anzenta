import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, Icon, Image } from "@chakra-ui/react";
import React from 'react';
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";


import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';
import { useI18n } from "next-localization";

//import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Health_highrisk_permit = () => {
  const i18n = useI18n();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mb="100px" id='highrisk'>
      <Box  h="70px"/>
      
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
            <Text as="h1" color="white" fontSize={["2xl", "6xl"]} p={6} id = 'high'>
            {i18n.t("high1")} 
            </Text>
          </HStack>
        </Flex>
        <Image
          src="59.jpg"
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
        pt="10"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
      >
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
          topMargin="30px"
          
        >
          
        {i18n.t("high2")} 
        </Text>
      </Flex>

      <HStack wrap="wrap" >
      <Flex
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
        mt="60px"
      >
         <HStack >
            <Text as="h1" color="darkGray" fontSize={["1xl", "2xl"]} p={6} paddingTop="60px" width="100%"textAlign="center">
            {i18n.t("high3")} 
            </Text>

      </HStack>
      <Flex>
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          paddingTop="20px"
          textAlign="justify"
          id = {'high'}
        >
        {i18n.t("high4")} 
        
        </Text>
        <Image src="28.jpg"
          maxWidth={["50%","350px"]}
          borderRadius="40px"
          p="30px"
          />
          
          </Flex>
          
      </Flex>
      
          
      </HStack>

        <Flex
        
        mx="auto"
        justifyContent="flex-start"
        p={6}
        pt="0"
        flexDirection="column"
        mt="40px"
      >
        
        </Flex>

        

    </Box>
  );
};

export default Health_highrisk_permit