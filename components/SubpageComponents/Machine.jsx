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
            <Text as="h1" color="darkGray" fontSize={["3xl", "6xl"]} p={6}>
            {i18n.t("MachineAssessment_1")}

            </Text>
        </HStack>
        <Text color="darkGray" fontSize={["3xl", "xl"]} p={6} textAlign="left">
        {i18n.t("MachineAssessment_2")}
        </Text>
        </Flex>
        </Flex>
        <Flex verticalAlign="center">       
          <Image
          flexWrap="wrap"
          borderRadius="300px"
          maxWidth="500px"
          maxHeight="600px"
          src="23.jpg"
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
      <Flex flexDirection="column" maxWidth="800px">
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
          textAlign="left"
        >
            {i18n.t("MachineAssessment_3")}
        </Text>
      </Flex>

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
        >
            {i18n.t("MachineAssessment_4")}
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
        maxWidth="500px"
      >
        <AccordionItem marginBottom="20px">
          <h2>
            <AccordionButton bg="red" style={{backgroundColor: 'red',}}>
              <Box flex="1" textAlign="left" >
              {i18n.t("MachineAssessment_5")}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}  color="darkGray">
          <List spacing={5}>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_6")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_7")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_8")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_9")}</ListItem>
              <ListItem><ListIcon as={MdSettings} color="red"/>{i18n.t("MachineAssessment_10")}</ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      </Flex>
      </Flex>
      <Flex         

        paddingTop="20px">
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
          borderRadius="300px"
          maxWidth="500px"
          maxHeight="600px"
          src="29.jpg"
          objectFit="cover"
          padding="45px"
          justifyContent="flex-start"
          p={6}
          flexShrink="1"
          />
      <Flex        
        flexDirection="column" 
        maxWidth="800px"
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
        >
        {i18n.t("MachineAssessment_11")}
        </Text>
      </Flex>
      </VStack>
     
      </Flex>
      
    </Box>
  );
};

export default Machine;