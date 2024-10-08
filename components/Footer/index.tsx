import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return <div className="bg-[#0A0702]  pt-12 md:pt-20">
    <footer className=" bg-gradient-to-r  to-primary-orange from-[#F04512] z-[-10] ">

      <div className="text-center">
        <span className="mx-auto rounded-md top-0 border font-semibold left-5 md:content-center items-center text-black text-base md:text-3xl font-poppins p-6 lg:px-28 bg-orange-500 md:w-2/3">
          <i className="text-white font-semibold">Embark upon an exciting journey</i>
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
          <div className="px-10 py-4 md:py-0 flex flex-col">
            <h1 className="font-poppins font-bold text-xl md:text-3xl md:mb-4 ">Quick Access</h1>

            <div className="md:text-xl flex flex-col md:flex-row">
              <span className="my-2 md:mr-6"><Link href={'/'}>Home</Link></span>
              <span className="my-2 md:mr-6"><Link href={'/about'}>About</Link></span>
              <span className="my-2 md:mr-6"><Link href={'/events'}>Events</Link></span>
              </div>
              <div className="md:text-xl flex flex-col md:flex-row flex-start">
              <span className="my-2 md:basis-1/3 md:mr-6"><Link href={'/projects'}>Projects</Link></span>
              <span className="my-2 md:basis-1/3 md:mr-6"><Link href={'/team'}>Team</Link></span>
            </div>
          </div>
          <div className="px-10 py-4 md:py-0">
            <h1 className="font-poppins font-bold text-xl md:text-3xl">Follow Us</h1>
            <div className="flex flex-row gap-4 py-3 font-semibold">
              <Link href={'https://www.instagram.com/roundtable_dtu/'}>
                <Image width={50} height={50}
                  src="/assets/logos/insta.png"

                  alt="insta logo"
                  className="h-12 text-white cursor-pointer"
                /></Link>
              <Link href={'https://www.linkedin.com/company/round-table-dtu/'}>
                <Image width={50} height={50}
                  src="/assets/logos/ln.png"

                  alt="linkedin logo"
                  className="h-12 text-white cursor-pointer"
                /></Link>
              <Link href={'https://www.facebook.com/roundtabledtu/'}>
                <Image width={50} height={50}
                  src="/assets/logos/fb.png"

                  alt="facebook logo"
                  className="h-12 text-white cursor-pointer"
                /></Link>

            </div>


          </div>

          <div className="px-10">

            <h1 className="font-poppins font-bold text-xl  md:text-3xl">Contact Us</h1>
            <h4 className="py-1 md:text-xl">Parth jain (President) <span className="block">+91 93107 61939</span></h4>
            <h4 className="py-1 md:text-xl">Vijay (Vice President) <span className="block">+91 96507 72007</span></h4>
            <h4 className="py-1 md:text-xl">Bhaskar Govil (General Secretary) <span className="block">+91 87009 18743</span></h4>
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
      <div className="flex flex-col py-5 font-semibold px-10 md:text-lg md:pb-6 text-white md:items-center md:flex-row md:justify-between">
        <div className="">© Copyright RoundtableDTU.</div>
        <div className="pt-3 pb-5">
          All <span className="text-primary-orange ">Rights</span> Reserved.
        </div>

        {/* <div>
        Designed by <span className="text-primary-orange">Roundtable</span>
      </div> */}
      </div>
    </div>
};

export default Footer;
