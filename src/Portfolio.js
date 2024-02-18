import React, { useRef } from "react";
import MainImage from "./passport.jpg";
import dashdineBanner from "./dashdine-banne.png";

const Portfolio = () => {
  const contactRef = useRef(null);
  const workRef = useRef(null);
  const scrollContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollWork = () => {
    workRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="relative h-full w-full bg-[#0D0D0D] px-4 py-8 sm:px-3 md:px-8 lg:px-8">
      <header className="flex justify-between text-white items-center">
        <h1 className="font-medium text-lg">AJINKYA ASHOK</h1>
        {/* <ul className="flex gap-x-2 lg:gap-x-4 md:gap-x-4 sm:gap-x-2  text-sm font-medium">
          <li>
            <a href="google.com">ABOUT</a>
          </li>
          <li>
            <a href="google.com">WORK</a>
          </li>
          <li>
            <a href="google.com">CONTACT</a>
          </li>
        </ul> */}
        <div className="flex text-base flex-row gap-x-4">
          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">ABOUT</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              ABOUT
            </p>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">WORK</p>

            <button onClick={scrollWork} className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              WORK
            </button>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">CONTACT</p>

            <button onClick={scrollContact} className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              CONTACT
            </button>
          </div>
        </div>
      </header>

      <section>
        <div class="mx-auto lg:w-1/3 md:w-1/3 w-1/2 overflow-hidden text-white mt-16">
          <div class="flex lg:animate-[move_6s_linear_infinite] md:animate-[move_6s_linear_infinite] animate-[move_3s_linear_infinite] ">
            <div class="whitespace-nowrap  text-[#a7a6a6]">
              UI/UX ・ REACT JS ・ BRANDING ・ WEB ・ UI/UX ・ REACT JS ・
              BRANDING ・ WEB ・ UI/UX ・ REACT JS ・ BRANDING ・ WEB
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center p-10">
        <div className="flex flex-col animate-[wiggle_5s_linear_infinite] tracking-tighter text-right font-bebas left- right- sm:text-5xl md:text-7xl lg:text-[160px] text-6xl">
          <h1 className="text-white font-semibold">FRONTEND</h1>
          <h1 className="text-[#737373] font-semibold">DEVELOPER</h1>
        </div>
        <img
          className=" shadow-white nimate-[wiggle_2s_linear_infinite]  lg:w-52 md:w-36 sm:w-32 w-14"
          src={MainImage}
          alt=""
        />
      </section>

      <section className="flex flex-col gap-y-3 text-lg text-center mt-12 text-white lg:px-96">
        <p>Hello</p>
        <p className="w-auto flex-grow">
          I'm Ajinkya Ashok, a skilled frontend developer dedicated to crafting
          visually captivating and responsive user interfaces. With expertise in
          HTML, CSS, and JavaScript, coupled with a strong design sensibility, I
          strive to deliver outstanding user experiences. My history showcases
          successful collaborations with diverse teams to realize innovative web
          solutions.
        </p>
      </section>

      <footer className="text-[#FBFBFB] text-lg mt-36 flex justify-between items-center">
        <h1 className="">2020 - PRESENT</h1>

        <div className="flex text-base flex-row gap-x-4">
          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">LINKEDIN</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              <a href="https://www.linkedin.com/in/ajinkyaa/" target="_blank" rel="noreferrer">LINKEDIN</a>
            </p>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">GITHUB</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              <a href="https://github.com/AjinkyaAshok" target="_blank" rel="noreferrer">GITHUB</a>
            </p>
          </div>

          <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
            <p className="">MEDIUM</p>

            <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
              <a href="https://medium.com/@ajinkyaashokghate/i-fought-5404e126f065" target="_blank" rel="noreferrer">
                MEDIUM
              </a>
            </p>
          </div>
        </div>
      </footer>

      <section ref={workRef}>
        <div>
          <h1 className="text-3xl mt-36 mb-10 text-white">
            SELECTED <span className="text-[#737373]">PROJECTS</span>{" "}
          </h1>
        </div>

        <div className="text-white flex flex-wrap justify-around gap-y-10 ap-10  ">
          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <img className="absolut " src={dashdineBanner} alt="" />

            <div className="flex justify-between">
              <h1 className="hover:translate-y-5">DASHDINE</h1>
              <h1>FOOD DELIVERY - 2023</h1>
            </div>
          </div>

          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <img className="w-96" src={MainImage} alt="" />
            <div className="flex justify-between">
              <h1>OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>

          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <img className="w-96" src={MainImage} alt="" />
            <div className="flex justify-between">
              <h1>OUTDOOR</h1>
              <h1>BARANDING - 2023</h1>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef} className="flex flex-col gap-y-14 h-screen text-white text-center justify-center">
        <h1>GOT A PROJECT IN MIND?</h1>
        <h1 className="tracking-tighter sm:text-5xl md:text-7xl lg:text-[150px] text-5xl  font-bebas font-semibold ">
          LET'S <span className="text-[#737373]">CONNECT</span>
        </h1>
        {/* 
        <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
          <p>
            [ <span className=""> GET IN TOUCH </span>]
          </p>

          <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
           <span> GET IN TOUCH</span> [ ]
          </p>
        </div> */}
        <h1>[ GET IN TOUCH ]</h1>
      </section>

      <footer className="flex justify-between items-center">
        <ul className="text-white flex gap-4  text-sm font-medium">
          <li>
            <a href="google.com">HOME</a>
          </li>
        </ul>

        <div className="flex flex-col gap-2 text-center text-white">
          <h1>
            DESIGN BY{" "}
            <span className="text-[#737373] hover:text-white ">
              AJINKYA ASHOK
            </span>
          </h1>
        </div>

        <ul className="text-white flex gap-4  text-sm font-medium">
          <li>
            <a href="google.com">HOME</a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Portfolio;
