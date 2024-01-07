import React from "react";
import styles from "./LandingPage.module.css";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Carousel from "../components/Carousel";
import ChooseUs from "../components/ChooseUs";
import Practice from "../components/Practice";

export default function LandingPage(){
    return(
        <>
        <Hero />
        <Intro />
        <ChooseUs />
        <Practice />
        <Carousel />
        </>
    )
}