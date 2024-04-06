import React from "react";
import styles from "./Navbar.module.css";
import MainLogo from "./MainLogo";
import InstaIcon from "../assets/InstagramIcon.png";
import FbIcon from "../assets/FbIcon.png";
import TwitterIcon from "../assets/TwitterIcon.png";
import PinterestIcon from "../assets/PinterestIcon.png";

export default function Navbar({ type }) {
  return (
    <nav>
      <MainLogo />
      <div className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#attorneys">Attorneys</a>
        <a href="#practiceAreas">Practice Areas</a>
        <a href="#aboutUs">About Us</a>
      </div>
      {type === "navbar" && (
        <a href="#" className={styles.contactWrapper}>
          Conatct Now
        </a>
      )}
      {type === "footer" && (
        <div className={styles.iconsBox}>
          <a href="#"><img alt="InstaIcon" src={InstaIcon} /></a>
          <a href="#"><img alt="FbIcon" src={FbIcon} /></a>
          <a href="#"><img alt="TwitterIcon" src={TwitterIcon} /></a>
          <a href="#"><img alt="PinterestIcon" src={PinterestIcon} /></a>
        </div>
      )}
    </nav>
  );
}
