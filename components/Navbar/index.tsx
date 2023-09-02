import React, { useState } from "react";
import ActiveLink from "./ActiveLink";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className=" w-full main-navbar p-2">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo on the left */}
        <Link href="/" className="text-white text-2xl font-bold">
            <Image
              src="/assets/images/rtlogo.png"
              width={100}
              height={100}
              alt="round table logo png"
              className="w-24 h-24 sm:w-28 sm:h-28 relative bottom-1"
            />
          
        </Link>

        {/* Hamburger Menu Button on the right */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? "" : <svg className="block w-7 relative right-2 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
				</svg>
            }
          </button>
        </div>
        <div className="hidden text-xl lg:flex lg:space-x-6">
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
          <ActiveLink href="/events">Events</ActiveLink>
          <ActiveLink href="/team">Team</ActiveLink>
        </div>

        {/* Mobile Menu Sidebar */}
        {mobileMenuOpen && (
          <div className="fixed z-20 inset-0 bg-black w-64 py-4 px-6 text-white">
            <div className="flex flex-col text-lg gap-y-6 items-start">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-3xl focus:outline-none mb-4"
              >
                ✕
              </button>
              <ActiveLink href="/">Home</ActiveLink>
              <ActiveLink href="/about">About</ActiveLink>
              <ActiveLink href="/events">Events</ActiveLink>
              <ActiveLink href="/team">Team</ActiveLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
