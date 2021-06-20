import { Flex, Box, Text, Grid, VStack, Link } from "@chakra-ui/layout";
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Heading,
  Image,
  HStack,
  Icon,
} from "@chakra-ui/react";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

const ContactUs = () => {
  return (
    <Box h="100vh" w="100%">
      <Flex w="50%" bg="#d02428" justifyContent="flex-start " py={10}>
        <VStack spacing={5} alignItems="flex-start" pl={12} color="white">
          <Text fontSize={["3xl", "4xl"]} pr={4} maxW="80%">
            Contact us
          </Text>
          <Text fontSize={["xl", "2xl"]} fontWeight="300" pr={4}>
            Give us a call and we&apos;ll call you back.
          </Text>
        </VStack>
      </Flex>

      <Flex
        flexDirection="row"
        justifyContent="space-between"
        w="80%"
        mx="auto"
      >
        <VStack pt={16} spacing={10}>
          <ContactCard name="Beáta Horváth, PhD" title="Managing Director" />
          <ContactCard name="Tibor Varga, PhD" title="Managing Director" />
        </VStack>
        <VStack pt={16}>
          <VStack bg="#d02428" p={6}>
            <Text fontSize="2xl" color="white">
              Call us2
            </Text>

            {/* <Image src="linkedIn.svg" boxSize={20} /> */}
            <HStack spacing={4}>
              <PhoneIcon w={6} h={6} color="white" />
              <Link
                position="relative"
                href={`tel: +36305941204`}
                _hover={{ textDecor: "none" }}
              >
                <Text
                  as="span"
                  fontSize={["lg", "xl"]}
                  fontWeight="normal"
                  color="white"
                  _after={{
                    pos: "absolute",
                    content: "''",
                    w: "0",
                    h: "1px",
                    display: "block",
                    mb: "0",
                    bottom: "1px",
                    left: "0",
                    bg: "white",
                  }}
                  _hover={{
                    _after: {
                      width: "100%",
                      transition: "width 0.2s ease",
                    },
                  }}
                >
                  +36/30-594-1204
                </Text>
              </Link>
            </HStack>
          </VStack>

          <VStack>
            <Link
              href="mailto: office@anzenta.com"
              isExternal
              _hover={{ textDecoration: "none" }}
              position="relative"
            >
              <Text
                as="span"
                fontSize={["lg", "xl"]}
                fontWeight="400"
                color="darkGray"
                _after={{
                  pos: "absolute",
                  content: "''",
                  w: "0",
                  h: "1px",
                  display: "block",
                  mb: "0",
                  bottom: "1px",
                  left: "0",
                  bg: "red",
                }}
                _hover={{
                  _after: {
                    width: "100%",
                    transition: "width 0.2s ease",
                  },
                }}
              >
                office@anzenta.com
              </Text>
            </Link>
          </VStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContactUs;

const ContactCard = ({ name, title }) => {
  return (
    <Flex w="100%" justifyContent="center">
      <HStack spacing={6} alignItems="flex-start">
        <Avatar src="business_woman.jpg" size="2xl" />
        <VStack color="darkGray" alignItems="flex-start" spacing={6}>
          <VStack color="darkGray" alignItems="flex-start">
            <Text fontSize="2xl">{name}</Text>
            <Text>{title}</Text>
          </VStack>
          <VStack color="darkGray" alignItems="flex-start"></VStack>
        </VStack>
      </HStack>
    </Flex>
  );
};
