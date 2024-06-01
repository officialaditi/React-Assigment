import { RxDividerVertical } from "react-icons/rx";
const Footer = () => {
  return (
    <>
      <div className="w-auto bg-gradient-to-r from-blue-950 to-blue-900 grid lg:grid-cols-2">
        <div className="flex flex-col m-7 justify-center items-center gap-3">
          <div>
            <span className="uppercase text-center font-normal text-white text-xl">
              dahisar
            </span>
            <h1 className="uppercase font-bold text-3xl text-[#FDDF49]">
              universal high school
            </h1>
          </div>
          <div>
            <div className="mt-4 flex items-center gap-3">
              <img src="./public/icons/location.png" className="" />
              <div>
                <h1 className="uppercase font-bold text-lg text-white">
                  address
                </h1>
                <span className=" font-normal text-sm text-white">
                  Ashok Van, Shiv Vallabh Road, Dahisar East, Mumbai – 400 068
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4 flex items-center gap-3">
              <img src="./public/icons/call.png" className="" />
              <div>
                <h1 className="uppercase font-bold text-lg text-white">
                  Admissions Enquiry
                </h1>
                <span className=" font-normal text-sm text-white flex  items-center">
                  +91 224 194 7733
                  <RxDividerVertical className="size-7" />
                  <span className="font-normal text-sm text-white">
                    admissions.dahisar@universal.edu.in{" "}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className=" bg-yellow-300 text-blue-900 p-4 mt-5 rounded-full font-bold text-lg">
              Get In Touch
            </button>
          </div>
        </div>

        <div className="p-6">
          <img
            src="./public/map.png"
            alt="map img"
            className="h-[317.08px] w-[625.17px] rounded-2xl object-cover "
          />
        </div>
      </div>
      <div className="bg-black p-4 text-white text-center">
        <h1 className=" font-normal text-lg">
          Copyright © 2024 Universal Academy. All rights reserved
        </h1>
      </div>
    </>
  );
};
export default Footer;
