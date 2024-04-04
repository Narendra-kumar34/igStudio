import React from "react";
import styles from "./LandingPage.module.css";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Carousel from "../components/Carousel";
import ChooseUs from "../components/ChooseUs";
import Practice from "../components/Practice";
import { CarouselData, TeamData } from "../api/api";
import Card from "../components/Card";
import OurTeam from "../components/OurTeam";

export default function LandingPage(){
    return(
        <>
        <Hero />
        <Intro />
        <ChooseUs />
        <Practice />
        <Carousel data={CarouselData} renderComponent={(data) => <Card data={data} type="carousel" />} />
        <OurTeam data={TeamData} />
        </>
    )
}