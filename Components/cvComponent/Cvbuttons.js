
import Link from 'next/link';
import style from './cvCompos.module.scss';

const CvButtons = () => {
  return (
    <div className={style.cv}>
      <h2>VIEW MY RESUME</h2>
      <Link href='/projectspages/resumePage' >
        <button className='btn'>  SVE </button>
      </Link>
      <Link href ='/projectspages/resumePage' >
        <button className='btn'>  ENG </button>
      </Link>
       
    </div>
  )
}
export default CvButtons;