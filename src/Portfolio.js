import React from "react";
import MainImage from "./passport.jpg";
// import { motion, useScroll } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="relative h-full w-full bg-[#0D0D0D] px-8 py-10">
      <header className="flex justify-between text-white items-center">
        <h1 className="font-medium text-lg">AJINKYA ASHOK</h1>
        <ul className="flex gap-x-4  text-sm font-medium">
          <li>
            <a href="google.com">ABOUT</a>
          </li>
          <li>
            <a href="google.com">WORK</a>
          </li>
          <li>
            <a href="google.com">CONTACT</a>
          </li>
        </ul>
      </header>

      <section>
        <div class="mx-auto lg:w-1/3 md:w-1/3 w-1/2 overflow-hidden text-white mt-16">
          <div class="flex lg:animate-[move_6s_linear_infinite] md:animate-[move_6s_linear_infinite] animate-[move_3s_linear_infinite] ">
            <div class="whitespace-nowrap  text-[#a7a6a6]">
              UI/UX DEVELOPEMENT ・ REACT JS ・ BRANDING ・ WEB ・ UI/UX
              DEVELOPEMENT ・ REACT JS ・ BRANDING ・ WEB ・ UI/UX DEVELOPEMENT
              ・ REACT JS ・ BRANDING ・ WEB
            </div>
          </div>
        </div>
      </section>

      <section className="items-cente p-8">
        <div className="flex flex-col font-bebas absolute left-0 right-0 sm:text-5xl md:text-7xl lg:text-[150px] text-5xl ">
          <h1 className="absolut text-white text-center font-semibold">
            FRONTEND
          </h1>
          <h1 className="absolut  text-[#737373]  text-center font-semibold">
            DEVELOPER
          </h1>
        </div>
        <img
          className="relative shadow-white animate-[wiggle_5s_linear_infinite] mx-auto lg:pt-64 md:pt-32 sm:pt-20 pt-20 md:w-80 sm:w-52 lg:w-auto w-52"
          src={MainImage}
          alt=""
        />
      </section>
      <section className="flex flex-col gap-y-3 text-lg text-center text-white lg:px-96">
        <p>Hello</p>
        <p className="w-auto flex-grow">
          I'm Klaus Wahlberg, Digital Designer transforming concepts into
          digital masterpieces. Passionate visual storyteller bridging
          imagination and reality creating engaging and memorable designs.
        </p>
      </section>
      <footer className="text-[#FBFBFB] text-lg mt-36 flex justify-between items-center">
        <h1 className="">2020 - PRESENT</h1>

        <div className="flex flex-row gap-x-4">
          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">LINKED</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              LINKED
            </p>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">LINKED</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              LINKED
            </p>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">LINKED</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              LINKED
            </p>
          </div>
        </div>
      </footer>
      <section>
        <div>
          <h1 className="text-3xl mt-36 mb-10 text-white">
            SELECTED <span className="text-[#737373]">PROJECTS</span>{" "}
          </h1>
        </div>

        <div className=" text-white flex flex-wrap justify-between gap-10 ">
          <div className="relative">
            <img
              className="hover:scale-95 transition ease-linear"
              src={MainImage}
              alt=""
            />
            <button className="absolute text-red-300 hover:text-white">
              Project
            </button>
            <div className="flex justify-between">
              <h1 className="hover:translate-y-5">OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>
          <div>
            <img src={MainImage} alt="" />
            <div className="flex justify-between">
              <h1>OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>
          <div>
            <img src={MainImage} alt="" />
            <div className="flex justify-between">
              <h1>OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>
          <div>
            <img src={MainImage} alt="" />
            <div className="flex justify-between">
              <h1>OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-y-14 h-screen text-white text-center justify-center">
        <h1>GOT A PROJECT IN MIND?</h1>
        <h1 className="sm:text-5xl md:text-7xl lg:text-[150px] text-5xl  font-bebas">
          LET'S <span className="text-[#737373]">CONNECT</span>
        </h1>
        <h1>[ GET IN TOUCH ]</h1>
      </section>

      <section className="flex justify-between items-center">
        <ul className="text-white flex gap-4  text-sm font-medium">
          <li>
            <a href="google.com">HOME</a>
          </li>
        </ul>

        <div className="flex flex-col gap-2 text-white">
          <h1>KLAUS TEMPLATE</h1>
          <h1>KLAUS TEMPLATE</h1>
        </div>

        <ul className="text-white flex gap-4  text-sm font-medium">
          <li>
            <a href="google.com">HOME</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Portfolio;
