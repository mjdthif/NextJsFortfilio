import{ useState } from 'react';
import Image from 'next/image';
import people from './data';
import ProjectNav from '../ProjectNav/ProjectNav';
import  { AiOutlineArrowRight, AiOutlineArrowLeft }  from 'react-icons/ai';
import {FaQuoteRight} from 'react-icons/fa';
import style from '../../../styles/project.module.scss';



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
    <article className={style.review}>
      <div className={style.imgContainer}>
        <Image 
        width="75px"
        height="75px"  
        src={image}
         alt={name} 
         className={style.personImg}/>
        <span className={style.quoteIcon}>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className={style.author}>{name}</h4>
      <p className={style.job}>{job}</p>
      <p className={style.info}>{text}</p>
      <div className={style.buttonContainer}>
        <button className={style.prevBtn} onClick={prevPerson}>
          <AiOutlineArrowLeft />
        </button>
        <button className={style.nextBtn} onClick={nextPerson}>
          <AiOutlineArrowRight />
        </button>
 
      </div>
      <ProjectNav hrefPosition={"/#portfilio"}></ProjectNav>
    </article>
  );
};

export default Review;
