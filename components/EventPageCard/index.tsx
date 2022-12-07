import React, { useState } from "react";

type Props = {
  event: {
    image: string;
    title: string;
    location: string;
    date: string;
    speakers: string[];
    description: string;
  };
  nonce: number;
};

const EventPageCard = (props: Props) => {
  const [toggleDescription, setToggleDescription] = useState(false);
  return (
    <div className="flex flex-col xl:w-[30vw] gap-4">
      <div className="rounded-md object-cover flex flex-col w-full xl:w-[30vw] text-center gap-6 px-4 py-4">
        <div className="flex justify-between  px-8 py-4">
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 rounded-full bg-primary-orange flex items-center justify-center">
              <img
                src="/assets/logos/location_2.svg"
                alt="sig-pic"
                className="h-full aspect-square p-2"
              />
            </div>
            <h2>{props.event.location}</h2>
          </div>
          <div className="flex gap-2 justify-center items-center">
            <div className="w-10 rounded-full bg-primary-orange flex items-center justify-center">
              <img
                src="/assets/logos/calender_2.svg"
                alt="sig-pic"
                className="h-full aspect-square p-2"
              />
            </div>
            <h2>{props.event.date}</h2>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-muted-orange px-4 py-2 rounded-lg w-2/3 m-auto">
          <h2 className="text-3xl">{props.event.title}</h2>
        </div>
        <div className="object-cover w-full">
          <img
            src={props.event.image + `${props.nonce}.png`}
            alt=""
            className="rounded-md aspect-square w-full"
          />
        </div>
        <div>
          <span className="bg-primary-orange py-1 px-2 rounded-lg text-primary-black font-semibold">
            Speakers:
          </span>
          {props.event.speakers.map((speaker, index) => {
            return <span key={index}> {speaker}, </span>;
          })}
        </div>
      </div>
      <div
        className={`rounded-lg w-full cursor-pointer flex flex-col gap-1`}
        onClick={() => setToggleDescription(!toggleDescription)}
      >
        <div className="flex justify-between gap-8 w-full items-center py-4 rounded-t-xl px-8">
          <h1>Know More</h1>
          <div>
            <svg
              data-accordion-icon
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                toggleDescription ? `rotate-180` : ``
              } aspect-square w-10 text-primary-orange`}
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div
          className={`${
            toggleDescription ? `block` : `hidden`
          } border-[1px] border-primary-orange rounded-sm p-6 transition-all w-full`}
        >
          <p className="text-2xl">{props.event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPageCard;
