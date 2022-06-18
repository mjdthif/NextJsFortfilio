import React from 'react';
import './portfilio.scss';

import { Link as LinkR } from 'react-router-dom';
import BirthdayPic from '../../Assests/PNG/myPort.webp';
import mySlide from '../../Assests/PNG/mySlide.webp';
import Accordion from '../../Assests/PNG/accordion.webp';
import MdaPic from '../../Assests/PNG/TobiasPic.webp';



const ViewmoreSetions = () => {
  return (


<section className='viewMoreContainer'>
    <div className='portfilioContainer'>
          <div className="about__content">
                <div className="about__cards">
                  <div className="about-card">
                     <h2>Review</h2>
                    <LinkR to ='/SlideReview'>
                       <img src={mySlide} alt={'myPic'} />
                    </LinkR>
                  </div>
                </div>
          </div>
 
 

          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                     <h2>Porfile Project</h2>
                    <LinkR to='/BirthdayPage'>
                       <img src={BirthdayPic}/>
                    </LinkR>
                  </div>
             </div>   
          </div>



          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                     <h2>Accordion</h2>
                    <LinkR to='/AccordionPage'>
                       <img  src={Accordion}/>
                    </LinkR>
                  </div>
             </div>   
          </div>
      


          <div className="about__content">
              <div className="about__cards">
                  <div className="about-card">
                     <h2>M.D.A Project.</h2>
                    <a href='http://myexprental.online/' target='_blank'>
                    <img
                    src={MdaPic} 
                    />
                    </a>
                  </div>
             </div>   
          </div>
      
    </div>
    </section>
  )
}
export default ViewmoreSetions;