

import ProjectNav from '../../Projects/ProjectNav/ProjectNav';
import meBirlingym from "../../Assests/PNG/meBirlingym";
import QrSocialMedia from './QrCardSocialMedia/index';


const QrContact = () => {
  return (
      <div className='container'>
              <section className='businessCard'>
                    <article className='profile' >
                     <a href='/'> <img src={meBirlingym}/></a>
                      <div>
                        <h2>Mjd Thif</h2>
                        <p>Web Develover</p>
                      </div>
                    </article>
                  <QrSocialMedia></QrSocialMedia>
                  <ProjectNav></ProjectNav>
        </section>
    </div>
  


  )
}

export default QrContact;