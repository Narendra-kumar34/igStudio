import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../assets/HeroImg.png";
import EmailBox from "./EmailBox";

export default function Hero(){
    return(
        <div className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.headText}>You don't have to <strong>Fight them Alone.</strong></div>
                <div className={styles.subText}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</div>
                <EmailBox />
            </div>
            <div className={styles.picture}>
                <img src={HeroImg} alt="Hero Pic" />
            </div>
        </div>
    )
}