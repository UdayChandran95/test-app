import React from 'react'
import "../Services/services.css"
import servBg2 from "../images/two persons working.jpg"
import varnishImg from "../images/varnish.jpg"


 

export default function ServicePage(){

  return (
    <div className='navBarTop'>
    <img className='servBg' src={servBg2} alt="" />
             <nav class="navbar navbar-expand-lg navbar-dark">
         <div class="container-fluid">
             <a class="navbar-brand" href=""><span>B</span> & S</a>
             <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
             </button>
             <div class="collapse navbar-collapse" id="navbarNavDropdown">
             <ul class="navbar-nav">
                 <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="#">Home</a>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link" href="/about">ABOUT</a>
                 </li>
                 <li class="nav-item">
                 <a class="nav-link" href="#">Pricing</a>
                 </li>
                 <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     SERVICES
                 </a>
                 <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="#">Action</a></li>
                     <li><a class="dropdown-item" href="#">Another action</a></li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                 </ul>
                 </li>
             </ul>
             </div>
         </div>
         <input type="search" name="" id="" placeholder="Search..." />
         <i class="fa-solid fa-bars"></i>
         </nav>
         <div className='servTitle'>
                  <h1>SERVICES</h1>
                  <span class="material-symbols-outlined">keyboard_arrow_down</span>
         </div>

         <div className="servPageCont">
            <h3>WELCOME TO BROWN N SHINE !</h3>
            <p>OUR SERVICES MAKE US THE BEST WOOD POLISH COMPANY</p>
            <div className="servContentsBox">
            <div className='servContColumn'>
              <i class="bIcon fi fi-tr-puzzle-alt"></i>
              <div className="roundDiv"></div>
                <h3>PRECISION</h3>
                <p>consecuter adicping</p>
            </div>
            <div className='servContColumn'>
            <i class="bIcon fi fi-ts-time-forward"></i>
            <div className="roundDiv"></div>
                <h3>TIMING</h3>
                <p>consecuter adicping</p>
            </div>
            <div className='servContColumn'>
            <i class="bIcon fi fi-ts-shield-trust"></i>
            <div className="roundDiv"></div>
                <h3>QUALITY</h3>
                <p>consecuter adicping</p>
            </div>
            <div className='servContColumn'>
            <i class="bIcon fi fi-tr-piggy-bank"></i>
            <div className="roundDiv"></div>
                <h3>AFFORDABLE</h3>
                <p>consecuter adicping</p>
            </div>
         </div>
         </div>

         <div className="servImgContainer">
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
