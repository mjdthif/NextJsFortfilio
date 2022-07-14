import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CvButtons from "../cvComponent/Cvbuttons";
import ProfilePic from "../profilePic/ProfilePic";
import QrImage from "../../public/Assests/webP/MJContactCard.png";
import Signa from "../../public/Assests/webP/Signa.svg";
import Modal from '../modal/modal.js'

import style from "./header.module.scss";

const Header = () => {
  const [show, setShow] = useState(false)
  console.log(show)
  return (
    
    <header id="home">
      <div className={style.headerContainer}>
        <ProfilePic></ProfilePic>
        <div className={style.headerText}>
          <div className={style.squre}>
            <Modal onClose={()=>setShow(false)} show={show} ></Modal>
            <h2> Hi, I'm Mjd_Thif.</h2>
            <h4>
              <br />
              Develover, tech enthusiast, junior music producer and UX lover.
              <br />
              I'm passionate Web Develover aiming at becoming
            </h4>
            <ul>
              <li>-FULL-STACK DevelOver.</li>
            </ul>
            <div className={style.squre}>
              <div className={style.QrcodeContainer}>
         
             
                    <Image
                      width="250px"
                      height="250px"
                      src={QrImage}
                      alt={"QR CODE"}
                      className={style.qrImage}
                      onClick={()=>setShow(true)}
                    />
            
           
              </div>
              <CvButtons />
              <Image
                width="80px"
                height="80px"
                src={Signa}
                className={style.signa}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
