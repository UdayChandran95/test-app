import React from 'react'
import "../ServicePage/servicepage.css"
import NavBar from '../Navbar/Navbar'
import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa';
import gimg1 from "../images/statue1.jpg"
import gimg2 from "../images/floor1.jpg"
import gimg3 from "../images/door6.jpg"
import gimg4 from "../images/maindoor.jpg"
import gimg5 from "../images/door5.jpg"
import gimg6 from "../images/statue.jpg"
import Footer from '../Footer/Footer'


const media = [
  {
    src: gimg1,
    title: 'Melamine Polish',
    content: 'Melamine polish is a closed pore polish, which means it seals the pores of the wood, making it non-breathable and protecting it from hot and cold surfaces.',
    tableData: {
      Client : 'Hotel Rivieraa',
      Size: '2m x 3m',
      Place: 'Kottakuppam',
    },
  },
  {
    src: gimg2,
    title: 'Floor Polish',
    content: 'Floor polishes are a maintenance coating that provide a shine or sheen to the floor. It will fill in micro-scratches and make them less noticeable.',
    tableData: {
      Client : 'Hopi Monk',
      Size: '20 x 40',
      Place	: 'Auroville',
    },
  },
  {
    src: gimg3,
    title: 'Varnish Wood Polish',
    content: "Varnish is a hard film that permanently covers whatever it's applied to. It's relatively permanent, in that it can last years under normal wear.",
    tableData: {
      Client : 'White Town Hotel',
      Size: '2.2m',
      Place	: 'White Town',
    },
  },
  {
    src: gimg4,
    title: 'PU Polish',
    content: 'PU Polish, short for polyurethane polish, is a protective wood coating that offers durability, enhances aesthetics, and provides resistance against scratches.',
    tableData: {
      Client : 'Anand vilas',
      Size: '2m',
      Place: 'Muthialpet',
    },
  },
  {
    src: gimg5,
    title: 'Wax Polish',
    content: 'Wax furniture polish is a versatile and highly effective choice for interior wood polish. Wooden surfaces are susceptible to various forms of damage.',
    tableData: {
      Client : 'Teachers Colony',
      Size: '2m',
      Place	: 'Moolakulam',
    },
  },
  {
    src: gimg6,
    title: 'Oil Based Wood Polish',
    content: "It is an oil-based substance that penetrates inside the surface and composition of the wood.",
    tableData: {
      Client : 'Hotel Riviera',
      Size: '2m x 4m',
      Place	: 'Kottakuppam',
    },
  },
 
];




const ServicePage = () => {
    
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <NavBar />
      <div className="image-gallery">
      {media.map((image, index) => (
        <div key={index} className="thumbnail-container">
          <img
            src={image.src}
            alt={image.title}
            onClick={() => handleImageClick(image)}
            className="thumbnail"
          />
          <div className="thumbnail-title">{image.title}</div>
        </div>
      ))}

      {selectedImage && (
        <div className="image-viewer">
          <span className="close-button" onClick={handleClose}>&times;</span>
          <div className="image-content-container">
            <img src={selectedImage.src} alt={selectedImage.title} className="full-image" />
            <div className="image-content">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.content}</p>
              <table className="image-info-table">
                <tbody>
                  {Object.entries(selectedImage.tableData).map(([key, value], index) => (
                    <tr key={index}>
                      <td>{key}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                <div className="social-icons">
                      <a href="https://www.facebook.com/people/Brown-and-Shine/61563959761439/" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                      </a>
                      <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbrownnshine" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                      </a>
                      <a href="https://www.instagram.com/brownnshine/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                      
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
     
    </>
  )
}

export default ServicePage