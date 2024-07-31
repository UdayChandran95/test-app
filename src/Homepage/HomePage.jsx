import React from 'react'
import HeroPage from "../HeroPage/HeroPage"
import MainPage from "../MainPage/MainPage";
import Watweoffer from "../Watweoffer/Watweoffer";
import Counterup from "../Counterup/Counterup";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";


export default function HomePage(){
  return (
    <div>
      <HeroPage />
      <MainPage />
      <Watweoffer />
      <Counterup />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
