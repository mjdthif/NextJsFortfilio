
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../Components/Header';
import StyNav from  '../Components/Navbar'
import Portfilio from '../Components/Portfilio';
import Experience from '../Components/Experiene';
import Contact from '../Components/Contact/contact'



// import React, {useState,useEffect, forwardRef,useRef,createRef} from 'react';
// import { BrowserRouter as router } from "react-router-dom";

// import StyNav from '../Components/NavbarStyled/index';
// import Contact from '../Components/Contact/contact';
// import SocialMedia from '../Components/Socialmedia/index';
// import Footer from '../Components/Footer/footer.js';


export default function Home() {

  const [ isOpen , setIsOpen] = useState(false)
  const [ navSocial, setNavSocial]  = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  };
 
const toggleSocialNav  =  ()=>{
  setNavSocial(!navSocial)
}

const reversScrolling = () =>{
  if (window.scrollY >= 0){
    setNavSocial(false)
   
  }
};
useEffect(()=>{
  window.addEventListener('scroll', reversScrolling)
}, [])






  return (
    <>
      <Header></Header> 
      <StyNav  toggle={toggle} isOpen={isOpen} setNavSocial={setNavSocial} navSocial={navSocial} toggleSocialNav={toggleSocialNav}></StyNav> 
      <Portfilio></Portfilio>
      <Experience></Experience>
      <Contact>j</Contact>

      {/* <SocialMedia showSocial={showSocial}></SocialMedia>
     
      <Contact></Contact>
      <Footer></Footer> */}
    </>
  )
}
