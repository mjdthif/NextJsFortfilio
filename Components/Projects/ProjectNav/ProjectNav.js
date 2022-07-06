
import Link from 'next/link';
import {BiHomeAlt} from 'react-icons/bi';
import style from './ProjectNav.module.scss';




const ProjectNav = ({hrefPosition, scrollPosition}) => {
  return (
    <div className={style.projectNav}>
      <Link href={hrefPosition} scroll={scrollPosition}>
          <a className={style.projectNavLink}>
                <BiHomeAlt/>   
          </a>
      </Link>
    </div>
  )
  
}
export default ProjectNav;