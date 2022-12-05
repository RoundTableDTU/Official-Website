import React, { useState } from "react";
import CouncilMemberCard from "../components/CouncilMemberCard";
import Layout from "../components/Layout";
import { councilMembers } from "../utility/councilMembers";
type Props = {};

const Team = (props: Props) => {
  const [councilMembersToggle, setCouncilMembesrToggle] =
    useState("seniorCouncil");

  const councilToggleButtons = (
    <>
      <button
        className={`border-2 ${
          councilMembersToggle === "seniorCouncil"
            ? `border-primary-orange border-4 `
            : `border-muted-orange border-2`
        }  rounded-md px-6 py-4 text-xl`}
        onClick={() => setCouncilMembesrToggle("seniorCouncil")}
      >
        Senior Council
      </button>
      <button
        className={`border-2 ${
          councilMembersToggle === "juniorCouncil"
            ? `border-primary-orange border-4 `
            : `border-muted-orange border-2`
        }  rounded-md px-6 py-4 text-xl`}
        onClick={() => setCouncilMembesrToggle("juniorCouncil")}
      >
        Junior Council
      </button>
    </>
  );

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
    <Layout>
      <div className=" pt-16 flex flex-col gap-16 pb-8 justify-center items-center">
        <div className="flex gap-6 items-center justify-center">
          {councilToggleButtons}
        </div>
        <div className="max-w-screen-xl grid grid-cols-2 gap-x-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-16 md:gap-x-8 md:gap-y-10 lg:gap-10 px-3">
          {councilInfo()}
        </div>
      </div>
    </Layout>
  );
};

export default Team;

// className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"

// {Object.keys(councilMembers).map((counilMember, index) => {
//   return (
//     <button
//       className={`border-2 ${
//         councilMembersToggle === "seniorCouncil"
//           ? `shadow-neon-orange`
//           : `border-primary-orange`
//       }  rounded-md px-6 py-4 text-xl`}
//       key={index}
//       onClick={() => setCouncilMembesrToggle(counilMember)}
//     >
//       {counilMember}
//     </button>
//   );
// })}
