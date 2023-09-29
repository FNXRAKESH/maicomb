import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import logo from "../../public/whitelogo.png";

import Link from "next/link";
const Footer = () => {
  return (
    <div id={styles.footer} className="pt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-3 mb-4">
            <Image
              className="navbar-brand img-fluid"
              src={logo}
              alt="MA<span style={{color:'red'}}>I</span>Comb"
              height="auto"
              width={150}
            />
            {/* <h3 className="m-0">
              MA<span style={{ color: "#B18F46" }}>I</span> COMB
            </h3> */}
          </div>
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <div className="d-flex flex-column">
              <a href="tel:4073002740">(407) 300-2740</a>
              <a href="mailto:irieventure@gmail.com">irieventure@gmail.com</a>
              <p>
                MA<span style={{ color: "#B18F46" }}>I</span> COMB, Florida
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Follow us at</h5>
            <div>
              <a
                href="https://www.facebook.com/hairweftingtraining/"
                target="_blank"
                className="pe-3"
              >
                <FontAwesomeIcon icon={faFacebook} size="xl" />
              </a>
              <a
                href="https://www.youtube.com/@MsHairpro"
                target="_blank"
                className="pe-3"
              >
                <FontAwesomeIcon icon={faYoutube} size="xl" />
              </a>
              <a
                href="https://www.instagram.com/irie_beauty_ventures/"
                target="_blank"
                className="pe-3"
              >
                <FontAwesomeIcon icon={faInstagram} size="xl" />
              </a>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Legal</h5>
            <div className="d-flex flex-column">
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Use</Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center">
          <p>© 2023 IRIE Ventures. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
