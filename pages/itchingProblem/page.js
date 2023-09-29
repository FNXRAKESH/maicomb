import React from 'react';
import styles from './index.module.scss'
import img1 from "../../public/itching/itch.jpg";
import img2 from '../../public/itching/itch2.png'
import img3 from '../../public/itching/itch3.png'
import img4 from "../../public/itching/itch4.png";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
const ItchingProblem = () => {
  return (
    <div id={styles.itches}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 d-none d-md-block">
            {/* <Image src={img1} alt="itching" className="img-fluid" /> */}
            <div className={styles.video}>
          <video autoPlay loop muted>
            <source src="/patting.mp4" type="video/mp4" />
          </video>
        </div>
          </div>
          <div className="col-md-7">
            <h1 className="title py-3 ">WEAVE PATTING!</h1>
            <p>
              There is nothing more annoying than that unattainable itch that
              women who wear weaves experience. Dry scalp and itching is
              attributed to the constant pulling on the scalp while creating the
              tight circular braided weave foundation pattern This leads them to
              doing the infamous "weave pat", which is slapping and patting
              their head with their hand to relieve the itch.
            </p>
            <div className="d-block d-md-none">
              <Image src={img1} alt="itching" className="img-fluid" />
            </div>
            <div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  <b>Aftercare Treatment Solution</b> that dispenses soothing,
                  medicated, FDA-approved scalp serum that immediately loosens
                  extreme braid tension!
                </p>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  <b>Aftercare Treatment Solution</b> that dispenses organic
                  essential oils that hydrate and moisturize, preventing dry,
                  scaly scalp!
                </p>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  <b>Aftercare Treatment Solution</b> that dispenses
                  FDA-approved medicated topical ointment to prevent fungus,
                  bacteria, and yeast!
                </p>
              </div>
              <div className="d-flex align-items-start">
                <FontAwesomeIcon icon={faCheck} />
                <p>
                  <b>Aftercare Treatment Solution</b> that dispenses
                  FDA-approved medicated fragrant dry shampoo to eliminate odors
                  and build-ups!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default ItchingProblem;