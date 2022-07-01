
import Image from "next/image";
import Link from "next/link";
import style from './iframe.module.scss'

const Iframe = ({iframeURL}) => {
  return (

   <div>
      <Link href={iframeURL} className={style.iframeLink}>
            <iframe  src={iframeURL}  loading={"lazy"} style={{ height: "50vh", width:"80%", border:"none"}} title="Iframe Example">
           </iframe> 
      </Link>
   
    </div>

  )
}

export default Iframe;