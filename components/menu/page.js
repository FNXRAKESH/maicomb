"use client";

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComment,
  faCommentAlt,
  faCommentDots,
  faComments,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/whitelogo.png";

import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

const Menu = () => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
    window.onscroll = function () {
      myFunction();
    };

    var navbar = document.getElementById(`${styles.header}`);
    var sticky = navbar.offsetTop;

    // var mybutton = document.getElementById('myBtn');
    function myFunction(e) {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add(styles.sticky);
      }
      if (window.pageYOffset < 500) {
        navbar.classList.remove(styles.sticky);
      }
    }
  });

  return (
    <div id={styles.header}>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link href="/">
            <Image
              className="navbar-brand img-fluid"
              src={logo}
              alt="MAI COMB"
              height="auto"
              width={120}
            />
            {/* <h3 className="m-0">
              MA<span style={{ color: "#B18F46" }}>I</span> COMB
            </h3> */}
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
            aria-controls="navbar-collapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} color="#15A1F0" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className={`${styles["nav-item"]}`}>
                <Link href="/" className="nav-link">
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Home
                  </span>
                </Link>
              </li>

              <li className={`${styles["nav-item"]}`}>
                <Link
                  href="/about"
                  className="nav-link"
                  scroll={false}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    About Us
                  </span>
                </Link>
              </li>
              {/* <li className={`${styles["nav-item"]}`}>
                <Link
                  href="/services"
                  className="nav-link"
                  scroll={false}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Our Services
                  </span>
                </Link>
              </li> */}
              <li className={`${styles["nav-item"]}`}>
                <Link
                  href="/product"
                  className="nav-link"
                  scroll={false}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Our Products
                  </span>
                </Link>
              </li>

              <li className={`${styles["nav-item"]}`}>
                <Link
                  href="/hair-extension-scalp-care"
                  className="nav-link"
                  scroll={false}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Hair Extensions Scalp Care
                  </span>
                </Link>
              </li>
              <li className={`${styles["nav-item"]}`}>
                <Link
                  href="/contact"
                  className="nav-link"
                  scroll={false}
                  // onClick={() => this.setState({ bgColor: 'white' })}
                >
                  <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
