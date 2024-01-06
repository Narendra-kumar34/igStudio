import React from "react";
import styles from "./Navbar.module.css";
import MainLogo from "./MainLogo";

export default function Navbar() {
  return (
    <nav>
      <MainLogo />
      <div className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">Attorneys</a>
        <a href="#">Practice Areas</a>
        <a href="#">About Us</a>
      </div>
      <a href="#" className={styles.contactWrapper}>
        Conatct Now
      </a>
    </nav>
  );
}
