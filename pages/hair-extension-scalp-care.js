import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/hair-extension-scalp-care.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import hibiscus from "../public/haircare/hibiscus.png";
import ginger from "../public/haircare/ginger.png";
import mint from "../public/products/mint.png";
import citrus from "../public/products/citrus.png";
import neem from "../public/products/neem.png";
import flower from "../public/products/flower.png";
import scalp1 from "../public/scalp/scalp1.jpg";
import scalp2 from "../public/scalp/scalp2.jpg";
import swiper1 from "../public/scalp/1.png";
import swiper2 from "../public/scalp/2.png";
import swiper3 from "../public/scalp/3.png";
import swiper4 from "../public/scalp/4.png";
import swiper5 from "../public/scalp/5.png";
import swiper6 from "../public/scalp/6.png";
import swiper7 from "../public/scalp/7.png";
import takeout from "../public/haircare/takeout.png";
import tight from "../public/haircare/tight.png";
import damage from "../public/haircare/damage.png";
import parfum from "../public/haircare/parfum.png";
import weavenet from "../public/haircare/weavenet.png";

import braid1 from "../public/haircare/braid1a.png";
import braid2 from "../public/haircare/braid1b.png";
import braid3 from "../public/haircare/braid1c.png";
import woman from "../public/haircare/womancomb.png";
import woman1 from "../public/scalp/woman1.jpg";

import wc1 from "../public/scalp/wc1.jpg";
import smells from "../public/scalp/smells.jpg";
import header from "../public/HairExtensions.png";

import Image from "next/image";

