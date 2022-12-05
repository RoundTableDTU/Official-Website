import React from "react";
import AccordianItem from "./AccordianItem";
import { accordianText } from "../../utility/roundtableText";

type Props = {
  className?: string;
};

const renderAccordianItems = accordianText.map((item, index) => {
  return <AccordianItem key={index} item={item} />;
});

const FaqAccordian = (props: Props) => {
  return <div className={`${props.className}`}>{renderAccordianItems}</div>;
};

export default FaqAccordian;
