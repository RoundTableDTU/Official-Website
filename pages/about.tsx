import React, { useState } from "react";
import SigCard from "../components/SigCard";
import { aboutRoundTable, sigInfo, sigList } from "../utility/roundtableText";
import Layout from "../components/Layout";
import Head from "next/head"
import FaqAccordian from "../components/FaqAccordian";

type Props = {};

const About = (props: Props) => {
  const renderSigCardsd = sigList.map((sig, index) => {
    return <SigCard sig={sig} key={index} />;
  });


  return (
    <Layout className="flex flex-col ">
      <Head>
        <title>RoundTable DTU</title>
      </Head>
      <div className="about-rt pb-4">
        <div className="flex flex-col px-8 md:flex-row md:gap-16 justify-center m-auto md:px-32 py-12">
          <div className="flex flex-col  md:w-3/5">
            <div className="flex flex-col text-3xl md:text-6xl font-bold">
              <h1 className="uppercase">
                About <span className="text-primary-orange">Roundtable</span>
              </h1>
              <h1 className="text-2xl capitalize md:text-4xl py-5">The skill development society</h1>
            </div>
            <div>
              <p className="text-xl leading-8 ">
                {aboutRoundTable}
              </p>
            </div>
          </div>


          <div className="md:w-2/5 pt-8 md:pt-0">
            <img
              src="assets/images/carouselImages/a4.jpg"
              alt=""
              className="h-full w-full object-cover rounded-tl-[5rem] rounded-bl-xl"
            />
          </div>
        </div>
      </div>
      <div className="sig-bg-aboutus  shadow-primary-orange">
        <div className="flex h-full flex-col justify-center items-center p-2 pt-10 md:top-36 md:pt-20 md:pb-10 md:gap-12">
          <div className="flex flex-col md:flex-row px-8 md:px-0 gap-8 justify-evenly">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="md:text-6xl text-4xl  font-bold">What Are <span className="text-primary-orange">Guilds?</span></h1>
              <h1 className="text-2xl text-left">{sigInfo.heading}</h1>
            </div>
            <div className="w-1 hidden md:block bg-primary-orange"></div>
            <h1 className="md:w-1/2 text-lg leading-8 ">{sigInfo.text}</h1>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-16 md:justify-around py-9  px-6">{renderSigCardsd}</div>
        </div>
        {/* <div className="h-full w-full absolute z-[2] bg-[#1f0909]/[0.72]"></div> */}
        {/* <img
          src="assets/images/sig_bg_2.jpg"
          alt=""
          className="object-cover h-[180vh]"
        /> */}
      </div>
      <div className="w-full flex pt-16 flex-col justify-center gap-8">
        <h1 className="text-4xl px-6 md:px-12 md:text-6xl font-semibold">Frequently Asked<span className="text-primary-orange">Questions</span></h1>
        <FaqAccordian className="w-full m-auto rounded-t-lg grid grid-cols-1 md:grid-cols-2 md:px-12 px-5 transition-all box-border gap-x-10 gap-y-10 md:pt-6" />
      </div>
    </Layout>
  );
};

export default About;
