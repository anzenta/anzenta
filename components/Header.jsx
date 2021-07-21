import {
  Flex,
  Box,
  Link,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useI18n } from "next-localization";
import React, { useState, useEffect } from "react";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  const i18n = useI18n();
  const loc = i18n.locale();

  let changeToThisLocale = "en";

  if (loc === "hu") {
    changeToThisLocale = "en";
  
  } else {
    changeToThisLocale = "hu";
  }

  const [hasScrolledFromTop, setScrolledFromTop] = useState(false);
  // const [shouldMonitorScroll, setShouldMonitorScroll] = useState(false);

  // const [isDropdownVisible, setDropdownVisible] = useState(false);

  // function showTooltip() {
  //   setDropdownVisible(true);
  // }

  // function hideTooltip() {
  //   setDropdownVisible(false);
  // }
  // scroll direction detection
  useEffect(() => {
    // ## function declaration
    function scrollEventThrottle(fn) {
      let last_known_scroll_position = 0;
      let ticking = false;

      window.addEventListener(
        "scroll",
        function (event) {
          if (!ticking) {
            window.requestAnimationFrame(function () {
              fn(last_known_scroll_position);
              ticking = false;
            });
            ticking = true;
          }
          last_known_scroll_position = window.scrollY;
        },

        { passive: true }
      );
    }

    // ## function instantiation
    scrollEventThrottle((scrollPos) => {
      if (scrollPos === 0) {
        setScrolledFromTop((prevState) => false);
      }
      if (scrollPos > 0) {
        setScrolledFromTop((prevState) => true);
      }
    });
  }, []);

  console.log(hasScrolledFromTop);

  return (
    <Flex
      position="fixed"
      as="nav"
      zIndex="1"
      w="100%"
      height={["70px", "70px"]}
      //bg={
      //   hasScrolledFromTop ? "linear-gradient(20deg,#d02428 , white)" : "white"
      // }
      bg="white"
      transition="0.3s box-shadow"
      direction="column"
      boxShadow={
        hasScrolledFromTop ? ` 0 10px 20px -10px rgb(0 0 0/ 20%)` : "none"
      }
      justifyContent="center"
    >
      <Flex
        height={["60%", "80%"]}
        direction="row"
        mx="10px"
        position="relative"
      >
        <Link href="/">
          <Image src="Anzenta.png" height="100%" objectFit="contain" />
        </Link>

        <Box
          h="100%"
          position="absolute"
          top={["2px", "10px"]}
          right="10px"
          display={["block", "block", "none"]}
          w={["35px", "45px"]}
        >
          <HamburgerMenu />
        </Box>

        <Flex
          pl={5}
          position="absolute"
          mx="auto"
          left="0"
          right="0"
          justifyContent="center"
          h="full"
          display={["none", "none", "flex"]}
        >
          <MenuItem
            to="#services"
            hiddenPseudoTitle="Services"
            hasDropDown
            // showTooltip={showTooltip}
            // hideTooltip={hideTooltip}
          >
            {i18n.t("navServices")}
          </MenuItem>

          <MenuItem to="#contact" hiddenPseudoTitle="Contact Us">
            {i18n.t("navContact")}
          </MenuItem>

          <MenuItem to={`/${changeToThisLocale}`} hiddenPseudoTitle={loc}>
            {changeToThisLocale}
          </MenuItem>
        </Flex>
      </Flex>
    </Flex>
  );
};

const MenuItem = ({ children, to, hiddenPseudoTitle }) => {
  return (
    <>
      <Flex px="20px" justifyContent="center" alignItems="center">
        <Link
          href={to}
          _after={{
            pos: "relative",
            content: "''",
            w: "0",
            h: "2px",
            display: "block",
            mb: "0px",
            top: "0",
            right: "0px",
            // bg: "#3f9267",
            bg: "#dc4a53",
          }}
          _hover={{
            _after: {
              width: "100%",
              transition: "width 0.2s ease",
            },
            // fontWeight: "bold",
            //letterSpacing: "1px",
          }}
          _before={{
            content: `"${hiddenPseudoTitle}"`,
            h: "0px",
            visibility: "visible",
            overflow: "hidden",
            userSelect: "none",
            pointerEvents: "none",
            display: "block",
            pos: "relative",
            color: "blue",
            //letterSpacing: "1px",
            fontWeight: "bold",
          }}
        >
          <Text
            display="block"
            color="#4b4b4b"
            align="center"
            fontSize="xl"
            letterSpacing="1px"
          >
            {children}
          </Text>
        </Link>
      </Flex>
    </>
  );
};

const DropDown = () => {
  return;
  <UnorderedList visibility={isDropdownVisible ? "visible" : "hidden"}>
    <ListItem>1</ListItem>
    <ListItem>2</ListItem>
    <ListItem>3</ListItem>
  </UnorderedList>;
};
export default Header;