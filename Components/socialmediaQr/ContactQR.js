

import ProjectNav from '../Projects/ProjectNav/ProjectNav' ;
import meBirlingym from "../../Assests/webP/meBirlingym.webp";
import SocialMediaQr from './SocialMediaQr';
import style from './ContactQR.module.scss';

const QrContact = () => {
  return (
      <div className='container'>
              <section className={style.businessCard}>
                    <article className={style.profile}>
                     <a href='/'> <img src={meBirlingym}/></a>
                      <div>
                        <h2>Mjd Thif</h2>
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