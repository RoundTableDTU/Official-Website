import React from "react";
import EventPageCard from "../components/EventPageCard";
import Layout from "../components/Layout";
import { eventData, countCardData } from "../utility/roundtableText";
import CountCard from "../components/CountCard";
import Marquee from "react-fast-marquee";
type Props = {};

const events = (props: Props) => {
  // rendering functinos
  const renderEventPageCards = eventData.map((event, index) => {
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
    <Layout className="flex flex-col gap-20">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-7xl text-white font-bold py-4 px-8 bg-primary-orange">
          Recent Events
        </h1>
        <div className="w-full flex gap-16">{renderEventPageCards}</div>
      </div>
      {/* count up section begins */}
      <div className="max-w-full flex items-center justify-center lg:gap-16 px-4">
        {renderCountCards}
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
