import Image from "next/image";
import React from "react";
import Link from "next/link"

type Props = {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin : string;
    instagram : string;
  };
};

const CouncilMemberCard = (props: Props) => {
  return (
    <div className="grid rounded-xl  ">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-muted-orange to-orange-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <div className="relative  p-2 md:p-5 text-white bg-black rounded-lg leading-none min-h-full flex flex-col items-center gap-2">
          <Image
            src={props.member.image}
            width={400}
            height={600}
            alt={"council member image"}
            className="rounded-t-lg  w-full -"
          />

          <h2 className="text-lg font-semibold py-2 text-center">{props.member.name}</h2>
          <h3 className="text-base py-1 font-medium w-4/5 text-center bg-primary-orange text-black rounded-xl px-4 lg:text-lg ">
            {props.member.position}
          </h3>
          {/* <p className="text-center text-base p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum!</p> */}
          <div className="grid grid-cols-2 gap-x-3 mt-2">
            <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
            <Link href={props.member.linkedin}>          
              <Image
                src={"/assets/logos/linkedinLogoOrangeGradient.svg"}
                width={70}
                height={70}
                alt={"linkedin logo"}
                className="text-white"
              /></Link>
            </button>
            <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
            <Link href={props.member.instagram}>    
              <Image
                src={"/assets/logos/instagramLogoOrangeGradient.svg"}
                width={70}
                height={70}
                alt={"linkedin logo"}
                className="text-white"
              />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouncilMemberCard;
