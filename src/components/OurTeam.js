import styles from "./OurTeam.module.css";
import React from "react";
import TeamCard from "./TeamCard";
import Grid from '@mui/material/Grid';

export default function OurTeam({data}) {
    return(
    <div className={styles.wrapper} id="aboutUs">
        <div className={styles.heading}>Our Team</div>
        <div>
            <Grid container rowSpacing={10} spacing={2}>
                {data.map((item) => {
                    return <Grid item xs={12} md={4} lg={4}><TeamCard data={item}/></Grid>
                })}
            </Grid>
        </div>
    </div>
    )
}