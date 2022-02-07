import Layout from "../components/Layout";
import Health from "../components/SubpageComponents/Health";
import Health_highrisk_permit from "../components/SubpageComponents/Health_highrisk_permit";
import Health_Incidents from "../components/SubpageComponents/Health_Incidents";
import Health_PPE from "../components/SubpageComponents/Health_PPE";
import Health_risk from "../components/SubpageComponents/Health_risk";
import Industrial_Hygiene from "../components/SubpageComponents/Industrial_Hygiene";

import Health_Services from "../components/Health_Services";
import ContactUs from "../components/ContactUs";

export default function healthPage() {
  return (
    <Layout>
 
      <Health_Services/>
      <Health_risk/>
      <Health_highrisk_permit/>
      <Health_Incidents/>
      <Health_PPE/>
      <Industrial_Hygiene/>

      <ContactUs />
      
    </Layout>
  );
}
