import React from 'react';
import saraPortfilio from '../../Assests/PNG/saraPortfilio.webp';
import qrPage from '../../Assests/PNG/QrPage.webp';
import { Link as LinkR } from 'react-router-dom';
import mySlide from '../../Assests/PNG/mySlide.webp';
import Viewmore from '../ViewMore/Viewmore';
import QrPage from '../../Pages/QrGenerator';
import MdaPic from '../../Assests/PNG/TobiasPic.webp';
import './portfilio.scss';

const Portfilio = () => {
  return (
    <>
    <section id='portfilio' className='container'>
        <div  className="portfilioContainer">

          <div className="about__content">
                <div className="about__cards">
                  <div className="about-card">
                     <h2>Review</h2>
                    <LinkR to ='/SlideReviewPage'>
                       <img src={mySlide} alt={'myPic'} />
                    </LinkR>
                  </div>
                </div>
          </div>
          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                     <h2>Illustrative Sensation</h2>
                     <a href='https://saraportfilio.com/' target='_blank'>  
                     <img  src={saraPortfilio}/>
                     </a>
                  </div>
             </div>   
          </div>
          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                    <h2>QR Code Generator</h2>
                     
                     <LinkR to ='/QrGenerator'>
                         <img  src={qrPage}/>
                    </LinkR>
                  </div>
             </div>   
          </div>
          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                     <h2>M.D.A </h2>
                    <a href='http://myexprental.online/' target='_blank'>
                    <img  src={MdaPic}/>
                    </a>
                  </div>
             </div>   
          </div>
        </div>
    </section>
    <Viewmore/>
    </>
      
  )
}
export default Portfilio;