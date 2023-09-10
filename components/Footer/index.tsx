

import React from "react";
import Image from "next/image";
import Link from "next/link"


type Props = {};

const Footer = (props: Props) => {
  return <div className="bg-[#0A0702]  pt-12 md:pt-20">
    <footer className=" bg-gradient-to-r  to-primary-orange from-[#F04512] z-[-10] ">

      <div className="text-center">
        <span className="mx-auto   rounded-md top-0 border font-semibold left-5 md:content-center items-center text-black text-base md:text-3xl font-poppins p-6 lg:px-28 bg-white md:w-2/3">
          Embark upon an exciting journey.
        </span>
      </div>

      <div className="relative bottom-10  pt-28 md:pt-32 md:pb-1  text-white">
        <div className="grid grid-cols-1 md:grid-cols-4  md:justify-start items-start content-start   ">
          <div className="px-10 pb-4">
            <h1 className="font-poppins font-bold text-xl md:text-3xl md:mb-4">Roundtable</h1>
            <div className="md:text-xl">
              The Official Skill Development Society,<br />
              Delhi Technological University<br />

            </div>
          </div>
          <div className="px-10 py-4 md:py-0">
            <h1 className="font-poppins font-bold text-xl md:text-3xl md:mb-4">Quick Access</h1>

            <div className="md:text-xl">
              <span className="mr-2 "><Link href={'/'}>Home</Link></span>
              <span className="m-2 "><Link href={'/about'}>About</Link></span>
              <span className="m-2 "><Link href={'/events'}>Events</Link></span>
              <span className="m-2 "><Link href={'/team'}>Team</Link></span>
            </div>
          </div>
          <div className="px-10 py-4 md:py-0">
            <h1 className="font-poppins font-bold text-xl md:text-3xl">Follow Us</h1>
            <div className="flex flex-row gap-4 py-3 font-semibold">
              <Link href={'https://www.instagram.com/roundtable_dtu/'}>
                <img
                  src="/assets/logos/insta.png"

                  alt="insta logo"
                  className="h-10 md:h-12 text-white cursor-pointer"
                /></Link>
              <Link href={'https://www.linkedin.com/company/round-table-dtu/'}>
                <img
                  src="/assets/logos/ln.png"

                  alt="linkedin logo"
                  className="h-10 md:h-12 text-white cursor-pointer"
                /></Link>
              <Link href={'https://www.facebook.com/roundtabledtu/'}>
                <img
                  src="/assets/logos/fb.png"

                  alt="facebook logo"
                  className="h-10 md:h-12 text-white cursor-pointer"
                /></Link>

            </div>


          </div>

          <div className="px-10">

            <h1 className="font-poppins font-bold text-xl  md:text-3xl">Contact Us</h1>
            <h4 className="py-1 md:text-xl">Vishu Bansal (President) <span className="block">7503909232</span></h4>
            <h4 className="py-1 md:text-xl">Chaitanya (Vice President) <span className="block">9711091823</span></h4>
            <h4 className="py-1 md:text-xl">Anuj Singh (Vice President) <span className="block">9773721184</span></h4>
          </div>
        </div>
      </div>
    </footer>

    <div className="flex flex-col py-5 font-semibold px-10 md:text-lg md:pb-6 text-white md:items-center md:flex-row md:justify-between">
      <div className="">
        © Copyright RoundtableDTU.
      </div>
      <div className="pt-3 pb-5">
        All <span className="text-primary-orange ">Rights</span> Reserved.
      </div>

      {/* <div>
        Designed by <span className="text-primary-orange">Roundtable</span>
      </div> */}

    </div>
  </div>;

};

export default Footer;
