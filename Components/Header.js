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
        <div className={style.headerContainer}>
          <ProfilePic></ProfilePic>
          <div className={style.headerText}>
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
                         <div className={style.QrcodeContainer}>
                              <Link href='/projectspages/resumePage' >
                                     <div>
                                       <Image 
                                        
                                        width="250px"
                                        height="250px"
                                        src={QrImage} alt={'QR CODE'}  className={style.qrImage}/>
                                      </div> 
                               </Link>
                          </div> 
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