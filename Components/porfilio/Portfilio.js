
// elements importing 
import Image from 'next/image';
import Link from 'next/link';

// pictures importing 
import MdaPic from '../../public/Assests/webP/TobiasPic.webp'
import QrPagePic from '../../public/Assests/webP/QrPage.webp'
import  saraportPic from '../../public/Assests/webP/saraPortfilio.webp'
import  mySlide from '../../public/Assests/webP/mySlide.webp'



// compoenents importing
import ViewmoreSetions from './ViewmoreSec';
import Viewmore from '../viewMorebutton/Viewmore'


// style importing
import style from './portfilio.module.scss';

const Portfilio = () => {
  return (
    <>
    <section id='portfilio' className={style.container}>
        <div  className={style.portfilioContainer}>

          <div className={style.aboutContent}>
                <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Review</h2>
                    <Link href='/projectspages/slideReviewPage'>
                          <a>
                            <Image
                              width="700px"
                              height="500px" 
                              alt="Picture of slide review"
                              src={mySlide}/>
                          </a>
                    </Link>
                
                  </div>
                </div>
          </div>
          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Illustrative Sensation</h2>
                     <a href='https://saraportfilio.com/' target = "_blank">  
                     <Image
                       width="700px"
                       height="500px" 
                       alt="Picture of QR illustrative"
                        src={saraportPic}/>
                     </a>
                  </div>
             </div>   
          </div>
       
          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                    <h2>QR Code Generator</h2>
                    <Link href='/projectspages/qrGeneratorPage'>
                          <a>
                              <Image
                                width="700px"
                                height="500px" 
                                alt="Picture of QR generator"
                                src={QrPagePic}/>
                          </a>
                    </Link>
              
                  </div>
             </div>   
          </div>
  
    
          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>M.D.A </h2>

                  <a href='http://myexprental.online/'  target = "_blank">
                    <Image    
                    width="700px"
                    height="500px"  
                    alt="Picture Mda online"
                    src={MdaPic}/>
                  </a>
                  </div>
             </div>   
          </div>
        </div>
    </section>
    <Viewmore viewMoreSec = {<ViewmoreSetions/>}/>

    </>
      
  )
}

export default Portfilio;
