import Image from "next/image";
import React from "react";

type Props = {
  member: {
    name: string;
    position: string;
    image: string;
  };
};

const CouncilMemberCard = (props: Props) => {
  return (
    <div className="flex rounded-xl flex-col items-center ">
      
       
      <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-muted-orange to-orange-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <div className="relative px-7 py-4 text-white bg-black rounded-lg leading-none flex flex-col items-center ">
      <Image
        src={props.member.image}
        width={400}
        height={400}
        alt={"council member image"}
        className="rounded-t-lg w-full h-40"
      />

      <h2 className="text-lg font-semibold py-2">{props.member.name}</h2>
      <h3 className="text-base py-1  font-medium bg-primary-orange text-black rounded-xl px-3 ">{props.member.position}</h3>
      {/* <p className="text-center text-base p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum!</p> */}
      <div className="grid grid-cols-2 gap-x-3 mt-2">
      <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
        <Image
          src={"/assets/logos/linkedinLogoOrangeGradient.svg"}
          width={80}
          height={80}
          alt={"linkedin logo"}
          className="text-white"
        />
      </button>
      <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
        <Image
          src={"/assets/logos/linkedinLogoOrangeGradient.svg"}
          width={80}
          height={80}
          alt={"linkedin logo"}
          className="text-white"
        />
      </button>


      </div></div>
    </div>
    </div>
  );
};

export default CouncilMemberCard;
