import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import { homePageAboutText } from "../utility/roundtableText";
import AboutCards from "../components/AboutCards";
import EventCard from "../components/EventCard";

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
    text: "A safe space to interact with your seniors and alumni who have experience in both the technical and non-technical fields.",
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

const recentEvents = [
  {
    title: "Webinar on Cyber Security",
    image: "/assets/images/aubergine.jpg",
    location: "Online",
    date: "21st September 2021",
  },
  {
    title: "Webinar on Cyber Security",
    image: "/assets/images/aubergine.jpg",
    location: "Online",
    date: "21st September 2021",
  },
  {
    title: "Webinar on Cyber Security",
    image: "/assets/images/aubergine.jpg",
    location: "Online",
    date: "21st September 2021",
  },
];

const renderRecentEvents = recentEvents.map((event, index) => {
  return (
    <EventCard
      title={event.title}
      image={event.image}
      location={event.location}
      date={event.date}
      key={index}
    />
  );
});

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <Layout>
        <div className="w-full h-screen flex flex-col gap-10 justify-center items-center">
          <Carousel />
        </div>
        <div className="flex flex-col gap-24 w-full">
          <div className="flex flex-col gap-8 relative">
            <h1 className="text-7xl font-bold text-center text-white rounded-md px-10 py-4">
              About Roundtable
            </h1>
            <p className="text-2xl px-24 font-poppins relative">
              {homePageAboutText}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-x-4 md:gap-y-12 lg:gap-8 px-3 m-auto py-10 ">
            {renderAboutCards}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-8 relative">
            <h1 className="text-7xl font-bold text-center text-white rounded-md px-10 py-4">
              Recent Events
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 md:gap-x-4 md:gap-y-12 lg:gap-8 xl:gap-24 px-3 m-auto py-10">
              {renderRecentEvents}
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default Home;
