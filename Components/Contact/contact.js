import React, {useRef, useState} from 'react';
import{MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp,} from 'react-icons/bs';
import{BiPhoneCall} from'react-icons/bi';
import axios from 'axios';
import style from './contact.module.scss';


const Contact = () => {
  const form = useRef();
  const [email,setEmail]=useState('')
  const SendMail = async (e)=>{
    e.preventDefault();
 console.log('call')
  }


  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7054qdy', 'template_q5iskbq', form.current, 'dWlURBGetKYlEjW64')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
        <section id='contact' className={style.container}>
           
                  <div className={style.contactForm}>
             
                  
                      <form ref={form} onSubmit={sendEmail}>
                          <input type="text" name='name' placeholder='Type Your Full Name' required/>
                          <input type="email" name='Email' placeholder='Type Your Email' required/>
                          <textarea name="message" placeholder='Your Message'  rows="7" required></textarea>
                          <button type='submit' className="btn">Send</button>
                       
                </form>
                {/* <div className={style.contactOptions}>
                              <button className={style.contactOption}>
                                      <BiPhoneCall className={style.contact__icon}/>
                                <a href='tel:0046739871260' target="_blank" alt='Call' ></a>
                              </button>
                              <button className={style.contactOption}>
                                      <MdOutlineMailOutline className={style.contact__icon}/>
                                <a href='mailto:mjd.thif@icloud.com' target="_blank"></a>
                              </button>
                              <button className={style.contactOption}>
                                      <BsWhatsapp className={style.contact__icon}/>
                                <a href='http://api.whatsapp.com/send?phone +46739871260' target="_blank" ></a>
                            </button>
                    </div>  */}
                 
    
             
            </div>
        </section>
  )
}

export default Contact;