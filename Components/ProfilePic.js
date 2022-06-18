import React, {useState} from 'react';
import Image from 'next/image';
import style from '../styles/profilePic.module.scss';
import ProfileImage from '../public/Assests/webP/me2.webP'


const ProfilePic  = () => {
  return (
    <div className={style.picContainer}>       
        {/* <Image 
        className={style.myImg}
        src={ProfileImage}  
        alt="Mjd Profile Picture Berlin"
        width="450px"
        height="400px"
        /> */}
    </div>
  )
}
export default ProfilePic;