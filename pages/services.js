import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/services.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import design from "../public/services/design.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  const [_, setInit] = useState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.services}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Services</h1>
        {/* <p className={styles.title} style={{ fontSize: 25 }}>
            Discover our story and join us on a journey towards excellence.
          </p> */}
      </div>
      <div className="container">
        <h1 className="title pt-5">We Create Solutions, Not Just Products!</h1>
        <p className="py-3 text-center">
          If you have an invention idea or new product, contact us! We help
          inventors develop and launch their new invention ideas. So if you are
          an entrepreneur who has been working on a new invention for years or
          if you’re an inventor who just came up with a new idea for a product,{" "}
          <b>we can help!</b>
        </p>
        <p className="text-center">
          IRIE Venture offers design, innovation, manufacturing, and
          comprehensive product development programs from patent through
          production for a complete turnkey solution. Our talented designer
          engineer and work with the latest design tools and fabrication
          equipment to deliver top-quality designs, innovation, and
          manufacturing services.
        </p>
        <div className="w1400 my-5">
          <Swiper
            onInit={() => setInit(true)}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
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
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>
              <div className={styles.card1}>
                <h3>Product Design</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card2}>
                <h3>Product Development</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card3}>
                <h3>Product Prototyping</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card4}>
                <h3>Product Manufacturing</h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.card5}>
                <h3>Product Patenting</h3>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="d-flex justify-content-center mt-4">
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
          </div>
        </div>
        <h3 className="title mt-5">Have an invention idea?</h3>
        <div className="row pt-5">
          <div className="col-md-6">
            <p>
              We offer design, innovation, manufacturing, and comprehensive
              product development programs from patent through production for a
              complete turnkey solution. Our talented designer engineer and work
              with the latest design tools and fabrication equipment to deliver
              top-quality designs, innovation, and manufacturing services.{" "}
            </p>
          </div>
          <div className="col-md-6">
            <div className={styles.formData}>
              <form action="https://formspree.io/f/mdovbebd" method="POST">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="number"
                    class="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div class="mb-3">
                  <textarea
                    type="text"
                    class="form-control"
                    id="Comment"
                    name="Comment"
                    placeholder="Comment"
                    required
                  />
                </div>

                <div class="d-flex justify-content-end mt-4">
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
