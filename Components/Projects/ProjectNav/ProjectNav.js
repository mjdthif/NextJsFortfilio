import React, {useState} from 'react';
import {Link as LinkR} from 'react-router-dom';
import {BiHomeAlt} from 'react-icons/bi';
import './ProjectNav.scss';




const ProjectNav = () => {
  return (
    <div className='projectNav'>
      <LinkR to='/'><BiHomeAlt/></LinkR>
    </div>
  )
  
}
export default ProjectNav;