import React from "react";
import styles from "./Carousel.module.css";
import { ReactComponent as LeftArr } from "../assets/LeftArrow.svg";
import { ReactComponent as RightArr } from "../assets/RightArrow.svg";

export default function Carousel(){
    return(
        <div className={styles.wrapper}>
        <div className={styles.headWrapper}>
            <div className={styles.heading}>What says our happy Clients</div>
            <div className={styles.buttonsWrapper}>
                <LeftArr />
                <RightArr />
            </div>
        </div>
        <div className={styles.carousel}></div>
        </div>
    )
}