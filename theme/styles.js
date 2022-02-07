// Version 1: Using objects

import { mode } from "@chakra-ui/theme-tools";

export default {
  styles: {
    global: (props) => ({
      // styles for the `body`
      body: {
        bg: mode("white", "gray.800")(props),
        color: mode("gray.800", "white")(props),
      },
      html: {
        scrollBehavior: "smooth",
      },

      //styles for the `a`
      a: {
        //color: "teal.500",
        _hover: {
          textDecoration: "none",
        },
      },
    }),
  },

  fonts: {
    // heading: `Montserrat, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    // body: `Montserrat, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    // mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`,
    body: `'Montserrat', sans-serif`,
    heading: `'Source Serif Pro', serif`,
    // mono: "Menlo, monospace",
  },

  colors: {
    darkModeBg: "#1a1f2c",
    lightModeBg: "#ffffff",
    black: "#1d1d1b",
    darkGray: "#494948",
    lightGray: "#9b9b9b",
    red: "#e2000f",
  },
};
