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

import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';


const Ergonomics = () => {
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
            {i18n.t("Ergonomia_1")} 
            </Text>
          </HStack>
        </Flex>
        <Image
          src="68.jpg"
          maxWidth={["100%","100%"]}
          // top="0"
          // left="0"
          // position="absolute"
        />
      </Box>
      <Flex
      flexDirection="row"
      wrap="wrap"
      
      maxWidth="1300px"
      mx="auto"
      justifyContent="flex-start"
      
      pt="0"
      verticalAlign="center"
      
      >
      
      <Flex
        maxWidth="700px"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        alignItems="center"
      >
    

        <Flex
        alignItems="center"
        flexDirection="column">

        <Text color="darkGray" fontSize={["1xl", "2xl"]} p={6} textAlign="justify">
        {i18n.t("Ergonomia_2")}
                </Text>
        </Flex>

        
        
        </Flex>
        <Flex
        
        >       
          <Image
          borderRadius="30px"
          maxWidth={["100%","550px"]}
          maxHeight="600px"
          src="8.jpg"
          objectFit="cover"
          padding="5px"
          //verticalAlign="center"
          justifyContent="flex-start"
          p={6}
          
          // top="0"
          // left="0"
          position="relative"
          />
        </Flex>
        </Flex>
      <Flex        
        maxWidth="1300px"
        mx="auto"
        justifyContent="flex-start"
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        flexDirection="column"
        marginTop="60px"
        >
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
          {i18n.t("Ergonomia_3")}
        </Text>
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
          {i18n.t("Ergonomia_4")}
        </Text>
      </Flex>



      <Accordion
        defaultIndex={[0]}
        allowMultiple
        maxWidth="1300px"

        mx="auto"
        mt="60px"
        bg="red"
        color="white"
      >
        <AccordionItem>
          <h2>
            <AccordionButton >
              <Box flex="1" textAlign="left" >
              {i18n.t("Ergonomia_5")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} bg="white" color="darkGray">
          <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Ergonomia_5")} </ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Ergonomia_6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Ergonomia_7")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Ergonomia_8")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("Ergonomia_9")}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default Ergonomics;