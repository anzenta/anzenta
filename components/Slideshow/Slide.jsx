import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";
import ScrollToButton from "/components/ScrollToButton";

const Slide = ({ motto, title, text, imgSource, buttonText, scrollto}) => {
  return (
    <Flex w="100%" bg="white" color="black" direction={["column","row"]} flexWrap="wrap">
      <Flex alignItems="center" justifyContent="center" w={["80%","50%"]}>
        <Image src={imgSource} boxSize="80%" objectFit="contain" ></Image>
      </Flex>
      <Flex w={["100%","50%"]} 
      alignItems="center" 
      marginLeft={["10px","0px"]}
      marginRight={["10px","0px"]}>
        <VStack alignItems="flex-start" maxW={["90%","50%"]} spacing={3}>
          <Text textTransform="uppercase" textAlign="justify" color="#4b4b4b" fontSize={["1xl","4xl"]}>
            {motto}
          </Text>
          <Text fontSize={["1xl","1xl"]} color="#494948" textAlign="justify">
            {title}
          </Text>
          <Text color="#2b2b2b" fontSize={["1xl","1xl"]} textAlign="justify">
            {text}
          </Text>

          <ScrollToButton toId= "contactus_id">
          <Button
            bg="#d02428"
            color="white"
            fontWeight="normal"
            borderRadius="0px"
            _hover={{ background: "#682428" }}
            
          >
            {buttonText}
          </Button>
          </ScrollToButton>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Slide;
