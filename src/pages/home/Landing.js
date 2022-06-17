import React from "react";
import Dashboard from "../../assets/images/dashboard.webp";

const Landing = () => {
  return (
    <>
      <section class='flex justify-center my-32 relative z-10'>
        <div class='hero-text text-center'>
          <div class='new-feature mb-10 flex justify-center'>
            <button class='bg-green-10 p-2 flex justify-center items-center rounded-full text-white font-semibold hover:brightness-150'>
              <span class='bg-green text-dark p-1 px-2 rounded-full text-sm'>
                NEW
              </span>
              <p class='mx-2'>We're now SOC 2 Type II compliant</p>
              <i class='fa-solid fa-chevron-right mr-2'></i>
            </button>
          </div>
          <h2 class='text-7xl text-white font-bold'>
            Shift-left your code <br />
            quality and security
          </h2>
          <p class='mt-6 text-white text-xl'>
            DeepSource is a modern static analysis platform, built for
            engineering teams who <br />
            move fast and don't break things.
          </p>
          <div class='mt-10'>
            <button class='bg-green py-2 mr-4 px-4 transition rounded-sm font-medium hover:brightness-75'>
              <i class='fa-solid fa-play mr-2'></i>
              Start analyzing your code
            </button>
            <button class='py-2 px-4 ml-4 text-green rounded-sm transition hover:bg-white hover:bg-opacity-10'>
              <i class='fa-solid fa-calendar mr-2'></i>
              Request demo
            </button>
          </div>
        </div>
      </section>
      <section class='hero-image-section relative z-10'>
        <img class='hero-image w-9/12 mx-auto' src={Dashboard} alt='' />
      </section>
      <div class='h-[150vh] w-full bg-radial-green absolute top-0 left-0 z-0'></div>
    </>
  );
};

export default Landing;
