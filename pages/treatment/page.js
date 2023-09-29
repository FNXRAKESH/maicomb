import React from "react";
import styles from "./index.module.scss";
import img1 from "../../public/treatment/1.png";
import img2 from "../../public/treatment/2.png";
import img3 from "../../public/treatment/3.png";
import img4 from "../../public/treatment/3a.png";
import Image from "next/image";
const Treatment = () => {
  return (
    <div id={styles.treatment} className="py-5">
      <div className="container d-grid">
        <h1 className="title pt-5">Restorative Scalp Care</h1>
        <p className="py-3 text-center">
          A patented applicator that will quickly treat, cleanse, and exfoliate
          the scalp without removing or disturbing your hair extensions! MA
          <span style={{ color: "#B18F46" }}>I</span>Comb applicator is a
          preventive solution to solving a problem before it develops into a
          problem!
        </p>
        <div className={`${styles.contentOne} ${styles.content}`}>
          <div className={styles.imgContainer}>
            <Image src={img1} alt="treatment" className="img-fluid" />
          </div>
          <div className="ps-5">
            <h3 className="py-3">Folliculitis Infection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pellentesque purus. Etiam eu lacus a est aliquam accumsan et
              sed metus. Fusce non nisi a enim vulputate pharetra tincidunt
              placerat lectus. Donec vitae luctus odio. Suspendisse sed lacus ac
              leo pretium mattis in non arcu. Sed at sem vitae nibh consectetur
              tincidunt sed ac turpis. Vivamus arcu ante, blandit non lorem in,
              ullamcorper malesuada est. Maecenas fermentum pretium mauris ac
              imperdiet.
            </p>
          </div>
        </div>
        <div className={`${styles.contentTwo} ${styles.content}`}>
          <div className="ps-5">
            <h3 className="py-3">Bacterial Infection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pellentesque purus. Etiam eu lacus a est aliquam accumsan et
              sed metus. Fusce non nisi a enim vulputate pharetra tincidunt
              placerat lectus. Donec vitae luctus odio. Suspendisse sed lacus ac
              leo pretium mattis in non arcu. Sed at sem vitae nibh consectetur
              tincidunt sed ac turpis. Vivamus arcu ante, blandit non lorem in,
              ullamcorper malesuada est. Maecenas fermentum pretium mauris ac
              imperdiet.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={img2} alt="treatment" className="img-fluid" />
          </div>
        </div>
        <div className={`${styles.contentThree} ${styles.content}`}>
          <div className={styles.imgContainer}>
            <Image src={img3} alt="treatment" className="img-fluid" />
          </div>
          <div className="ps-5">
            <h3 className="py-3">Parasitic Infection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pellentesque purus. Etiam eu lacus a est aliquam accumsan et
              sed metus. Fusce non nisi a enim vulputate pharetra tincidunt
              placerat lectus. Donec vitae luctus odio. Suspendisse sed lacus ac
              leo pretium mattis in non arcu. Sed at sem vitae nibh consectetur
              tincidunt sed ac turpis. Vivamus arcu ante, blandit non lorem in,
              ullamcorper malesuada est. Maecenas fermentum pretium mauris ac
              imperdiet.
            </p>
          </div>
        </div>
        <div className={`${styles.contentFour} ${styles.content}`}>
          <div className="ps-5">
            <h3 className="py-3">Viral Infection</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              et pellentesque purus. Etiam eu lacus a est aliquam accumsan et
              sed metus. Fusce non nisi a enim vulputate pharetra tincidunt
              placerat lectus. Donec vitae luctus odio. Suspendisse sed lacus ac
              leo pretium mattis in non arcu. Sed at sem vitae nibh consectetur
              tincidunt sed ac turpis. Vivamus arcu ante, blandit non lorem in,
              ullamcorper malesuada est. Maecenas fermentum pretium mauris ac
              imperdiet.
            </p>
          </div>
          <div className={styles.imgContainer}>
            <Image src={img4} alt="treatment" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
