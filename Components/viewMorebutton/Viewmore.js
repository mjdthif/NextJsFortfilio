import React, { useState } from 'react';
import ViewmoreSetions from '../porfilio/ViewmoreSec';


import style from './Viewmore.module.scss';

const Viewmore = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
 <section className={style.viewMoreContainer}>
 

   

        <button className={style.viewmoreBtn} onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "Less -":' More +' }  
       </button>
   
                <div>
                         {viewMore ? <ViewmoreSetions/> :<></>}
                </div>

       
 </section>
 
  );
};
export default Viewmore;
