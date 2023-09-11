import React from "react";
import ProjectCard from "./ProjectCard";
import data from "./data";

export default function Projects() {
  // const records = data.map((item, index) => {
  //   return index % 2 === 0 ? (
  //     <div className="grid grid-cols-12 " key={index}>
  //       <div className="lg:col-span-9 col-span-12">
  //         <ProjectCard
  //           imgSrc={item.image}
  //           title={item.title}
  //           subTitle={item.desc}
  //         />
  //       </div>
  //       <div className="lg:col-span-3"></div>
  //     </div>
  //   ) : (
  //     <div className="grid grid-cols-12" key={index}>
  //       <div className="lg:col-span-3"></div>
  //       <div className="lg:col-span-9 col-span-12">
  //         <ProjectCard
  //           imgSrc={item.image}
  //           title={item.title}
  //           subTitle={item.desc}
  //         />
  //       </div>
  //     </div>
  //   );
  // });

  const firstRecord = data.first.map((item, index) => {
    return (
      <div className="" key={index}>
        <ProjectCard
          imgSrc={item.image}
          title={item.title}
          subTitle={item.desc}
          link={item.link}
        />
      </div>
    );
  });
  const secondRecord = data.second.map((item, index) => {
    return (
      <div className="" key={index}>
        <ProjectCard
          imgSrc={item.image}
          title={item.title}
          subTitle={item.desc}
          link={item.link}
        />
      </div>
    );
  });

  return (
    <section
      id="results"
      className="max-w-screen-xl lg:mx-auto  text-white bg-black py-10 lg:py-16 px-3 md:px-5 projects-scrollbar"
    >
      <h1 className=" text-3xl md:text-7xl font-bold font-kanit mb-3 md:my-5">
        Our <span className="hero-text text-primary-orange">Projects</span>
      </h1>
      <h3 className="text-2xl md:text-5xl font-semibold md:pt-10 pt-5 pb-0 md:pb-3 ">
        Here are some{" "}
        <span className="hero-text text-primary-orange font-bold">
          Pro-Bono Projects
        </span>{" "}
        from corporate field
      </h3>
      <div className="grid md:grid-cols-2  gap-5 items-end  lg:gap-6">
        {firstRecord}
      </div>
      <h3 className="text-2xl md:text-5xl font-semibold md:pt-32 pt-12 pb-0 md:pb-3">
        Some{" "}
        <span className="hero-text text-primary-orange font-bold">
          Academic Projects
        </span>
      </h3>
      <div className="grid md:grid-cols-2  gap-5 items-end  lg:gap-6">
        {secondRecord}
      </div>
    </section>
  );
}
