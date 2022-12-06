import React from "react";
import EventCard from "../components/EventCard";
import Layout from "../components/Layout";

type Props = {};

const events = (props: Props) => {
  return (
    <Layout>
      <div className="w-full h-full flex flex-col items-center justify-center gap-6">
        <h1 className="text-7xl text-white font-bold py-4 px-8 bg-primary-orange">
          Recent Events
        </h1>
        <div className="w-full"></div>
      </div>
    </Layout>
  );
};

export default events;
