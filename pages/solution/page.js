"use client";
import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import img1 from "../../public/solutions/scalp1.png";
import img2 from "../../public/solutions/scalp2.png";
import img3 from "../../public/solutions/scalp3.png";
import img4 from "../../public/scalp/scalp4.png";
import img5 from "../../public/solutions/scalp5.png";
import img6 from "../../public/scalp/scalp3.png";
import img7 from "../../public/solutions/scalp7.jpg";
import problem1 from "../../public/solutions/problem1.png";
import problem2 from "../../public/solutions/problem2.png";
import problem3 from "../../public/solutions/problem3.png";
import allcomb from "../../public/comb/allcomb.png";
import comb2 from "../../public/comb/comb2c.png";
import comb3 from "../../public/comb/comb3c.png";
import comb4 from "../../public/comb/comb4c.png";
import Image from "next/image";
const Solution = () => {
  const [imageSource, setImageSource] = useState(img2);
  const [imageProblem, setImageProblem] = useState(problem1);
  const [solutionText, setSolutionText] = useState("MAI Comb");
  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setImageSource(img2);
        setSolutionText(
          "  inserted under your wig,  weave net foundation, dreadlock knots, and braids, will massage, cleanse, and hydrate your scalp"
        );
      }, 0);
      setTimeout(() => {
        setImageSource(img3);
         setSolutionText(
           " hydrates your scalp without disturbing your twist hairstyle"
         );
      }, 6000);
       setTimeout(() => {
         setImageSource(img7);
         setSolutionText(
           " hydrates your scalp without disturbing your twist hairstyle"
         );
       }, 12000);
      
    };
    textLoad();
    setInterval(textLoad, 18000);
  }, []);
    useEffect(() => {
      const textLoad = () => {
        setTimeout(() => {
          setImageProblem(problem1);
           
        }, 0);
        setTimeout(() => {
          setImageProblem(problem2);
           
        }, 4000);
        setTimeout(() => {
          setImageProblem(problem3);
           
        }, 8000);
        setTimeout(() => {
          setImageProblem(img6);
        }, 12000);
        setTimeout(() => {
          setImageProblem(img4);
        }, 18000);
      };
      textLoad();
      setInterval(textLoad, 24000);
    }, []);
  return (
    <div id={styles.solution} className="py-5">
      <div className="container">
        <h2 className="title w-100">
          There has never been an effective after-care hair extension product
          until now!
        </h2>
        {/* <div className="row pb-5 ">
          <div className="col-md-5 d-none d-md-block ">
            <Image
              src={imageProblem}
              alt="problem"
              className="img-fluid rounded-4"
            />
          </div>
          <div className="col-md-7">
            {/* <h1 className="title text-start">The Problem</h1>  
            <h3>
              There has never been an effective after-care hair extension
              product until now!
            </h3>
            <div className="d-bleck d-md-none mt-3">
              <Image src={imageProblem} alt="problem" className="img-fluid" />
            </div>
            <p className="pt-3">
              The market value of the wigs, hair, and hair extensions worldwide
              from 2020-2026 is valued at $13 billion US dollars. By then, women
              worldwide, who are long-term wearers of hair extensions, will
              continue to suffer the effects of traction alopecia, follicle
              traction, thinning hair, receding hairline, and severe scalp
              infections.
            </p>
            <p>
              The industry is aware of the risk of neglecting the scalp while
              wearing wigs and hair extensions, but they choose to ignore it.
              Instead of manufacturing a solution, they have manufactured
              “Cover-Ups.” Women worldwide publicly exude poise and
              self-confidence while wearing wigs and hair extensions, but at the
              same time, in private, they agonize at the reality of looking in
              the mirror at their receding hairline, alopecia, and severe hair
              loss due to an irritated scalp and follicle damage.
            </p>
            <p>
              Fungus, mold, and bacteria also known as Staphylococcus and
              Cutibacterium, which can lead to folliculitis. Excessive itching
              caused by the overgrowth of yeast on the scalp, which causes
              inflammation at the root resulting in itching and flaking, odor,
              and an inflamed sensitive scalp.
            </p>
          </div>
        </div> */}
        <div className="row py-5 align-items-center">
          <div className="col-md-7">
            {/* <h1 className="title">The Solution</h1> */}
            <h3>
              The only aftercare treatment solution that allows you to treat and
              cleanse your scalp without disturbing hair extensions!
            </h3>
            <div id={styles.solutionText} className="d-bleck d-md-none mt-3">
              <Image
                src={imageSource}
                alt="solution"
                className="img-fluid rounded-4"
              />
              {/* <p className={styles.solText}>
              MA<span style={{ color: "#B18F46" }}>I</span> Comb{solutionText}
            </p> */}
            </div>
            <p className="pt-3">
              MA<span style={{ color: "#B18F46" }}>I</span> Comb applicator will
              solve the global problem of scalp neglect while wearing hair
              extensions. Irritated, dry, itchy scalp, receding hairline,
              thinning hair, and hair loss are some of the issues caused by
              wearing “protective hairstyles” such as wigs, weaves, braids,
              crotchet, twists, locs, and cornrows.
            </p>
            <p>
              Follicle Traction is the tight circumferential circular braid
              pattern which is the foundation of a weave that tends to pull the
              scalp repeatedly causing inflammation to the hair follicles. We
              know how much you paid for your hair extensions, so we took that
              into consideration when developing this after-care product.
            </p>
            <p>
              Inserting MA<span style={{ color: "#B18F46" }}>I</span> Comb on
              the scalp next to the braided foundation will infuse
              anti-microbial dry gel shampoo, medicated antiseptic cleanse, and
              topical ointments to treat various scalp infections.
            </p>
            <p>
              If you do not wear hair extensions, you can use MAI Comb to
              moisturize, massage, and exfoliate your scalp! Everyone benefits
              with MA<span style={{ color: "#B18F46" }}>I</span> Comb
            </p>
          </div>
          <div className="col-md-5 d-none d-md-block">
            <div id={styles.solutionText}>
              <Image
                src={imageSource}
                alt="solution"
                className="img-fluid rounded-4"
              />
              {/* <p className={styles.solText}>
              MA<span style={{ color: "#B18F46" }}>I</span> Comb{solutionText}
            </p> */}
            </div>
            {/* <h6 className="pt-3 fw-bold">
            NO.1 PATENTED AFTER-CARE HAIR EXTENSIONS SCALP TREATMENT
          </h6> */}
            {/* <video
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "auto" }}
              controls
            >
              <source src={"/prod1.MP4"} type="video/mp4"></source>
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
