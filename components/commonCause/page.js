import React, { useRef, useState } from 'react';
import styles from './page.module.scss';
import tband from '../../public/scalp/tband2.png';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import swiper1 from '../../public/scalp/1.png';
import swiper2 from '../../public/scalp/2.png';
import swiper3 from '../../public/scalp/3.png';
import swiper4 from '../../public/scalp/4.png';
import swiper5 from '../../public/scalp/5.png';
import swiper6 from '../../public/scalp/6.png';
import swiper7 from '../../public/scalp/7.png';
import inf1 from "../../public/infection/inf1.png";
import inf2 from "../../public/infection/inf2.png";
import inf3 from "../../public/infection/inf3.png";
import inf4 from "../../public/infection/inf4.png";
import inf5 from "../../public/infection/inf5.png";
import inf6 from "../../public/infection/inf6.png";
import greyvirus from "../../public/infection/greyvirus.png";
import blackvirus from "../../public/infection/blackvirus.png";
import orange from '../../public/comb/orange.png'
import yellow from '../../public/comb/yellow.png'
import purple from '../../public/comb/purple.png'
import pink from '../../public/comb/pink.png'
import commonCause from '../../public/commoncause.png'


const CommonCause = () => {
  const slides = [orange, purple, yellow, pink];
  const [active, setActive] = useState(0);
  const [coordX, setCoordX] = useState(0);

  const diameter = 1000;
  const degrees = 15;

  const slideWidth = diameter / 500;

  const onUpdate = (latest) => {
    setCoordX(latest.x);
  };

  const handleModifyTarget = (target) => {
    const snapTarget = Math.round(target / slideWidth) * slideWidth;

    const clampedActive = Math.min(
      Math.max(Number(-snapTarget / slideWidth)),
      slides.length - 1
    );

    setActive(clampedActive);

    return snapTarget;
  };
    const [_, setInit] = useState();
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
      <div id={styles.cause}>
        <div className={styles.greybg}>
          <div className="pt-5 container">
            <h1 className="title w-100">
              FIXING YOUR SCALP CONCERN IS OUR TOP PRIORITY
            </h1>
            <h2 className="title w-100">
              MAI COMB is the No.1 After Care Hair Extensions Scalp Regiment to
              Maintaining a Healthy Scalp Preventing Hair Loss and Promoting
              Healthy, Hair Growth
            </h2>
            {/* <div className="carousel-container">
              <motion.div
                drag="x"
                onUpdate={onUpdate}
                dragElastic={0}
                dragConstraints={{
                  right: 0,
                  left: -(slideWidth * (slides.length - 1))
                }}
                dragTransition={{
                  power: 0.1,
                  timeConstant: 200,
                  modifyTarget: handleModifyTarget
                }}
              >
                <div className="slides-container">
                  {slides.map((slide, index) => {
                    const rotate = index * degrees;
                    const denominator = (slideWidth / degrees) * 1;

                    return (
                      <motion.div
                        key={index}
                        className={
                          ("slide",
                          {
                            active: active === index
                          })
                        }
                        animate={{
                          rotate: coordX / denominator + rotate,
                          transformOrigin: `50% ${diameter}px`
                        }}
                        transition={{
                          ease: "easeOut",
                          duration: 0.2
                        }}
                      >
                        <div className="d-flex">
                          <Image src={slide} alt="" className="img-fluid" />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div> */}
            {/* <div class="frame">
              <div class="center">
                <div id="card1" class="card">
                  <Image src={orange} className="img-fluid" />
                </div>

                <div id="card2" class="card">
                  <Image src={purple} className="img-fluid" />
                </div>
                <div id="card3" class="card">
                  <Image src={yellow} className="img-fluid" />
                </div>
                <div id="card4" class="card">
                  <Image src={pink} className="img-fluid" />
                </div>
              </div>
            </div> */}
            <p>
              <span>Folliculitis</span> is a common skin condition when hair
              follicles become inflamed. An infection with bacteria often causes
              it. At first, it may look like small pimples around the tiny
              pockets from where each hair grows (hair follicles). The condition
              can be itchy, uncomfortable, and embarrassing. The infection can
              spread and turn into crusty sores. Mild folliculitis will likely
              heal without scarring in a few days with essential self-care by
              implementing a routine scalp care regimen using MAI Comb.
            </p>
            <p>
              Folliculitis may be either infectious or non-infectious in origin,
              and the best-known non- infectious causes of follicle traction are
              traction hairstyles such as tight ponytails. braids, dreadlocks,
              twists, and cornrows, commonly referred to as &quot;Protective
              Styles,&quot; are some common causes directly linked to hair loss,
              thinning hair, and receding hairline while wearing hair extensions
            </p>
            <p>
              Due to the prominence of high-traction styling as well as a
              genetic predisposition, one- third of Black women will experience
              traction alopecia, a form of hair loss caused by tension on the
              hair follicle. They’re the most at-risk population that will
              suffer severe hair loss because of cultural hairstyle practices,
              like tight braiding, chemically straightening the hair, tight
              ponytails cause traction on the hair follicle,
            </p>

            {/* <div className="w1400">
              <h2 className="title w-100">NON-INFECTIOUS SCALP IRRITANTS</h2>
              <Swiper
                onInit={() => setInit(true)}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                speed={1000}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
                }}
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1
                  },

                  768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  1400: {
                    width: 1400,
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
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
            </div> */}
            <h1 className="w-100 title pt-5">COMMON CAUSE NO. 1</h1>
            {/* <h3 className="text-center fw-bold">FOLLICLE TRACTION</h3> */}
            <Image src={commonCause} alt="" className="img-fluid" />
            {/* <h3 className="fw-bold mb-4 pt-4">PROTECTIVE STYLES</h3> */}
            <p className='pt-5'>
              Hairstyles pulled too tightly create excessive hair traction and
              scalp tension, causing non- infectious scalp irritants known as
              follicle traction/traction alopecia. You WILL NOT achieve hair
              growth without implementing a scalp care routine throughout the
              time you wear your protective styles. Tight braids (or cornrows)
              will make your weave installation last longer is the biggest
              misconception about a weave installation; this is not true! A
              tight weave will cause follicle damage, severe headaches,
              irritated scalp, and unbearable discomfort.
            </p>
            <p>
              If you are experiencing the symptoms of braid tension, MAI Comb
              Tension Relief Serum will prevent the progression of a
              non-infectious scalp irritant to an infectious scalp irritant.
            </p>
          </div>
        </div>
        <div className="bg-light">
          <div className="container py-5">
            <div className="w1400">
              <h2 className="title w-100">INFECTIOUS SCALP IRRITANTS</h2>

              <Swiper
                onInit={() => setInit(true)}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false
                }}
                speed={1000}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current
                }}
                breakpoints={{
                  640: {
                    width: 640,
                    slidesPerView: 1
                  },

                  768: {
                    width: 768,
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  1400: {
                    width: 1400,
                    slidesPerView: 4,
                    spaceBetween: 30
                  }
                }}
              >
                <SwiperSlide>
                  <div className={styles.card1}>
                    <Image src={inf1} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card2}>
                    <Image src={inf2} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card3}>
                    <Image src={inf3} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card4}>
                    <Image src={inf4} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card5}>
                    <Image src={inf5} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.card5}>
                    <Image src={inf6} alt="" className="img-fluid" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <h1 className="title w-100 pb-0 pt-5">COMMON CAUSE NO. 2</h1>
            <h3 className="text-center fw-bold pb-4">BACTERIAL INFECTIONS</h3>
            <div className="d-flex align-items-center">
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.8, 1, 0.8, 1],
                  rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                {" "}
                <Image src={greyvirus} alt="" className="img-fluid" />
              </motion.div>

              <h3 className="fw-bold ps-3 m-0">Bacterial Folliculitis</h3>
            </div>
            <p className="py-3">
              Scalp buildup can create an environment in which bacteria thrive.
              The buildup of products, debris, and bacteria on the scalp can
              cause the hair follicles to become inflamed. An infection of the
              follicles can also develop while wearing tight braids, ponytails,
              and dreadlocks. Scalp neglect, such as infrequent shampoo and
              scalp care, can develop into folliculitis, causing thinning hair
              and severe hair loss. The scalp can become infected if fungus or
              bacteria enter through the hair follicles or damage irritated
              scalp. Hair follicles become inflamed, and the damaged hair
              follicles and small pimples appear around the hair follicles,
              causing sores, excessive itching, and the annoying "weave pat." A
              healthy scalp ensures healthy hair growth while wearing hair
              extensions.
            </p>
            <div className="d-flex align-items-center">
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.8, 1, 0.8, 1],
                  rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1.1
                }}
              >
                <Image src={blackvirus} alt="" className="img-fluid" />
              </motion.div>

              <h3 className="fw-bold ps-3 m-0">Contact Dermatitis</h3>
            </div>
            <p className="py-3">
              The solution used in heat sealing and the glue used in other ways
              to bond extensions to natural hair can cause an allergic reaction
              on some people's scalps. The symptoms include an uncomfortable,
              red, itchy rash akin to one driven by poison ivy.
            </p>
            <div className="d-flex align-items-center">
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.8, 1, 0.8, 1],
                  rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1.25
                }}
              >
                <Image src={greyvirus} alt="" className="img-fluid" />
              </motion.div>

              <h3 className="fw-bold ps-3 m-0">Scalp Microbiome</h3>
            </div>
            <p className="py-3">
              The microbiome is an ecosystem of bacteria, fungus, and parasites
              that lives on the surface of your skin and scalp. The inside of
              the hair follicle itself technically has its own microbiome, and
              your follicles push out sebum (the natural oil that makes your
              hair greasy when you go a few days without washing it), which the
              bacteria and fungus on your scalp will feed on.
            </p>
            <div className="d-flex align-items-center">
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.8, 1, 0.8, 1],
                  rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1.35
                }}
              >
                <Image src={blackvirus} alt="" className="img-fluid" />
              </motion.div>

              <h3 className="fw-bold ps-3 m-0">Microbial Infection</h3>
            </div>
            <p className="py-3">
              Several types of insects can infest human hair such as skin mites,
              lice, botflies, bedbugs, and chiggers. One of the worst types of
              scalp infections is caused by blood-sucking tiny insects. Although
              contagious, it can easily be treated with consecutive medicated
              insecticides and hair wash.
            </p>
            <div className="d-flex align-items-center">
              <motion.div
                className="box"
                animate={{
                  scale: [1, 0.8, 1, 0.8, 1],
                  rotate: [0, 0, 180, 180, 0]
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1.15
                }}
              >
                <Image src={greyvirus} alt="" className="img-fluid" />
              </motion.div>

              <h3 className="fw-bold ps-3 m-0">Fungal Infection</h3>
            </div>
            <p className="py-3">
              Left unchecked, fungal scalp infection could lead to bald patches
              on the head where the hair falls out due to the spread of the
              fungal infection. It is important to treat this kind of fungal
              infection as quickly as possible. Scalp fungus or tinea capitis is
              a type of scalp ringworm infection. Ringworm, despite the name,
              isn’t caused by a worm but by a type of fungus. It is a very
              contagious infection and spreads easily between people in close
              quarters, particularly children. If the infection is especially
              bad or left untreated for a length of time, it could result in
              severe inflammation of the scalp and permanent hair loss and
              scars.
            </p>
            <p>
              MA<span style={{ color: "#B18F46" }}>I</span> Comb's patented
              design is ideal for applying prescribed topical ointments for more
              serious or repeat infections. Left untreated, severe conditions
              can cause permanent hair loss and scarring.{" "}
            </p>
            <p>
              MA<span style={{ color: "#B18F46" }}>I</span> Comb is
              ergonomically designed to meet the needs of all hair types and
              prevent scalp irritants associated with wearing all kinds of hair
              extensions.
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default CommonCause;