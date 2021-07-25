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


const Machine = () => {
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
            {i18n.t("MachineAssessment_1")} 
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
      flexWrap="wrap"
      mx="auto"
      justifyContent="Center"
      
      pt="0"
      verticalAlign="center"
      >  
      <Flex
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)" 
      >    
        <Flex
        flexDirection="column"
        maxWidth="800px">
        <Text color="darkGray" fontSize={["1xl", "2xl"]} p={6} textAlign="justify">
        {i18n.t("MachineAssessment_2")}
        </Text>
        </Flex>
        </Flex>
        <Flex verticalAlign="center">       
          <Image
          flexWrap="wrap"
          borderRadius="30px"
          maxWidth={["100%","500px"]}
          maxHeight="600px"
          src="23.jpg"
          objectFit="cover"
          
          justifyContent="flex-start"
          p={6}
         
          />
        </Flex>
      </Flex>
      <Flex         
        mx="auto"
        justifyContent="Center"
        maxWidth="1300px"
        flexDirection="row"
        flexWrap="wrap"
        paddingTop="60px">
      <Flex flexDirection="column" maxWidth="800px">
      <Flex  boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
      justifyContent="flex-start"
      
      pt="0"
      >
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
            {i18n.t("MachineAssessment_3")}
        </Text>
      </Flex>

      </Flex>
      <Flex 
        //w="75%"
        mx="auto"
        
        >
      <Accordion
        defaultIndex={[0]}
        allowMultiple
        mt="30px"
        color="white"
        maxWidth="460px "
        marginLeft="15px"
        marginRight="15px"
      >
        <AccordionItem marginBottom="20px">
          <h2>
            <AccordionButton borderRadius="5px" bg="red" style={{backgroundColor: 'red',}}>
              <Box flex="1" textAlign="left" >
              {i18n.t("MachineAssessment_4")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}  color="darkGray">
          <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_5")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_7")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_8")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_9")}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Flex>
      </Flex>
      <Flex         
        marginTop="60px"
        paddingTop="0px">
        <VStack         
        flexDirection="row"
        mx="auto"
        justifyContent="Center"
        //w="75%"
        maxWidth="1300px"
        verticalAlign="middle"
        flexWrap="wrap"
>
        <Image
          flexWrap="wrap-reverse"
          borderRadius="30px"
          maxWidth={["100%","500px"]}
          maxHeight="600px"
          src="29.jpg"
          objectFit="cover"
          padding-top="60px"
          justifyContent="flex-start"
          p={6}
          flexShrink="1"
          />
      <Flex        
        flexDirection="column" 
        maxWidth="800px"
        justifyContent="flex-start"
        pt="0"
        boxShadow="0 10px 20px -10px rgb(0 0 0/ 20%)"
        paddingTop="20px"
        >
        <Text
          color="darkGray"
          fontSize={["1xl", "2xl"]}
          p={6}
          pt="0"
          textAlign="justify"
        >
        {i18n.t("MachineAssessment_10")}
        </Text>
      </Flex>
      </VStack>
     
      </Flex>
      
    </Box>
  );
};

export default Machine;