import { useScroll, useTransform } from "framer-motion";
import Link from "next/link";
const HairExtensionScalpCare = () => {
  const [_, setInit] = useState();
  const [scalpImage, setScalpImage] = useState(scalp1);
  const [womanImage, setWomanImage] = useState(woman);
  const [wcImage, setWcImage] = useState(wc1);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setScalpImage(scalp1);
       
      }, 0);
      setTimeout(() => {
        setScalpImage(scalp1);
         
      }, 5000);
      setTimeout(() => {
        setScalpImage(scalp2);
        
      }, 10000);
    };
    textLoad();
    setInterval(textLoad, 15000);
  }, []);
 useEffect(() => {
   const textLoad = () => {
     setTimeout(() => {
       
       setWcImage(smells);
     }, 0);
     setTimeout(() => {
       
       setWcImage(wc1);
     }, 5000);
     
   };
   textLoad();
   setInterval(textLoad, 10000);
 }, []);
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
  return (
    <div id={styles.scalpCare}>
      <div className={styles.header}>
        <Image src={header} alt="" className="img-fluid" />
        {/* <div className={styles.video}>
          <video autoPlay loop muted>
            <source src="/HairExtension.mp4" type="video/mp4" />
          </video>
        </div> */}

        {/* <h1 className="title pt-5" style={{ color: "#fff" }}>
          HEALTHY SCALP, HEALTHY HAIR
        </h1> */}
      </div>
      <div className="container">
        <h1 className="title pt-5 w-100">
          THE IMPORTANCE OF
          <br /> PREPPING YOUR PROTECTIVE STYLES <br />
          WITH MAI COMB
        </h1>
        {/* <h2 className={`${styles.subTitle} ${"text-center"}`}>THE PROBLEMS</h2> */}
        <p className="py-3 text-center">
          Hair weaves, braids, dreadlocks, or extensions often require women to
          wear their natural hair tightly pulled; this can be tough on the
          scalp. The constant pulling can cause strands of hair to break or fall
          out, and it could damage your hair follicles. Women worldwide publicly
          exude poise and self-confidence while wearing wigs and hair
          extensions. Still, at the same time, privately, they agonize at the
          reality of looking in the mirror at their receding hairline, alopecia,
          and severe hair loss due to an irritated scalp and follicle damage.
        </p>
        <div className="row align-items-center my-5">
          <div className="col-md-7">
            <h2 className={styles.subTitle}>
              PREVENTIVE SOLUTION TO FOLLICLE TRACTION / TRACTION ALOPECIA
            </h2>
            <p className="pt-3">
              The most common cause of hair loss and follicle damage
            </p>
            <p>
              Hair starts growing at the bottom of a hair follicle, and
              follicular traction occurs from wearing your hair in tightly
              pulled hairstyles. This then leads to traction alopecia which can
              happen to anyone who wears their hair pulled tightly, in braids,
              dreadlocks, cornrows, or a ponytail.
            </p>
            <p>
              If caught early and treated with MAI Comb applicator, it is fully
              reversible, and the hair can regrow. However, hair follicles can
              become irreversibly damaged over time, and regrowth is
              unattainable.
            </p>
            <p>
              If done correctly, hair extensions will not damage your hair or
              scalp; it does the opposite, which is massive hair growth! If done
              incorrectly, receding, thinning hairline, and massive hair loss
              result from a neglected scalp while wearing hair extensions.
            </p>
            <h1 className="text-center">
              MA
              <span style={{ color: "#B18F46" }}>I</span> COMB
            </h1>
            <p className="py-3">
              ALL THE BENEFITS OF A HEALTHY SCALP WITHOUT REMOVING OR DISTURBING
              YOUR HAIR EXTENSIONS
            </p>
          </div>
          <div className="col-md-5">
            <Image src={scalpImage} alt="" className="img-fluid" />
          </div>
        </div>
        <h1 className="title w-100">BEWARE- TIGHTER IS NEVER BETTER</h1>
        <div className="w1400">
          <Swiper
            onInit={() => setInit(true)}
            modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={5000}
            loop={true}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            breakpoints={{
              640: {
                width: 640,
                slidesPerView: 1,
              },

              768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1400: {
                width: 1400,
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.card1}>
                <Image src={swiper1} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card2}>
                <Image src={swiper2} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card3}>
                <Image src={swiper3} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card4}>
                <Image src={swiper4} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card5}>
                <Image src={swiper5} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card5}>
                <Image src={swiper6} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card5}>
                <Image src={swiper7} alt="" className="img-fluid" />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* <div className="d-flex justify-content-center mt-4">
            <div className="sliderArrow" ref={prevRef}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                color="rgb(177, 143, 70)"
                size="xl"
              />
            </div>
            <div className="sliderArrow" ref={nextRef}>
              <FontAwesomeIcon
                icon={faArrowRight}
                color="rgb(177, 143, 70)"
                size="xl"
              />
            </div>
          </div> */}
        </div>

        <p className="text-center">
          An infected or inflamed hair follicle causes folliculitis. It can look
          like acne and is commonly referred to as braid bumps. Braid bumps can
          happen when braids are too tight; this stress and tension with braids
          and protective styles contribute to this condition.
        </p>

        <div className="row">
          <div className="col-md-5 offset-md-1 d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue }}
                />
                <Image src={tight} alt="" className="img-fluid" />
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
          <div className="col-md-5  d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef2}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue2 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue2 }}
                />
                <Image src={damage} alt="" className="img-fluid" />
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
        <div style={{ position: "relative" }}>
          <Image src={hibiscus} alt="" className={styles.hibiscusFlower} />
        </div>
        <p className="text-center py-5">
          Tight braids (or cornrows) will make your weave installation last
          longer is the biggest misconception about a weave installation; this
          is not true! A tight weave will cause follicle damage, severe
          headaches, lumpy sensitivity, irritated scalp, and unbearable
          discomfort. If you are experiencing the symptoms of braid tension,
          developing enlarged braid bumps, sensitive scalp itch, oozing puss,
          and taking your braids or weave out is not an option, apply MAI BRAIDS
          TENSION RELIEF SERUM immediately to prevent the onset of severe scalp
          damage, fungus, and bacteria.
        </p>
        <h3 className="title w-100">CIRCUMFERENTIAL WEAVE BRAID PATTERN</h3>
        <p className="text-center">
          After you complete your foundation braid pattern, show your scalp some
          love with MA
          <span style={{ color: "#B18F46" }}>I NEEM SCALP BLAST</span>
        </p>
      </div>
      <div className={styles.parallax}></div>

      <div className="container">
        {/* <Image src={band} alt="" className="img-fluid my-5 rounded-5" /> */}
        <h3 className={`${styles.subTitle} ${"text-center pt-5"}`}>
          WEAVE NET TENSION
        </h3>
        <p className="text-center py-3">
          A net cap provides the foundation for your weave hairstyle. When doing
          a sew-in technique, the netting offers somewhat of a barrier between
          the thread and the braid tracks. This concept supposedly alleviates
          stress on your natural hair, but that is not the case. The netting
          secures the foundation against new growth but does little to protect
          your scalp. If your scalp and natural hair are concealed, your choice
          of protective styling should protect your scalp!
        </p>

        <div className="row align-items-center mb-5">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef3}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue3 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue3 }}
                />
                <Image src={braid2} alt="" className="img-fluid" />
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
          <div className="col-md-4 d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef4}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateY: imageValue4 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateY: bottomShadowValue4 }}
                />
                <Image src={braid1} alt="" className="img-fluid" />
                <Link
                  href="/order-now"
                  type="button"
                  className="btn btn-outline-dark my-3"
                >
                  Order Now
                </Link>
                <motion.div
                  className="top-shadow"
                  style={{ translateY: topShadowValue4 }}
                />
              </motion.div>
            </section>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef4}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue4 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue4 }}
                />
                <Image src={braid3} alt="" className="img-fluid" />
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
        <h1 className="title pt-5">
          YOUR "PROTECTIVE STYLES" SHOULD BE FIERCELY PROTECTIVE OF YOUR SCALP
        </h1>
        <div style={{ position: "relative" }}>
          <Image src={mint} alt="" className={styles.mintFlower} />
        </div>

        <p className="text-center py-3">
          The term "protective styles" evolved when the natural hair movement
          encouraged people of African descent to embrace their natural,
          afro-textured hair. Protective styles are supposedly the best and
          fastest way to grow your natural hair, hence; the tension from most of
          these styles is also the quickest way to experience severe
          folliculitis, catastrophic hair loss such as female pattern baldness,
          receding hairline, thinning hair, and traction alopecia. You WILL NOT
          achieve hair growth without implementing a scalp care routine
          throughout the time you wear your protective styles.
        </p>

        {/* <div className="row align-items-center my-5">
          <div className="col-md-5 offset-md-1">
            <Image
              src={netband1}
              alt=""
              className="img-fluid borderBottomLeft"
            />
          </div>
          <div className="col-md-5">
            <Image src={netband2} alt="" className="img-fluid borderTopRight" />
          </div>
        </div> */}

        <div className="row my-5">
          <div className="col-md-5 offset-md-1">
            <div style={{ position: "relative" }}>
              <Image src={ginger} alt="" className={styles.ginger} />
            </div>
            <section className="scroll-container" ref={containerRef5}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue5 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue5 }}
                />
                <Image src={weavenet} alt="" className="img-fluid" />
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

          <div className="col-md-5 ">
            <h3 className="text-start">
              MA
              <span style={{ color: "#B18F46" }}>I WEAVE NET EASE SERUM</span>
            </h3>
            <p className="py-3">
              It will immediately loosen the tension that secures the net onto
              the braid tracks. Position MAI Comb next to the track and infuse
              the herbal serum along every braid. You should feel the sensation
              of MAI Comb healing and nourishing the scalp! Prepping your
              protective style is crucial to maintaining and achieving healthy
              natural hair growth.
            </p>
            <h5 className="fw-bold">
              These products are specifically designed to protect the hair
              follicle and scalp. Use them together for outstanding results!
            </h5>

            <p className="py-3">
              If you choose a protective style, choose one that complements your
              existing style and, most importantly, it is protective. A sew-in
              weave with a weave net is considered a protective style. If you
              have thin hair, your circumferential braid pattern is too tight,
              and pulling on your scalp is not protective! It is not protective
              if you sew the netting too tight onto your scalp, and it becomes
              red and irritated! If you neglect your natural new growth, you
              will experience excessive dryness resulting in hair breakage when
              you remove your hair extensions; therefore, this is not
              protective!
            </p>
          </div>
        </div>
        <h3 className={`${styles.subTitle} ${"text-center"}`}>
          EASY AND EFFECTIVE REMEDIES TO ACHIEVE A HEALTHY ITCH-FREE SCALP
          CAUSED BY SCALP TENSION
        </h3>
        <p className="text-center py-3">
          Tight braids put a lot of pressure on the scalp, leading to
          inflammation, dryness, and an itchy scalp. Nourish your scalp
          regularly with PAT MAI ITCH RELIEF SERUM or PAT MAI ITCH MINT MIST,
          depending on the severity of your scalp needs. Stop the annoying itch
          in an instant!{" "}
        </p>

        <h1 className="title pt-5 w-100">Wear with Care</h1>
        <div className="row mt-5">
          <div className="col-md-6">
            <Image src={wcImage} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h3 style={{ color: "#B18F46" }}>HAIR WEAVE ODOR</h3>
            <p>
              The cheaper the hair, the less you shampoo, infrequent hair
              hygiene extends the longevity of cheap hair, hence, weave odor!{" "}
            </p>
            <p>
              Menopausal sweating, night sweats, hot flashes, daily exercising,
              and moisture lead to mildew and odors after the first week of
              wearing a sewn-in weave. If your natural braided hair is damped
              under the weave net, this sweaty, oily secretion creates a
              cocktail of dirt, dandruff, flakes, and product buildups, creating
              an unpleasant mildew weave odor.
            </p>
            <Link
              href="/order-now"
              type="button"
              className="btn btn-outline-dark my-3"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <h3 style={{ color: "#B18F46" }}>LACEFRONT (WIGS) DAMAGE</h3>
            <p className="py-2">
              Not following the best wig practices, such as the incorrect
              removal of your lacefront wig, constantly wearing your wig without
              a cap, and sleeping in your wig, will cause damage to your hair
              and scalp. Is lacefront wigs or non-lace wigs damaging to your
              scalp and hair? No, it is not! If applied and removed correctly
              while your hair and scalp are protected, it will not cause your
              hairline to vanish or irritate your scalp. It will most certainly
              inflict irreversible damage when several vital factors we tend to
              ignore
            </p>
            <p>
              MAI Comb Applicator will clean your scalp, treat your roots, and
              eliminate wig odor without removing your wig or disturbing your
              protective style!
            </p>
            <ul>
              <li>CORRECT APPLICATION</li>
              <li>CORRECT MAINTENANCE</li>
              <li>CORRECT REMOVAL</li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1">
            <div style={{ position: "relative" }}>
              <Image src={flower} alt="" className={styles.mintFlower} />
            </div>
            <section className="scroll-container" ref={containerRef6}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue6 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue6 }}
                />
                <Image src={parfum} alt="" className="img-fluid" />

                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue6 }}
                />
              </motion.div>
            </section>
          </div>
        </div>

        <h1 className="title w-100 pt-5">TAKEOUT AFTERCARE</h1>
        <p className="text-center">
          Most protective styles might not allow you to wash frequently without
          experiencing tangling and frizz. Infrequent washes increase lint and
          dirt buildups and frequent washes contributes to knots and tangles at
          the roots.{" "}
          <span style={{ color: "var(--gold-color)" }}>
            RAKE MAI ROOTS SCALP BLAST
          </span>{" "}
          will remove dirt, oils, product buildup, and other impurities from the
          hair and scalp.{" "}
        </p>

        <div className="row pb-5 align-items-center">
          <div className="col-md-5 offset-md-1 d-flex flex-column align-items-center">
            <section className="scroll-container" ref={containerRef7}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue7 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue7 }}
                />
                <Image src={takeout} alt="" className="img-fluid" />

                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue7 }}
                />
              </motion.div>
            </section>
          </div>
          <div className="col-md-6  ">
            <h3 className={styles.subTitle}>TAKING OUT YOUR HAIR EXTENSIONS</h3>
            <p>
              Before removing your hair extensions, apply{" "}
              <span style={{ color: "var(--gold-color)" }}>
                RAKE MAI ROOTS SCALP BLAST
              </span>{" "}
              and let it absorb for a few minutes. This will hydrate, and
              moistens the roots so you can carefully detangle and work your way
              through the excess product buildups, tangles and knots,
              strengthens, and revitalize your roots so you can safely remove
              your hair extensions and not worry about unexpected hair loss.
              Gently Rake your Roots with MAI Comb tongs, breaking down all
              buildups and flakes as it soothes and massage the scalp, which
              will help the follicles to promote hair growth.
            </p>
            <Link
              href="/order-now"
              type="button"
              className="btn btn-outline-dark my-3"
            >
              Order Now
            </Link>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image src={citrus} alt="" className={styles.mintFlower} />
        </div>
        <h3 className={`${styles.subTitle} ${"text-center"}`}>
          RAKE MAI ROOTS SCALP SCRUB{" "}
        </h3>
        <ul>
          <li>
            After all the braids are carefully removed, assess for damage, if
            any, and apply Rake MAI Roots Scalp Scrub at the base of your braids
            to hydrate and loosen the new growth
          </li>
          <li>
            Cover with a plastic cap for about 15 – 20 minutes, or as long as
            you need to hydrate, loosen the dirt and product buildups.
          </li>
          <li>
            When the treatment settles, use the MAI Comb applicator to rake your
            roots and massage your scalp.
          </li>
          <li>
            Wash thoroughly with MAI Rosemary Rage Shampoo and follow through
            with MAI RESTORATIVE ROOT REVIVE MIST
          </li>
        </ul>
        <h3 className="title pt-5 w-100">
          Your hair shedding vs Your hair loss
        </h3>
        <div className="row align-items-center mt-5">
          <div className="col-md-6">
            <Image src={woman1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <p>
              Wearing hair extensions for an extended period is not recommended,
              but most will go 6 or 8 to 10 weeks because it is more economical
              for them. Depending on the type of hair extensions you installed,
              two months' worth of shedding may alarm you and be mistaken for
              hair loss. Our hair sheds daily, but we don't notice, so the
              buildup of hair that sheds is stored inside your new growth as you
              detangle it.
            </p>
            <Link
              href="/order-now"
              type="button"
              className="btn btn-outline-dark my-3"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Before removing your hair extensions, apply MA
              <span style={{ color: "#B18F46" }}>
                I Take Out Thyme Root Blast
              </span>{" "}
              and let it absorb for a few minutes. This will hydrate,
              strengthens, and revitalize your roots so you can safely remove
              your hair extensions and not worry about unexpected hair loss.
            </p>
            <p>
              Let your scalp breathe and heal for awhile by wearing a wig or
              head wraps before re-installing. Continue applying MA
              <span style={{ color: "#B18F46" }}>
                I Comb scalp treatment
              </span>{" "}
              to strengthen your roots and moisturize your scalp to promote
              healthy hair growth.
            </p>
          </div>
          <div className="col-md-5 offset-md-1">
            <section className="scroll-container" ref={containerRef8}>
              <motion.div
                className="img-inner d-flex flex-column align-items-center justify-content-center"
                style={{ translateX: imageValue8 }}
              >
                <motion.div
                  className="bottom-shadow "
                  style={{ translateX: bottomShadowValue8 }}
                />
                <Image src={woman} alt="" className="img-fluid" />

                <motion.div
                  className="top-shadow"
                  style={{ translateX: topShadowValue8 }}
                />
              </motion.div>
            </section>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <Image src={neem} alt="" className={styles.neem} />
        </div>
      </div>
    </div>
  );
};

export default HairExtensionScalpCare;
