import React from "react";
import Logo from "../assets/images/logo.svg";
const Navbar = () => {
  return (
    <header class='sticky top-0 z-20'>
      <nav class='navbar flex justify-center items-center relative z-50 gap-16 h-16 text-white text-lg font-medium'>
        <img class='h-7 cursor-pointer' src={Logo} alt='' />
        <ul class='flex gap-8'>
          <li class='cursor-pointer'>Products</li>
          <li class='cursor-pointer'>Enterprise</li>
          <li class='cursor-pointer'>Pricing</li>
          <li class='cursor-pointer'>Resources</li>
          <li class='cursor-pointer'>Company</li>
          <li class='cursor-pointer'>Jobs</li>
        </ul>
        <ul class='flex items-center gap-8'>
          <li class='cursor-pointer'>Log in</li>
          <li class='cursor-pointer bg-green px-3 py-1 rounded-sm text-dark'>
            Sign up
          </li>
        </ul>
      </nav>
      <div class='navbar-background bg-black bg-opacity-50 backdrop-blur-md h-16 w-full absolute top-0'></div>
    </header>
  );
};

export default Navbar;
