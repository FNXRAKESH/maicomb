import React from 'react';
import styles from './index.module.scss'
import Image from 'next/image';
import img1 from '../../public/black.png'
 
const IRIE = () => {
    return (
      <div id={styles.irie} className='pt-5'>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-3 mb-3">
              <Image src={img1} alt="logo" className="img-fluid" />
              {/* <h6 className="pt-3">
                <span style={{ fontSize: "20px", color: "#000" }}>I</span>
                nnovative{" "}
                <span style={{ fontSize: "20px", color: "red" }}>R</span>
                esources{" "}
                <span style={{ fontSize: "20px", color: "#3f9900" }}>
                  I
                </span>n{" "}
                <span style={{ fontSize: "20px", color: "#f3c921" }}>E</span>
                ndeavors
              </h6> */}
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-8 mb-3">
              <a href="http://www.iriebeauty.net" target="_blank">
                <h3>Let's Design the Future Together! </h3>
              </a>

              <p>
                Shaping the Future by Translating Your Vision, Ideas, and
                Innovative Concepts into Reality!
              </p>
              <div className="d-flex">
                
                <a href="http://www.iriebeauty.net" target="_blank">
                  Visit IRIE Venture
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default IRIE;