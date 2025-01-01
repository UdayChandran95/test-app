import React from 'react'
import "../Gallery/gallery.css"
import NavBar from '../Navbar/Navbar'
import ResponsiveGallery from 'react-responsive-gallery';
import gimg1 from "../images/statue1.jpg"
import gimg2 from "../images/floor1.jpg"
import gimg3 from "../images/plate.jpg"
import gimg4 from "../images/floor2.jpg"
import gimg5 from "../images/door8.jpg"
import gimg6 from "../images/door5.jpg"
import gimg7 from "../images/1.jpg"
import gimg8 from "../images/door9.jpg"
import gimg9 from "../images/2.jpg"
import gimg10 from "../images/maindoor.jpg"
import gimg11 from "../images/door6.jpg"
import gimg12 from "../images/door7.jpg"

const media=[
    {
    src: gimg1
    },
    {
    src: gimg2
    },
    {
    src: gimg3
    },
    {
    src: gimg4
    },
    {
    src: gimg5
    },
    {
    src: gimg6
    },
    {
    src: gimg7
    },
    {
    src: gimg8
    },
    {
    src: gimg9
    },
    {
    src: gimg10
    },
    {
      src: gimg11
      },
      {
        src: gimg12
        }
    ];
    

     


const imgGallery = () => {
  return (
    <>
    <NavBar />
    <ResponsiveGallery
     useLightBox
     media={media}/>
      
    </>
    
  )
}

export default imgGallery