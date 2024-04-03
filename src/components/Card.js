import React from "react";
import styles from "./Card.module.css";

export default function Card({data, type}){
    return(
        <div className={styles.wrapper}>
            <img src={data.image} alt="giftPic" className={styles.image} />
            <div className={styles.heading}>{data.title}</div>
            {(type === "carousel") && <div className={styles.subHeading}>{data.subHeading}</div>}
            <div className={styles.content}>{data.content}</div>
            {(type === "chooseUs") && <button>Read More</button>}
        </div>
    )
}