import React, { useState } from "react";
import SigCard from "../components/SigCard";

import Layout from "../components/Layout";
import Faq from "../components/Faq";
import FaqAccordian from "../components/FaqAccordian";

type Props = {};

const About = (props: Props) => {
  return (
    <Layout>
      <FaqAccordian className=" w-1/2 m-auto rounded-t-lg flex flex-col gap-2 transition-all box-border border-[1px] border-white" />
      {/* overflow hatana hai, horizontal scrollbar hatana hai */}
      {/* img extend hori usse fix krna hai */}
      {/* <div className="absolute mr-4 px-36  pt-14  z-10 ">
        <h1 className="text-7xl font-bold">What Are SIGs?</h1>
        <p className="text-xl my-8 font-poppins">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in
          molestiae asperiores alias hic ut facere perspiciatis nisi similique,
          commodi dolores. Commodi ducimus optio nemo doloremque? Recusandae
          eius nulla esse? Eum, ducimus! Placeat eveniet exercitationem alias
          modi qui, libero, minus fuga quidem necessitatibus ea, atque vitae
          esse rerum. Veniam error natus expedita deleniti eveniet nobis sunt
          eligendi neque. Natus totam mollitia odio, dolore ratione blanditiis
          perferendis debitis consectetur obcaecati maiores!
        </p>

        <div className="grid grid-cols-5 gap-x-7 ">
          <SigCard sigName="Development" />
          <SigCard sigName="DSA/CP" />
          <SigCard sigName="AI/ML" />
          <SigCard sigName="Finance" />
          <SigCard sigName="Data Analysis" />
        </div>
      </div>
      <div className="h-full w-full absolute z-[2] bg-[#1f0909]/[0.5]"></div>
      <img
        src="/assets/images/sig-bg.jpg"
        alt="SIG Background Image"
        className=" object-cover     mt-7 rounded-lg"
      /> */}
    </Layout>
  );
};

export default About;
