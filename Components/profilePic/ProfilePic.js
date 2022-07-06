import React, { useState } from "react";
import Image from "next/image";
import style from "./profilePic.module.scss";
import profileImage from "../../public/Assests/webP/meBirlingym.webp";

const ProfilePic = () => {
  return (
  
      <Image
        src={profileImage}
        width={"300px"}
        height={"200px"}
        alt="Mjd Profile picture"
        layout="responsive"
      />

  );
};
export default ProfilePic;
