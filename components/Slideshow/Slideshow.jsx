import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import ControlDot from "./ControlDot";
import Slide from "./Slide";
import { useI18n } from "next-localization";

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const i18n = useI18n();

  const ControlDots = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
    {
      value: 5,
    },
  ];

  const Slides = [
    {
     // motto: "Who we are",
      motto: i18n.t("motto1"),
      title: i18n.t("sliderTitle_1"),
      // title: "Professional help in the fields of HSE",
      text: i18n.t("sliderText_1"),
      value: 1,
      imgSource: "Anzenta-logo_color1.jpg",
      //buttonText: "Contact us",
      buttonText: i18n.t("buttonText_Contactus"),
      scrollto: "contactus_id"
    },
    {
     // motto: "Our Vision",
      motto: i18n.t("motto2"),
      title: i18n.t("sliderTitle_2"),
      //text: "Our goal is to be one of the finest health, safety and environmental consulting company on the market. Our beliefs, we will achieve client satisfaction by desire to know our clients and their needs better than any others in this field. With our services, we wish to serve our clients from the strategic planning till the implementation of the projects by providing innovative and resource-efficient solutions.",
      text: i18n.t("sliderText_2"),
      value: 2,
      imgSource: "teamwork_concept_isometric_illustration-01_red.jpg",
      //buttonText: "Services",
      buttonText: i18n.t("buttonText_Contactus"),
      scrollto: "contactus_id"

    },
    {
      //motto: "Our Mission",
      motto: i18n.t("motto3"),
      title: i18n.t("sliderTitle_3"),
      //text: "To contribute to the success of our clients by delivering smart and sustainable solutions keeping always in mind the highest safety and environmental standards. To assist our clients to achieve zero harm to succeed in protecting employees, property and the environment.",
      text: i18n.t("sliderText_3"),
      value: 3,
      imgSource: "teamwork_concept_isometric_illustration-03_red.jpg",
      //buttonText: "Contact us",
      buttonText: i18n.t("buttonText_Contactus"),
      scrollto: "contactus_id"

    },
    {
      //motto: "What we offer",
      motto: i18n.t("motto4"),
      title: i18n.t("sliderTitle_4"),
      //text: "Our broad range of specialized services include health and safety consulting, EHS auditing, assessments, management tools and trainings in the fields of ergonomics, fire safety, construction safety.",
      text: i18n.t("sliderText_4"),
      value: 4,
      imgSource: "business.jpg",
      //buttonText: "Services",
      buttonText: i18n.t("buttonText_Contactus"),
      scrollto: "contactus_id"

    },
    {
     // motto: "Contact us",
      motto: i18n.t("motto5"),
      title: i18n.t("sliderTitle_5"),
      //text: "If you have additional concerns, please feel free to contact us at office@anzenta.com or call us on the following number: +36/30-594-1204.",
      text: i18n.t("sliderText_5"),
      value: 5,
      imgSource: "booking_schedule_isometric_illustration-02_red.jpg",
      //buttonText: "Contact us",
      buttonText: i18n.t("buttonText_Contactus"),
      scrollto: "contactus_id"

    },
  ];

  const changeSlide = () => {
    setActiveSlide((prevSlide) => prevSlide + 1);
  };
  if (activeSlide === Slides.length + 1) {
    setActiveSlide(1);
  }

  useEffect(() => {
    const timer = setInterval(changeSlide, 13500);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box w="100%" h="100%">
      <Flex
        direction="row"
        position="relative"
        h="80%"
        w="500%"
        bg="blue.700"
        left={`${-(activeSlide - 1) * 100}%`}
        transition="left 1.8s"
      >
        {Slides.map((slide) => (
          <Slide
            key={slide.value}
            motto={slide.motto}
            title={slide.title}
            text={slide.text}
            buttonText={slide.buttonText}
            imgSource={slide.imgSource}
          />
        ))}
      </Flex>
      <Flex w="100%" h="10%" justifyContent="center" alignItems="center">
        {ControlDots.map((controldot) => (
          <ControlDot
            key={controldot.value}
            selected={activeSlide === controldot.value}
            onClicked={() => {
              setActiveSlide(controldot.value);
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Slideshow;
