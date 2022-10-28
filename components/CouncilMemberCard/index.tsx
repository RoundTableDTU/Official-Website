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
    <div className="flex flex-col items-center justify-between relative gap-8 p-4 pb-20 shadow-neon-orange-muted">
      <Image
        src={props.member.image}
        width={400}
        height={400}
        alt={"council member image"}
        className="rounded-md"
      />
      <h1 className="text-2xl font-bold">{props.member.name}</h1>
      <h1 className="text-xl">{props.member.position}</h1>
      <button className="absolute rounded-full w-16 h-16 bg-primary-black -right-6 -bottom-6 shadow-neon-orange-muted flex items-center justify-center overflow-hidden">
        <Image
          src={"/assets/logos/linkedinLogoOrangeGradient.svg"}
          width={80}
          height={80}
          alt={"linkedin logo"}
          className="text-white"
        />
      </button>
    </div>
  );
};

export default CouncilMemberCard;
