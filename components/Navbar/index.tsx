import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import ActiveLink from './ActiveLink';

export default function Navbar() {
  const [burger, setBurger] = useState(false);
  const [dest, setDest] = useState(false);
  const [color, setColor] = useState(false);
  const mobileNavRef = useRef(null);

  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  

  useEffect(() => {
    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <nav
    className={`${
      color ? 'main-navbar fixed top-0 left-0 right-0 bg-black z-50 transition-all duration-300 ease-in-out' : ''
    } ${color ? 'h-[110px]' : 'h-[50px]'} px-10 flex w-full items-center justify-between text-gray-200 hover:text-white`}
  >
      <div className={`pb-2 pt-2 ${color ? 'scrolled-down' : ''}`}>
        <Link href='/' className='text-white text-2xl font-bold'>
          <Image
            src='/assets/images/rtlogo.png'
            width={100}
            height={100}
            alt='round table logo png'
            className={`w-24 h-24 sm:w-28 sm:h-28 -translate-x-5 relative top-4 logo ${color ? 'scrolled-down' : ''}`}
          />
        </Link>
      </div>

      <div className='hidden md:block mt-6 pr-10'>
        <ul className='flex items-center translate-x-8 text-lg space-x-10 font-medium'>
          
          <ActiveLink href='/'>Home</ActiveLink>

          <ActiveLink href='/about'>About</ActiveLink>

          <ActiveLink href='/events'>Events</ActiveLink>
          <ActiveLink href='/projects'>Projects</ActiveLink>

          <ActiveLink href='/team'>Team</ActiveLink>
        </ul>
      </div>

      <div className='md:hidden block cursor-pointer '>
        <div className={`transition-transform duration-300 ${burger ? 'rotate-45' : 'rotate-0'}`} onClick={toggleBurger}>
          {burger ? "": <AiOutlineMenu  className= 'relative  top-3 font-bold text-xl' />}
        </div>
      </div>

      {/* Mobile nav */}
      <div className={`fixed top-0 right-0 ${burger ? 'translate-x-0' : 'translate-x-full'} transition-transform font-poppins block lg:hidden duration-300 h-full w-[100vw] bg-no-repeat bg-cover bg-center`} style={{ zIndex: 28 }}>
        <div className='flex flex-col justify-center items-center bg-black/80 backdrop-blur-sm h-full w-full'>
          {/* Cross button */}
          
          <ul className='space-y-8 text-lg '>
            <div  className= 'orange-border  animate-pulse   flex max-[413px]:-translate-y-1/4 min-[414px]:-translate-y-1/2 flex-col text-center items-center bg-black/80 text-gray-200 m-auto rounded-md px-5 py-10 w-64 overflow-y-auto'>
                <div className='space-y-6  '>
                  {/* CROSS ICON */}
                <div className='self-end absolute top-0 right-0 p-4' onClick={toggleBurger}>
                  <AiOutlineClose className='font-bold  text-xl text-white' />
                </div>
                  <li>
                    <ActiveLink href='/'>Home</ActiveLink>
                  </li>

                  <li>
                    <ActiveLink href='/about'>About</ActiveLink>
                  </li>

                  <li>
                    <ActiveLink href='/events'>Events</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href='/projects'>Projects</ActiveLink>
                  </li>

                  <li>
                    <ActiveLink href='/team'>Team</ActiveLink>
                  </li>
                </div>
              
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
