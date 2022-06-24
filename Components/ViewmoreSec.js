

// import Link from 'next/link';
// import profilePic from '../public/Assests/webP/myPort.webp';
// import mySlide from '../public/Assests/webP/mySlide.webp';
// import Accordion from '../public/Assests/webP/accordion.webp';
// import MdaPic from '../public/Assests/webP/TobiasPic.webp';

import Image from 'next/image';
import Link from 'next/link';
import MdaPic from '../public/Assests/webP/TobiasPic.webp'
import QrPagePic from '../public/Assests/webP/QrPage.webp'
import  saraportPic from '../public/Assests/webP/saraportfilio.webp'
import  mySlide from '../public/Assests/webP/mySlide.webp'
import style from  '../styles/portfilio.module.scss';



const ViewmoreSetions = () => {
  return (


<section className={style.viewMoreContainer}>
    <div className={style.portfilioContainer}>
          <div className={style.aboutContent}>
                <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Review</h2>
                    <Link href ='/SlideReview'>
                    <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={mySlide}/>
                    </Link >
                  </div>
                </div>
          </div>
 
 

          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Porfile Project</h2>
                     <Link href ='/projectspages/slideReviewPage'>
                       <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={mySlide}/>
                    </Link>
                  </div>
             </div>   
          </div>



          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Accordion</h2>
                     <Link href ='/projectspages/slideReviewPage'>
                       <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={mySlide}/>
                    </Link>
                  </div>
             </div>   
          </div>

          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>M.D.A Project.</h2>
                    <a href='http://myexprental.online/' target='_blank'>
                    <Image
                         width="700px"
                         height="500px" 
                         alt="Picture MDA bauhouse"
                         src={mySlide}
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