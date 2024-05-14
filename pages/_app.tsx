import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import "../styles/styles.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/Navbar";
import { EdgeStoreProvider } from "../lib/edgestore";

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Own your music collection through Royalty Rights Tokens™ and earn from the success of the artists you support."
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.svg"></link>
        <title>OH - Organic Health</title>
      </Head>

      <EdgeStoreProvider>
        <ToastContainer
          position="top-left"
          toastClassName={"info-alert"}
          theme="dark"
          className={"toast-text"}
        />
        <Navbar />
        <Component {...pageProps} />
      </EdgeStoreProvider>
    </React.Fragment>
  );
}

export default App;
