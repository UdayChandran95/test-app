import React from 'react'
import "../Navbar/navbar.css"

export default function NavBar() {

  return (
        <div id="navBarSection">
           <div className="navbarContent">
                 <nav class="navbar navbar-expand-lg navbar-light">
                      <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                       
                     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                          
                          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                              <a class="nav-link" href="/about">About</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/gallery">Gallery</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/services">Services</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact</a>
                            </li>
                          </ul>
                       </div>

                      </div>
                    </nav>  
                  </div>
                  <div className="navBarLogo">
                   <a href="/">
                      <h2 className="nLogo"><i class="lIcon fi fi-ts-trees-alt"></i>BROWN n SHINE</h2>
                      </a>
                  </div>
                  
            </div>
  )
}


