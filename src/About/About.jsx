import React, { useState } from 'react'
import "../About/about.css"
import "../MainPage/mainpage.css"
import aboutBg from "../images/person working.jpg"
import varnishImg from "../images/varnish.jpg"
import person from "../images/person.jpg"
import blogImg1 from "../images/blog1.jpg"
import blogImg2 from "../images/blog2.jpg"
import blogImg3 from "../images/blog3.jpg"
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import "../Counterup/counterup.css"

export default function About(){
    const [counterOn , setCounterOn] = useState(false);

  return (
    <div className='navBarTop'>
       <img className='aboutBg' src={aboutBg} alt="" />
                <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href=""><span>B</span> & S</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#blogSection">BLOG</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/services">SERVICES</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/services/#queryContainer">CONTACT</a>
                    </li>
                    
                </ul>
                </div>
            </div>
            <ion-icon name="search-outline"></ion-icon>
            <input type="search" name="" id="" placeholder="Search..." />
            </nav>
            <div className='abtTitle'>
               <h1>ABOUT US</h1>
               <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
    
            <div className="abservImgContainer">
               <div className="imgBoxContainer">
                  <img src={varnishImg} alt="" />
               </div>
               <div className="imgBoxDesc">
                    <div className="cont1">
                        <h3>WHAT WE DO</h3>
                        <h1>WE CREATE THE SPACE THAT MAKES YOU FEEL SAFE</h1>
                        <p>We specialize in transforming dull, worn, and 
                        lifeless wooden surfaces 
                        into stunning masterpieces through our wood polishing services.</p>
                        <ul className='imgBoxList'>
                            <li>Individual approach</li>
                            <li>Technical architecture</li>
                            <li>Customer support</li>
                        </ul> 
                    </div>
                    <a href="/services">
                     <button className='servBtn'>OUR SERVICES</button>
                   </a>
               </div>
         </div>
      

    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
               <div className='counterPage'>
                    <h1>
                    {counterOn && <CountUp start={0} end={90} duration={4} delay={0}/>}
                    </h1>
                    <p className='fontLetter1'>PROJECTS</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={10} duration={1} delay={0}/>}
                    </h1>
                    <p className='fontLetter2'>PEOPLE</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={12} duration={2} delay={0}/>}
                    </h1>
                    <p className='fontLetter3'>YEARS</p>
                    <h1>
                    {counterOn && <CountUp start={0} end={14} duration={3} delay={0}/>}
                    </h1>
                    <p className='fontLetter4'>AREAS</p>
               </div>
    </ScrollTrigger>

   <div className="abImg">
       <img src={person} alt="" />
   </div>
       


       <div id="blogSection">
           <h3>OUR BLOG</h3>
           <h1>ABOUT WOOD POLISH</h1>
           <div className="blogBox">
                <div className='blogCont'>
                <a href="/blog1">
                    <img className='blogImg' src={blogImg1} alt="" />
                    <h4>BROWN N SHINE</h4>
                    <p>The Importance of Regular Wood Polishing</p>
                    <h5 className='dateCont'>May 5, 2024</h5>
               </a>
                </div>
                <div className='blogCont'>
                <a href="/blog2">
                    <img className='blogImg' src={blogImg2} alt="" />
                    <h4>BROWN N SHINE</h4>
                    <p>DIY Wood Polishing Tips for a Gleaming Finish</p>
                    <h5 className='dateCont'>May 15, 2024</h5>
                </a>
                </div>
                <div className='blogCont'>
                <a href="/blog3">
                    <img className='blogImg' src={blogImg3} alt="" />
                    <h4>BROWN N SHINE</h4>
                    <p>How to Choose the Right Wood Polish for Your Furniture</p>
                    <h5 className='dateCont'>Jun 27, 2024</h5>
                </a>
                </div>
           </div>
       </div>
       <div className="mainFooter">
             <div className="introSec">
                 <h1>BROWN N SHINE</h1>
                 <p>Transform your wooden furniture and surfaces with 
                 our professional wood polishing services.</p>
             </div>

             <div className="servSec">
                <h2>SERVICES</h2>
                 <ul>
                    <li>Melamine Polish</li>
                    <li>PU Polish</li>
                    <li>Floor Polish</li>
                    <li>Matt Finishing</li>
                 </ul>
             </div>

             <div className="tagCloud">
               <h2>TAG CLOUD</h2>
                <button>WOOD</button>
                <button>POLISH</button>
                <button>MELAMINE</button>
                <button>THINNER</button>
                <button>TEAK</button>
             </div>

             <div className='followSec'>
             <h2>FOLLOW US</h2>
             <div className="socialIconsBox">
                  <ion-icon name="logo-facebook"></ion-icon>
                  <ion-icon name="logo-instagram"></ion-icon>
                  <ion-icon name="logo-twitter"></ion-icon>
  
             </div>
               
             </div>
       </div>
       <div className='footer-container'>
           <p>© Created by Uday 2024.</p>
       </div>

    </div>
  )
}
