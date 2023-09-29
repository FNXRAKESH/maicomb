import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import antimicrobial from "../../public/comb/antimicrobial.png";

import img2 from "../../public/comb/antiitch.png";
import img3 from "../../public/comb/antibacterial.png";
import img4 from "../../public/comb/antiitch1.png";
import img5 from "../../public/comb/antiodor.png";
import neem from "../../public/products/neem.png";
import citrus from "../../public/products/citrus.png";
import mint from "../../public/products/mint.png";
import flower from "../../public/products/flower.png";
import styles from "./index.module.scss";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
const Concept = () => {
  const containerRef = useRef(null);

  const { scrollYProgress: containerRefOne } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue = useTransform(
    containerRefOne,
    [0, 1],
    ["-100%", "0%"]
  );
  const imageValue = useTransform(containerRefOne, [0, 1], ["-100%", "0%"]);
  const opacityValue = useTransform(containerRefOne, [0, 0.5, 1], [0, 1, 1]); // Fade-in text
  const topShadowValue = useTransform(
    containerRefOne,
    [0, 1],
    ["-25%", "100%"]
  );
  //three
  const containerRef3 = useRef(null);

  const { scrollYProgress: containerRefThree } = useScroll({
    target: containerRef3,
    offset: ["start end", "end end"]
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

  //two
  const containerRef2 = useRef(null);

  const { scrollYProgress: containerRefTwo } = useScroll({
    target: containerRef2,
    offset: ["start end", "end end"]
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
  //four
  const containerRef4 = useRef(null);

  const { scrollYProgress: containerRefFour } = useScroll({
    target: containerRef4,
    offset: ["start end", "end end"]
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
  const containerRef5 = useRef(null);

  const { scrollYProgress: containerRefFive } = useScroll({
    target: containerRef5,
    offset: ["start end", "end end"]
  });

  const bottomShadowValue5 = useTransform(
    containerRefFive,
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
  return (
    <div id={styles.concept}>
      <h1 className="title w-100">The Future of Scalp Care</h1>
      <p className="text-center px-md-5 pb-3">
        A lightweight and ergonomically designed applicator that when positioned
        underneath the netting of hair extensions, dreadloc knots, cornrows,
        twist, and braids, dispenses organic oils to eliminate itching, fragrant
        dry gel shampoo to eliminate odors, and help with the application of
        topical medicated serums and ointments to treat scalp issues
      </p>
      <div className="wrapper1">
        <section className="scroll-container mb-5" ref={containerRef}>
          <motion.div
            className={`${styles.imgContainer} ${"copy"}`}
            style={{
              opacity: opacityValue
            }}
          >
            <h2>ANTI-MICROBIAL SCALP TREATMENT</h2>
            <p className="py-3">
              There are several types of insects that can infest human hair.
              Skin Mites, Lice, Botflies, Bedbugs, Chiggers. One of the worst
              types of scalp infections, this is caused by blood-sucking tiny
              insects. Topical antibiotics and medicated ointments may be needed
              to help with the overgrowth of bacteria and can be easily applied
              to the scalp with MAI Comb Scalp Applicator. MAI Comb
              antimicrobial scalp blast will rid the scalp of infestation and
              prevent hair loss.
            </p>
            <button className="btn btn-outline-dark">click for more</button>
            <div>
              <Image src={flower} alt="" />
            </div>
          </motion.div>
          <div className="img-container">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue }}
              />
              <Image
                src={antimicrobial}
                alt=""
                className="img-fluid"
                height={500}
              />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue }}
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div className="wrapper2">
        <section className="scroll-container mb-5" ref={containerRef2}>
          <div className="img-container d-none d-md-block">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue2 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue2 }}
              />
              <Image src={img2} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue2 }}
              />
            </motion.div>
          </div>
          <motion.div
            className={`${styles.imgContainer} ${"copy"}`}
            style={{
              opacity: opacityValue2
            }}
          >
            <h2>ANTI-FUNGAL SCALP TREATMENT</h2>
            <p className="py-3">
              An unhygienic scalp can lead to rapid fungal growth and yeast is
              the most common cause of fungal infection. Scalp fungus is often
              referred to as scalp "ringworm" and causes hair loss, redness, and
              dry scaly scalp. A regular scalp blast routine will clear up this
              infection. Since neem has antifungal properties, it effectively
              helps get rid of dandruff-causing fungi.
            </p>

            <button className="btn btn-outline-dark">click for more</button>
            <div>
              <Image
                src={neem}
                alt=""
                style={{ translateX: topShadowValue2 }}
              />
            </div>
          </motion.div>
          <div className="img-container d-block d-md-none">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue2 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue2 }}
              />
              <Image src={img2} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue2 }}
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div className="wrapper3">
        <section className="scroll-container mb-5" ref={containerRef3}>
          <motion.div
            className={`${styles.imgContainer} ${"copy"}`}
            style={{
              opacity: opacityValue3
            }}
          >
            <h2>ANTI-BACTERIAL SCALP TREATMENT</h2>
            <p className="py-3">
              Bacteria can enter the skin through damaged hair follicles,
              causing an infection called folliculitis. You can get folliculitis
              on your scalp from shaving or plucking hair on the scalp.
              frequently touching the scalp. Bacterial infection causes hair
              loss, itching, redness and pus. Lemon oil contains citric acid,
              which stops hair follicles from becoming loose, resulting in less
              hair fall. This oil's antifungal qualities keep the scalp
              infection and bacteria-free
            </p>
            <button className="btn btn-outline-dark">click for more</button>
            <div>
              <Image src={citrus} alt="" />
            </div>
          </motion.div>
          <div className="img-container">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue3 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue3 }}
              />
              <Image src={img3} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue3 }}
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div className="wrapper4">
        <section className="scroll-container mb-5" ref={containerRef4}>
          <div className="img-container d-none d-md-block">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue4 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue4 }}
              />
              <Image src={img4} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue4 }}
              />
            </motion.div>
          </div>
          <motion.div
            className={`${styles.imgContainer} ${"copy"}`}
            style={{
              opacity: opacityValue4
            }}
          >
            <h2>ANTI-ITCH RELIEF TREATMENT</h2>
            <p className="py-3">
              The infamous "Weave Pat" is attributed to that unattainable
              annoying itch that you can only pat your head to get some relief.
              MAI Comb is ergonomically designed to insert the tongs anywhere on
              the scalp so you can infuse anti-itch mint mist to ease the braid
              tension and stop the itch. Our peppermint serum is effective in
              cleansing, exfoliating, and massaging the scalp, relieving the
              severity of chronic itching that persists after you braid or
              install your hair extensions. MAI Comb Scalp Applicator easily
              shampoos and dissolves product buildups, excess oils, and flakes
              without disturbing your protective styles or any variety of hair
              extensions you have installed.
            </p>
            <button className="btn btn-outline-dark">click for more</button>
            <div>
              <Image src={mint} alt="" />
            </div>
          </motion.div>
          <div className="img-container d-block d-md-none">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue4 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue4 }}
              />
              <Image src={img4} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue4 }}
              />
            </motion.div>
          </div>
        </section>
      </div>
      <div className="wrapper5">
        <section className="scroll-container mb-5" ref={containerRef5}>
          <motion.div
            className={`${styles.imgContainer} ${"copy"}`}
            style={{
              opacity: opacityValue5
            }}
          >
            <h2>ANTI-ODOR SCALP TREATMENT</h2>
            <p className="py-3">
              The cheaper the hair extensions, the less you shampoo, the same is
              true if you paid a lot of money for your hair extensions.
              Infrequent hair hygiene extends the longevity of hair extension,
              hence, product build-ups and weave odor! Menopausal sweating,
              night sweats, hot flashes, daily exercising, and moisture lead to
              mildew and odors after weeks of wearing your protective style and
              hair extensions. If your natural braided hair is damped under the
              weave net, this sweaty, oily secretion creates a cocktail of dirt,
              dandruff, flakes, and product buildups, creating an unpleasant
              mildew weave odor. Routinely cleaning the scalp with MAI Comb
              Scalp Applicator and applying MAI Eau De Parfum Scap Mist will
              significantly eliminate scalp odor.
            </p>
            <button className="btn btn-outline-dark">click for more</button>
            <div>
              <Image src={citrus} alt="" />
            </div>
          </motion.div>
          <div className="img-container">
            <motion.div
              className="img-inner"
              style={{ translateX: imageValue5 }}
            >
              <motion.div
                className="bottom-shadow"
                style={{ translateX: bottomShadowValue5 }}
              />
              <Image src={img5} alt="" className="img-fluid" />
              <motion.div
                className="top-shadow"
                style={{ translateX: topShadowValue5 }}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Concept;
