import React from "react";
import About from "./About";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Services from "./Services";
import Topbar from "./Topbar";

export default function Home() {
  return (
    <>
    <Topbar/>
      <Header />
      <HeroSection />
      <Services />
      <About />
    </>
  );
}
