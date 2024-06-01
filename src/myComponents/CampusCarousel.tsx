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

const campus = ["s1", "s2", "s3"];

const CampusCarousel = () => {
  const size = useWindowSize();

  return (
    <div className="w-full bg-blue-900 h-[250.62px] mb-52 lg:px-96 px-16 py-10 flex flex-col gap-7">
      <div>
         <div className="text-start text-3xl flex flex-col">
        <span className="font-semibold">OUR</span>
        <span className="font-bold text-[#FDDF49]">CAMPUS</span>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full mx-auto"
      >
        <CarouselContent className="rounded-xl">
          {campus.map((p, index) => (
            <CarouselItem key={index}>
              <div>
                <CardContent className="flex rounded-3xl  items-center justify-center p-6">
                  <img
                    src={`./carousel2/${p}.png`}
                    className="w-full h-full rounded-2xl"
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
     
    </div>
  );
};

export default CampusCarousel;
