import { Box, Center, Flex, Text, VStack, Link } from "@chakra-ui/layout";
import { useState } from "react";
import { useI18n } from "next-localization";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const i18n = useI18n();
  const loc = i18n.locale();

  let changeToThisLocale = "en";

  if (loc === "hu") {
    changeToThisLocale = "en";
  } else {
    changeToThisLocale = "hu";
  }

  return (
    <>
      <Flex
        overflowX="hidden"
        w={isOpen ? "100vw" : "0"}
        h="100vh"
        position="fixed"
        top="0"
        right="0"
        transition="width 0.3s"
      >
        <Box
          w="40vw"
          h="100vh"
          bg="rgba(0, 0, 0, 0.6)"
          onClick={() => setOpen(false)}
        ></Box>
        <VStack
          pl={4}
          pt={16}
          color="white"
          spacing={4}
          w="60vw"
          h="100vh"
          bg="darkGray"
        >
          <Link
            href="#services"
            _hover={{ textDecoraction: "none" }}
            onClick={() => setOpen(false)}
          >
            <Text>{i18n.t("navServices")}</Text>
          </Link>
          <Link
            href="#contact"
            _hover={{ textDecoraction: "none" }}
            onClick={() => setOpen(false)}
          >
            <Text> {i18n.t("navContact")}</Text>
          </Link>
          <Link
            href={`/${changeToThisLocale}`}
            _hover={{ textDecoraction: "none" }}
            onClick={() => setOpen(false)}
          >
            <Text>{changeToThisLocale}</Text>
          </Link>
        </VStack>
      </Flex>
      <div
        id="nav-icon1"
        className={isOpen ? "open" : "closed"}
        onClick={() => setOpen((o) => !o)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <style jsx>
        {`
          * {
            margin: 0;
            padding: 0;
          }
          /* Icon 1 */
          #nav-icon1,
          #nav-icon2,
          #nav-icon3,
          #nav-icon4 {
            z-index: 10;
            width: 100%;
            height: 100%;
            position: relative;
            margin: 0 auto;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.5s ease-in-out;
            -moz-transition: 0.5s ease-in-out;
            -o-transition: 0.5s ease-in-out;
            transition: 0.5s ease-in-out;
            cursor: pointer;
          }
          #nav-icon1 span,
          #nav-icon3 span,
          #nav-icon4 span {
            display: block;
            position: absolute;
            height: 3px;
            width: 100%;
            background: ${isOpen ? "white" : "#494948"};
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: 0.25s ease-in-out;
            -moz-transition: 0.25s ease-in-out;
            -o-transition: 0.25s ease-in-out;
            transition: 0.25s ease-in-out;
          }
          #nav-icon1 span:nth-child(1) {
            top: 10px;
          }
          #nav-icon1 span:nth-child(2) {
            top: 18px;
          }
          #nav-icon1 span:nth-child(3) {
            top: 26px;
          }
          #nav-icon1.open span:nth-child(1) {
            top: 18px;
            -webkit-transform: rotate(135deg);
            -moz-transform: rotate(135deg);
            -o-transform: rotate(135deg);
            transform: rotate(135deg);
          }
          #nav-icon1.open span:nth-child(2) {
            opacity: 0;
            left: -60px;
          }
          #nav-icon1.open span:nth-child(3) {
            top: 18px;
            -webkit-transform: rotate(-135deg);
            -moz-transform: rotate(-135deg);
            -o-transform: rotate(-135deg);
            transform: rotate(-135deg);
          }
        `}
      </style>
    </>
  );
};

export default HamburgerMenu;