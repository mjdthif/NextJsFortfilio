
import React, { useState } from 'react';
import {BsGithub, BsLinkedin, BsSpotify, BsInstagram,BsTwitter, BsPinterest} from 'react-icons/bs';
import {SiCodewars} from 'react-icons/si';
import{MdOutlineMailOutline} from 'react-icons/md';
import {BsWhatsapp,} from 'react-icons/bs';
import{BiPhoneCall} from'react-icons/bi';
import './ContactQR.scss';
import ProjectNav from '../../Projects/ProjectNav/ProjectNav';
import me2 from "../../Assests/PNG/me2.webp";
import QrSocialMedia from './QrCardSocialMedia/index';


const QrContact = () => {
  return (
      <div className='container'>
              <section className='businessCard'>
                    <article className='profile' >
                     <a href='/'> <img src={me2}/></a>
                      <div>
                        <h2>Mjd Thif</h2>
                        <p>Web Develover</p>
                      </div>
                    </article>
                  <QrSocialMedia></QrSocialMedia>
                  <ProjectNav></ProjectNav>
        </section>
    </div>
  


  )
}

export default QrContact;