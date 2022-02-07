import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Text, Link, VStack, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  const bg = "black";
  return (
    <VStack spacing="24px" p={5} bg="white" color="#494948">
      <Link href="https://anzenta.com">
        <IconContext.Provider value={{ color: `${bg}`, size: 35 }}>
          <FaFacebookF />
        </IconContext.Provider>
      </Link>

      <Text fontSize={["xl", "xl", "xl", "xl"]} textAlign="center">
        © Copyright © 2021 Anzenta Constuling Bt. All rights reserved.
      </Text>
      <Text fontSize={["xl", "xl", "xl", "xl"]} textAlign="center">
        office@anzenta.com
      </Text>
    </VStack>
  );
};

export default Footer;
