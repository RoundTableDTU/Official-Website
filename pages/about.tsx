import React, { useState } from "react";
import SigCard from "../components/SigCard";
import { aboutRoundTable, sigInfo, sigList } from "../utility/roundtableText";
import Layout from "../components/Layout";
import Faq from "../components/Faq";
import FaqAccordian from "../components/FaqAccordian";

type Props = {};

const About = (props: Props) => {
  return (
    <Layout className="flex flex-col gap-16">
      <div>
        <div className="flex w-4/5 gap-10 justify-center m-auto">
          <div className="flex flex-col gap-12 w-1/2">
            <div className="flex flex-col text-6xl gap-4 font-bold text-center">
              <h1 className="uppercase">About Roundtable</h1>
              <h1 className="text-5xl">The skill development society</h1>
            </div>
            <div>
              <p className="text-lg leading-9">{aboutRoundTable}</p>
            </div>
          </div>
          <div className="relative top-10 right-4">
            <img
              src="assets/images/sig.jpeg"
              alt=""
              className="aspect-square h-[30rem] rounded-tl-[5rem] rounded-bl-xl"
            />
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-col justify-center items-center absolute z-10 bg-green-300">
          <div className="flex justify-start items-start text-left">
            <div className="w-1/2">
              <h1 className="text-3xl text-left">{sigInfo.heading}</h1>
              <h1 className="text-6xl font-bold">{sigInfo.title}</h1>
            </div>
            <div>line</div>
            <h1>{sigInfo.text}</h1>
          </div>
          <div></div>
        </div>
        <div className="h-full w-full absolute z-[2] bg-[#1f0909]/[0.5]"></div>
        <img
          src="assets/images/sig_bg_2.jpg"
          alt=""
          className="w-full h-[100vh]"
        />
      </div>
      <div className="w-full">
        <h1>FAQs</h1>
        <FaqAccordian className="w-1/2 m-auto rounded-t-lg flex flex-col gap-2 transition-all box-border border-[1px] border-white" />
      </div>
    </Layout>
  );
};

export default About;
