import React from "react";

export default function Header({scrollContact,scrollWork,scrollHome}) {

  return (
    <header
    //   ref={homeRef}
      className="flex justify-between text-white items-center"
    >
      <h1 className="font-medium text-lg">AJINKYA ASHOK</h1>
      <div className="flex text-base flex-row gap-x-4">
        <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
          <p className="">ABOUT</p>

          <p className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150">
            ABOUT
          </p>
        </div>

        <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
          <p className="">WORK</p>

          <button
            onClick={scrollWork}
            className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150"
          >
            WORK
          </button>
        </div>

        <div className="relative inline-block  hover:-translate-y-5 hover:text-transparent ease-linear transition duration-150">
          <p className="">CONTACT</p>

          <button
            onClick={scrollContact}
            className="absolute bottom-0 hover:translate-y-5 hover:text-[#737373] text-transparent ease-linear transition  duration-150"
          >
            CONTACT
          </button>
        </div>
      </div>
    </header>
  );
}
