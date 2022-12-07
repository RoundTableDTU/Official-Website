import React from "react";
import CountUp from "react-countup";

type Props = {
  countCard: {
    image: string;
    title: string;
    count: number;
  };
};

const CountCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 px-8 py-4">
      <div className="w-20 rounded-full bg-primary-orange flex items-center justify-center">
        <img
          src={props.countCard.image}
          alt="sig-pic"
          className="h-full aspect-square p-2"
        />
      </div>
      <CountUp
        end={props.countCard.count}
        suffix=" +"
        className="text-white text-5xl"
        duration={2}
        enableScrollSpy={true}
        scrollSpyDelay={900}
      />
      <h1 className="text-4xl">{props.countCard.title}</h1>
    </div>
  );
};

export default CountCard;
