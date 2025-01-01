import React from 'react'
import "../Contact/contact.css"
import NavBar from '../Navbar/Navbar'
import leftBg from '../images/old-fence-bg.jpg'
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2'

export default function Contact() {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e84bed19-9769-486f-a0a6-58abaad82d3f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  };
  
  return (
   <>
   <NavBar />
   <div id="contactSection">
   <h1 className='abtTxt'>Contact Us</h1> 
    <div id='ContactContainer'>  
    
     <div className="contacLeft">
        <img src={leftBg} alt="" />
     </div>
     <div className="contacRight">
     <div class="formContainer">
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="input-group">
                     <div className="inputCont">
                          <input type="text" name="name" id="" placeholder='Name*' required />
                     </div>   
                    </div>

                    <div className="input-group">
                     <div className="inputCont">
                        <input type="text" name="phone" id="" placeholder='Phone' required />
                     </div>
                    </div>
               </div>
               <div className="column">
                    <div className="input-group">
                    <div className="inputCont">
                        <input type="email" name="email" id="" placeholder='Email*' required />
                 </div>
                    </div>

                    <div className="input-group">
                    <div className="inputCont">
                        <textarea name="message" rows="3" cols="60" id="" placeholder='Give us a message..'></textarea>
                    </div>
                    </div>
              </div>
              <button className='submit-btn'>Submit</button>

              <div className="addressCont">
                  <p>Kuyavarpalayam, Puducherry - 13</p>
                  <a href="mailto:brownandshine@gmail.com">
                  <p><u>brownandshine@gmail.com</u></p>
                  </a>
                  <p>Mob : 8056-856-957</p>
              </div>
              <div className="sIconCont">
                <a href="https://www.instagram.com/brownnshine/" rel="noreferrer" target="_blank">
                    <i class="fi fi-brands-instagram"></i>
                </a>
                 
                  <a href="https://www.facebook.com/people/Brown-and-Shine/61563959761439/" rel="noreferrer" target="_blank">
                        <i class="fi fi-brands-facebook"></i>
                  </a>

                  <a href="https://x.com/i/flow/login?redirect_after_login=%2Fbrownnshine" rel="noreferrer" target="_blank">
                       <i class="fi fi-brands-twitter-alt"></i>
                  </a>
                   
                   
              </div>
            </form>
      </div>
     </div>
    </div>
    </div>
    <Footer />
    </>
  )
}
