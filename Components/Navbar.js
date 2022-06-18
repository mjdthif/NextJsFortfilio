import React, {useState, useEffect} from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { BrowserRouter as router } from "react-router-dom";
import { IconContext } from 'react-icons/lib';
import { FcGraduationCap } from "react-icons/fc";
import { GoOrganization } from "react-icons/go";
import {BiHomeAlt} from 'react-icons/bi';
import {BsToggles} from 'react-icons/bs'
import { FaUniversity  } from "react-icons/fa";
import {AiOutlineExperiment, AiFillContacts} from 'react-icons/ai';




import {
    NavBar,
    NavLinks,  
    NavToggle, 
    NavContainer, 
    SociaToggel, 
 
}from './NbElements';






const StyNav = ({toggle, isOpen,showSocialNav, showSocial}) => {

  return (
    <>
    <NavBar isOpen={isOpen}>
      
                  <NavToggle to='' isOpen={isOpen} onClick={toggle} id='navToggle'><BsToggles/></NavToggle>

                                <NavLinks to='home' 
                                smooth={true}  spy={true}
                                exact ={'true'}
                                >    
                                <BiHomeAlt/>      
                                </NavLinks>

                                <NavLinks to='portfilio' 
                                smooth={true}  spy={true}
                                exact ={'true'} 
                                >    
                                <FaUniversity/>      
                                </NavLinks>

                                <NavLinks to='experience' 
                                smooth={true}   spy={true}
                                exact ={'true'} 
                                >    
                                <AiOutlineExperiment/>      
                                </NavLinks>

                                <NavLinks to='contact' 
                                smooth={true}  spy={true}
                                exact ={'true'}
                                >    
                                <AiFillContacts/>      
                                </NavLinks>

                      <SociaToggel 
                      smooth={true}  spy={true}
                      exact ={'true'} 
                      onClick={showSocialNav}
                      showSocial={showSocial}
                      >    
                      <GoOrganization/>      
                      </SociaToggel>
      
    </NavBar>
    
    </>
  )
}

export default StyNav;

