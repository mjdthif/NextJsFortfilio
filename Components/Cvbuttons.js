
import Link from 'next/link';
import style from '../styles/cvCompos.module.scss';

const CvButtons = () => {
  return (
    <div className={style.cv}>
      <h2>VIEW MY RESUME</h2>
      <Link href='/CvPage' >
        <button className='btn'>  SVE </button>
      </Link>
      <Link href ='/CvPage' >
        <button className='btn'>  ENG </button>
      </Link>
       
    </div>
  )
}
export default CvButtons;