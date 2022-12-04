import Image from "next/image";
import React from "react";
import ActiveLink from "./ActiveLink";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full px-4 grid grid-rows-2 gap-10 md:flex md:justify-between items-center text-xl md:text-2xl py-4  md:gap-0 rounded-sm main-navbar">
      <div className="flex justify-center items-center md:flex gap-6 ">
        <div>
          <Image
            src={"/assets/images/rtlogo.png"}
            width={100}
            height={100}
            alt="round table logo png"
          />
        </div>
        <h1 className="text-2xl md:text-3xl underline font-bold">RoundTable</h1>
      </div>
      <div className="w-full md:w-1/3 flex justify-evenly text-xl p-4 font-poppins font-normal md:p-0">
        <ActiveLink href="/">Home</ActiveLink>
        <ActiveLink href={"/about"}>About</ActiveLink>
        <ActiveLink href={"/team"}>Team</ActiveLink>
        <ActiveLink href={"/events"}>Events</ActiveLink>
      </div>
    </div>
  );
};

export default Navbar;
