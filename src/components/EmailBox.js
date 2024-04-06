import React from "react";
import styles from "./EmailBox.module.css";
import { ReactComponent as Icon } from "../assets/MailIcon.svg";

export default function EmailBox(){
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <form onSubmit={handleSubmit} className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <Icon />
                <input type="email" placeholder="Enter your email address" className={styles.inputBox} />
            </div>
            <input className={styles.talkButton} type="submit" placeholder="Let's Talk" />
        </form>
    )
}