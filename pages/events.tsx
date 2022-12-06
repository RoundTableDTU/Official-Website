import React from "react";
import EventPageCard from "../components/EventPageCard";
import Layout from "../components/Layout";
import { eventData, countCardData } from "../utility/roundtableText";
import CountCard from "../components/CountCard";
type Props = {};

const events = (props: Props) => {
  const renderEventPageCards = eventData.map((event, index) => {
    return <EventPageCard event={event} key={index} nonce={index + 1} />;
  });

  const renderCountCards = countCardData.map((countCard, index) => {
    return <CountCard countCard={countCard} key={index} />;
  });
  return (
    <Layout className="flex flex-col gap-20">
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 px-4">
        <h1 className="text-7xl text-white font-bold py-4 px-8 bg-primary-orange">
          Recent Events
        </h1>
        <div className="w-full flex gap-16">{renderEventPageCards}</div>
      </div>
      {/* count up section begins */}
      <div className="w-full flex items-center justify-center gap-16">
        {renderCountCards}
      </div>
    </Layout>
  );
};

export default events;
