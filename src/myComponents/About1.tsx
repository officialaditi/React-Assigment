import { IoArrowForwardCircleSharp } from "react-icons/io5";
const About1 = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <div className="bg-[#FFF9DA] w-[1001.95px] h-[470.41px] rounded-3xl grid grid-cols-2 ">
          <div className="w-[518.58px] h-[254.23px] relative mt-16">
            <img
              src="./public/building.jpg"
              alt="academy-space"
              className="rounded-[25px] object-cover absolute right-44 shadow-[10px_10px_#FDDF49] "
            />
          </div>
          <div className="w-[518.58px] h-[354.23px] mt-16 flex flex-col gap-2 px-4">
            <span className="font-normal text-2xl uppercase">about</span>
            <h1 className="uppercase font-bold text-3xl text-blue-900">
              Universal High School
            </h1>
            <p>
              Universal High School, Dahisar equips every student with the right
              attitude and skills to help them find their unique place in the
              world by providing a wholesome and ever-evolving learning
              environment. So that they can fearlessly pursue a better tomorrow.
              In line with this mission, Universal is launching the best IIT
              JEE/ NEET test prep program powered by PACE IIT & MEDICAL. PACE
              IIT & Medical is India’s best IIT JEE/ NEET test prep program and
              has helped more than xxx+ students prepare for IIT JEE and xxx
              students in NEET for the last few years.
            </p>
            <div>
              <button className="bg-[#292967] my-3 flex justify-center items-center gap-3 text-white p-4 rounded-full">
                Enquire Now{" "}
                <IoArrowForwardCircleSharp className="size-6 text-yellow-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About1;
