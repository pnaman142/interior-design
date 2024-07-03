import React from "react";
import logo from "/public/logo.png";
import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image src={logo} width={160} height={55} alt="" />
    </Link>
  );
};

export default Logo;
