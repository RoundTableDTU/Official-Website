import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from "framer-motion";
import Image from "next/image"
import Link from "next/link"

type Props = {
  member: {
    name: string;
    position: string;
    image: string;
    linkedin: string;
    instagram: string;
  };
};

const CouncilMemberCard = (props: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="grid rounded-xl">
      <div className="relative group">
        <div className="absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <motion.div ref={ref}
          animate={controls}
          initial="hidden"
          transition={{ duration: 0.4 }}
          variants={{
            visible: { scale: 1 },
            hidden: { scale: 0.8 },
          }} className="shadow-md shadow-primary-orange relative p-2 md:p-5 text-white bg-black rounded-lg leading-none min-h-full flex flex-col items-center gap-2">
          <Image
            src={props.member.image}
            width={400}
            height={600}
            alt={"council member image"}
            className="rounded-t-lg md:w-[200px] w-[200px] h-[240px] md:h-[300px] object-cover"
          />

          <h2 className="text-lg font-semibold py-2 text-center">{props.member.name}</h2>
          <h3 className="text-base py-1 font-medium w-4/5 text-center bg-primary-orange text-black rounded-xl px-4 lg:text-lg ">
            {props.member.position}
          </h3>
          {/* <p className="text-center text-base p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, cum!</p> */}
          <div className="grid grid-cols-2 gap-x-3 mt-2">
            <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
              <Link href={props.member.linkedin}>
                <Image
                  src={"/assets/logos/linkedinLogoOrangeGradient.svg"}
                  width={70}
                  height={70}
                  alt={"linkedin logo"}
                  className="text-white"
                /></Link>
            </button>
            <button className=" rounded-full w-14 h-14 bg-primary-black  flex items-center justify-center">
              <Link href={props.member.instagram}>
                <Image
                  src={"/assets/logos/instagramLogoOrangeGradient.svg"}
                  width={70}
                  height={70}
                  alt={"linkedin logo"}
                  className="text-white"
                />
              </Link>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CouncilMemberCard;
