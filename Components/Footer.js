import React, {useState}from 'react';
import Signa  from '../../Assests/PNG/Signa.svg';
import FooterSM from '../FooterSM/FooterSM';

import './footer.module.scss';
const Footer = () => {
  return (
    <footer id='footer'>
          <FooterSM/>
                <div className='footer__copyright'>
                  <small> ©  <a href='#' className='footer__logo'>   Mjd_Thif </a> Portfilio All rights reserved </small>
                    {/* <div className='footer_signa'> 
                        <a href='#' className='footer__logo'> <img src={Signa}/> </a>
                    </div> */}
                
                  </div>
    </footer>
  )
}

export default Footer;