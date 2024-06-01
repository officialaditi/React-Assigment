import { IoArrowForwardCircleSharp } from "react-icons/io5";
const About2 = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <div className="bg-[#6767C826] w-[1000.85px] h-[470.41px] rounded-3xl flex justify-around items-center ">
          <div className="w-[518.58px] h-[354.23px] flex flex-col gap-2 ml-10">
            <span className="font-normal text-2xl uppercase">about</span>
            <h1 className="uppercase font-bold text-3xl text-blue-900">
              IIT PACE
            </h1>
            <p>
              Founded by Mr. Praveen Tyagi, for over two decades, PACE IIT &
              Medical has embarked on a remarkable journey, transforming the
              lives of students and shaping the landscape of competitive exam
              coaching. It all began in 1999, with a humble vision to bridge the
              gap between aspirations and achievements. PACE IIT & Medical has
              become synonymous with success in competitive exams and helped xxx
              students to crack IIT and xxx students to crack NEET/ Medical
              exams.
            </p>
            <div>
              <button className="bg-[#292967] my-3 flex justify-center items-center gap-3 text-white p-4 rounded-full">
                Enquire Now{" "}
                <IoArrowForwardCircleSharp className="size-6 text-yellow-400" />
              </button>
            </div>
          </div>
          <div className="w-[518.58px] h-[354.23px] relative">
            <img
              src="./public/about-us.jpg"
              alt="about-us"
              className="rounded-[25px] object-cover absolute left-44 shadow-[10px_10px_#292967]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About2;
