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
import { useI18n } from "next-localization";

const ContactUs = () => {

  const i18n = useI18n();
  
  return (
    <Box w="100%" id="contact" css={{ scrollMarginTop: "70px" }}>
      <Flex
        w={["80%", "80%", "50%"]}
        bg="#d02428"
        justifyContent="flex-start "
        py={10}
      >
        <VStack spacing={5} alignItems="flex-start" pl={12} color="white">
          <Text fontSize={["2xl", "4xl"]} pr={4} maxW="80%">
          {i18n.t("contact1")} 
          </Text>
          <Text fontSize={["1xl", "2xl"]} fontWeight="300" pr={4}>
          {i18n.t("contact2")} 
          </Text>
        </VStack>
      </Flex>
      <Flex
        flexDirection={["column", "column", "column", "row"]}
        justifyContent="space-between"
        w="80%"
        maxW="1200px"
        mx="auto"
      >
        <VStack pt={16} spacing={10} w="100%" alignItems="flex-start">
          <ContactCard name={i18n.t("contact3")} title={i18n.t("contact4")} />
          <ContactCard
            name={i18n.t("contact5")}
            title={i18n.t("contact6")}
            isRightAligned
          />
        </VStack>
        <VStack pt={16} spacing={"5rem"}>
          <PhoneCard />
          <EmailCard />
        </VStack>
      </Flex>
    </Box>
  );
};

export default ContactUs;

const ContactCard = ({ name, title, isRightAligned }) => {
  return (
    <Flex
      justifyContent="flex-start"
      alignSelf={[
        isRightAligned ? "flex-end" : "initial",
        isRightAligned ? "flex-end" : "initial",
        isRightAligned ? "flex-end" : "initial",
        "flex-start",
      ]}
      id='contactus_id'
    >
      <HStack spacing={6} alignItems="flex-start">
        <Avatar
          src="profile.jpg"
          size="2xl"
          display={[
            isRightAligned ? "none" : "block",
            isRightAligned ? "none" : "block",
            isRightAligned ? "none" : "block",
            "block",
          ]}
        />
        <VStack color="darkGray" alignItems="flex-start" spacing={6}>
          <VStack color="darkGray" alignItems="flex-start">
            <Text fontSize={["1xl","2xl"]}>{name}</Text>
            <Text>{title}</Text>
          </VStack>
          <VStack color="darkGray" alignItems="flex-start"></VStack>
        </VStack>
        <Avatar
          src="profile.jpg"
          size="2xl"
          display={[
            isRightAligned ? "block" : "none",
            isRightAligned ? "block" : "none",
            isRightAligned ? "block" : "none",
            "none",
          ]}
        />
      </HStack>
    </Flex>
  );
};

const PhoneCard = () => {
  const i18n = useI18n();
  return (
    <VStack bg="#d02428" p={6} w="full" maxW="500px">
      <Text fontSize="2xl" color="white">
      {i18n.t("phone")}
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
            +36/30-343-9860
          </Text>
        </Link>
      </HStack>
    </VStack>
  );
};

const EmailCard = () => {
  return (
    <VStack bg="#d02428" p={6} w="full" maxW="500px">
      <Text fontSize="2xl" color="white">
        Email
      </Text>

      <HStack spacing={4}>
        <EmailIcon w={6} h={6} color="white" />
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
            office@anzenta.com
          </Text>
        </Link>
      </HStack>
    </VStack>
  );
};