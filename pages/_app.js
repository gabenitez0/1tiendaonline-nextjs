import App from "next/app";
import Head from "next/head";
import "../static/icons/font/flaticon.css";
import "react-lazyload-youtube/dist/index.css";

import TagManager from "react-gtm-module";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const tagManagerArgs = {
  gtmId: "GTM-K755N37",
  auth: '1zWAvMxnysKmGreGBBtOPQ',
  preview: 'env-16'
};

export default class Layout extends App {
  componentDidMount() {
    TagManager.initialize(tagManagerArgs);
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="stylesheet" href="/styles.css"></link>
          <meta name="facebook-domain-verification" content="dvq8nuf6e9de75mykkw9wztz596l86" />
        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
