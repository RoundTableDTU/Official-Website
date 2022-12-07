import React from "react";
import EventPageCard from "../components/EventPageCard";
import Layout from "../components/Layout";
import { eventData, countCardData } from "../utility/roundtableText";
import CountCard from "../components/CountCard";
import Marquee from "react-fast-marquee";
type Props = {};

const events = (props: Props) => {
  // rendering functinos
  const renderEventPageCards = eventData.reverse().map((event, index) => {
    return <EventPageCard event={event} key={index} nonce={index + 1} />;
  });

  const renderCountCards = countCardData.map((countCard, index) => {
    return <CountCard countCard={countCard} key={index} />;
  });

  const renderImage = eventData.map((event, index) => {
    return (
      <img
        src={event.image + `${index + 1}.png`}
        alt=""
        className="aspect-square h-96"
      />
    );
  });
  // actual jsx
  return (
    <Layout className="flex flex-col ">
      <div className=" ">
        <h1 className="md:text-7xl text-4xl text-white font-bold py-4 md:pb-8 px-8 ">
          Recent <span className="text-primary-orange">Events</span>
        </h1>
      </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-5 px-7">{renderEventPageCards}</div>
      {/* count up section begins */}

      <div className="relative my-10 h-full">
      <div className=" z-10 absolute w-full grid grid-cols-2 md:grid-cols-5 items-center py-16 justify-center  lg:gap-16 px-4">
        {renderCountCards}
      </div>
      <div className="h-full w-full absolute top-0  z-[2] bg-[#1f0909]/[0.5]"></div>
      <img
        src='/assets/images/event-counter-bg.jpg'
        alt="dtu-bg"
        className="w-full max-h-[420px] object-cover hidden md:block rounded-lg"
      />
      <img
        src='/assets/images/counter-phone-bg.jpg'
        alt="dtu-bg"
        className="w-full md:max-h-[420px] object-cover md:hidden  rounded-lg"
      />
      </div>
      <div className="w-full overflow-y-hidden relative">
        <div className="absolute h-96 w-1/12 bg-gradient-to-r from-primary-orange/[0.4] z-[2]"></div>
        <Marquee
          speed={100}
          gradientColor={[255, 153, 0]}
          gradientWidth={100}
          // pauseOnHover={true}
          gradient={false}
        >
          {renderImage}
        </Marquee>
        <div className="absolute right-0 top-0 h-96 w-1/12 bg-gradient-to-l from-primary-orange/[0.4] z-[2]"></div>
      </div>
    </Layout>
  );
};

export default events;
