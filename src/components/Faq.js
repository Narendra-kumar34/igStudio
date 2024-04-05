import React from "react";
import styles from "./Faq.module.css";
import CustomizedAccordions from "./Accordion";
import {AccordionData} from "../api/api";

export default function Faq({ data }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>FAQ</div>
      <div className={styles.content}>
        <div className={styles.subheading}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
        <div className={styles.accordianWrapper}><CustomizedAccordions data={AccordionData} /></div>
      </div>
    </div>
  );
}
