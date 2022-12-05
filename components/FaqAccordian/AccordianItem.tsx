import React, { useState } from "react";

type Props = {
  item: {
    title: string;
    content: string;
  };
};

const AccordianItem = (props: Props) => {
  const [toggleAccordian, seTtoggleAccordian] = useState(false);
  return (
    <div
      className={`rounded-lg w-full cursor-pointer flex flex-col gap-1`}
      onClick={() => seTtoggleAccordian(!toggleAccordian)}
    >
      <div className="flex justify-between gap-8 w-full items-center py-4 border-t-[1px] border-white px-8">
        <div className="flex gap-8 items-center">
          <button className="rounded-full w-8 aspect-square bg-primary-orange text-primary-black text-lg font-bold">
            ?
          </button>
          <h1 className="text-3xl">{props.item.title}</h1>
        </div>
        <div>
          <svg
            data-accordion-icon
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className={`${
              toggleAccordian ? `rotate-180` : ``
            } aspect-square w-10 text-primary-orange`}
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`${
          toggleAccordian ? `block` : `hidden`
        } border-[1px] border-primary-orange rounded-sm p-6 transition-all`}
      >
        <p className="text-lg">{props.item.content}</p>
      </div>
    </div>
  );
};

export default AccordianItem;
