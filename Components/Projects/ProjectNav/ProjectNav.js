import React, {useState} from 'react';
import Link from 'next/link';
import {BiHomeAlt} from 'react-icons/bi';
import style from './ProjectNav.module.scss';




const ProjectNav = () => {
  return (
    <div className={style.projectNav}>
      <Link href={"/"} >
        <a className={style.projectNavLink}>
        <BiHomeAlt/>
        </a>
  
      </Link>
    </div>
  )
  
}
export default ProjectNav;