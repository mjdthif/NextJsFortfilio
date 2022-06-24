
import {BsGithub, BsLinkedin, BsSpotify, BsInstagram,BsTwitter, BsPinterest} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import{MdOutlineMailOutline} from 'react-icons/md';
import{BiPhoneCall} from'react-icons/bi';
import style from './ContactQR.module.scss';




const SocialMediaQr = () => {
  return (
 
   <div className={style.businessCard}>
        <a href='tel:00469871260' target="_blank" alt='Call' ><BiPhoneCall/></a>
        <a href='mailto:mjd.taif@levantisk.com' target="_blank"><MdOutlineMailOutline/></a>
        <a href="https://www.linkedin.com/in/mjd-thif/"  target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/mjdthif" target='_blank' ><BsGithub/></a>
        <a href="https://www.codewars.com/users/mjdthif"  target='_blank'> <SiCodewars/></a>
        <a href="https://www.instagram.com/hammuarabi/"  target='_blank'> <BsInstagram/></a>
        <a href="https://www.pinterest.se/mjdreklam/_created/"  target='_blank'> <BsPinterest/></a>
        <a href="" target='_blank'> <BsSpotify/></a>
        <a href="https://twitter.com/DJohanberg" target='_blank'> <BsTwitter/></a>
  </div>

  


  )
}

export default SocialMediaQr;