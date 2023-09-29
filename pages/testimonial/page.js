import React, { useEffect } from "react";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  var settings = {
    dots: true,
    autoplay: true,
    centerPadding: "60px",
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id={styles.testimonial} className="py-5">
      <div className="container">
        <h1 className="title mb-5">TESTIMONIALS</h1>
        <Slider {...settings}>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <h5>LATOYA - BOSTON</h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeftAlt}
                color="rgba(177, 143, 70,1);"
                size="3x"
              />
              <p>
                <small>
                  Colleen, I wanted to thank you once again for the training I
                  received from you on 8/25/08. It was a wonderful and rewarding
                  experience. I&#39;m glad I had the opportunity to train and
                  work with you. Furthermore, thank you for giving me the
                  opportunity. I think you are a wonderful person and you have a
                  wonderful heart!! and I sincerely mean that. May god bless you
                  and good luck.
                </small>
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <h5>SYLVIA - TENNESSEE</h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeftAlt}
                color="rgba(177, 143, 70,1);"
                size="3x"
              />
              <p>
                <small>
                  Hello,I took the class from Ms.Colleen in November, I really
                  did learn a lot from the class,she was so nice with letting me
                  take my time in the class.Ms.Colleen thank you for helping me
                  with another milestone in my profession.Who ever is reading
                  this please take her class if you want to take your hair
                  business to another level. And again thank you!
                </small>
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <h5>MARY - New York</h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeftAlt}
                color="rgba(177, 143, 70,1);"
                size="3x"
              />
              <p>
                <small>
                  Colleen's Hair Wefting training was a great experience. She is
                  an excellent teacher with a lot of patience. Wefting I now
                  know cannot be taught by just anyone!. I'm glad I came and
                  would recommend her to anyone who wants to breaks into this
                  business! Her knowledge of the business she generously shared
                  with us and I left knowing so much more.
                </small>
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <h5>ALLAN - KENYA</h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeftAlt}
                color="rgba(177, 143, 70,1);"
                size="3x"
              />
              <p>
                <small>
                  Thank you very much Colleen for the time and dedication you
                  put in your training . You've helped our business move further
                  by avoiding a lot of common costly mistakes. The training is
                  very hands on and you get the whole package, the class,
                  wefting machines, the hair industry inside all in one. I had a
                  pleasant experience during my stay and I would highly
                  recommend her first class training.
                </small>
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
              <h5>Big Tim Leesburg - Florida</h5>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faQuoteLeftAlt}
                color="rgba(177, 143, 70,1);"
                size="3x"
              />
              <p>
                <small>
                  I just want to take time to acknowledge Mrs Colleen Garey who
                  not only help me to appreciate the skill of hair Wefting, but
                  also for her patience and due diligence in educating me with a
                  more broader out-look of the hair industry.
                </small>
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
