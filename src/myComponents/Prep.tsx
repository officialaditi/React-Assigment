

import { IoArrowForwardCircleSharp } from "react-icons/io5";
const Prep = () => {
    return (
        <>
            <div className="bg-yellow-400 mt-40 rounded-lg h-[361.75px] w-full relative" >
                <div className=" rounded-lg border-2 w-[1000.41px] h-[350px] left-[15%] absolute top-[-90px]  flex  justify-around items-center p-10 bg-white gap-3">
                    <div>
                        <h1 className="font-bold text-lg text-blue-900 mb-4">In School Preparation</h1>
                        <p>Lectures will happen on campus during school hours with our esteemed faculty powered by PACE, so students don’t need to go anywhere for extra coaching or tuition classes. </p>
                        <button className="bg-[#292967] mt-4 flex justify-center items-center gap-3  text-white p-4 rounded-full">
                            Enquire Now{" "}
                            <IoArrowForwardCircleSharp className="size-6 text-yellow-400" />
                        </button>
                    </div>
                    <div>
                        <img src='./public/study.jpg' className="h-[317.08px] w-[925.20px] md:w-[550px] rounded-2xl object-cover " />
                    </div>



                </div>

            </div>
        </>
    )
}
export default Prep;