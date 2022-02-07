import { Flex, Box, Text, Grid, VStack,HStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import GridContent_Health from "./GridContent_Health";
import { useI18n } from "next-localization";
import ScrollToButton from "./ScrollToButton";
import {Image } from "@chakra-ui/react";

const Health_Services = () => {
  const [isLoaded, setLoaded] = useState(null);
  const i18n = useI18n();



  const gridcontents = [
    {
      title: i18n.t("health_gridcontentsTitle_1"),
      icon: GiHealthNormal,
      content: i18n.t("health_gridcontentsText_1"),
      value: 1,
      to:"text",
      valami:"text"
    },
    {
      title: i18n.t("health_gridcontentsTitle_2"),
      icon: AiOutlineAudit,
      content: i18n.t("health_gridcontentsText_2"),
      value: 2,
      to:"text",
      valami:"text"
    },
    {    
      title: i18n.t("health_gridcontentsTitle_3"),
      icon: AiOutlineAudit,
      content: i18n.t("health_gridcontentsText_3"),
      value: 2,
      to:"text",
      valami:"text"
    },
    {
      title: i18n.t("health_gridcontentsTitle_4"),
      content: i18n.t("health_gridcontentsText_4"),
      icon: FaTools,
      value: 3,
      to:"text",
      valami:"text"
    },    
    {
      title: i18n.t("health_gridcontentsTitle_5"),
      content: i18n.t("health_gridcontentsText_5"),
      icon: FaTools,
      value: 3,
      to:"text",
      valami:"text",
      
    },

  ];

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
    h="100%"
    w="100%"
    direction="column"
    position="relative"
    bg="white"
    id="services"
    css={{ scrollMarginTop: "70px" }}
  >

    

    <Box mb="100px">
    </Box>
      <Flex w="100%" bg="rgba(73,73,72)" justifyContent="center" py={10}>
        <VStack spacing={5} alignItems="flex-start" pl={12} color="white">
          <Text fontSize={["4xl", "4xl"]} pr={4} maxW="100%">
            {i18n.t("MiddleTextBand1")}
          </Text>
          <Text fontSize={["2xl", "2xl"]} fontWeight="300" pr={4}>
            {i18n.t("MiddleTextBand2")}
          </Text>
        </VStack>
      </Flex>

      <Grid
        maxW="100%"
        templateColumns={[
          "minmax(200px, 1fr)",
          "minmax(200px, 1fr)",
          "minmax(200px, 1fr) minmax(200px, 1fr)",
          "minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) ",
          "minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)",
        ]}
        gap={14}
        p={12}
        px={[4, 6, 8, 16]}
        // backgroundImage={`url(${isLoaded ? "2.png" : ""})`}
        backgroundPosition={["left", "left", "left", "bottom"]}
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >

         <ScrollToButton toId="risk">{i18n.t("health_gridcontentsTitle_1")}</ScrollToButton>
         <ScrollToButton toId="ppe_jump">{i18n.t("health_gridcontentsTitle_2")}</ScrollToButton>
         <ScrollToButton toId="incidents">{i18n.t("health_gridcontentsTitle_3")}</ScrollToButton>
         <ScrollToButton toId="highrisk">{i18n.t("health_gridcontentsTitle_4")}</ScrollToButton>
         <ScrollToButton toId="hygiene">{i18n.t("health_gridcontentsTitle_5")}</ScrollToButton>

      </Grid>

      <Box mb="100px">
      <Box  h="70px"/>
      
      

        

    </Box>
    </Flex>
    
    
  );
};

export default Health_Services;