import React from "react";
import { useRouter } from "next/router";

type Props = {};

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    textDecoration: "none",
    margin: 0,
    padding: 0,
    color: router.asPath === href ? "black" : "white",
    backgroundColor: router.asPath === href ? "#FF9900" : "black",
    fontWeight: router.asPath === href ? "bold" : "normal",
    borderRadius: "0.5rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    paddingLeft: "0.6rem",
    paddingRight: "0rem",
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}
export default ActiveLink;
