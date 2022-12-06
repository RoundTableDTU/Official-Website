import Image from "next/image";
import React from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link"

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full px-4 grid grid-col-1 -mt-3  md:flex md:justify-between items-center text-xl md:text-2xl pb-4  md:gap-0 rounded-sm main-navbar">
      <div className="flex justify-center items-center md:flex  ">
        <div>
          {/* vamsi todo : logo href to home */}
          <Link href={"/"}>
          <Image
            src={"/assets/images/rtlogo.png"}            
            width={100}
            height={100}
            alt="round table logo png"
            className="w-full h-32 py-2"
          />
          </Link>
        </div>
        
      </div>
      <div className="w-full md:w-1/3 flex justify-evenly text-base md:text-xl p-4 font-poppins font-normal md:p-0">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href={"/about"}>About</ActiveLink>
        <ActiveLink href={"/events"}>Events</ActiveLink>
        <ActiveLink href={"/team"}>Team</ActiveLink>
      </div>
    </div>
  );
};

export default Navbar;
