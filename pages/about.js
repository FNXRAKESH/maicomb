import React, { useEffect } from "react";
import styles from "../styles/about.module.scss";
import colleen from "../public/about/colleen2.jpg";
import keesha from "../public/about/keesha1.jpeg";
import Mehdi from "../public/about/MehdiGarti.jpg";
import about from "../public/about/about.png";
import Image from "next/image";
import TicketTape from "@/components/ticketTape/page";
import Marquee from "react-fast-marquee";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div id={styles.about}>
      <div className={styles.header}>
        <div className={styles.video}>
          <video autoPlay loop muted>
            <source src="/aboutus.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <h1 className={styles.title}>About Us</h1> */}
      </div>
      {/* <TicketTape /> */}
      <div className="container py-5 mt-5">
        <div>
          <p className="text-center">
            IRIE Venture is the culmination of our vast knowledge and extensive
            experience in our respective field. We founded the company to
            implement a cohesive vision in designing and engineering some of the
            world's most useful and innovative products. Prepare to be amazed by
            the brains behind this innovative and enigmatic creation. Meet the
            members of our team responsible for this game-changing gadget that
            will revolutionize the way you live your daily life
          </p>
          {/* <p>
              Our expertise in the areas of processing hair, wefting, training,
              and beauty business operations management is sought both
              nationally and internationally. Students have regularly travel
              from around the world to learn the trade under our guidance. Our
              first retail store, Colleen's Hair at Last, was a manufacturing
              and retail hub for quality wefts made from imported hair. Our
              experiences in dealing with fraudulent and unreliable suppliers
              inspired us to become a manufacturer, and that spirit enabled us
              to become one of the premier weft suppliers in the Southeastern
              United States.
            </p> */}
        </div>
        <h1 className="mt-5 title w-100">
          We Create Solutions, Not Just Products
        </h1>
        <h3 className="text-center mt-5">MEET THE TEAM</h3>
        <div className="row py-5 align-items-center">
          <div className="col-md-4">
            <div id={styles.team1} className={styles.imgContainer}>
              <Image src={colleen} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="flex-grow-1">
              <h6 className="fw-bold">
                Chief Executive Officer / Chief Research & Development Officer /
                Chief Resources Officer
              </h6>
            </div>
            <p>
              A recognized expert and leader in the human hair industry, Colleen
              Garey, CEO, of IRIE Venture, Colleen’s Hair Wefting Training
              Center, MyHairMade, and IRIE Mega Beauty Expo offers a unique
              blend of industry insight, a global network, and wefting hair
              development solutions implementation. Colleen is one of the few
              human hair manufacturers in the USA who successfully launched her
              customized hair extension brand “IRIExtensions” with clients such
              as Serena Williams and The Braxtons; Towanda Braxton was the
              IRIExtension’s brand embassador. With over 25 years in the human
              hair retail business, Colleen is internationally known in the
              industry as "The Hair Wefting Guru" after launching her hair
              wefting training center 2011. She has trained numerous business
              enthusiast globally and is constanly requested as a public speaker
              to share her vast knowledge about the human hair industry. She is
              credited with the establishment of numerous human hair retail
              businesses around the world.
            </p>
            <p>
              Colleen noticed an alarming problem in the hair industry and
              decided to focus on a solution. Some of her clients completely
              neglected their natural hair after having hair extensions
              installed so she and her daughter collaborated and invented MAI
              Comb. A patented, innovative, cranial concept that became
              Colleen's latest focus when it was brought to her attention by her
              daughter. Her vast experiences ignited her desire to improve what
              appeared to be a flawed system. Colleen's vision is to motivate,
              educate and inspire beauty industry enthusiasts to develop their
              ideas today, so it can become tomorrow’s solution!
            </p>
          </div>
        </div>
        <div className="row mb-5 align-items-center">
          <div className="d-block d-md-none">
            <div id={styles.team2} className={styles.imgContainer}>
              <Image src={Mehdi} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="flex-grow-1">
              <h6 className="fw-bold">
                Chief Operations Officer / Chief Design Officer / Chief
                Invention Officer
              </h6>
            </div>
            <p>
              Mehdi Garti is not like most. He has a true passion for helping
              others. Some individuals learn customer service skills, others are
              born with it, and Mehdi inherently loves to help. In addition to
              being a people person, he also possesses ingenious qualities that
              have propelled him to become a true innovator and inventor. He
              grew up with a flair for inventing things, and his first
              successful invention, a unique fishing rod stand, happened when he
              was just nine years old. Since then, he hasn't stopped inventing.
              Mehdi's desire to help and his engineering talents to create new
              things make him the perfect fit for your project.
            </p>
          </div>
          <div className="col-md-4 d-none d-md-block">
            <div id={styles.team2} className={styles.imgContainer}>
              <Image src={Mehdi} alt="" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="row mb-5 align-items-center">
          <div className="col-md-4">
            <div id={styles.team3} className={styles.imgContainer}>
              <Image src={keesha} alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-8">
            <div className="flex-grow-1">
              <h6 className="fw-bold">
                President / Chief Administrative Officer
              </h6>
            </div>
            <p>
              Having spent several years as an executive assistant in a
              demanding corporate environment, Keesha understood the pressures
              and challenges faced by women in maintaining healthy and vibrant
              hair. However, it was her personal experience with natural hair
              and the frustrations she encountered that sparked a desire within
              her to find effective solutions. Driven by her newfound passion,
              Keesha delved into extensive research and sought out experts in
              the field of natural hair care. Through her efforts, she gained a
              profound understanding of the detrimental effects of harsh
              chemicals found in many hair products and the need for gentle,
              nourishing alternatives. As well as finding new ways to keep hair
              and scalp moisturized to promote healthy hair. Armed with
              knowledge and an unwavering commitment to helping others, Keesha
              embarked on a mission to develop high-quality natural hair care
              product. She created a device that will help nourish the scalp
              that is also beneficial to those wearing protective hairstyles.
              Keesha&#39;s journey from executive assistant to natural hair care
              entrepreneur is a testament to the power of following one&#39;s
              passion and making a positive impact in the lives of others.
              Through her dedication and expertise, Keesha has joined Colleen
              Garey to create a brand that not only enhances the beauty of
              natural hair but also fosters self-confidence and self-love
              amongst women everywhere.
            </p>
          </div>
        </div>
        <h3 className="title pt-5 w-100">
         Your Hair Extensions should not be a Nightmare
        </h3>
        <Image src={about} alt="" className="img-fluid" />
      </div>
      {/*<div className={styles.videoContainer}>
         <div className={styles.video}>
          <video autoPlay loop muted>
            <source src="/aboutus.mp4" type="video/mp4" />
          </video>
        </div> 
      </div>*/}
      <div className="topHeader">
        <ul>
          <Marquee loop={0} speed={50}>
            <li>
              WARNING! WARNING! SKIPPING YOUR AFTERCARE HAIR EXTENSIONS ROUTINE
              IS DETRIMENTAL TO YOUR SCALP HEALTH
            </li>
            <li>SUBSCRIBE TO MAI PERSONALIZED PRODUCTS (MPP)</li>
            <li>WEAR YOUR PROTECTIVE STYLES WITHOUT WORRY</li>
            <li>IMPLEMENT YOUR DAILY AFTERCARE ROUTINE IMMEDIATELY</li>
            <li>THE FUTURE OF SCALP CARE</li>
          </Marquee>
        </ul>
      </div>
    </div>
  );
};

export default About;
