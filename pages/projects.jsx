// pages/myPage.tsx
import React from "react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MyPage = () => {
  return (
    <div className="bg-black py-4">
      <Navbar />
      <Projects />
      <Footer />
    </div>
  );
};

export default MyPage;
