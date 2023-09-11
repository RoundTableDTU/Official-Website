import React, { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
// import "./ParallaxEffectGlareScale.demozap.scss";
// import "./ParallaxEffect.demozap.scss";

interface Props {
  imgSrc: string;
  title: string;
  subTitle: string;
  link: string;
}

export default function ProjectCard(props: Props) {
  return (
    // @ts-ignore
    <Link href={props.link}>
      <Tilt
        className="parallax-effect-glare-scale"
        perspective={2000}
        glareEnable={true}
        glareMaxOpacity={0.4}
        glareColor="lightblue"
        glarePosition="all"
        scale={1.05}
      >
        <div
          className={`border-[3px] border-orange-500 shadow-md shadow-orange-400 text-white grid grid-cols-12  h-full md:scale-100  mx-auto text-center    mt-5 `}
        >
          <div className="col-span-12">
            <div className="md:w-[100%] md:h-[40vh] h-[250px]flex">
              <img
                src={props.imgSrc}
                alt="brand logo"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className=" col-span-12 space-y-5 py-2  px-6 md:pr-5 ">
            <h3
              className={`text-3xl font-kanit  font-semibold text-yellow-400 flex items-center justify-center`}
            >
              {props.title}
            </h3>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}

// <div className=" border border-orange-500   mx-auto rounded-[8px] my-5 lg:my-16 tilt4 hover:scale-110 duration-300 ease-in  ">
//   <div className=" py-10 pt-16 no-tilt no-tilt4 border-orange-500 border bg-white-imp h-full">
//     <div className=" flex items-center justify-center h-[200px] mb-3">
//       <Image
//         src={props.imgSrc}
//         height={200}
//         width={300}
//         alt="brand logo"
//         className="p-5"
//       />
//     </div>
//     <div className="md:col-span-7 space-y-5  px-6 md:pr-5 text-black">
//       {/* <h1 className="text-5xl font-kanit pt-5 font-bold text-red-700 text-center">
//           {props.name}
//         </h1> */}
//       <h3 className="text-2xl font-kanit  font-semibold">{props.title}</h3>
//       <p className="text-md font-molengo font-medium">{props.subTitle}</p>
//     </div>
//   </div>
// </div>;
