import React, { useState } from "react";
import SigCard from "../components/SigCard";
import { aboutRoundTable, sigInfo, sigList } from "../utility/roundtableText";
import Layout from "../components/Layout";
import FaqAccordian from "../components/FaqAccordian";

type Props = {};

const About = (props: Props) => {
  const renderSigCardsd = sigList.map((sig, index) => {
    return <SigCard sig={sig} key={index} />;
  });


  return (
    <Layout className="flex flex-col gap-16">
      <div>
        <div className="flex flex-col px-8 md:flex-row gap-20 justify-center m-auto py-12">
          <div className="flex flex-col  md:w-1/2">
            <div className="flex flex-col text-3xl md:text-7xl font-bold">
              <h1 className="uppercase">
                About <span className="text-primary-orange">Roundtable</span>
              </h1>
              <h1 className="text-2xl capitalize md:text-5xl py-5">The skill development society</h1>
            </div>
            <div>
              <p className="text-xl leading-9 ">
                {aboutRoundTable}
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="assets/images/sig.jpeg"
              alt=""
              className="aspect-square h-[30rem] rounded-tl-[5rem] rounded-bl-xl"
            />
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <div className="flex flex-col justify-center items-center absolute z-10 p-2 top-36 gap-36">
          <div className="flex gap-10 justify-evenly">
            <div className="flex flex-col justify-center gap-4">
              <h1 className="text-3xl text-left">{sigInfo.heading}</h1>
              <h1 className="text-7xl font-bold">{sigInfo.title}</h1>
            </div>
            <div className="w-1 bg-primary-orange"></div>
            <h1 className="w-1/2 text-3xl leading-9">{sigInfo.text}</h1>
          </div>
          <div className="flex gap-10">{renderSigCardsd}</div>
        </div>
        <div className="h-full w-full absolute z-[2] bg-[#1f0909]/[0.72]"></div>
        <img
          src="assets/images/sig_bg_2.jpg"
          alt=""
          className="w-full h-[90vh]"
        />
      </div> */}
      <div className="w-full flex flex-col justify-center gap-16">
        <h1 className="text-7xl m-auto font-semibold">FAQs</h1>
        {/* <FaqAccordian className="w-full m-auto rounded-t-lg grid grid-cols-2 px-12 transition-all box-border gap-x-10 gap-y-8" /> */}
      </div>
    </Layout>
  );
};

export default About;
