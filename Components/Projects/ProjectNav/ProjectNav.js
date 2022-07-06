
import Link from 'next/link';
import {BiHomeAlt} from 'react-icons/bi';
import style from './ProjectNav.module.scss';




const ProjectNav = () => {
  return (
    <div className={style.projectNav}>
        <a className={style.projectNavLink} onClick={()=>history.back()}>
        <BiHomeAlt/>
        </a>
    </div>
  )
  
}
export default ProjectNav;