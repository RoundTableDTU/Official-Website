import React from "react";

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
  return (
    <div className="max-w-sm bg-black px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 justify-center mx-auto">
      <h3 className="mb-6 text-lg md:text-2xl w-auto text-center font-bold text-primary-orange h-12 align-middle">{props.event.title}</h3>
      <div className="relative ">
        <img className="w-full h-full md:h-[200px] xl:h-[300px] object-cover" src={props.event.image} alt="Colors" />
      </div>
      <div className="w-full h-auto text-sm lg:text-base lg:py-2 px-2 py-1 my-4 rounded-lg font-semibold text-center bg-primary-orange">Speaker:<p className="font-bold text-xl">{props.event.speakers}</p></div>
      <div className="my-4">
        <div className="flex space-x-1 items-center mb-1">
          <div className="text-gray-800 font-semibold justify-start flex flex-row">
            <img src="/assets/images/location.png" alt="" className="h-8 w-auto" />
            <p className="text-white my-auto mx-1 font-base">{props.event.location}</p>
          </div>
        </div>
        <div className="flex space-x-1 items-center mb-1">
          <span className="my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-orange"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
          <p className="m-auto">{props.event.date}</p>
        </div>
        <button className="mt-4 text-xl w-full text-white shadow-primary-orange py-2 rounded-base shadow-md">Know More</button>
      </div>
    </div>

  );
};

export default EventPageCard;
