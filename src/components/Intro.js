import React from "react";
import styles from "./Intro.module.css";

export default function Intro(){
    return(
        <div className={styles.wrapper} id="attorneys"> 
        <div className={styles.heading}>Let’s Introduce Ourself</div>
        <div className={styles.contentWrapper}>
            <h1>Criminal Lawyer</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.</p>
            </div>
        </div>
    )
}