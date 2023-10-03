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
    <Link href={props.link} target="_blank">
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
              <Image
                src={props.imgSrc}
                alt="brand logo"
                height={500}
                width={1000}
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className=" col-span-12 space-y-5 py-2  px-6 md:pr-5 ">
            <h3
              className={`text-3xl font-kanit  font-semibold text-orange-500 flex items-center justify-center`}
            >
              {props.title}
            </h3>
          </div>
        </div>
      </Tilt>
    </Link>
  );
}
