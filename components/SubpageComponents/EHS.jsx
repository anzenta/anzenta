import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, color, Icon, Image } from "@chakra-ui/react";
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

import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';


const EHS = () => {
  const i18n = useI18n();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box mb="100px" maxWidth="100%"  alignContent="normal">
      <Box  h="70px"/>
      <Flex
      flexDirection="row"
      flexWrap="wrap"
      
      mx="auto"
      justifyContent="Center"
      p={6}
      pt="0"
      verticalAlign="center"
      >  
      <Flex
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)" 
      >    
        <Flex
        flexDirection="column"
        maxWidth="800px">
        <HStack justifyContent="Center">
            <Text as="h1" color="darkGray" fontSize={["3xl", "5xl"]} p={6}>
            {i18n.t("EHS_1")}
            </Text>
        </HStack>
        <Text color="darkGray" fontSize={["3xl", "xl"]} p={6} textAlign="left">
        {i18n.t("EHS_2")}
        </Text>
        </Flex>
        </Flex>
        <Flex verticalAlign="center">       
          <Image
          flexWrap="wrap"
          borderRadius="32px"
          maxWidth="500px"
          maxHeight="600px"
          src="2.jpg"
          objectFit="cover"
          padding="45px"
          justifyContent="flex-start"
          p={6}
          flexShrink="1"
          />
        </Flex>
      </Flex>
      


      <Flex         
        mx="auto"
        justifyContent="Center"
      
        maxWidth="1300px"
        flexDirection="row"
        flexWrap="wrap"
        paddingTop="20px">
      <Flex flexDirection="column" maxWidth="700px">
      <Flex  boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
      justifyContent="flex-start"
      p={6}
      pt="0"
      >
        <Text
          color="darkGray"
          fontSize={["3xl", "xl"]}
          p={6}
          pt="0"
          marginTop="10px"
          marginBottom="10px"
          textAlign="left"
        >
        {i18n.t("EHS_3")}
        </Text>
      </Flex>

      
      </Flex>
      <Flex 
        //w="75%"
        mx="auto"
        
        >
      <Accordion
      marginTop="10px"
        defaultIndex={[0]}
        allowMultiple
        color="white"
      >
        <AccordionItem>
          <h2>
            <AccordionButton bg="red" style={{backgroundColor: 'red',}}>
              <Box flex="1" textAlign="left" >
              {i18n.t("EHS_4")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}  color="darkGray">
          <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("EHS_5")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("EHS_6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("EHS_7")}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Flex>
      </Flex>
      <Flex         
        mx="auto"
        justifyContent="Center"
        //w="75%"
        maxWidth="1300px"
        flexDirection="row"
        flexWrap="wrap-reverse"
        paddingTop="20px">
        <Image
          flexWrap="wrap-reverse"
          borderRadius="32px"
          maxWidth="500px"
          maxHeight="600px"
          src="53.jpg"
          objectFit="cover"
          padding="45px"
          justifyContent="flex-start"
          p={6}
          flexShrink="1"
          />
      <Flex flexDirection="column" maxWidth="800px">
      <Flex        
        justifyContent="flex-start"
        p={6}
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        paddingTop="20px"
        >
        <Text
          color="darkGray"
          fontSize={["3xl", "xl"]}
          p={6}
          pt="0"
          textAlign="left"
          marginTop="7px"
        >
        {i18n.t("EHS_8")}
        </Text>
      </Flex>
      </Flex>
      </Flex>
      <Flex w="100%" bg="rgba(73,73,72)" justifyContent="center" py={10} marginTop="30px">
        <VStack spacing={5} alignItems="center" pl={12} color="white">
          <Text fontSize={["3xl", "4xl"]} pr={4} maxW="100%">
            {i18n.t("EHS_9")}
          </Text>
          <Text fontSize={["xl", "2xl"]} fontWeight="300" pr={4}>
            {i18n.t("EHS_10")}
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default EHS;