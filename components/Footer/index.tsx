import Image from "next/image";
import ActiveLink from "./ActiveLink";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return <div>
    <footer className=" bg-gradient-to-r from-[#EC9F05] to-[#FF4E00] z-[-10] ">

      <div className="text-center">
        <span className="mx-auto  rounded-md top-0 border font-semibold left-5 content-center items-center text-black text-2xl md:text-4xl font-poppins p-6 bg-white w-1/2">
          Embark upon an exciting journey.
        </span>
      </div>

      <div className="relative bottom-10  pt-32 md:pt-40  text-white">
        <div className="flex flex-col justify-around md:flex-row mb-4  ml-10 ">
          <div className="mb-8">
            <h1 className="font-poppins font-bold text-xl md:text-4xl md:mb-4">Roundtable</h1>
            <div className="md:text-2xl">
              Roundtable,<br />
              Delhi Technological University, <br />
              New Delhi
            </div>
          </div>
          <div className="mb-8">
            <h1 className="font-poppins font-bold text-xl md:text-4xl md:mb-4">Quick Access</h1>
            <span className="mr-2 md:text-2xl"><a href="#Events">Events</a></span>
            <span className="m-2 md:text-2xl"><a href="#Events">Events</a></span>
            <span className="m-2 md:text-2xl"><a href="#Events">Events</a></span>
            <span className="m-2 md:text-2xl"><a href="#Events">Events</a></span>

          </div>
          <div className="mb-1">
            <h1 className="font-poppins font-bold text-xl md:text-4xl">Follow Us</h1>

          </div>
        </div>
      </div>
    </footer>

    <div className="flex flex-col items-center md:flex-row md:justify-between">
      <div>
        © Copyright RoundtableDTU. <span className="font-bold">All Rights Reserved</span>
      </div>
      <div>
        Designed by <span className="text-primary-orange">Roundtable</span>
      </div>

    </div>
  </div>;

};

export default Footer;
