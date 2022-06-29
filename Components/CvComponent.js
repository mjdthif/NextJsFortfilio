import Image from 'next/image.js';
import ProjectNav from './Projects/ProjectNav/ProjectNav.js';
import meBirlingym from "../public/Assests/webP/meBirlingym.webp";
import SocialMediaQr from './socialmediaQr/SocialMediaQr.js';
import Experience from '../Components/Experiene.js';
import style from '../styles/cvCompos.module.scss';








function CvComponent() {

  return(
        <div className={style.pageContainer}>
            <div className={style.cvContainer}>
                  <div className={style.col1}>
                  <ProjectNav/>
                      <div className={style.person}>
                        <Image width={'100px'} height={'100px'} alt="Resume piture of Mjd Thif" className={style.cvIamge} src={meBirlingym}/>
                            <h2>Mjd Thif</h2>
                      </div>

                        <div>   
                            <SocialMediaQr></SocialMediaQr>
                        </div>
                      <hr/>



                      <div className={style.lanContainer}>
                                <div className={style.languges}>

                                      <div className={style.lanText}>
                                            <h2>English</h2>  
                                      </div>

                                      <div className={style.dotContainer}>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>    
                                                <span className={style.dotEmpty}></span>    
                                      </div>
                        </div>
                                <div className={style.languges}>

                                      <div className={style.lanText}>
                                            <h2>Swedish</h2>  
                                      </div>

                                      <div className={style.dotContainer}>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>    
                                                <span className={style.dotEmpty}></span>    
                                      </div>
                        </div>
                                <div className={style.languges}>

                                      <div className={style.lanText}>
                                            <h2>Kurdish</h2>  
                                      </div>

                                      <div className={style.dotContainer}>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>    
                                                <span className={style.dotEmpty}></span>    
                                      </div>
                        </div>
                                <div className={style.languges}>

                                      <div className={style.lanText}>
                                            <h2>Arabic</h2>  
                                      </div>

                                      <div className={style.dotContainer}>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>    
                                                <span className={style.dotColored}></span>    
                                      </div>
                        </div>
                                <div className={style.languges}>

                                      <div className={style.lanText}>
                                            <h2>German</h2>  
                                      </div>

                                      <div className={style.dotContainer}>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotColored}></span>
                                                <span className={style.dotEmpty}></span>
                                                <span className={style.dotEmpty}></span>    
                                                <span className={style.dotEmpty}></span>    
                                      </div>
                        </div>


                    </div>


                      <div className={style.extracurri}>
                          <h2> Extracurricular</h2>
                          <hr/>
                        <div>
                    
                          <h2>Psychology</h2>
                          <h2>Sustainable Energy</h2>
                          <h2>Badminton</h2>
                          <h2>Audio Books</h2>
                          <h2>Email Markting</h2>
                          <h2>Team Work</h2>
                          <h2>Collaboration</h2>
                          <h2>BlockChain</h2>
                          <h2>Web3</h2>
                          <h2>Ubuntu</h2>
                          <h2>Qunatum Computer</h2>
                          <h2>Unix</h2>
                          <h2>Music</h2>
                          <h2>Abletone</h2>
                          <h2>UX Desgin</h2>
                          <h2>mobile dev</h2>
                          <h2>Rowing</h2>
                          <h2>Gym</h2>
                          <h2>Philosophy</h2>

                       </div>
                          
                    </div>
                    
                    
                  </div>
                  <div className={style.col2}>
                      <article className={style.mainHeader}>
                      _ Web develOver.<br/>
Highly focused and meticulous Intermediate Level JS Developer with 5 years in the industry. 
Proficient with React and all its dependencies. I use React and Angular to Create data visualization tools and integrated designs. 
I have more than 10 years of experience in the IT industry, with high technical generalist competence experience. There is also a strong desire to learn  more about the customer's operations and development in upcoming technologies. 
Hopeing  to join your team to leverage a sweet experience with JS and all its related technologies on both Front and Back End development. 
To obtain a position as a Web Developer where I believe I can expand my knowledge and gain new skills and experiences.
                      </article>



                      <div className={style.sectionTitle}>
                          <h2>EDUCATION</h2>
                          <hr/>
                      </div>

                    

                    <div className={style.mainPart}>
                    <div className={style.vl}></div>
                            <div>
                                  <article>
                                      <h2>IT Support Technician at Lexicon AB.</h2>  
                            Microsoft Azure, Hybrid solution, Cloud Solution, RPA and AI. Microsoft and Dynamics 365 (Business and enterprise)
                                      <ul>
                                        <li>  -RPA(Ropotic Automation Process) on UIPath, AotumationAnyWhere.</li>
                                        <li> -PowerShell and Azure PowerShell</li>
                                        <li>  -PowerApps</li>
                                        <li> -Network Administration</li>
                                        <li> -VM on-premises and cloud(Citrix, HyperV, VirtualBox)</li>
                                        <li> -Microsoft Azure Architect</li>
                                        <li> -ITIL</li>
                                      </ul>
                                  </article>
                                    
                                  <article>
                                      <h2>Interpretation training at TolkPedagogerna AB, Uppsala.</h2>  
                                      I have gained efficient knowledge of how to interpret in so many fields as the Swedish Social Insurance Agency, the Tax Office, the Employment Service, and the Municipality. 
                                      I  have a great sense of interpretation in various subject areas and contexts. It applies to consecutive interpretation at conferences, seminars, business meetings, workshops, company councils, public visits, and market research.                                  </article>
                                  <article>
                                      <h2>Aeronautics at Aleppo University-Syria.</h2>  
                                      "The education is not completed because of the war in my homeland Syria"
                                  </article>
                              </div>
                          </div>

                      <div className={style.sectionTitle}>
                          <h2>ONLINE COURSES</h2>
                          <hr/>
                      </div>

                    

                    <div className={style.mainPart}>
                    <div className={style.vl}></div>
                            <div>
                              
                                  <article>
                                      <h2>Fullstack Development Track Nono-degree at Udacity</h2>
                                      During the course I got pretty much acquainted with how the web and the internet works.
                                      We also learned about the DOM and how JS can preform DOM manipulation. 
                                  </article>
                                    
                                  <article>
                                      <h2> Data Analysis Track at Udacity</h2>
                                     I was lucky to get a free Nano-Degree in Data Analysis Program at Udacity. 
                                     In this courese, we went through Descriptive Statistics and learned SQL to preform data analysis.
                                  </article>
                                  <article>
                                      <h2>REACT  REDUX  NATIVE </h2>  
                                      I have mastered the necessary skills to develop with React. 
                                      I went on a project- based learning journey and I built declarative user interfaces (UI components) for web applications.
                                       During the course I made the state more predictable in components's applications with Redux, and also made the apps more efficient and robust using newer React features like hooks and the Jest testing library. 
                                       I also had the opportunity to develop mobile apps for iOS and Android devices using React Native along with Expo, Figma and Xcode emulator.
                                  </article>
                                  <article>
                                      <h2>NEXT JS</h2>
                                      Server side rendering with NEXT.JS is an interesting framwork to build and render UI components. In this course, I got introduced to Next.js concepts on top of my knowledge of React.
                                  </article>

                                  <article>
                                      <h2>Node.js</h2>
                                      In this course, I have gained the needed skills to talk to server(MongoDb) as well as fetching and posting data from an API.
                                       Simply put Node.js is in my toolkit along with its most popular framework Express. 
                                  </article>
                                  <article>
                                      <h2>Deno</h2>
                                      Lerning is in progress......
                                  </article>
                                  <article>
                                      <h2>JavaScript</h2>  
                                      Developed the key concepts and implemented on top of it a very solid knowledge of JS. Participated in a plenty of real-world projects.
                                      I can tell with confidence that JavaScript and OPP are in my toolkit. 
                                  </article>
                         
                                  <article>
                                      <h2>ECMAScript 6</h2>  
                                      ES6 has brought about a ton of changes to the JavaScript programming language. In this course, I explored those changes and learned about the latest features and improvements to the language including new keywords, arrow functions, the Class syntax, Promises, and so much more.
                                  </article>
                                  <article>
                                      <h2>Python programming at Udacity</h2>  
                                  In this this course, I familirized myself with the building blocks of Python.
                                  I leared data types and operators, build-in functions, type conversion, whitespace and style guidelines.  
                                  </article>
                                  <article>
                                      <h2>Git and Git-hub VCS.</h2>  
                                      Gained the competence to work collaboratively within a team, obtained the ability to push and pull files into a remote repository on git-hub.
                                    Created branches and forked others. Git and Git-hub is in my belt tool.
                                  </article>
                                  <article>
                                      <h2>Typography And layout.</h2>  
                                      Acquired the knowledge of how to make any text look professionally designed. Using the power of color, and creating a perfect layout were also big parts of the course's essentials.
                                     Figma was also inclued. 
                                  </article>
                                  <article>
                                      <h2>HTML CSS</h2>  
                                      In this tutorial all the aspects of HTML and CSS were covered.
                                  </article>
                                  <article>
                                      <h2>Ableton At PML Studio.</h2>  
                                      In this course,  I have seen a complete production process from the beginning, starting from nothing and going through all the important steps in the production process, from beginning to end.
                                      And I can tell that am pretty confident using Ableton Live to make music and also to sound design. 
                                  </article>
                              </div>
                          </div>


                      <div className={style.sectionTitle}>
                          <h2>WORK EXPERIENCE</h2>
                          <hr/>
                      </div>

                    <div className={style.mainPart}>
                    <div className={style.vl}/>
                              <div>
                                  <article>
                                      <h2>Freelance Web Developer.</h2>  
                                WordPress Customization, HTML5 UI And Animation, MVC Architecture, Object- oriented Programming, AJAX, PHP And JavaScript Frameworks, Content Management Systems, Web Design, MySQL/MongoDB Database. 
                                <ul>
                                    <li>- Handling all verbal and written communications between hosting companies, clients, and vendors.</li>
                                    <li>- Meeting with the prospective clients to review website, and gather the client's specifications for new or existing websites.</li>
                                    <li>- Designing, coding websites using CSS, XHTML, javascript, jquery and Next.js. - Built designed and maintained websies using Joomla CMS System with CSS, XHTML, Javascript, PHP.</li>
                                    <li>- Built, designed and maintained websites using CSS, XHTML, javascript, PHP. - Designing and implementing the front-end using HTML5, CSS3, jQuery, AngularJS.</li>
                                    <li>- Built custom websites using Bootstrap and WordPress.</li>
                                    <li>- Preparing multiple designs and wireframes for clients approval before proceeding with development.</li>
                                
                                </ul>




                                  </article>
                                  <article>
                                      <h2>Consultant At Atea End-User Technician.</h2>  
                                      Have performed various tasks during my time at Atea, everything from setting up computers to troubleshoot applications. Have also created an RPA method using Flow (PowerApp-MS).
                                  </article>
                                    
                                  <article>
                                      <h2>Social Media Evaluator at Appen Global.</h2>  
                                      Worked as an independent contractor on many projects related to collecting data.
                                      <ul>
                                        <li>- Evaluated all posts on Facebook by using a tool called SRT.</li>
                                        <li>- Categorized everything came through the tool.</li>
                                        <li>- Provided social media rating based on set of a criteria.</li>
                                      </ul>
                                  </article>

                                  <article>
                                      <h2>Socialassistent We Care Association.</h2>  
                                      Assisted the association by organizing and integrating teenagers refugees.
                                  </article>
                                  <article>
                                      <h2>Pizza baker at Kung Pizzeria.</h2>  
                                  <ul>
                                    <li>- Worked as a team member preforming cashier duties, product assistance and cleaning.</li>
                                    <li>- Worked extra on weekends as a pizza baker as well as a waiter.</li>
                                  </ul>
                                  </article>





                        </div>
                     
                      </div>

                      <div className={style.sectionTitle}>
                          <h2>SOFTWARE</h2>
                          <hr/>
                      </div>
                    
                      <div className={style.softwareSec}>
                      
                          <Experience/> 
                      </div>
                  </div>
            </div>
          <hr/>
        <ProjectNav></ProjectNav>
        </div>
        
  )
}

export default CvComponent;
