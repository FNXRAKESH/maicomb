import React from "react";
import img1 from "../../public/ceo.jpg";
import img2 from "../../public/about/colleen.png";
import intro from "../../public/about/intro.jpg";
import modal from "../../public/about/modal.jpg";
import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";


const AreaOfFocus = () => {
  return (
    <div id={styles.areaOfFocus}>
      {/* <div className="container py-5">
        <h1 className="title w-100">Area of Focus</h1>
        <p className="py-4 text-center">
          Our own experience with hair loss while wearing hair extensions and
          the remarkable results after maintaining a aftercare routine is why we
          can best serve you! Our Area of Focus is to educate and bring
          awareness to this global problem!
        </p>
      </div> */}
      <div className={styles.parallax}></div>
      <div className={styles.focus}>
        <h1 className="title p-5 w-100">
          EVERYONE CAN USE MA
          <span style={{ color: "#B18F46" }}>I</span> Comb, It's not just for
          wearers of hair extensions! all Ethnicity, Races, Men, Women, Seniors,
          and Kids.
        </h1>
      </div>
      <div className="container">
        {/* <div className={styles.focus}>
          <Image src={f2} alt="" className="img-fluid" />
          <p className="ps-3 m-0">
            MA<span style={{ color: "#B18F46" }}>I</span> Comb primary
            objectives are to help cure infected scalp conditions, delay its
            onset, or reduce the symptoms.
          </p>
        </div> */}

        {/* <div className={styles.focus}>
          <Image src={f3} alt="" className="img-fluid" />
          <p className="ps-3 m-0">
            MA<span style={{ color: "#B18F46" }}>I</span> Comb will help with
            the application of topical medicated serums to “STOP THE ITCH”
            associated with after-effects of installing hair extensions, braids,
            dreadlocks, and cornrows.
          </p>
        </div> */}
        <h3 className="title w-100">We Create Solutions, Not Just Products!</h3>
        <div id={styles.about} className="my-3">
          <div className="content ">
            <div className="row">
              <div className="col-md-4">
                <p>
                  Colleen Garey, CEO of Colleen’s Hair Wefting Training Center,
                  MyHairMade, IRIE Mega Beauty Expo, and IRIE Beauty Venture, is
                  a renowned expert and leader with over 25 years of industry
                  experience. She is known for crafting a strategic vision to
                  achieve business goals and implementation of hair development
                  solutions. In 2015, Colleen and her daughter, Keesha Morgan
                  invented and developed MA
                  <span style={{ color: "#B18F46" }}>I</span> Comb scalp
                  restorative applicator that will quickly treat, cleanse,
                  exfoliate, and “STOP THE ITCH” without removing or disturbing
                  your hair extensions! MA
                  <span style={{ color: "#B18F46" }}>I</span> Comb is a patented
                  preventive solution to solving a problem before it develops
                  into a problem!
                </p>
                <Link href='/about' className="btn btn-outline-dark my-3">
                  More about us
                </Link>
              </div>
              <div className="col-md-8">
                <Image src={modal} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaOfFocus;
