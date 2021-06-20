import { extendTheme } from "@chakra-ui/react";

// Global style overrides
import stylesCommon from "./styles";

// // Foundational style overrides
// import commonFoundation from "./foundations/common";
// import typography from "./foundations/typography";

// // Component style overrides
// import Button from "./components/button";

const overrides = {
  //   foundations: { common: commonFoundation, typography: typography },
  //   components: {
  //     Button,
  //   },
  // styles: { stylesCommon },
  ...stylesCommon,
};

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

export default extendTheme(overrides);
