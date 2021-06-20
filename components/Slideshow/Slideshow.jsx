import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import ControlDot from "./ControlDot";
import Slide from "./Slide";

const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(1);

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
      motto: "Who we are",
      title: "Professional help in the fields of HSE",
      text: "We are independent consultants and engineers with significant experience in the field of HSE. Our multidisciplinary educational background facilitates us to provide broad range of HSE services.",
      value: 1,
      imgSource: "Anzenta-logo_color1.jpg",
      buttonText: "Contact us",
    },
    {
      motto: "What we offer",
      title: "Take your business to the next level",
      text: "Our broad range of specialized services include health and safety consulting, EHS auditing, assessments, management tools and trainings in the fields of ergonomics, fire safety, construction safety.",
      value: 2,
      imgSource: "business.svg",
      buttonText: "Services",
    },
    {
      motto: "About Us",
      title: "title3",
      text: "text3",
      value: 3,
    },
    {
      motto: "motto4",
      title: "title4",
      text: "text4",
      value: 4,
    },
    {
      motto: "motto5",
      title: "title5",
      text: "text5",
      value: 5,
    },
  ];

  const changeSlide = () => {
    setActiveSlide((prevSlide) => prevSlide + 1);
  };
  if (activeSlide === Slides.length + 1) {
    setActiveSlide(1);
  }

  useEffect(() => {
    const timer = setInterval(changeSlide, 5000);

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
        transition="left 0.8s"
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
