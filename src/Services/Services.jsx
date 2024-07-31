import React from 'react'
import "../Services/services.css";
import servBg from "../images/two persons working.jpg"
import sander from "../images/sander.png"
import woodplane from "../images/wood-plane.png"
import queryImg from "../images/old-fence-bg.jpg"
import "../Navbar/navbar.css"
 
export default function Services(){
  
  return (
    <div className='navBarTop'>
       <img className='servBg' src={servBg} alt="" />
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
            <ion-icon name="search-outline"></ion-icon>
            <input type="search" name="" id="" placeholder="Search..." />
            </nav>
            <div className='servTitle'>
                  <h1>SERVICES</h1>
                  <span class="material-symbols-outlined">keyboard_arrow_down</span>
         </div>
            <div className="servCont">
                <div className="servInfo">
                    <h3>OUR SERVICES</h3>
                    <p className='servHeading'>GET THE BEST EXPERIENCE WITH OUR SERVICE</p>
                    <p className="servDesc">
                    Transform your furniture with our premium wood polishing, 
                    restoring its natural beauty and elegance.
                    </p>
                </div>
                <div className="servBox">
                    <div class="box">
                       <i class="boxIcon fi fi-ts-bin-bottles"></i>
                       <h3>MELAMINE POLISH</h3>
                       <p>Protects wood from mainly hot and cold surfaces.</p>  
                    </div>
                    <div class="box">
                     <i class="boxIcon fi fi-tr-bucket"></i>
                      <h3>PU POLISH</h3>
                      <p>Renowned for its durability, aesthetic enhancement.</p>
                    </div>
                    <div class="box">
                      <i class="boxIcon fi fi-tr-paint-roller"></i>
                        <h3>FLOOR POLISH</h3>
                        <p>Removes dirt, scuff marks, and dullness</p>
                    </div>
                    <div class="box">
                      <i class="boxIcon fi fi-ts-floor"></i>
                         <h3>MATT FINISHING</h3>  
                         <p>A dull finish or surface, as opposed to a shiny one</p>
                    </div>
                </div>
            </div>
            <div className="priceSec">
                     <div className="priceBox">
                     <div className="priceFlexBox">
                        <div className="pBox">
                                <img src={sander} alt="" />
                                <h2>GOLD PACK</h2>
                                <p>Lorem ipsum dolar</p>
                                <h1><span>₹</span>900</h1>
                                <p>sit amem dolar</p>
                                <p>sit amelar</p>
                                <button>GET NOW</button>
                         </div>

                         <div className="pBox2">
                                <img src={woodplane} alt="" />
                                <h2>SILVER PACK</h2>
                                <p>Lorem ipsum dolar</p>
                                <h1><span>₹</span>750</h1>
                                <p>sit amem dolar</p>
                                <p>sit amelar</p>
                                <button>GET NOW</button>
                         </div>
                    </div>
                    </div>

                     <div className="priceDesc">
                       <div className="cont1">
                        <h3>FLEXIBLE & AFFORDABLE</h3>
                        <h1>PRICING PLANS</h1>
                        <p>Enjoy our premium quality products at the most affordable
                         prices on the market!</p>
                        <ul className='pBoxList'>
                            <li>Competitive Market Rates</li>
                            <li>Cost-Effective Solutions</li>
                            <li>Transparent Pricing</li>
                        </ul>    
                      </div>
                     </div>
            </div>

            <div id="queryContainer">
               <div className="queryImgBox">
                  <img src={queryImg} alt="" />
               </div>
               <div className="queryFormBox">
                   <h3>CONTACT US</h3>
                   <p>ANY QUERIES?</p>

                   <div class="formContainer">
             <form action="/" method="post">
                    <div className="row">
                        <div className="input-group">
                     <div className="inputCont">
                       <span class="material-symbols-outlined">person</span>
                          <input type="text" name="name" id="" placeholder='Name' />
                     </div>   
                    </div>

                    <div className="input-group">
                     <div className="inputCont">
                     <span class="material-symbols-outlined">phone_in_talk</span>
                        <input type="text" name="phone" id="" placeholder='Phone' />
                     </div>
                    </div>
               </div>
               <div className="column">
                    <div className="input-group">
                    <div className="inputCont">
                    <span class="material-symbols-outlined">mail</span>
                        <input type="email" name="email" id="" placeholder='Email' />
                 </div>
                    </div>

                    <div className="input-group">
                    <div className="inputCont">
                    <span class="material-symbols-outlined">stylus_note</span>
                        <textarea name="" rows="3" cols="60" id="" placeholder='Give us a message..'></textarea>
                    </div>
                    </div>
              </div>
              <button className='submit-btn'>GET IN TOUCH</button>
            </form>
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
