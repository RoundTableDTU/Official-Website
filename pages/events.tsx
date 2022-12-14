import React from "react";
import Head from "next/head"
import EventPageCard from "../components/EventPageCard";
import Layout from "../components/Layout";
import { eventDataRev, countCardData } from "../utility/roundtableText";
import CountCard from "../components/CountCard";
import Marquee from "react-fast-marquee";
type Props = {};

const events = (props: Props) => {
  // rendering functinos
  const renderEventPageCards = eventDataRev.map((event, index) => {
    return <EventPageCard event={event} key={index} nonce={index + 1} />;
  });

  const renderCountCards = countCardData.map((countCard, index) => {
    return <CountCard countCard={countCard} key={index} />;
  });

  const renderImage = eventDataRev.map((event, index) => {
    return (
      <img
        src={event.image}
        alt=""
        className="aspect-square h-96"
      />
    );
  });
  // actual jsx
  return (
    <Layout className="flex flex-col ">
      <Head>
        <title>RoundTable DTU</title>
      </Head>
      <div className=" ">
        <h1 className="md:text-7xl text-4xl text-white font-bold py-4 md:pb-8 px-8 ">
          Recent <span className="text-primary-orange">Events</span>
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-5 px-7">
        {renderEventPageCards}
      </div>
      {/* count up section begins */}

      <div className="w-full flex justify-center items-center relative h-full xl:h-[35rem]">
        <div className="w-full md:w-3/4 lg:w-full grid grid-cols-2 gap-y-16 md:gap-x-4 xl:flex py-16 h-full">
          {renderCountCards}
        </div>
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
