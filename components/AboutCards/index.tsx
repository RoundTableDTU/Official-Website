import React from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  text: string;
};

const AboutCards = (props: Props) => {
  return (
    <div className="grid rounded-xl  px-7">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-muted-orange to-orange-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>


        <div className="relative min-h-full justify-start px-6 sm:px-8 lg:px-5  py-6 md:py-8 text-white bg-black rounded-lg leading-none flex flex-col items-center gap-10 ">
          <Image
            src={props.image}
            width={400}
            height={400}
            alt={"image"}
            className="rounded-t-lg w-full h-40"
          />
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold py-2 bg-primary-orange rounded-md px-6">
            {props.title}
          </h2>
          <div className="text-center ">
            <h3 className="text-lg md:text-xl font-poppins ">{props.text}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
