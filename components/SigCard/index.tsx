import Image from "next/image";
import React from "react";

type Props = {};

const SigCard = (props: Props) => {
  return (
    <div className="flex rounded-xl flex-col items-center border-white border-4">
      <img src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3=w240-h480-rw" alt="sig-pic" className="rounded-full w-2/3" />
      <h3 className="text-2xl font-medium">{props.sigName}</h3>
    </div>
  );
};

export default SigCard;
