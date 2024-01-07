import React from "react";
import styles from "./ChooseUs.module.css";
import Card from "./Card";
import { ChooseUsData } from "../api/api";

export default function ChooseUs(){
    return(
        <div className={styles.wrapper}>
            <div className={styles.heading}>Why Choose us?</div>
            <div className={styles.cards}>
                {ChooseUsData.map((ele)=> <Card data={ele} type="chooseUs" />)}
            </div>
        </div>
    )
}