import React from 'react'
import "../Services/services.css"
import NavBar from '../Navbar/Navbar'
import servBg from "../images/wooden-house.jpg"
import img1 from "../images/m1.jpg"
import img2 from "../images/m2.jpg"
import img3 from "../images/m3.jpg"
import img4 from "../images/m4.jpg"
import img5 from "../images/m5.jpg"
import img6 from "../images/m6.jpg"
import Footer from '../Footer/Footer'

const Services = () => {
  return (
    <>
    <NavBar />
    <div id='serviceContainer'>
        <h1 className='contactTxt'>Our Services</h1>
        <div className="servContents">
           <img className='servBg' src={servBg} alt="" />
           
           <div className="servImgContents">
             <div className="imgCont">
                 <img src={img1} alt="" />
                 <img src={img2} alt="" />
                 <img src={img3} alt="" />
                 <img src={img4} alt="" />
                 <img src={img5} alt="" />
                 <img src={img6} alt="" />
            </div>
           </div>
        </div>
        <div className="offerContainer">
            <h2>We Offer</h2>
        <div className="offerContentContainer">
            <div className="offerContents">
               <i class="fi fi-tr-detergent"></i>
                <h3>Melamine Polish</h3>
                <p>Melamine polish is a closed pore polish, which means it seals the pores of the wood, 
                making it non-breathable and protecting it from hot and cold surfaces.</p>
            </div>
            <div className="offerContents">
               <i class="fi fi-tr-spray-can"></i>
                <h3>PU Polish</h3>
                <p>Polyurethane (PU) polish stands out among wood finishes due to its superior 
                durability, water resistance, and ease of maintenance.</p>
            </div>
            <div className="offerContents">
            <i class="fi fi-tr-floor"></i>
                <h3>Matte Finishing</h3>
                <p>Matte wood polish, on the other hand, provides a subtle, non-reflective 
                finish that complements a more contemporary and understated aesthetic.</p>
            </div>
        </div>
          <a href="/servicepage">
             <p className='viewService'>view more &gt;&gt;</p>
             </a>
        </div>
        
        
        
    </div>
    <Footer />
    </>
  )
}

export default Services