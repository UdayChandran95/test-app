import React from 'react'
import "../Navbar/navbar.css"
import "../Services/services.css"
import "../Blog/blog.css"
import BlogBg from "../images/Wood-Polish.jpg"
import blogImg3 from "../images/blog3.jpg"
import blogImg2 from "../images/blog2.jpg"
import blogImg1 from "../images/blog1.jpg"
import blogCover from "../images/blogcover1.jpg"
import bPhoto from "../images/blogphoto.JPG"

export default function Blog3(){
    return (
      <div className='navBarTop'>
         <img className='blogBg' src={BlogBg} alt="" />
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
              <input type="search" name="" id="" placeholder="Search..." />
              <i class="fa-solid fa-bars"></i>
              </nav>
              <div className='blogTitle'>
                    <h1>How to Choose the Right Wood Polish</h1>
                    <div className='blogImgCont'>
                      <img src={bPhoto} alt="" />
                      <h4>RAVICHANDRAN R</h4>
                      <p>Jun 27, 2024</p>
                  </div>
                    
           </div>
           <div className="blogSecCont">
             <div className="blogTextParagraph">
               <p className='drop-cap'>Choosing the right wood polish is essential for maintaining and enhancing the beauty of your wood furniture. With so many options available, it can be challenging to know which product is best for your needs. In this blog post, we’ll guide you through the different 
               types of wood polishes and help you choose the right one for your furniture.</p>
               
               <h2>Understanding Different Types of Wood Polishes</h2>

                <div>
                      <h3>Wax Polishes</h3>
                      <p>Wax polishes are ideal for antique furniture and pieces with a matte finish. They provide a soft,
                       natural sheen and offer good protection against moisture and dust.</p>
                </div>

                <div>
                      <h3>Spray Polishes</h3>
                      <p>Spray polishes are convenient and easy to use, making them a popular choice for regular maintenance. 
                      They offer a quick shine and are suitable for all types of wood surfaces.</p>
                </div>

                <div>
                      <h3>Paste Polishes</h3>
                      <p>Paste polishes provide a durable, long-lasting finish. They require a bit more effort to 
                      apply but offer excellent protection and a high-gloss finish.</p>
                </div>
                
                <h2>Environmental and Safety Considerations</h2>

                <p>Look for eco-friendly polishes that are free from harsh chemicals. These products are safer for your home and the environment. 
                Always check for any specific safety instructions on the product label.</p>
              
              </div>

              <img className='blog1Img' src={blogImg3} alt="" />
              
              <div className='blogBoxCont'>
              <p><span>&ldquo;</span>Choosing the right wood polish is essential for maintaining and enhancing the beauty</p>
           </div>
            
            <p>By understanding the different types of polishes and considering your furniture's specific needs, you can ensure that your wood pieces stay protected and look stunning for years to come. If you need 
            assistance or professional polishing services, don’t hesitate to contact us.</p>
       
           </div>
  
           <div className='blogCover'>
              <img src={blogCover} alt="" />
           </div>
           
           <div className="commentBoxSection">
              <h2>LEAVE A COMMENT</h2>
              <div class="blogformContainer">
          <form action="/" method="post">
              <div class="row">
                  <div class="column">
                      <input type="text" id="name" name="name" placeholder='Name *'   required />
                  </div>
                  <div class="column">
                    <input type="email" id="email" name="email" placeholder='Email *' required />
                  </div>
              </div>
              <div class="row full-width">
                  <textarea id="message" name="message" rows="3" placeholder='Your comment *' required></textarea>
              </div>
              <div class="row-btn">
                  <button className='submit-btn'>SUBMIT</button>
              </div>
          </form>
        </div>
           </div>

           <div className="BlogSuggest">
         <h1>YOU MAY ALSO LIKE</h1>
       <div className="blogSuggBox">
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
          </div>
        
        </div>
           
           
     </div>
    )
  }
  