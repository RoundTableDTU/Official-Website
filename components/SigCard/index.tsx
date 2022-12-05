import Image from "next/image";
import React from "react";

type Props = {};

const SigCard = (props: Props) => {
  return (
    <div className="flex rounded-xl sig-bg flex-col items-center p-4 ">
      <img src='./assets/images/website-icon.png' alt="sig-pic" className="rounded-full px-3  pt-3" />
      <h3 className="text-2xl font-medium py-5">{props.sigName}</h3>
    </div>
  );
};

export default SigCard;
