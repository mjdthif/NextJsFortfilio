import Link from 'next/link';
import CvButtons from  '../Components/Cvbuttons';
import ProfilePic from '../Components/ProfilePic'
import QrImage from '../public/Assests/webP/MjQrCode.png'
import Signa from '../public/Assests/webP/Signa.svg'
import Image from 'next/image';

import style from  '../styles/header.module.scss';


const Header = () => {
  return (
    <header id='home'>   
        <div className={style.header__container}>
          <ProfilePic></ProfilePic>
      
          <div className={style.header__text}>
            <div className={style.squre}>
                  <h2> Hi, I'm Mjd_Thif.</h2>
                        <h4>
                         <br/>
                          Develover, tech enthusiast, junior music producer and UX lover.<br/>
                          I'm passionate  Web Develover aiming at becoming
                        </h4>
                                  <ul>
                                    <li>-FULL-STACK DevelOver</li>
                                    <li>-AWS Cloud Engineer</li>
                                    <li>-Entreprenur down the road.</li>
                                  </ul>
                  <div  className={style.squre}>
               
                            <Link href='/CvPage' >
                                        <div className='QrCode'>
                                        <Image 
                                        width="250px"
                                        height="250px"
                                        src={QrImage} alt={'QR CODE'} />
                                        </div> 
                            </Link>
                                        <CvButtons/>
                                        <Image 
                                          width="80px"
                                          height="80px"
                                        src={Signa} className={style.signa}/>
                  </div>
                     
               </div>  
            </div>
        </div>  
     </header>
  )
}
export default Header;