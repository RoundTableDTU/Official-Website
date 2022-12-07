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
    <div className="flex flex-col ">
      <div className="rounded-md object-cover flex flex-col w-full  text-center  md:px-4 pt-4">
        <div className="flex justify-between border-2 border-b-0 event-border rounded-t-lg  px-3 py-4">
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
        <div className="flex flex-col  bg-muted-orange px-4 md:px-1 py-2 mb-5 rounded-lg w-full m-auto">
          <h2 className="text-xl font-semibold">{props.event.title}</h2>
        </div>
        <div className="object-cover w-auto">
          <img
            src={props.event.image}
            alt=""
            className="rounded-md aspect-square w-full"
          />
        </div>
        <div className="py-5">
          <span className="bg-primary-orange py-1 px-2 rounded-lg text-primary-black font-semibold">
            Speakers:
          </span>
          {props.event.speakers.map((speaker, index) => {
            return <span key={index}> {speaker} </span>;
          })}
        </div>
      </div>
      <div
        className={`rounded-lg w-full cursor-pointer flex flex-col md:px-3  gap-1`}
        onClick={() => setToggleDescription(!toggleDescription)}
      >
        <div className={`flex md:-mt-5 text-xl font-semibold shadow-muted-orange justify-between  gap-8 w-full items-center py-4 rounded-t-xl px-6 ${
          toggleDescription ? `shadow-inner relative top-3` : `shadow-md `
        }`}>
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
          }   shadow-muted-orange duration-500 shadow-md rounded-sm p-6 pt-0 transition-all`}
        >
          <p className="text-lg">{props.event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventPageCard;
