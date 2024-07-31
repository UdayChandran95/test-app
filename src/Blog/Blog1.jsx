import React from 'react'
import "../Navbar/navbar.css"
import "../Services/services.css"
import "../Blog/blog.css"
import BlogBg from "../images/ready-wood.jpg"
import blogImg1 from "../images/blog1.jpg"
import blogCover from "../images/blogcover1.jpg"
import bPhoto from "../images/blogphoto.JPG"
import blogImg2 from "../images/blog2.jpg"
import blogImg3 from "../images/blog3.jpg"


export default function Blog(){
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
                  <h1>The Importance of Regular Wood Polishing</h1>
                  <div className='blogImgCont'>
                      <img src={bPhoto} alt="" />
                      <h4>RAVICHANDRAN R</h4>
                      <p>May 5, 2024</p>
                  </div>
                  
                  
         </div>
         <div className="blogSecCont">
           <div className="blogTextParagraph">
             <p className='drop-cap'>Wood furniture adds a touch of elegance and warmth to any space. 
             However, maintaining its beauty and durability requires regular care. 
             One of the most effective ways to keep your wood furniture looking pristine
              is through regular wood polishing. In this blog post, we’ll explore the 
              benefits of wood polishing 
             and why it should be part of your regular maintenance routine.</p>
             <p>Wood polishing creates a protective layer that shields the surface from dust, 
             dirt, and moisture. This barrier helps prevent scratches and stains, prolonging 
             the life of your furniture.</p>
             <h2>Enhances Aesthetic Appeal</h2>
             <p>Over time, wood furniture can lose its luster and start to look dull. 
             Regular polishing restores the shine and 
             enhances the natural grain of the wood, making your furniture look as good as new.</p>
            </div>
            <img className='blog1Img' src={blogImg1} alt="" />
            <p>Regular polishing makes it easier to clean and maintain your furniture. The smooth, polished surface repels dust and dirt, meaning 
            you’ll spend less time cleaning and more time enjoying your beautiful furniture.</p>

            <p>Investing in regular wood polishing services can significantly extend the lifespan of your furniture. By protecting and maintaining the wood, 
            you ensure that your pieces remain functional and attractive for many years to come.</p>
              
            <div className='blogBoxCont'>
            <p><span>&ldquo;</span>to keep your wood furniture looking pristine
            is through regular wood polishing.</p>
         </div>
          
          <p>Regular wood polishing is essential for preserving the beauty and functionality of your furniture. Whether it's a cherished family heirloom or a modern office desk, professional polishing services can help maintain its appeal and value. Contact us today to 
          schedule your wood polishing service and give your furniture the care it deserves.</p>
     
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
                <textarea id="message" name="message" rows="3" cols="50" placeholder='Your comment *' required></textarea>
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
               
   </div>
  )
}
