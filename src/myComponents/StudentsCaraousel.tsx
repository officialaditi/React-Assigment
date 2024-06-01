import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardContent, Card } from "@/components/ui/card";
import useWindowSize from "../utils/useWindowResize";

const students = ["student1", "student2", "student3", "student4", "student5"];

const StudentsCaraousel = () => {
  const size = useWindowSize();

  return (
    <div className="w-full lg:px-96 px-16 py-10 flex flex-col gap-7">
      <div className="text-start text-3xl flex flex-col">
        <span className="font-semibold">Success</span>
        <span className="font-bold">Stories</span>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full  mx-auto"
      >
        <CarouselContent>
          {students.map((student, index) => (
            <CarouselItem key={index} className="md:basis-1/2  lg:basis-1/3">
              <div>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <img
                    src={`./caraousel1/${student}.png`}
                    className="w-full h-full"
                  />
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default StudentsCaraousel;
