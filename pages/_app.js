import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import customTheme from "../theme";
import { I18nProvider } from "next-localization";

import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { lngDict, ...rest } = pageProps;

  return (
    <>
      <Head>
        <title>Anzenta</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        ></link>
      </Head>
      <I18nProvider lngDict={lngDict} locale={router.locale}>
        <ChakraProvider theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </I18nProvider>
    </>
  );
}

export default MyApp;
