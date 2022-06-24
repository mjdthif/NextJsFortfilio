

import Image from 'next/image';
import Link from 'next/link';
import ProjectNav from '../Projects/ProjectNav/ProjectNav' ;
import meBirlingym from "../../public/Assests/webP/meBirlingym.webp";
import SocialMediaQr from './SocialMediaQr';
import style from './ContactQR.module.scss';


const QrContact = () => {
  return (
      <div className='container'>
              <section className={style.businessCard}>
                    <article className={style.profile}>
            <Link href="/">
                  <a> 
                    <Image 
                      width='100px'
                      height='100px'
                      src={meBirlingym}
                    />
                </a>
           </Link>
         
                      <div>
                        <h1>Mjd Thif</h1>
                        <p>Web Develover</p>
                      </div>
                    </article>
                  <SocialMediaQr></SocialMediaQr>
                <ProjectNav></ProjectNav>
        </section>
    </div>
  


  )
}

export default QrContact;