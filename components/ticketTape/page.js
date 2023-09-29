import React from 'react';
import Marquee from 'react-fast-marquee';

const TicketTape = () => {
    return (
      <div className="topHeader">
        <ul>
          <Marquee loop={0} speed={50}>
            <li>HASSLE-FREE WAY TO RELIEVE THE ANNOYING ITC</li>
            <li>HASSLE-FREE WAY TO APPLY SCALP MEDICATION</li>
            <li>HASSLE-FREE WAY TO CLEANSE WITH MEDICATED DRY SHAMPOO</li>
            <li>SCALP HYDRATION AND MOISTURIZERS </li>
            <li>EXFOLIATES AND REMOVES BUILDUP</li>
            <li>MASSAGE THE SCALP TO INCREASE BLOOD FLOW</li>
            <li>
              GETTING INTO THE SPACES BETWEEN THE EXTENSIONS ATTACHMENT TRACKS
            </li>
          </Marquee>
        </ul>
      </div>
    );
}
 
export default TicketTape;