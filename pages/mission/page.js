import React from "react";
import styles from "./index.module.scss";
import img1 from "../../public/mission/prod.jpg";
import Image from "next/image";

const Mission = () => {
  return (
    <div id={styles.mission} className="container">
      {/* <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <Image src={img1} alt="mai" className="img-fluid" />
            {/* <video
              autoPlay
              muted
              loop
              style={{ width: "100%", height: "auto" }}
              controls
            >
              <source src={'/prod.MP4'} type="video/mp4"></source>
            </video> 
          </div>
          <div className="col-md-6 text-start">
            <h3>
              Alternative aftercare treatment solution for hair loss and dry
              itchy scalp while wearing hair extensions!
            </h3>
            <p className="py-3">
              MA<span style={{ color: "#B18F46" }}>I</span> Comb applicator will
              solve the global problem of scalp neglect while wearing hair
              extensions. Irritated, dry, itchy scalp, receding hairline,
              thinning hair, and hair loss are some of the issues caused by
              wearing “protective hairstyles” such as wigs, weaves, braids,
              crotchet, twists, locs, and cornrows.
            </p>
          </div>
        </div> */}
      <h1 className="title">Your Vision is our Mission!</h1>
      <p>
        Our Mission is to implement a cohesive vision of providing impactful
        solutions worldwide! Take your brainstorming concept from initial
        ideation to research, prototyping, validation, and final market launch.
        At MA<span style={{ color: "#B18F46" }}>I</span> Comb, we believe in
        giving 110%. By using our next-generation database module, we invented
        the solution to a global problem that will prevent premature female
        pattern balding, receding hairline and hair loss. We thrive because of
        our market knowledge and great team behind our product. As our CEO, I
        believe that efficiencies will come from proactively transforming how we
        do business.
      </p>
    </div>
  );
};

export default Mission;
