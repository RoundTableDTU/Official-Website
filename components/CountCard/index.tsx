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
    <div className="flex flex-col justify-center items-center gap-8 px-2 w-full md:w-1/2 lg:w-full xl:w-2/3 py-4">
      <div className="w-24 rounded-full bg-primary-orange flex items-center justify-center">
        <img
          src={props.countCard.image}
          alt="sig-pic"
          className="h-full aspect-square p-4"
        />
      </div>
      <CountUp
        end={props.countCard.count}
        suffix=" +"
        className="text-white text-2xl md:text-5xl"
        duration={2}
        enableScrollSpy={true}
        scrollSpyDelay={900}
      />
      <h1 className="text-2xl font-semibold md:text-4xl">{props.countCard.title}</h1>
    </div>
  );
};

export default CountCard;
