
import{useState, useEffect} from 'react';
import {Link as LinkR} from 'react-scroll';
import Link from 'next/link';
import { GoOrganization } from "react-icons/go";
import {BiHomeAlt} from 'react-icons/bi';
import {BsToggles} from 'react-icons/bs'
import { FaUniversity  } from "react-icons/fa";
import {AiOutlineExperiment, AiFillContacts} from 'react-icons/ai';

import style from './navbar.module.scss'
import {
      navToggleIsOpen, 

}from './navbar.module.scss';



const StyNav = ({toggle, isOpen , showSocialNav, showSocial}) => {



      const reversScrolling = () =>{
            if (window.scrollY >= 0 && isOpen){
                  toggle()
            
    
              // setShowSocial(false)           
              // console.log('the is the reverse scrolling')
              // setToggleSocial(false)
              // console.log(showSocial)
            }
          };
          
          useEffect(()=>{
            window.addEventListener('scroll', reversScrolling)
      }, [isOpen])
          
  return (
      
    <>

    <nav className={ isOpen ? navToggleIsOpen : style.navBar}>
        
                  <span className={style.navToogle} onClick={toggle}><BsToggles/></span>
                                   
                  

                              <LinkR  to='home'
                                    className={style.navLinks}
                                    spy={true} smooth={true} offset={50} duration={1000}
                                    activeClass={style.active}>    
                                        
                                  <div className={style.tooltip}>
                                    <BiHomeAlt/> 
                                    <span className={style.tooltiptext}>{"Home"}</span>
                                  </div>    
                              </LinkR >
                                

                                <LinkR  to='portfilio'
                                    className={style.navLinks}
                                    spy={true} smooth={true} offset={50} duration={1000}
                                    activeClass={style.active}>    
                                  
                                    <div className={style.tooltip}>
                                    <FaUniversity/>     
                                    <span className={style.tooltiptext}>{"Portfilio"}</span>
                                  </div>    
                              </LinkR >
                                
                              <LinkR  to='experience'
                                className={style.navLinks}
                                spy={true} smooth={true} offset={50} duration={1000}
                                activeClass={style.active}>    
                       
                                  
                                  <div className={style.tooltip}>
                                  <AiOutlineExperiment/>       
                                    <span className={style.tooltiptext}>{"Experience"}</span>
                                  </div>  
                              </LinkR >

                              <LinkR  to='contact'
                                className={style.navLinks}
                                spy={true} smooth={true} offset={50} duration={1000}
                                activeClass={style.active}>    
                    
                                  <div className={style.tooltip}>
                                  <AiFillContacts/>      
                                    <span className={style.tooltiptext}>{"Contact"}</span>
                                  </div> 
                              </LinkR >
                              

                             

                            
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

