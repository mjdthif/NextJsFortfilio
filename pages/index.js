
import {useState, useEffect} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../Components/Header';
import StyNav from  '../Components/Navbar'
import Portfilio from '../Components/Portfilio';
import Experience from '../Components/Experiene';
import Contact from '../Components/Contact/contact';
import Footer from '../Components/footer/Footer';





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

      <Head>
        <title>Portfilio | Main</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"  key="title" />
      </Head>
      <Header></Header> 
      <StyNav  toggle={toggle} isOpen={isOpen} setNavSocial={setNavSocial} navSocial={navSocial} toggleSocialNav={toggleSocialNav}></StyNav> 
      <Portfilio></Portfilio>
      <Experience></Experience>
      <Contact></Contact>
      <Footer></Footer>
   
    </>
  )
}
