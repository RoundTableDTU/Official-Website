import { FaTimes } from "react-icons/fa";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

type Props = {
  event: {
    image: string;
    title: string;
    location: string;
    date: string;
    speakers: string[];
    description: string;
  };
  nonce: number;
};

const EventPageCard = (props: Props) => {
  const [showModal, setShowModal] = React.useState(false);
  //stop scroll when modal is open
  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showModal]);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 60 },
        }}
        ref={ref}
        className="max-w-sm bg-black px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 justify-center mx-auto"
      >
        {/* <h3 className="mb-6 text-lg md:text-2xl w-auto text-center font-bold text-primary-orange h-12 align-middle">{props.event.title}</h3> */}
        <div className="relative ">
          <Image
            width={290}
            height={300}
            className="w-full h-full md:h-[200px] xl:h-[300px] object-cover"
            src={props.event.image}
            alt="Colors"
          />
        </div>
        <div className="w-full h-auto text-sm lg:text-base lg:py-2 px-2 py-1 my-4 rounded-lg font-semibold text-center bg-primary-orange">
          Speaker:<p className="font-bold text-xl">{props.event.speakers}</p>
        </div>
        <div className="my-4">
          <div className="flex flex-row">
            <div className="flex space-x-1 flex-start mb-1 w-full">
              <div className="text-gray-800 font-semibold justify-start flex flex-row">
                <img
                  src="/assets/images/location.png"
                  alt=""
                  className="h-8 w-auto"
                />
                <p className="text-white my-auto mx-1 font-base">
                  {props.event.location}
                </p>
              </div>
            </div>
            <div className="flex space-x-1 flex-end mb-1 md:-ml-1 w-full">
              <span className="my-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="m-auto">{props.event.date}</p>
            </div>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 text-xl w-full text-white shadow-primary-orange py-2 rounded-base shadow-md"
          >
            Know More
          </button>
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed w-screen h-[100vh]  bottom-0 left-0 z-[999] flex items-center justify-center bg-white bg-opacity-10 backdrop-blur-md overflow-y-hidden">
          <div className="bg-white rounded-lg shadow-l z-[999] p-4 pt-0 md:pt-0 md:p-6 max-w-[250px] max-h-[400px] md:max-w-3xl md:max-h-[500px] overflow-auto relative  w-full">
            <div className=" flex justify-between py-3 bg-white top-0 right-0">
              <p className="text-xl font-semibold">Know More</p>
              <button
                className="text-gray-600  hover:text-gray-800"
                onClick={() => setShowModal(false)}
              >
                <FaTimes className="text-primary text-3xl hover:text-primary-orange" />
              </button>
            </div>
            <p className="xl:text-sm 2xl:text-lg text-black">
              {props.event.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default EventPageCard;
