import App from "next/app";
import Head from "next/head";
import "../static/icons/font/flaticon.css";
import "react-lazyload-youtube/dist/index.css";

import TagManager from "react-gtm-module";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const tagManagerArgs = {
  gtmId: "GTM-K755N37",
  auth: 'w_AG8jKZqBGQk3uNJd3rhA',
  preview: 'env-3'
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
          <link rel="icon" href="/static/favicon.ico" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          ></link>
          <meta property="og:image" content="/favicon.png" />
          <link rel="stylesheet" href="static/styles.css"></link>
        </Head>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}
