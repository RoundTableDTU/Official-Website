import Image from "next/image";
import React from "react";

type Props = {
  sig: {
    title: string;
    image: string;
  };
};

const SigCard = (props: Props) => {
  return (
    <div className="flex rounded-xl flex-col items-center md:py-4 md:first-letter:px-10 px-4  pt-3 bg-white/[0.8]">
      <div className="w-32 md:w-36 rounded-full bg-primary-orange flex items-center justify-center">
        <img
          src={props.sig.image}
          alt="sig-pic"
          className="md:h-full aspect-square p-4 md:p-10"
        />
      </div>
      <h3 className="text-base md:text-xl py-3 font-medium md:py-5 text-primary-black">
        {props.sig.title}
      </h3>
    </div>
  );
};

export default SigCard;
