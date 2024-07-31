import React from 'react'
import "../Watweoffer/watweoffer.css"
import {useTypewriter} from "react-simple-typewriter"

export default function Watweoffer() {
    const [typeEffect] = useTypewriter({
        words : ['CARE', 'SKILL', 'TIME'],
        loop:{},
        typeSpeed: 100,
        deleteSpeed: 40
    })
  return (
    <div id='WatWeOffer'>
     <h3>WHAT WE OFFER</h3>
     <h1>HIGH QUALITY SERVICE DELIVERED WITH EXCELLENCE, PRECISION AND  
     <span> {typeEffect}</span></h1>
     <h2>RAVICHANDRAN R</h2>
     <p>Founder</p>
      <div className="featureElements">
      <div className="elements">
       <i class="wIcon fi fi-tr-bio-leaves"></i>
            <h2>ENVIRONMENTALLY FRIENDLY</h2>
            <p>We are promoting products that are safe for both indoor air quality 
            and the environmentally friendly.</p>
      </div>
      <div className="elements">
       <i class="wIcon2 fi fi-tr-completed"></i>
            <h2>CUSTOMIZED FINISHES</h2>
            <p>Offer a variety of customizable finishes to cater 
            to different customer preferences and interior styles.</p>
      </div>
      <div className="elements">
      <i class="wIcon3 fi fi-tr-module"></i>
            <h2>MAINTENANCE PLANS</h2>
            <p>Provide customers with maintenance plans that include regular inspections 
            and touch-ups.</p>
      </div>

      </div>
      <a href="/about">
            <button className='abBtn'>ABOUT US<i class="fa-solid fa-arrow-right"></i></button>
        </a>
      
    </div>
  )
}

