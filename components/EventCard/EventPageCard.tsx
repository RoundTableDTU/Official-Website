import React from "react";

type Props = {
  image: string;
  title: string;
  location: string;
  date: string;
};

const EventPageCard = (props: Props) => {
  return (
    <div className="rounded-md object-cover flex flex-col w-full xl:w-[20vw] text-center gap-2">
      <div className="object-cover">
        <img src={props.image} alt="" className="rounded-md w-full" />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl">{props.title}</h2>
        <div className="flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 rounded-full bg-primary-orange flex items-center justify-center">
              <img
                src="/assets/logos/location_2.svg"
                alt="sig-pic"
                className="h-full aspect-square p-2"
              />
            </div>
            <h2>{props.location}</h2>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 rounded-full bg-primary-orange flex items-center justify-center">
              <img
                src="/assets/logos/calender_2.svg"
                alt="sig-pic"
                className="h-full aspect-square p-2"
              />
            </div>
            <h2>{props.date}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPageCard;
