import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="w-full px-4 grid grid-rows-2 gap-10 md:flex md:justify-between items-center text-xl md:text-2xl py-4 shadow-neon-orange-primary md:gap-0 rounded-sm">
      <div className="flex justify-center items-center md:flex gap-6 ">
        <div>
          <Image
            src={"/assets/images/rtlogo.png"}
            width={100}
            height={100}
            alt="round table logo png"
          />
        </div>
        <h1 className="text-2xl md:text-3xl">
          Round table: The --- Society of DTU
        </h1>
      </div>
      <div className="w-full md:w-1/3 flex justify-evenly p-4 md:p-0">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/team"}>Team</Link>
        <Link href={"/events"}>Events</Link>
      </div>
    </div>
  );
};

export default Navbar;
