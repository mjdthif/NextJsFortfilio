
// elements importing
import Link from 'next/link';
import Image from 'next/image';


// picture importing 
import mySlide from '../../public/Assests/webP/mySlide.webp';
import bagStore from '../../public/Assests/webP/bagStore.webp';
import Accordion from '../../public/Assests/webP/accordion.webp';
import profilePic from '../../public/Assests/webP/myPort.webp';



// style importing
import style from  './portfilio.module.scss';



const ViewmoreSetions = () => {
  return (


<section className={style.viewMoreContainer}>
    <div className={style.portfilioContainer}>
          <div className={style.aboutContent}>
                <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Store</h2>
                    <a href ='https://asplundsveskor.vercel.app/' target="_blank" >
                    <a>
                    <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={bagStore}/>
                    </a>
                    </a >
                  </div>
                </div>
          </div>
 
 

          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Porfiles</h2>
                     <Link href ='/projectspages/profilesPage'>
                      <a>
                      <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={profilePic}/>
                      </a>
                   
                    </Link>
                  </div>
             </div>   
          </div>



          <div className={style.aboutContent}>
              <div className={style.aboutCards}>
                  <div className={style.aboutCard}>
                     <h2>Accordion</h2>
                     <Link href ='/projectspages/accordionPage'>
                    <a>  
                       <Image
                         width="700px"
                         height="500px" 
                         alt="Picture of slide review"
                         src={Accordion}/>
                    </a>
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