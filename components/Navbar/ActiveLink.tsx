import React from "react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
  href: string;
};

function ActiveLink({ children, href }: Props) {
  const router = useRouter();

  (function prefetchPages() {
    if (typeof window !== "undefined") {
      router.prefetch(router.pathname);
    }
  })();
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
    paddingLeft: "1rem",
    paddingRight: "1rem",
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
