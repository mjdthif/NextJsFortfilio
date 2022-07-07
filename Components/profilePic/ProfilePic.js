import React, { useState } from "react";
import Image from "next/image";
import style from "./profilePic.module.scss";
import meUppsala from "../../public/Assests/webP/meUppsala.webp";
import meStockholm from "../../public/Assests/webP/meStockholm.webp";
import meBirlin from "../../public/Assests/webP/meBirlingym.webp";

const ProfilePic = () => {
  return (
    <>
      <div className={style.profilePic}>
        <Image
          className={style.profileImage}
          src={meStockholm}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          priority={true}
        />
        <Image
          src={meBirlin}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          quality={50}
          priority={true}
          className={style.profileImage}
        />
        <Image
          src={meUppsala}
          width={"200px"}
          height={"200px"}
          alt="Mjd Profile picture"
          quality={50}
          priority={true}
          className={style.profileImage}
        />
      </div>
    </>
  );
};
export default ProfilePic;
