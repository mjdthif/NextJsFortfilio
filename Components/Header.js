import Link from 'next/link';
import style from  '../styles/header.module.scss';
import ProfilePic from '../Components/ProfilePic'


// import Cv from ;
// import Pic from '../Pic/pic';
// import QrContact from '../ContacQR/index';
// import MjQrCode from '../../Assests/PNG/MjQrCode.png'
// import { Link as LinkR } from 'react-router-dom';

// import Signa  from '../../Assests/PNG/Signa.svg'
const Header = () => {
  return (
    <header id='home'>   
        <div className={style.header__container}>
          <ProfilePic></ProfilePic>
      
          <div className='header__text'>
            <div className='squre'>
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
                  <div  className='squre'>
               
                      {/* <Link href='/CvPage' >
                                <div className='QrCode'>
                                <img src={MjQrCode} alt={'QR CODE'} />
                                </div>
                                
                      </Link> */}
                              {/* <Cv/> */}
                              {/* <img src={Signa} className='signa'/> */}
                  </div>
                     
               </div>  
            </div>
        </div>  
     </header>
  )
}
export default Header;