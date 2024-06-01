import React from "react";
import { Button } from "@/components/ui/button";
import Card1 from "./Card1";

const LearningApproach = () => {
  return (
    <div className="md:mx-40 md:px-20 px-6 w-auto bg-hero-map bg-cover bg-center py-12  flex flex-col h-auto gap-4 justify-center items-center rounded-3xl md:rounded-[50px]">
      <div className="text-xl flex flex-col gap-1 text-center ">
        <span className="text-white">OUR</span>
        <span className="text-yellow-300 uppercase font-bold ">
          Learning Approach
        </span>
      </div>

      <div className="grid md:grid-cols-5  my-8 w-full justify-center grid-cols-2 last:bg-yellow-200">
        <Card1
          img="./hero1/iconb1.png"
          content="Classes are conducted during school hours on school premises"
        />
        <Card1
          img="./hero1/iconb2.png"
          content="Classes are conducted during school hours on school premises"
        />
        <Card1
          img="./hero1/iconb3.png"
          content="Classes are conducted during school hours on school premises"
        />
        <Card1
          img="./hero1/iconb1.png"
          content="Classes are conducted during school hours on school premises"
        />
        <Card1
          img="./hero1/iconb4.png"
          content="Classes are conducted during school hours on school premises"
        />
      </div>
      <Button size={"lg"} className="rounded-full bg-yellow-400 text-black">
        Enquire Now
      </Button>
    </div>
  );
};

export default LearningApproach;
