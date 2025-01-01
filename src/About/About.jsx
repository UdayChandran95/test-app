import "../About/about.css"
import Footer from "../Footer/Footer"
import NavBar from "../Navbar/Navbar"
import aboutImg from "../images/wooden house.jpg"


export default function About(){
   
  return (
    <>
    <NavBar/>
    <div className="about-section">
        <div className="aboutContent">
            <h1>About Us</h1>
            <img src={aboutImg} alt="" />
        <div className="aboutDescContainer">
            <div className="aboutDesc">
                <div className="aboutDescCont">
                <i class="aIcon fi fi-tc-briefcase"></i>
                      <h2>Professional Team</h2>
                      <p>Our professional team is composed of highly skilled 
                      and experienced individuals dedicated to delivering exceptional service.</p>
                </div>
                <div className="aboutDescCont">
                <i class="aIcon fi fi-ts-sparkles"></i>
                   <h2>Quality Materials</h2>
                   <p>We believe that great outcomes start with great materials, we prioritize excellence and integrity in everything we use.</p>
                  
                </div>
                <div className="aboutDescCont">
                <i class="aIcon fi fi-ts-customize"></i>
                  <h2>Maintanence Plans</h2>
                  <p>Our comprehensive maintenance plans are designed to keep your investment in top condition for years to come.</p>
                </div>
                <div className="aboutDescCont">
                <i class="aIcon fi fi-ts-vision-target"></i>
                  <h2>High Precision</h2>
                  <p>Our commitment to high precision means that every measurement is exact, every polish is perfect, and every restore is flawless.</p>
                </div>
            </div>
        </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
