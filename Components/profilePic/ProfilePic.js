import React, { useState } from "react";
import Image from "next/image";
import style from "./profilePic.module.scss";
import meUppsala from "../../public/Assests/webP/meUppsala.webp";
import meStockholm from "../../public/Assests/webP/meStockholm.webp";
import meBirlin from "../../public/Assests/webP/meBirlin.webp";

const ProfilePic = () => {
  return (
    <>
       <div className={style.profilePic}>
         <Image
        src={meUppsala}
        width={"150px"}
        height={"200px"}
        alt="Mjd Profile picture"
      
        priority={true}
      />
         <Image
        src={meStockholm}
        width={"200px"}
        height={"300px"}
        alt="Mjd Profile picture"
   
        priority={true}
      />
         <Image
        src={meBirlin}
        width="250px"
        height={"350px"}
        alt="Mjd Profile picture"
        priority={true}
      />
      
     

    </div>
    
    </>
 
   

  );
};
export default ProfilePic;
