import React from "react";
import styles from "./NewsLetter.module.css";

export default function NewsLetter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.heading}>Subscribe Our Newsletter</div>
        <form onSubmit={(e) => handleSubmit(e)} className={styles.form}>
          <input
            type="text"
            name="Name"
            placeholder="Name:"
            className={styles.inputBox}
          />
          <input
            type="text"
            name="Email"
            placeholder="Enter your Email"
            className={styles.inputBox}
            style={{ borderRadius: "0px" }}
          />
          <input
            type="submit"
            placeholder="SEND"
            className={styles.submitButton}
          />
        </form>
      </div>
    </div>
  );
}
