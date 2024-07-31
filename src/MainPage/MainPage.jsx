import React from 'react'
import "../MainPage/mainpage.css"
import woodWorker from "../images/wood-worker.jpg"
import circleTxt from "../images/circle text.png"


export default function MainPage() {


  return (
    <div id="about-section">
          <div className='whatweDOImg'>
                <img src={woodWorker} alt="" />
                <img className='cText' src={circleTxt} alt="" />
          </div>
          <div className='whatweDOCont'>
            <div className="cont1">
                 <h3>WHAT WE DO</h3>
                 <h1>WOODEN MASTERY</h1>
                 <p>We specialize in transforming dull, worn, and 
                 lifeless wooden surfaces 
                 into stunning masterpieces through our wood polishing services.</p>
                  <ul className='contList'>
                    <li><span>01.</span>SANDING</li>
                    <li><span>02.</span>POLISHING</li>
                  </ul>    
            </div>
            <a href="/services">
            <button className='servBtn'>OUR SERVICES<i class="fa-solid fa-arrow-right"></i></button>
            </a>
          </div>
    </div>

  )
}
