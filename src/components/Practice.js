import React from "react";
import styles from "./Practice.module.css";
import Grid from "@mui/material/Grid";
import BusinessLaw from "../assets/BusinessLaw.png";
import PartnershipLaw from "../assets/PartnershipLaw.png";
import RealestateLaw from "../assets/RealestateLaw.png";
import BusinessLaw2 from "../assets/BusinessLaw2.png";
import Landlord from "../assets/LandlordDisputes.png";
import ElderAbuse from "../assets/ElderAbuse.png";

export default function Practice() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>Area of Practices</div>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <div className={styles.rect}>
            <img src={BusinessLaw} alt="" />
            <div className={styles.caption}>BUSINESS LAW</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.rect}>
            <img src={PartnershipLaw} alt="" />
            <div className={styles.caption}>PARTNERSHIP LAW</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.rect}>
            <img src={RealestateLaw} alt="" />
            <div className={styles.caption}>REAL ESTATE LAW</div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.rect}>
            <img src={BusinessLaw2} alt="" />
            <div className={styles.caption}>BUSINESS LAW</div>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.rect}>
            <img src={Landlord} alt="" />
            <div className={styles.caption}>LANDLORD DISPUTES</div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.rect}>
            <img src={ElderAbuse} alt="" />
            <div className={styles.caption}>ELDER ABUSE</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
