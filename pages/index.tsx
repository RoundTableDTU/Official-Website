import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import {
  homePageAboutText,
  eventData,
  eventDataRev,
} from "../utility/roundtableText";
import AboutCards from "../components/AboutCards";
import EventCard from "../components/EventCard";
import EventPageCard from "../components/EventPageCard";
import Projects from "../components/Projects";

// latest events come to top and only 4 events come up
const renderEventPageCards = eventDataRev.slice(0, 4).map((event, index) => {
  return <EventPageCard event={event} key={index} nonce={index + 1} />;
});

const aboutCardInfo = [
  {
    title: "Introduction",
    image: "/assets/logos/handshake.svg",
    text: "Round Table is the skill development society of DTU. We are a family, a society of like minded people.",
  },
  {
    title: "Value",
    image: "/assets/logos/trophy.svg",
    text: "We are also the only society in DTU that aims to inculcate skills required for both Technical and Non-Technical profiles.",
  },
  {
    title: "Community",
    image: "/assets/logos/handshake.svg",
    text: "A safe space to interact with your seniors and alumni who have experience in both the technical and non-technical fields. ",
  },
];

const renderAboutCards = aboutCardInfo.map((card, index) => {
  return (
    <AboutCards
      title={card.title}
      image={card.image}
      text={card.text}
      key={index}
    />
  );
});

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Layout>
        <Head>
          <title>RoundTable DTU</title>
        </Head>
        <div className="w-full md:h-screen flex flex-col gap-10 justify-center items-center">
          <Carousel />
        </div>
        <div className="flex flex-col md:gap-10 gap-2 md:px-24 w-full">
          <div className="flex flex-col md:gap-8  relative">
            <h1 className="md:text-7xl text-4xl px-4 font-bold  text-white rounded-md  py-7 pt-16 md:mt-16 ">
              About <span className="text-primary-orange">Roundtable</span>
            </h1>
            <p className="text-lg px-6  md:text-2xl font-poppins relative ">
              {homePageAboutText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-x-4 md:gap-y-12  lg:gap-8 px-3 m-auto py-10 ">
            {renderAboutCards}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4  pt-10 md:pt-16 md:px-7   relative">
            <h1 className="md:text-7xl text-4xl font-bold md:px-24  text-white rounded-md px-10 py-4">
              Recent <span className="text-primary-orange">Events</span>
            </h1>

            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-4 px-7">
              {renderEventPageCards}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
