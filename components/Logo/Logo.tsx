import Image from "next/image";
import React, { FC } from "react";
import LogoImage from "../../assets/images/logo.svg";
import style from "./style.module.css";

interface LogoProps {
  width?: number;
  height?: number;
  imageSource: any;
}

const Logo: FC<LogoProps> = ({ width, height, imageSource }) => {
  return (
    <div style={{ width, height }}>
      <Image src={imageSource} alt="Logo" height={height} width={width} />
    </div>
  );
};

export default Logo;
