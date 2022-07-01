import React, {useState}from 'react';
import style from './footer.module.scss';
import Link from 'next/link'
import FooterSM from './FooterSM';
import './footer.module.scss';

const Footer = () => {
  return (
    <footer id='footer'>
          <FooterSM/>
                <div className={style.footerCopyright}>
                  <small> ©  <Link href='/' className={style.footerLogo}>   Mjd_Thif </Link> All rights reserved </small>
                </div>
    </footer>
  )
}

export default Footer;