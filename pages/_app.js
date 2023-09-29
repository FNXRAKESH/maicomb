import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./layout";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      mirror:"true",
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },[])
  return (
    <>
      <Head>
        <title>MAI COMB</title>
        <meta name="viewport" content="width=device-width , initial-scale=1" />
        <meta
          name="description"
          content="IRIE Ventures has resources on a topics ranging form hair, makeup, health, wellness, and fashion."
          key="desc"
        />
        <meta property="og:title" content="Experts in Beauty" />
        <meta property="og:keywords" content="Experts in Beauty" />
        <meta
          property="og:description"
          content="IRIE Ventures has resources on a topics ranging form hair, makeup, health, wellness, and fashion"
        />
        <meta
          property="og:image"
          content="https://www.iriebeauty.net/images/header.png"
        />
        <meta property="og:url" content="https://www.iriebeauty.net/" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
