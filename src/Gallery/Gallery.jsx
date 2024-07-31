import React, { useState } from 'react'
import Masonry from "react-responsive-masonry"
import "../Gallery/gallery.css"
import door from "../images/door5.jpg"
import nameplate from "../images/name plate.jpg"
import statue1 from "../images/statue1.jpg"
import statue2 from "../images/statue2.jpg"
import floor1 from "../images/Floor1.jpg"
import floor2 from "../images/floor2.jpg" 
import door6 from "../images/door6.jpg"
import door7 from "../images/door7.jpg"
import plate from "../images/plate.jpg"
import maindoor from "../images/maindoor.jpg"
import door8 from "../images/door8.jpg"
import door9 from "../images/door9.jpg"


const images = [
    nameplate, statue1, door, statue2, floor1, floor2, door6, door7, plate, maindoor,
    door8, door9
]

export default function Gallery(){

    const [data, setData] = useState({img: '', i:0})

    const viewImage = (img , i) =>{
         setData({img, i})
    }

    const imgAction = (action) =>{
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
        }

        if(action === 'prev-img'){
            setData({img: images[i - 1], i: i - 1});
        }
        if(!action){
            setData({img: '', i:0})
        }
    }
  return (
    <>
        {data.img &&
            <div className='imgStyle'>
                <div className='exitBtn' onClick={() => imgAction()}><span class="material-symbols-outlined">close</span></div>
                
                <div className='arrowLeft' onClick={() => imgAction('prev-img')}><span class="material-symbols-outlined">arrow_back_ios</span></div>
                
                 <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
                
                 <div className='arrowRight' onClick={() => imgAction('next-img')}><span class="material-symbols-outlined">arrow_forward_ios</span></div>
            </div>

        }
        <Masonry columnsCount={3} gutter="10px">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    style={{width: "100%", display: "block", cursor: 'pointer'}}
                    onClick={() => viewImage(image, i)}
                />
            ))}
        </Masonry>
    </>
    )
   
}
