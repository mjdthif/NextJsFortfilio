// import {LinkR as Link }from 'react-scroll';
import Link from 'next/link';
import { GoOrganization } from "react-icons/go";
import {BiHomeAlt} from 'react-icons/bi';
import {BsToggles} from 'react-icons/bs'
import { FaUniversity  } from "react-icons/fa";
import {AiOutlineExperiment, AiFillContacts} from 'react-icons/ai';

import style from '../styles/navbar.module.scss'




const StyNav = ({toggle, isOpen , showSocialNav, showSocial}) => {

  return (
    <>
    <nav className={style.navBar}>
                  <span className={style.navToogle} onClick={toggle} id='navToggle'><BsToggles/></span>

       
                                <Link href={"#home"} className={style.navLinks}>
                                    <a className={style.navLinks}>    
                                    <BiHomeAlt/>      
                                    </a>
                                </Link > 
                                <Link href={"#portfilio"}>  
                                      <a  className={style.navLinks}>    
                                      <FaUniversity/>      
                                      </a>
                                </Link>
                                <Link href={"#experience"}>    
                                      <a href='experience'  className={style.navLinks}>    
                                      <AiOutlineExperiment/>      
                                      </a>
                                </Link >
                                <Link href={"#contact"}>
                                      <a className={style.navLinks}>    
                                      <AiFillContacts/>      
                                      </a>
                                </Link>
                              

                             

                            
                      <span 
                      className={style.sociaToggel}
                      onClick={showSocialNav}
                      >    
                      <GoOrganization/>      
                      </span>
      
    </nav>
    
    </>
  )
}

export default StyNav;

