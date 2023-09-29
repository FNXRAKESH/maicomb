import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/product.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import img1 from "../public/products/AntiMicrobal.jpeg";
import img2 from "../public/products/folliculitis-300x196.jpg";
import img3 from "../public/scalp/takeout1.jpg";
import img5 from "../public/products/FungalInfection.jpg";
import prod1 from "../public/haircare/1.png";
import prod2 from "../public/haircare/2.png";
import prod3 from "../public/haircare/3.png";
import prod4 from "../public/haircare/4.png";
import prod5 from "../public/haircare/5.png";
import prod6 from "../public/haircare/6.png";
import prod7 from "../public/haircare/17.png";
import prod8 from "../public/haircare/18.png";
import header from "../public/products/productheader.png";
import header1 from "../public/OurProducts.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
   const [_, setInit] = useState();
   const prevRef = useRef(null);
   const nextRef = useRef(null);
  const containerRef7 = useRef(null);

  const { scrollYProgress: containerRefSeven } = useScroll({
    target: containerRef7,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue7 = useTransform(
    containerRefSeven,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue7 = useTransform(containerRefSeven, [0, 1], ["-100%", "0%"]);
  const opacityValue7 = useTransform(containerRefSeven, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue7 = useTransform(
    containerRefSeven,
    [0, 1],
    ["-25%", "100%"]
  );
  //eight
  const containerRef8 = useRef(null);

  const { scrollYProgress: containerRefEight } = useScroll({
    target: containerRef8,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue8 = useTransform(
    containerRefEight,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue8 = useTransform(containerRefEight, [0, 1], ["100%", "0%"]);
  const opacityValue8 = useTransform(containerRefEight, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue8 = useTransform(
    containerRefEight,
    [0, 1],
    ["-25%", "100%"]
  );

  const containerRef = useRef(null);
  const { scrollYProgress: containerRefOne } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue = useTransform(
    containerRefOne,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(containerRefOne, [0, 1], ["-100%", "0%"]);
  const topShadowValue = useTransform(
    containerRefOne,
    [0, 1],
    ["-25%", "100%"]
  );
  //two
  const containerRef2 = useRef(null);

  const { scrollYProgress: containerRefTwo } = useScroll({
    target: containerRef2,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue2 = useTransform(
    containerRefTwo,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue2 = useTransform(containerRefTwo, [0, 1], ["100%", "0%"]);
  const opacityValue2 = useTransform(containerRefTwo, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue2 = useTransform(
    containerRefTwo,
    [0, 1],
    ["-25%", "100%"]
  );
  //three
  const containerRef3 = useRef(null);

  const { scrollYProgress: containerRefThree } = useScroll({
    target: containerRef3,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue3 = useTransform(
    containerRefThree,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue3 = useTransform(containerRefThree, [0, 1], ["-100%", "0%"]);
  const opacityValue3 = useTransform(containerRefThree, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  // Second set of animations using additionalScrollYProgress

  const topShadowValue3 = useTransform(
    containerRefThree,
    [0, 1],
    ["-25%", "100%"]
  );
  //four
  const containerRef4 = useRef(null);

  const { scrollYProgress: containerRefFour } = useScroll({
    target: containerRef4,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue4 = useTransform(
    containerRefFour,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue4 = useTransform(containerRefFour, [0, 1], ["100%", "0%"]);
  const opacityValue4 = useTransform(containerRefFour, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue4 = useTransform(
    containerRefFour,
    [0, 1],
    ["-25%", "100%"]
  );
  //five
  const containerRef5 = useRef(null);

  const { scrollYProgress: containerRefFive } = useScroll({
    target: containerRef5,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue5 = useTransform(
    containerRefThree,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue5 = useTransform(containerRefFive, [0, 1], ["-100%", "0%"]);
  const opacityValue5 = useTransform(containerRefFive, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  // Second set of animations using additionalScrollYProgress

  const topShadowValue5 = useTransform(
    containerRefFive,
    [0, 1],
    ["-25%", "100%"]
  );
  //six
  const containerRef6 = useRef(null);

  const { scrollYProgress: containerRefSix } = useScroll({
    target: containerRef6,
    offset: ["start end", "end end"],
  });

  const bottomShadowValue6 = useTransform(
    containerRefFour,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue6 = useTransform(containerRefSix, [0, 1], ["100%", "0%"]);
  const opacityValue6 = useTransform(containerRefSix, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue6 = useTransform(
    containerRefSix,
    [0, 1],
    ["-25%", "100%"]
  );
  return (
    <>
      <div id={styles.product}>
        <div className={styles.header}>
          {/* <div className={styles.video}>
            <video autoPlay loop muted>
              <source src="/productpage.mp4" type="video/mp4" />
            </video>
          </div> */}
          <div className="w1400 p-0">
            <Swiper
              onInit={() => setInit(true)}
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              loop={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false
              }}
              speed={1000}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current
              }}
            >
              <SwiperSlide>
                <div className={styles.card1}>
                  <Image src={header} alt="" className="img-fluid" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.card2}>
                  <Image src={header1} alt="" className="img-fluid" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <h1 className="title pt-5" style={{ color: "#fff" }}>
            HEALTHY HAIR STARTS AT MA
            <span style={{ color: "#B18F46" }}>I ROOTS</span>
          </h1> */}
        </div>
        <div className="py-5">
          <p className="text-center px-5">
            We created effective formulas for all hair types and our diversity
            and Inclusivity strategy values the unique qualities of all our
            individual clients.
          </p>
          <p className="text-center px-5">
            Healthy hair starts with a healthy scalp. MAI Personalized Products
            (MPPs) are free from sulphates, silicones & parabens. MPPs are
            personalized for your needs so you can develop a wellness hair care
            routine where the emphasis is your roots, and scalp! Most
            importantly, MPPs are created and customized locally in our FDA
            approved laboratory.
          </p>
          <div className="container">
            <h3 className="title pt-5">ANTI-ITCH</h3>
            <div className="row my-5">
              <div className="col-md-5">
                <div className="d-none d-md-block">
                  <Image src={img3} alt="scalp" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="d-block d-md-none mb-3">
                  <Image src={img3} alt="scalp" className="img-fluid" />
                </div>
                <p>
                  Tight braids put a lot of pressure on the scalp, leading to
                  inflammation, dryness, and an itchy scalp. Nourish your scalp
                  regularly with PAT MAI ITCH RELIEF MINT MIST, depending on the
                  severity of your scalp needs. Stop the annoying itch in an
                  instant!
                </p>
                <p>
                  It will immediately loosen the tension that secures the net
                  onto the braid tracks. Position MAI Comb next to the track and
                  infuse the herbal serum along every braid. You should feel the
                  sensation of MAI Comb healing and nourishing the scalp!
                  Prepping your protective style is crucial to maintaining and
                  achieving healthy natural hair growth.
                </p>
              </div>
            </div>

            {/* <h3 className="title">INFANTILE SEBORRHEIC DERMATITIS</h3>
          <h5 className="text-center pt-3">Cradle Cap </h5>
          <p className="pb-3 text-center">
            Cradle Cap is a very common skin conditions in newborns and babies
            that causes rough patches on their scalp. It's the baby form of
            dandruff and doesn't usually itch or cause discomfort to baby
          </p>
          <div className="text-center">
            <Image src={img5} alt="scalp" className="img-fluid" />
          </div> */}
          </div>
          <div id={styles.yellowBg} className="row mb-5">
            <div className="col-md-4 offset-md-2">
              <section className="scroll-container" ref={containerRef7}>
                <motion.div
                  className="img-inner d-flex flex-column align-items-center justify-content-center"
                  style={{ translateX: imageValue7 }}
                >
                  <motion.div
                    className="bottom-shadow "
                    style={{ translateX: bottomShadowValue7 }}
                  />
                  <Image src={prod7} alt="" className="img-fluid" />
                  <Link
                    href="/order-now"
                    type="button"
                    className="btn btn-outline-dark my-3"
                  >
                    Order Now
                  </Link>
                  <motion.div
                    className="top-shadow"
                    style={{ translateX: topShadowValue7 }}
                  />
                </motion.div>
              </section>
            </div>
            <div className="col-md-4">
              <section className="scroll-container" ref={containerRef8}>
                <motion.div
                  className="img-inner d-flex flex-column align-items-center justify-content-center"
                  style={{ translateX: imageValue8 }}
                >
                  <motion.div
                    className="bottom-shadow "
                    style={{ translateX: bottomShadowValue8 }}
                  />
                  <Image src={prod8} alt="" className="img-fluid" />
                  <Link
                    href="/order-now"
                    type="button"
                    className="btn btn-outline-dark my-3"
                  >
                    Order Now
                  </Link>
                  <motion.div
                    className="top-shadow"
                    style={{ translateX: topShadowValue8 }}
                  />
                </motion.div>
              </section>
            </div>
          </div>
          <div className="container">
            <h3 className="title pt-5">ANTI-MICROBIAL</h3>
            <div className="row mt-5">
              <div className="col-md-5">
                <div className="d-none d-md-block">
                  <Image src={img1} alt="scalp" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="d-block d-md-none mb-3">
                  <Image src={img1} alt="scalp" className="img-fluid" />
                </div>
                <p>
                  There are several types of insects that can infest human hair.
                  Skin Mites, Lice, Botflies, Bedbugs, Chiggers. One of the
                  worst types of scalp infections, this is caused by
                  blood-sucking tiny insects.
                </p>
                <p>
                  Human Botfly Myiasis - Although botflies can burrow at any
                  location on the human body, they are often found within
                  people’s hair. By the time these insects are found, they have
                  likely already laid their eggs beneath the surface of a
                  person’s scalp. They choose to lay their eggs in bodily
                  regions that are hairy in order to minimize the chances of the
                  host finding the eggs. After the eggs hatch, the larvae enter
                  the skin by burrowing through a hair follicle.
                </p>
                <p>
                  Chiggers (Red Bugs) are the tiny larvae of mites that
                  frequently attach themselves at hair follicles. Unlike the
                  botfly, chiggers do not burrow into the skin or suck blood,
                  they feed on digested skin cells, not blood.
                </p>
                <p>
                  Although it is quite contagious, it can easily be treated by
                  consecutive medicated insecticides hair wash.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.brownBg} className="row mb-5">
          <div className="col-md-4 offset-md-2">
            <section className="scroll-container" ref={containerRef}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue }}
                />
                <Image src={prod1} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue }}
                />
              </motion.div>
            </section>
          </div>
          <div className="col-md-4">
            <section className="scroll-container" ref={containerRef2}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue2 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue2 }}
                />
                <Image src={prod2} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue2 }}
                />
              </motion.div>
            </section>
          </div>
        </div>
        <div className="container">
          <h3 className="title">ANTI-FUNGAL</h3>
          <div className="row my-5">
            <div className="col-md-5">
              <div className="d-none d-md-block">
                <Image src={img5} alt="scalp" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-block d-md-none mb-3">
                <Image src={img5} alt="scalp" className="img-fluid" />
              </div>
              <h5>Trichomycoses</h5>
              <p>Hair infection by fungal agents</p>
              <h5>Tinea Capitis</h5>
              <p>
                Also known as the "ringworm" this is another chronic fungal
                infection related to the scalp. It is caused by the species of
                dermatophytes and leads to round bald patches.
              </p>
              <h5>Malassezia</h5>
              <p>
                Malassezia is one of the most common types of scalp infection
                related to fungal out-growth. excessive oil production on the
                scalp. Coupled with an unhygienic scalp, it can lead to a rapid
                fungal growth.
              </p>
              <h5>Candida</h5>
              <p>
                Candida is a scalp yeast infection, a fungal skin infection
                caused that thrive in warm, dark environments and causes an
                itchy, flaky rash on your scalp.
              </p>
            </div>
          </div>
        </div>
        <div id={styles.greenBg} className="row mb-5">
          <div className="col-md-4 offset-md-2">
            <section className="scroll-container" ref={containerRef3}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue3 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue3 }}
                />
                <Image src={prod3} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue3 }}
                />
              </motion.div>
            </section>
          </div>
          <div className="col-md-4">
            <section className="scroll-container" ref={containerRef4}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue4 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue4 }}
                />
                <Image src={prod4} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue4 }}
                />
              </motion.div>
            </section>
          </div>
        </div>
        <div className="container">
          <h3 className="title pt-5">ANTI-BACTERIAL</h3>
          <div className="row my-5">
            <div className="col-md-5">
              <div className="d-none d-md-block">
                <Image src={img2} alt="scalp" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-7">
              <h5>Bacterial Folliculitis</h5>
              <div className="d-block d-md-none mb-3">
                <Image src={img2} alt="scalp" className="img-fluid" />
              </div>
              <p>
                This is a common condition that wearers of hair extensions,
                braids, and dreadlocks are familiar with since it is contagious
                in nature. This bacterial infection on the scalp can be caused
                by the sharing of combs, pillows, etc. Hair follicles become
                inflamed, the damaged hair follicles and small pimples appears
                around the hair follicles causing sores, excessive itching, and
                the annoying “weave pat”.
              </p>
            </div>
          </div>
        </div>
        <div id={styles.blueBg} className="row mb-5">
          <div className="col-md-4 offset-md-2">
            <section className="scroll-container" ref={containerRef5}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue5 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue5 }}
                />
                <Image src={prod5} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue5 }}
                />
              </motion.div>
            </section>
          </div>
          <div className="col-md-4">
            <section className="scroll-container" ref={containerRef6}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue6 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue6 }}
                />
                <Image src={prod6} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue6 }}
                />
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
