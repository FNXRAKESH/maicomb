import Menu from "../components/menu/page";
import Footer from "../components/footer/page";
import IRIE from "./irie/page";
import Marquee from "react-fast-marquee";
export default function Layout({ children }) {
  return (
    <>
      {/* <div className="topHeader">
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
      </div> */}
      <Menu />
      <main>{children}</main>
      <IRIE />
      <Footer />
    </>
  );
}
