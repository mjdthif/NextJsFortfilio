import React, { useState } from 'react';
import people from './data';
import '../project.scss';
import ProjectNav from '../ProjectNav/ProjectNav';
import  { AiOutlineArrowRight, AiOutlineArrowLeft }  from 'react-icons/ai';
import {FaQuoteRight} from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  // const  [autoCounter, setAutoCounter ]= useState(false);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
 
 
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {

 
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

//  (()=>{
//   if(autoCounter) {
//     return ;
//   }else{
//     setInterval(nextPerson, 3000)
//   }

//   })();


  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <AiOutlineArrowLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <AiOutlineArrowRight />
        </button>
 
      </div>
      <ProjectNav></ProjectNav>
    </article>
  );
};

export default Review;
