import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = (props: Props) => {
  return (
    <>
    <div
      className={`w-full flex flex-col items-center bg-primary-black text-white py-4 gap-10 font-poppins`}
    >
      <Navbar />
      <div className={`w-full h-full ${props.className}`}>{props.children}</div>
      
    </div>
    <Footer/>
    </>
    
  );
};

export default Layout;

  

