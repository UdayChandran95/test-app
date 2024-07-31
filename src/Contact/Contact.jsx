import React from 'react'
import "../Contact/contact.css"

export default function Contact() {
  return (
    <div className='ContactContainer'>   
     <div className="contacLeft">
        <h3>CONTACT US</h3>
        <h1>GET IN TOUCH!</h1>
        <p>We are always here to help you. 
        Feel free to reach out with any questions or concerns.</p>
        <div className='addressCont'>
          <div className='addressSubCont'>
               <span class="material-symbols-outlined">location_on</span>
               <p>Kosapalayam, Pondicherry - 14.</p>
          </div> 
           <div className='addressSubCont'>
               <span class="material-symbols-outlined">phone_iphone</span>
               <p className='mobFont'>+91 8056 856 957</p>
           </div>
           <div className='addressSubCont'>
              <span class="material-symbols-outlined">mail</span>
              <p>brownnshine@gmail.com</p>
           </div>
         
        </div>
     </div>
     <div className="contacRight">
     <div class="formContainer">
        <form action="/" method="post">
          <div className="row">
            <div className="input-group">
                     <div className="inputCont">
                       <span class="material-symbols-outlined">person</span>
                          <input type="text" name="name" id="" placeholder='Name' />
                     </div>   
                    </div>

                    <div className="input-group">
                     <div className="inputCont">
                     <span class="material-symbols-outlined">phone_in_talk</span>
                        <input type="text" name="phone" id="" placeholder='Phone' />
                     </div>
                    </div>
               </div>
               <div className="column">
                    <div className="input-group">
                    <div className="inputCont">
                    <span class="material-symbols-outlined">mail</span>
                        <input type="email" name="email" id="" placeholder='Email' />
                 </div>
                    </div>

                    <div className="input-group">
                    <div className="inputCont">
                    <span class="material-symbols-outlined">stylus_note</span>
                        <textarea name="" rows="3" cols="60" id="" placeholder='Give us a message..'></textarea>
                    </div>
                    </div>
              </div>
              <button className='submit-btn'><i class="fa-regular fa-paper-plane"></i>GET IN TOUCH</button>
            </form>
      </div>
     </div>
    </div>
  )
}
