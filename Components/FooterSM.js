import React from 'react';
import {BsGithub, BsLinkedin, BsSpotify, BsInstagram,BsTwitter } from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import './footerSM.scss';
const FooterSM = () => {
  return (
    <div className='footerSM'>
        <a href="https://www.linkedin.com/in/mjd-thif/"  target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/mjdthif" target='_blank' ><BsGithub/></a>
        <a href="https://www.codewars.com/users/mjdthif"  target='_blank'> <SiCodewars/></a>
        <a href="https://www.instagram.com/hammuarabi/"  target='_blank'> <BsInstagram/></a>
        <a href="#" target='_blank'> <BsSpotify/></a>
        {/* <a href="https://twitter.com/DJohanberg" target='_blank'> <BsTwitter/></a> */}
    </div>
  )
}

export default FooterSM;