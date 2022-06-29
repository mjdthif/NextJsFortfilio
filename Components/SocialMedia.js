
import {BsGithub, BsLinkedin, BsSpotify, BsInstagram,BsTwitter, BsPinterest} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import{MdOutlineMailOutline} from 'react-icons/md';
import{BiPhoneCall} from'react-icons/bi';
import sociaStyle from '../styles/socialMedia.module.scss';
import {showSocial,hideSocial} from '../styles/socialMedia.module.scss';



const SocialMedia = ({openSocial}) => {


  return (
    <div className={openSocial ? showSocial : hideSocial } >
      <div className={sociaStyle.socialContainer}>
        <a href='tel:00469871260' target="_blank" rel='noreferrer'  alt='Call' ><BiPhoneCall/></a>
        <a href='mailto:mjd.thif@icloud.com' target="_blank" rel='noreferrer'><MdOutlineMailOutline/></a>
        <a href="https://www.linkedin.com/in/mjd-thif/"  target='_blank' rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/mjdthif" target='_blank' rel='noreferrer' ><BsGithub/></a>
        <a href="https://www.codewars.com/users/mjdthif"  target='_blank' rel='noreferrer'> <SiCodewars/></a>
        <a href="https://www.instagram.com/hammuarabi/"  target='_blank' rel='noreferrer'> <BsInstagram/></a>
        <a href="https://www.pinterest.se/mjdreklam/_created/"  target='_blank' rel='noreferrer'> <BsPinterest/></a>
        <a href="" target='_blank'> <BsSpotify/></a>
        {/* <a href="https://twitter.com/DJohanberg" target='_blank' rel='noreferrer'> <BsTwitter/></a> */}
      </div>
      
 
    </div>
  )
}

export default SocialMedia;