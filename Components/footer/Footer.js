import React, {useState}from 'react';
import style from './footer.module.scss';

import FooterSM from './FooterSM';

import './footer.module.scss';
const Footer = () => {
  return (
    <footer id='footer'>
          <FooterSM/>
                <div className={style.footerCopyright}>
                  <small> ©  <a href='#' className={style.footerLogo}>   Mjd_Thif </a> Portfilio All rights reserved </small>
                </div>
    </footer>
  )
}

export default Footer;