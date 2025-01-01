import React from 'react'
import "../MainPage/mainpage.css"
import firstImg from "../images/3.jpg"
import secImg from "../images/2.jpg"
import thirdImg from "../images/1.jpg"
import fourthImg from "../images/4.jpg"
import { Link } from 'react-router-dom'



export default function MainPage() {


  return (
    <div id="mainPageSection">
          <div className="mainPageContent">
                <div className="heroTxt">
                   <h1>The Art of Polishing.</h1>
                   <p>Wooden Polishing Services</p>
                </div>

        <div className="productContainer">

              <div className="productMainContent">
                      <img src={firstImg} alt="" />
                      <img src={secImg} alt="" />
                      <img src={thirdImg} alt="" />
                      <img src={fourthImg} alt="" />
                    </div>
                    
                    <div className="productBtn">
                     <Link to={"/servicepage"}>
                         <button>View All Services</button>
                     </Link>
                               
                      </div>
          </div>
         
    </div>
   
    </div>

  )
}
