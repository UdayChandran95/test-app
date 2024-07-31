import React from 'react'
import "../Navbar/navbar.css"
import "../Services/services.css"
import "../Blog/blog.css"
import BlogBg from "../images/human-hands-working.jpg"
import blogImg2 from "../images/blog2.jpg"
import blogCover from "../images/blogcover1.jpg"
import bPhoto from "../images/blogphoto.JPG"
import blogImg1 from "../images/blog1.jpg"
import blogImg3 from "../images/blog3.jpg"

export default function Blog2(){
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
                    <h1>DIY Wood Polishing Tips</h1>
                    <div className='blogImgCont'>
                      <img src={bPhoto} alt="" />
                      <h4>RAVICHANDRAN R</h4>
                      <p>May 15, 2024</p>
                  </div>
                    
           </div>
           <div className="blogSecCont">
             <div className="blogTextParagraph">
               <p className='drop-cap'>Nowadays wood polishing can seem like a daunting task, but with the right tools and techniques, you can achieve a professional-looking finish on your own. In this blog post, we’ll share some 
               DIY wood polishing tips to help you restore the natural beauty of your furniture.</p>
               
               <h2>Gather Your Supplies</h2>

               <p>You’ll need a soft cloth, wood polish or wax, a fine steel wool pad, and a clean, dry brush. Make sure
                to choose a polish that’s suitable for the type of wood you’re working with.</p>
               
               
               <p>Before you start polishing, clean the surface of the wood to remove any dust or dirt. 
               Use a damp cloth to wipe down the furniture, and let it dry completely.</p>
              
              <h2>Apply the Polish</h2>

              <p>Using a soft cloth, apply a small amount of wood polish to the surface. Work in small sections, applying the polish in the direction 
              of the wood grain. Avoid using too much polish, as this can leave a sticky residue.</p>
  
              </div>

              <img className='blog1Img' src={blogImg2} alt="" />
              
              <p>For a smoother finish, gently buff the surface with a fine steel wool pad. This helps to even out the polish and remove any excess. 
              Be careful not to press too hard, as this can damage the wood.</p>
                
              <div className='blogBoxCont'>
              <p><span>&ldquo;</span>Use a damp cloth to wipe down the furniture, 
              and let it dry completely.</p>
           </div>
            
            <p>Polishing your wood furniture doesn’t have to be complicated. With these DIY tips, you can achieve a beautiful, polished finish that enhances the natural beauty of your wood pieces. If you prefer a professional touch, our expert wood
             polishing services are always available to help you achieve the perfect shine.</p>
       
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
  