import React from "react";
import { RxDividerVertical } from "react-icons/rx";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const Hero1Left = () => {
  return (
    <div className="bg-transparent text-left md:items-start flex items-center gap-3 md:gap-6 flex-col md:w-1/2 w-full  mt-7">
      <div className="flex items-center flex-col">
        <span className="uppercase font-semibold text-lg md:text-2xl">
          Kickstart Your
        </span>
        <span className="uppercase font-bold text-3xl md:text-5xl text-blue-900">
          IIT JEE/NEET Test Prep
        </span>
      </div>
      <img
        src="public\header\pace-logo-png-1.png"
        className="h-14 mx-auto md:mx-0 md:ml-52"
      />
      <div className="flex gap-4 items-center mt-4">
        <span className="font-semibold text-blue-900 text-xl">
          ADMISSIONS OPEN
        </span>
        <Button className="rounded-full bg-blue-900 py-3 flex gap-2 px-3 text-white">
          <IoArrowForwardCircleSharp className="size-5 text-yellow-400" />
          Enquire Now
        </Button>
      </div>
      <div className="flex md:flex-col gap-3">
        <div className="flex gap-4 items-center my-2">
          <img src="public\hero1\icon1.png" className="size-10" />
          <div className="flex flex-col w-auto text-md md:text-lg font-bold">
            <span>Batch Starts From 3rd April '24</span>
          </div>
        </div>
        <div className="flex gap-4 items-center my-2">
          <img src="public\hero1\icon1.png" className="size-10" />
          <div className="flex flex-col w-auto text-md md:text-lg font-bold">
            <span>Scholarship Test 23rd March '24</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1Left;
