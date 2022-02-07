import { Box } from "@chakra-ui/layout";

const ControlDot = ({ selected, onClicked }) => {
  return (
    <Box
      bg={selected ? "#f83c3c" : "#8383839c"}
      // bg="#b7454578"
      w="15px"
      h="15px"
      borderRadius="50%"
      m={2}
      cursor="pointer"
      _hover={
        !selected
          ? {
              backgroundColor: "#b74545bf",
              transition: "background-color 0.2s linear",
            }
          : { backgroundColor: "#f83c3c" }
      }
      onClick={onClicked}
    ></Box>
  );
};

export default ControlDot;
