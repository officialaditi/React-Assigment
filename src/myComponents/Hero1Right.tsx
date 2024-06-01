import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Hero1Right = () => {
  const [logicalOps, setLogicalOps] = useState("father");
  return (
    <div className="h-auto ring-1 ring-slate-200  flex flex-col items-center bg-white rounded-2xl">
      <div className="bg-yellow-400 w-full text-center py-3 rounded-t-2xl font-bold">
        ENQUIRE NOW!
      </div>
      <div className="flex justify-around items-center gap-5 mt-7">
        <h1>Academic Year</h1>
        <button className="bg-blue-900 text-white py-2 px-12 rounded-md">2024-2026</button>
      </div>
      <div className="px-3 py-2 mt-4 flex flex-col gap-5">
        <div className=" flex gap-5 items-center">
          <span className="w-40">Your Relationship with Child</span>
          <div className="w-auto flex">
            <button
              className={classNames(
                logicalOps === "father"
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-black",
                "w-auto text-center px-3 py-2 "
              )}
              onClick={() => {
                setLogicalOps("father");
              }}
            >
              Father
            </button>
            <button
              className={classNames(
                logicalOps === "mother"
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-black",
                "w-auto   px-3 py-2 text-center"
              )}
              onClick={() => {
                setLogicalOps("mother");
              }}
            >
              Mother
            </button>
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <span>Child’s First Name </span>
            <Input placeholder="Type Here" />
          </div>
          <div>
            <span>Child’s Last Name </span>
            <Input placeholder="Type Here" />
          </div>
        </div>
        <div className="flex gap-3">
          <div>
            <span>Your First Name </span>
            <Input placeholder="Type Here" />
          </div>
          <div>
            <span>Your Last Name </span>
            <Input placeholder="Type Here" />
          </div>
        </div>
        <div>
          <span>Course Applying For </span>
          <Input placeholder="Choose course" />
        </div>
        <div>
          <span>Mobile No </span>
          <Input placeholder="+91 | Enter you Mobile Number" type="" />
        </div>
        <div>
          <span>Email Address </span>
          <Input placeholder="yourname@exampl.com" type="text" />
        </div>
      </div>
      <div className="my-8">
        <Button className="rounded-full bg-blue-900 py-3 flex gap-2 px-3 text-white">
          Enquire Now
        </Button>
      </div>
    </div>
  );
};

export default Hero1Right;
