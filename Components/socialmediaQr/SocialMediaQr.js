
import {BsGithub, BsLinkedin, BsSpotify, BsInstagram,BsTwitter, BsPinterest, BsGlobe2} from 'react-icons/bs';
import{FaDownload} from 'react-icons/fa';
import {SiCodewars} from 'react-icons/si';
import{MdOutlineMailOutline} from 'react-icons/md';
import{BiPhoneCall} from'react-icons/bi';
// import MyENGCV from '../../public/Assests/cvFiles/ENGCV.pdf'

import style from './ContactQR.module.scss';




const SocialMediaQr = () => {
  return (
 
   <div className={style.businessCard}>
        <a href='tel:0046739871260' target="_blank" className={style.cardLinks} alt='Mobile'><BiPhoneCall/><h1>Mobile</h1></a>
        <a href='mailto:mjd.thif@icloud.com' target="_blank" className={style.cardLinks} alt='Email'><MdOutlineMailOutline/><h1>Email</h1></a>
        <a href="https://www.linkedin.com/in/mjd-thif/"  target='_blank' className={style.cardLinks} alt='LinkedIn'><BsLinkedin/><h1>LinkedIn</h1></a>
        <a href="https://www.mjdwebstudio.com/"  target='_blank' className={style.cardLinks} alt='Portfilio'> <BsGlobe2/><h1>Portfilio</h1></a>
        <a href="https://www.codewars.com/users/mjdthif"  target='_blank' className={style.cardLinks} alt='Code Wars'> <SiCodewars/><h1>Code Wars</h1></a>
        <a href="https://www.instagram.com/hammuarabi/"  target='_blank' className={style.cardLinks} alt='Instagram'> <BsInstagram/><h1>Instagram</h1></a>
        {/* <a  href={MyENGCV} download className={style.cardLinks} alt='Call'> <FaDownload/><h1> Download CV</h1></a> */}
        <a href="https://www.pinterest.se/mjdreklam/_created/"  target='_blank' className={style.cardLinks} alt='Pinterest'> <BsPinterest/> <h1>Pinterest</h1></a>
        <a href="https://github.com/mjdthif" target='_blank' className={style.cardLinks} alt='Github'><BsGithub/><h1>Github</h1></a>
        <a href="" target='_blank' className={style.cardLinks} alt='Spotify'> <BsSpotify/><h1>Spotify</h1></a>
        <a href="https://twitter.com/DJohanberg" target='_blank' className={style.cardLinks} alt='Twitter'> <BsTwitter/><h1>Twitter</h1></a>
  </div>

  )
}

export default SocialMediaQr;