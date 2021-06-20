import Layout from "../Components/Layout";
import Home from "../Components/Home";
import Services from "../Components/Services";
import ContactUs from "../Components/ContactUs";

export default function Index() {
  return (
    <Layout>
      <Home />
      <Services />
      <ContactUs />
    </Layout>
  );
}
