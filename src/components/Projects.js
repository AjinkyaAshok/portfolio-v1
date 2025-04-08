
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
// import Image from "next/image";

export default function Projects() {
  const content = [
    {
      title: "Collaborative Editing",
      description:
        "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Collaborative Editing
        </div>
      ),
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          {/* <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          /> */}
        </div>
      ),
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
          Version control
        </div>
      ),
    },
    {
      title: "Running out of content",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
      content: (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
          Running out of content
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="w-full py-4 ">
        <StickyScroll content={content} />
      </div>

      {/* {" "}
      <section>
        <div>
          <h1 className="text-3xl mt-36 mb-10 text-white">
            SELECTED <span className="text-[#737373]">PROJECTS</span>
          </h1>
        </div>

        <div className="text-white flex flex-wrap justify-around gap-y-10 ap-10  ">
          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <a
              href="https://dashdine.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="absolut " src={dashdineBanner} alt="" />
            </a>

            <div className="flex justify-between">
              <h1 className="">DASHDINE</h1>
              <h1>FOOD DELIVERY - 2024</h1>
            </div>
          </div>

          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <a
              href="https://cssstudio.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-96" src={cssBanner} alt="" />
            </a>
            <div className="flex justify-between">
              <h1>CSS STUDIO</h1>
              <h1>SHOWCASE - 2023</h1>
            </div>
          </div>

          <div className="relativ space-y-2 hover:scale-95 w-96 duration-300 transition-transform ease-in-out">
            <a
              href="https://dashdine.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-96" src={gymBanner} alt="" />
            </a>
            <div className="flex justify-between">
              <h1>GYM PORTAL</h1>
              <h1>BRANDING - 2023</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-y-14 h-screen text-white text-center justify-center">
        <section 
        // ref={contactRef}
        >
          <div className="mx-auto lg:w-1/3 md:w-1/3 w-1/2 overflow-hidden text-white mt-16">
            <div className="flex lg:animate-[move_6s_linear_infinite] md:animate-[move_6s_linear_infinite] animate-[move_3s_linear_infinite] ">
              <div className="whitespace-nowrap  text-[#a7a6a6]">
                AVAILABLE FOR WORK ・ AVAILABLE FOR WORK ・ AVAILABLE FOR WORK
                ・ AVAILABLE FOR WORK ・ AVAILABLE FOR WORK ・ AVAILABLE FOR
                WORK ・
              </div>
            </div>
          </div>
        </section>
        <h1 className="tracking-tighter sm:text-5xl md:text-7xl lg:text-[150px] text-5xl  font-bebas font-semibold ">
          LET'S <span className="text-[#737373]">CONNECT</span>
        </h1>
        <h1 className="text-[#a7a6a6]">
          CONTACT ME TODAY AND LET'S BRING YOUR VISION TO LIFE!
        </h1>
        <a
          href="mailto:ajinkyaashokghate@gmail.com?subject="
          target="_blank"
          rel="noreferrer"
        >
          <button>[ GET IN TOUCH ]</button>
        </a>
      </section> */}
    </div>
  );
}
