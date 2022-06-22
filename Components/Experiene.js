import React from 'react';
// import uipath from '../../Assests/PNG/uipath.webp'
import {BsCheckSquare} from 'react-icons/bs';
import {FaPython, FaReact, FaJs, FaWordpress, FaNpm,FaNodeJs, FaHtml5, FaMobile, FaFigma, FaBootstrap,FaSass, } from 'react-icons/fa';
import {DiGit,DiIllustrator, DiMysql, DiPhp, DiCss3, DiJqueryUiLogo , } from 'react-icons/di';
import {SiRedux, SiAbletonlive, SiNextdotjs, SiExpo, SiXcode, SiUbuntu, SiAmazonaws,SiStyledcomponents, SiKalilinux, SiTailwindcss,SiPostman, SiMongodb, SiGnubash,SiVisualstudio, SiAdobephotoshop, SiTypescript} from 'react-icons/si';

import style from '../styles/experience.module.scss';



const Experience = () => {
  return (
        <section id='experience'>
          <div className={style.container}>
            <div className={style.exp_box}>
             <div className={style.exp_container}>
      <div className={style.column1}> 
            <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaPython className={style.IconCheck}/>
                          <div>
                            <h5>Python</h5>
                          </div>
                      </article>
              </div>
              <div className={style.exp_content}>
                      <article className={style.exp_details}>
              
                            <FaMobile className={style.IconCheck}/>
                            <h5> Native </h5>
                           
                         
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <FaNpm className={style.IconCheck}/>
                          <div>
                          <h5>Npm</h5>
                       
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiStyledcomponents className={style.IconCheck}/>
                          <div>
                          <h5>Styled</h5>
                     
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiAdobephotoshop className={style.IconCheck}/>
                          <div>
                          <h5>photoshop</h5>
                       
                          </div>
                      </article>
                    </div>
                  <div className={style.exp_content}>
                      <article className={style.exp_details}>
                      <div><span className={style.rpa}>RPA <span className={style.uipath}>UiPath</span></span></div>
                      </article>
                    </div>


                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <DiJqueryUiLogo className={style.IconCheck}/>
                          <div>
                          <h5>JQuery</h5>
                          </div>
                      </article>
                    </div>       
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <DiIllustrator className={style.IconCheck}/>
                          <div>
                          <h5>Illustrator</h5>
                    
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaReact className={style.IconCheck}/>
                          <div>
                            <h5>React</h5>
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <SiRedux className={style.IconCheck}/>
                          <div>
                          <h5>Redux</h5>
                  
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiVisualstudio className={style.IconCheck}/>
                          <div>
                          <h5>V.S</h5>
                   
                          </div>
                      </article>
                    </div>

                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaJs className={style.IconCheck}/>
                          <div>
                          <h5>JS</h5>
                      
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiNextdotjs className={style.IconCheck}/>
                          <div>
                          <h5>Next.JS</h5>
                      
                          </div>
                      </article>
                    </div>
              
                  <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <DiMysql className={style.IconCheck}/>
                          <div>
                          <h5>MySQL</h5>
                     
                          </div>
                      </article>
                    </div>  
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiUbuntu className={style.IconCheck}/>
                          <div>
                          <h5> Ubuntu </h5>
                 
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <SiAmazonaws className={style.IconCheck}/>
                          <div>
                          <h5>AWS</h5>
                        
                          </div>
                      </article>
                    </div>
                  
             
              
            
        </div>
        <div className={style.column2}> 
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <DiGit className={style.IconCheck}/>
                          <div>
                          <h5>Git</h5>
                
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiAbletonlive className={style.IconCheck}/>
                          <div>
                          <h5>Abelton</h5>
                       
                          </div>
                      </article>
                    </div>
                  <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaNodeJs className={style.IconCheck}/>
                          <div>
                          <h5>Node.js</h5>
                     
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <DiPhp className={style.IconCheck}/>
                          <div>
                          <h5>Php</h5>
                   
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <FaSass className={style.IconCheck}/>
                          <div>
                          <h5>Sass</h5>
                        
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <SiExpo className={style.IconCheck}/>
                          <div>
                          <h5>Expo</h5>
                        
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <DiCss3 className={style.IconCheck}/>
                          <div>
                          <h5>CSS</h5>
                       
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaWordpress className={style.IconCheck}/>
                          <div>
                          <h5>WP</h5>
                     
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaFigma className={style.IconCheck}/>
                          <div>
                          <h5>Figma</h5>
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                          <SiPostman className={style.IconCheck}/>
                          <div>
                          <h5>Postman</h5>
                        
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <FaWordpress className={style.IconCheck}/>
                          <div>
                          <h5>WP</h5>
                     
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiTypescript className={style.IconCheck}/>
                          <div>
                          <h5>TypeScript</h5>
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiMongodb className={style.IconCheck}/>
                          <div>
                          <h5>Mongodb</h5>
                          </div>
                      </article>
                    </div>
                    <div className={style.exp_content}>
                      <article className={style.exp_details}>
                            <SiKalilinux className={style.IconCheck}/>
                          <div>
                          <h5>Kalilinux</h5>
                          </div>
                      </article>
                    </div>
        </div>

      </div>
               
            </div>
     

                </div>
        </section>
  )
}

export default Experience ;