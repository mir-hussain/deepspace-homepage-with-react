import React, { useEffect, useRef } from "react";
import Logo from "../assets/images/logo.svg";
import { gsap } from "gsap";

const Navbar = () => {
  let navRef = useRef(null);

  useEffect(() => {
    gsap.to(navRef, { opacity: 0 });
  }, []);

  return (
    <header
      ref={(el) => {
        navRef = el;
      }}
      className='sticky top-0 z-20'
    >
      <nav className='navbar flex justify-center items-center relative z-50 gap-16 h-16 text-white text-lg font-medium'>
        <img className='h-7 cursor-pointer' src={Logo} alt='' />
        <ul className='flex gap-8'>
          <li className='cursor-pointer'>Products</li>
          <li className='cursor-pointer'>Enterprise</li>
          <li className='cursor-pointer'>Pricing</li>
          <li className='cursor-pointer'>Resources</li>
          <li className='cursor-pointer'>Company</li>
          <li className='cursor-pointer'>Jobs</li>
        </ul>
        <ul className='flex items-center gap-8'>
          <li className='cursor-pointer'>Log in</li>
          <li className='cursor-pointer bg-green px-3 py-1 rounded-sm text-dark'>
            Sign up
          </li>
        </ul>
      </nav>
      <div className='navbar-background bg-black bg-opacity-50 backdrop-blur-md h-16 w-full absolute top-0'></div>
    </header>
  );
};

export default Navbar;
