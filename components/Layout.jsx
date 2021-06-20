import Header from "./Header";
import { useI18n } from "next-localization";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

const Layout = ({ title, children }) => {
  const router = useRouter();
  const i18n = useI18n();

  useEffect(() => {
    async function changeLocale() {
      if (router.locale === "en") {
        i18n.set("en", await import("../locales/en.json"));
        i18n.locale("en");
      } else if (router.locale === "hu") {
        i18n.set("hu", await import("../locales/hu.json"));
        i18n.locale("hu");
      }
    }
    changeLocale();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.locale]);
  return (
    <>
      <Header />

      <main>
        <Container maxW="2560px" p="0">
          {children}
        </Container>{" "}
      </main>

      <Footer />
    </>
  );
};
export default Layout;
