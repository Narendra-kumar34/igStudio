import React from "react";
import styles from "./TeamCard.module.css";

export default function Card({ data }) {
  return (
    <div className={styles.wrapper}>
      <img src={data.image} alt="teamPic" className={styles.image} />
      <div className={styles.content}>
        <div className={styles.heading}>{data.title}</div>
        <div className={styles.subHeading}>{data.subHeading}</div>
      </div>
    </div>
  );
}
