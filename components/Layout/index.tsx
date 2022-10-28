import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-evenely bg-primary-black text-white p-4">
      <Navbar />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
{
  /* <Footer /> */
}
