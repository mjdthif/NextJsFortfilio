import React from 'react';
import { Link as LinkR } from 'react-router-dom';
import{CgSweden} from 'react-icons/cg';
import{FaFlagUsa, FaDownload} from 'react-icons/fa';
import MyCvSve from '../../Assests/SVCV.pdf';
import MyENG from '../../Assests/ENGCV.pdf';
import '..styles/cvCompos.module.scss';

const Cv = () => {
  return (
    <div className='cv'>
      <h2>VIEW MY RESUME</h2>
      <LinkR to ='/CvPage' >
        <span className='btn_sve btn'>  SVE </span>
      </LinkR>
      <LinkR to ='/CvPage' >
        <span className='btn_eng btn'>  ENG </span>
      </LinkR>
       
    </div>
  )
}
export default Cv;