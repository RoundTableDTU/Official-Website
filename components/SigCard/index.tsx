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
    <div className="flex rounded-xl  flex-col items-center py-4 px-10 bg-white">
      <div className="w-44 rounded-full bg-primary-orange flex items-center justify-center">
        <img
          src={props.sig.image}
          alt="sig-pic"
          className="h-full aspect-square p-10"
        />
      </div>
      <h3 className="text-2xl font-medium py-5 text-primary-black">
        {props.sig.title}
      </h3>
    </div>
  );
};

export default SigCard;
