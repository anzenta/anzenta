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
    <Box  maxWidth="100%" align="center">
      <Box  h="70px"/>
      <Box maxWidth="1920px" position="relative" h="100%">
        <Box
          w={isLoaded ? "100%" : 0}
          h="full"
          bg="linear-gradient(240deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 40%),linear-gradient(200deg,rgba(255,255,255,1) 30%,rgba(255,255,255,0) 40%), linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,0) 3%)"
          transition="width 0s"
          top="0"
          
          position="absolute"
        />
        <Flex
          top="0"
          right="0"
          position="absolute"
          justifyContent="right"
         
          p={4}
        >
          <HStack>
            <Text color="darkGray" fontSize={["3xl", "5xl"]} p={6}>
            {i18n.t("DUE_1")}
            </Text>
          </HStack>
         
        </Flex>
        <Flex alignItems="right">
        <Image
          src="4.jpg"

          // top="0"
          // left="0"
          // position="absolute"
        />
        </Flex>
      </Box>
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
        <Text color="darkGray" fontSize={["3xl", "xl"]} p={6} textAlign="left">
        {i18n.t("DUE_2")}
        </Text>
        </Flex>
        </Flex>
        <Flex verticalAlign="center">       
          <Image
          flexWrap="wrap"
          borderRadius="300px"
          maxWidth="500px"
          maxHeight="600px"
          src="7.jpg"
          objectFit="cover"
          padding="45px"
          justifyContent="flex-start"
          p={6}
         
          />
        </Flex>
      </Flex>
      


      <Flex         
        mx="auto"
        justifyContent="Center"
        //w="75%"
        maxWidth="1300px"
        flexDirection="row"
        flexWrap="wrap-reverse"
        >
        <Flex verticalAlign="Center">
        <Image
          borderRadius="300px"
          maxWidth="500px"
          maxHeight="800px"
          src="4.jpg"
          objectFit="cover"
          p={6}
          />
        </Flex>
          
      <Flex flexDirection="column" maxWidth="700px" >
      <Flex  boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
      justifyContent="flex-start"
      p={6}
      pt="0"
      >
        <Text
          color="darkGray"
          fontSize={["xl", "2xl"]}
          p={6}
          pt="0"
          marginTop="10px"
          marginBottom="10px"
          textAlign="justify"
        >
        {i18n.t("DUE_3")}
        </Text>
      </Flex>

      
      
      
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
        {i18n.t("DUE_4")}
        </Text>
      </Flex>
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
        {i18n.t("DUE_5")}
        </Text>
      </Flex>
      </Flex>

      </Flex>

      <Flex  boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
      maxWidth="1200px"
      p={6}
      pt="0"
      flexDirection="row"
      flexWrap="wrap"
      margin="30px"
      mx="auto"
      justifyContent="Center"

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
        {i18n.t("DUE_3")}
        </Text>
      </Flex>
    </Box>
  );
};

export default EHS;