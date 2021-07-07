import { Flex, Box, Text, Grid, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { AiOutlineAudit } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { ImCogs } from "react-icons/im";
import GridContent from "./GridContent";
import { useI18n } from "next-localization";

const Services = () => {
  const [isLoaded, setLoaded] = useState(null);
  const i18n = useI18n();

  useEffect(() => {
    const img = new Image();

    img.src = "0.png";
    img.onload = () => setLoaded(true);
  }, []);
  const gridcontents = [
    {
      //title: "Health and Safety",
      title: i18n.t("gridcontentsTitle_1"),
      icon: GiHealthNormal,
      content: i18n.t("gridcontentsText_1"),
        //"Risk assessment is a management tool to ensure the risks to the health, safety and wellbeing of employees are suitably eliminated, reduced, or controlled.",
      
      value: 1,
      to:"",
    },
    {
      //title: "Auditing, Due Diligence",
      title: i18n.t("gridcontentsTitle_2"),
      icon: AiOutlineAudit,
      content: i18n.t("gridcontentsText_2"),
       // "Well performing companies keep a good balance between compliance and costs. We help you in complying with the many rules and regulations.",
      value: 2,
      to:"",
    },
    {
      //title: "Auditing, Due Diligence",
      title: i18n.t("gridcontentsTitle_2-2"),
      icon: AiOutlineAudit,
      content: i18n.t("gridcontentsText_2-2"),
       // "Well performing companies keep a good balance between compliance and costs. We help you in complying with the many rules and regulations.",
      value: 2,
      to:"",
    },
    {
      //title: "Machinery",
      title: i18n.t("gridcontentsTitle_3"),
      content: i18n.t("gridcontentsText_3"),
        //"A machine safety assessment is the first and an elementary step to identifying the risks, creating an action plan and implementing solutions. ",
      icon: FaTools,
      value: 3,
      to:"",
    },    
    {
      //title: "Machinery",
      title: i18n.t("gridcontentsTitle_3-2"),
      content: i18n.t("gridcontentsText_3-2"),
        //"A machine safety assessment is the first and an elementary step to identifying the risks, creating an action plan and implementing solutions. ",
      icon: FaTools,
      value: 3,
      to:"",
    },
    {
      //title: "Ergonomics",
      title: i18n.t("gridcontentsTitle_4"),
      icon: ImCogs,
      content: i18n.t("gridcontentsText_4"),
       // "The goal in ergonomic design is to achieve employees´ well-being, the highest job performance and job satisfaction.  ",
      value: 4,
      to:"",
    },
    {
      //title: "Fire Safety",
      title: i18n.t("gridcontentsTitle_5"),
      content: i18n.t("gridcontentsText_5"),
       // "Preventing a fire is always a better solution than extinguishing it. Prevention is necessary and companies must also comply with legal requirements.",
      icon: ImCogs,
      value: 5, 
      to: "/fire-safety",
    },
    {
      //title: "Construction Safety",
      title: i18n.t("gridcontentsTitle_6"),
      content: i18n.t("gridcontentsText_6"),
             // "Construction sites include the full range of hazards both for workers and for those who work nearby. We provide solutions to eliminate these hazards.",
      icon: ImCogs,
      value: 6,
      to:"/construction-safety",
    },
    {
      //title: "Training",
      title: i18n.t("gridcontentsTitle_7"),
      content: i18n.t("gridcontentsText_7"),
       // "Workplace safety training is an essential and critical part of a successful safety management system. ",
      icon: ImCogs,
      value: 7,
      to:"",
    },
  ];
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
      <Flex w="100%" bg="rgba(73,73,72)" justifyContent="center" py={10}>
        <VStack spacing={5} alignItems="flex-start" pl={12} color="white">
          <Text fontSize={["3xl", "4xl"]} pr={4} maxW="100%">
            {i18n.t("MiddleTextBand1")}
          </Text>
          <Text fontSize={["xl", "2xl"]} fontWeight="300" pr={4}>
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
        {gridcontents.map((stackcontent, index) => (
          <GridContent
            gridcontent={stackcontent}
            key={index}
            isTitleTooLong={index === 1 || index === 5}
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Services;
