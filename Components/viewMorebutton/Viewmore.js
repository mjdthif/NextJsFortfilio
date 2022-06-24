import React, { useState } from 'react';
import ViewmoreSetions from '../ViewmoreSec';


import style from './Viewmore.module.scss';

const Viewmore = () => {
  const [viewMore, setViewMore] = useState(false);
  return (
 <section>
      <button className={style.viewmoreBtn} onClick={() => setViewMore(!viewMore)}>
                {viewMore ? "Less -":' More +' }  
    </button>
   
        <div >
                <div >
                         {viewMore ? <ViewmoreSetions/> :<></>}
                </div>
        </div>
       
 </section>
 
  );
};
export default Viewmore;
