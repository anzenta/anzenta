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
  const [shouldMonitorScroll, setShouldMonitorScroll] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  function showTooltip() {
    setDropdownVisible(true);
  }

  function hideTooltip() {
    setDropdownVisible(false);
  }
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
      // if (scrollPos === 0 && !shouldMonitorScroll) {
      //   () => setScrolledFromTop(false);
      //   () => shouldMonitorScroll(true);

      //   console.log(hasScrolledFromTop);
      //   console.log(shouldMonitorScroll);
      //   console.log(scrollPos);
      // }

      // if (scrollPos > 0 && shouldMonitorScroll) {
      //   () => setScrolledFromTop(true);
      //   () => setShouldMonitorScroll(false);

      // console.log(hasScrolledFromTop);
      // console.log(shouldMonitorScroll);
      // console.log(scrollPos);
    });
  }, []);

  console.log(hasScrolledFromTop);

  return (
    <Flex
      position="fixed"
      as="nav"
      zIndex="1"
      w="100%"
      height="70px"
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
      <Flex height="80%" direction="row" mx="10px" position="relative">
        <Link href="/">
          <Image src="Anzenta.png" boxSize="100%" objectFit="contain" />
        </Link>

        <Flex
          pl={5}
          position="absolute"
          mx="auto"
          left="0"
          right="0"
          justifyContent="center"
          h="full"
        >
          <MenuItem
            to="/"
            hiddenPseudoTitle="Services"
            hasDropDown
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
          >
            {i18n.t("navServices")}
          </MenuItem>
          {/* <MenuItem to="/" hiddenPseudoTitle="Pandemia">
            {i18n.t("navPandemia")}
          </MenuItem> */}
          <MenuItem to="/" hiddenPseudoTitle="Contact Us">
            {i18n.t("navContact")}
          </MenuItem>

          <MenuItem to={`/${changeToThisLocale}`} hiddenPseudoTitle={loc}>
            {changeToThisLocale}
          </MenuItem>

          {/* <Box
            // this should be reworked
            display="block"
            position="absolute"
            w="230px"
            h="200px"
            bg="red.200"
            visibility={isDropdownVisible ? "visible" : "hidden"}
            top="100%"
            left="0"
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
          ></Box> */}
        </Flex>
      </Flex>
      {/* <Box
        w={hasScrolledFromTop ? "100%" : "0"}
        transition="0.3s width"
        height="1%"
        // bg="linear-gradient(0.25turn, #dc4a53, white)"
        bg="#d02428"
      ></Box> */}
    </Flex>
  );
};

const MenuItem = ({
  children,
  to,
  hiddenPseudoTitle,
  hasDropDown,
  showTooltip,
  hideTooltip,
}) => {
  // function showTooltip() {
  //   setDropdownVisible(true);
  // }

  // function hideTooltip() {
  //   setDropdownVisible(false);
  // }

  return (
    <>
      <Flex
        px="20px"
        justifyContent="center"
        alignItems="center"

        // onMouseEnter={showTooltip}
        // onMouseLeave={hideTooltip}
      >
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
            fontWeight: "bold",
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
            // onMouseEnter={showTooltip}
            // onMouseLeave={hideTooltip}
          >
            {children}
          </Text>
        </Link>
        {/* <Box
          // this should be reworked
          display="block"
          position="relative"
          w="230px"
          h="200px"
          bg="red.200"
          visibility={isDropdownVisible ? "visible" : "hidden"}
          top="115px"
          left="-50%"
        ></Box> */}
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
