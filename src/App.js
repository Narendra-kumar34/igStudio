import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

export default function App(){
  return(
    <div>
      <Navbar type="navbar" />
      <LandingPage />
      <Footer />
    </div>
  )
}