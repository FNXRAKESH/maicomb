"use-client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { motion } from "framer-motion";
import AnimatedText from "../../components/animatedText/AnimatedText";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faArrowLeft, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import land2 from "../../public/land3.png";
import land1a from "../../public/land1a.png";
import comb3 from '../../public/comb/comb3c.png';
import comb4 from '../../public/comb/comb4c.png';
import Link from "next/link";
import Marquee from "react-fast-marquee";
import TicketTape from "@/components/ticketTape/page";
const Intro = () => {
    const [_, setInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
   const container = {
     visible: {
       transition: {
         staggerChildren: 0.025,
       },
     },
  };
  const placeholderText = [
    { type: "heading1", text: "Healthy Scalp, Healthy Roots, Happy Hair" },
    {
      type: "heading1",
      text: "Scalp Care is Self Care",
    },
    {
      type: "paragraph",
      text: "NO. 1 PATENTED AFTER-CARE HAIR EXTENSIONS SCALP TREATMENT",
    },
  ];
  // useEffect(() => {
  //   const text = document.querySelector(".sec-text");
  //   const textLoad = () => {
  //     setTimeout(() => {
  //       text.textContent = "Because its perfect for my growth!";
  //     }, 0);
  //     setTimeout(() => {
  //       text.textContent = "Because I AM proud of MAI roots!";
  //     }, 4000);
  //     setTimeout(() => {
  //       text.textContent = "Because it makes a Difference!";
  //     }, 8000);
  //     setTimeout(() => {
  //       text.textContent = "Because it surpasses expectations!";
  //     }, 12000);
  //     setTimeout(() => {
  //       text.textContent = "Because my scalp deserves this!";
  //     }, 16000);
  //   };
  //   textLoad();
  //   setInterval(textLoad, 20000);
  // }, []);
  return (
    <>
      <div className={`${styles.intro}`}>
        {/* <div className={styles.video}>
          <video autoPlay loop muted>
            <source src="/merge.mp4" type="video/mp4" />
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
                    <Image src={land1a} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card2}>
                    <Image src={land2} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                
                 
              </Swiper>
            </div>  
        

        {/* <h1 className="title pt-3">Healthy Scalp &amp; Roots, Happy Hair Scalp Care is Self Care</h1>
      <p className="text-center">NO. 1 PATENTED AFTER-CARE HAIR EXTENSIONS SCALP TREATMENT</p>
        <div className="container">
          
      </div> */}
      </div>
       <TicketTape />
      {/* <div className="wrapper">
        <span class="text first-text">
          MA<span style={{ color: "#B18F46" }}>I</span> Comb -&nbsp;
        </span>
        <span class="text sec-text">Because its perfect for my growth!</span>
      </div> */}
    </>
  );
};

export default Intro;
