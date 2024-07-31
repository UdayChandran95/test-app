import React from 'react';
import '../Portfolio/portfolio.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image1 from '../images/Floor1.jpg';
import image2 from '../images/statue1.jpg';
import image3 from '../images/door5.jpg';
import image4 from '../images/name plate.jpg';
import image5 from '../images/statue2.jpg';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}; 

  export default function Portfolio(){
    return(
      <div className='portFolioContainer'>
      <div className="portfolioCont">
            <h2>OUR PORTFOLIO</h2>
            <p>RECENT PROJECTS</p>
      </div>
        
             <Carousel responsive={responsive}>
                 <div className='image-Container'>
                      <img src={image1} alt="" />
                 </div>
                 <div className='image-Container'>
                      <img src={image2} alt="" />
                 </div>
                <div className='image-Container'>
                      <img src={image3} alt="" />
                </div>
                <div className='image-Container'>
                      <img src={image4} alt="" />
                </div>
                <div className='image-Container'>
                      <img src={image5} alt="" />
                </div>
              </Carousel>;

              <a href='/gallery' className='viewFont'>
                   <p>VIEW ALL<span><ion-icon name="chevron-forward-circle-outline"></ion-icon></span></p>
              </a>
      </div>  
    )
    
  }

