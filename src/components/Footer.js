import React from "react";
import styles from "./Footer.module.css";
import Navbar from "./Navbar";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Navbar type="footer" />
      <div className={styles.copyright}>
        <a href="#">© 2020 Acme. All right reserved.</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </div>
  );
}
