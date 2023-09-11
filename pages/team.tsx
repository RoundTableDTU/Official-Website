import React, { useState, useEffect } from "react";
import Head from "next/head";
import CouncilMemberCard from "../components/CouncilMemberCard";
import Layout from "../components/Layout";
import { councilMembers } from "../utility/councilMembers";
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";

type Props = {};

const CouncilInfo = ({ councilMembersToggle }: { councilMembersToggle: string }) => {
  const councilInfo = () => {
    if (councilMembersToggle === "seniorCouncil") {
      return councilMembers.seniorCouncil.map((member, index) => (
        <CouncilMemberCard member={member} key={index} />
      ));
    } else if (councilMembersToggle === "juniorCouncil") {
      return councilMembers.juniorCouncil.map((member, index) => (
        <CouncilMemberCard member={member} key={index} />
      ));
    }
  };

  return (
    <div className="max-w-screen-xl grid grid-cols-2 gap-x-7 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4  md:gap-x-8 md:gap-y-10 lg:gap-10 px-4">
      {councilInfo()}
    </div>
  );
};

const Team = (props: Props) => {
  const [councilMembersToggle, setCouncilMembersToggle] =
    useState<string>("juniorCouncil");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const councilToggleButtons = (
    <>
      <button
        className={`border-2 ${councilMembersToggle === "seniorCouncil"
          ? `border-primary-orange border-4 `
          : `border-muted-orange border-2`
          }  rounded-md text-base px-3 md:px-6 py-4 md:text-xl`}
        onClick={() => setCouncilMembersToggle("seniorCouncil")}
      >
        Senior Council
      </button>
      <button
        className={`border-2 ${councilMembersToggle === "juniorCouncil"
          ? `border-primary-orange border-4 `
          : `border-muted-orange border-2`
          }  rounded-md text-base px-3 md:px-6 py-4 md:text-xl`}
        onClick={() => setCouncilMembersToggle("juniorCouncil")}
      >
        Junior Council
      </button>
    </>
  );

  return (
    <Layout>
      <Head>
        <title>RoundTable DTU</title>
      </Head>
      <div className=" pt-8 flex flex-col gap-16 pb-8 justify-center items-center">
        <div className="flex gap-6 items-center px-5 justify-center">
          {councilToggleButtons}
        </div>
        <CouncilInfo councilMembersToggle={councilMembersToggle} key={councilMembersToggle} />
      </div>
    </Layout>
  );
};

export default Team;

