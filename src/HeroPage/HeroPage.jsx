import React from 'react'
import "../HeroPage/heropage.css"
import bgVideo from "../images/bg video edited.mp4"

export default function HeroPage() {
  return (
        <div className='carouselSection'>
        <div className="navBarSec">
              <div className='navLogo'>
              <h1>B & S</h1>
              </div>
              <div className='navList'>
                <ul>
                  <a href="/"><li>HOME</li></a>
                  <a href="/about"><li>ABOUT</li></a>
                  <a href="/gallery"><li>GALLERY</li></a>
                  <a href="/services"><li>SERVICES</li></a>
                </ul>
              </div>
              <div className="inputBar">
                 <ion-icon name="search-outline"></ion-icon>
                 <input type="text" placeholder='Search any keyword..' />
              </div>
              <div className='navCont'>
                <ion-icon name="apps-outline"></ion-icon>
              </div>
        </div>
        <div class="heroTxtcontainer">
              <div className="topText">HELLO, ALL</div>
             <div className='leftText'>WE ARE BROWN 'N' SHINE</div>
             <p className='heroTextDesc'>Transform your wooden furniture and surfaces with 
             our professional wood polishing services.</p>
             <button>CONTACT US</button>
        </div>  
            

             <div className='dwnArrow'>
             <span class="material-symbols-outlined">south</span>
             </div>
                
        
           <div className="hero">
              <video src={bgVideo} autoPlay loop muted />
           </div> 
    </div>
  )
}


