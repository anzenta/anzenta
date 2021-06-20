import { Box, Center, Flex, Text, VStack } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

const Slide = ({ motto, title, text, imgSource, buttonText }) => {
  return (
    <Flex w="100%" bg="white" color="black" direction="row">
      <Flex alignItems="center" justifyContent="center" w="50%">
        <Image src={imgSource} boxSize="80%" objectFit="contain"></Image>
      </Flex>
      <Flex w="50%" alignItems="center">
        <VStack alignItems="flex-start" maxW="70%" spacing={3}>
          <Text textTransform="uppercase" color="#4b4b4b">
            {motto}
          </Text>
          <Text fontSize="3xl" color="#494948">
            {title}
          </Text>
          <Text color="#2b2b2b" fontSize="lg">
            {text}
          </Text>

          <Button
            bg="#d02428"
            color="white"
            fontWeight="normal"
            borderRadius="0px"
            _hover={{ background: "#682428" }}
          >
            {buttonText}
          </Button>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Slide;
