import Layout from "../components/Layout";
import Home from "../components/Home";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";

export default function Index() {
  return (
    <Layout>
      <Home />
      <Services />
      <ContactUs />
    </Layout>
  );
}
