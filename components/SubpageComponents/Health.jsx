import { Box, Center, Flex, Text, VStack, HStack } from "@chakra-ui/layout";
import { Button, Icon, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import React from 'react';


import { List, ListItem, ListIcon, OrderedList, UnorderedList } from "@chakra-ui/react"
import { MdSettings } from 'react-icons/md';
import { useI18n } from "next-localization";

const Health = () => {
  const i18n = useI18n();
  const [isLoaded, setLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
    return () => clearTimeout(timer);
  }, []);
  return (
    <Box mb="100px">
    </Box>
  );
};

export default Health