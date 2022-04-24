import React from "react";
import { AppProps } from "next/app";
import Script from "next/script";

import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MainApp;
