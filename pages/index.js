import Layout from "../components/Layout";
import Home from "../components/Home";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import { Box, Flex, Text } from "@chakra-ui/layout";
export default function Index() {
  return (
    <Layout>
      <Home />
      <Services />
      <ContactUs />
    </Layout>
  );
}
