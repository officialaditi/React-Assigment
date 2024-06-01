import { IoArrowForwardCircleSharp } from "react-icons/io5";

const Program = () => {
    return (
        <>
            <div className="text-center m-8">
                <span className="uppercase font-bold text-xl text-black">our</span>
                <h1 className="uppercase text-blue-950 font-bold text-xl">Programs</h1>
            </div>
            <div className="grid gap-3 p-4 lg:grid-cols-2 sm:grid-cols-1 ">
                {/* div 1 */}

                <div className="bg-[#FFF9DA] p-28 rounded-[33px] w-[auto] relative flex justify-center items-center">
                    <span className="bg-[#292967] absolute top-0 mt-[-20px] text-white py-3 px-36 rounded-t-xl">
                        ISC + NEET
                    </span>

                    <p className="text-center font-normal text-sm w-aut">
                        NEET is a national-level examination conducted by NTA. The
                        candidates who want to get admission to medical courses must qualify
                        for the entrance test. NEET questions only come from Physics,
                        Chemistry, Zoology, and Botany. <br /> <br />
                        Powered by IITPACE, Universal High School Dahisar will prepare
                        students for both ISC and NEET (and other Medical exams) within the
                        comfort of their school premises. Our coursework is specially
                        created for the ISC curriculum to create a synergy between Board and
                        NEET exam preparations during school hours.
                    </p>

                    <button className="bg-[#292967]  mb-[-20px] flex justify-center items-center gap-3 absolute bottom-0 text-white p-4 rounded-full">
                        Enquire Now{" "}
                        <IoArrowForwardCircleSharp className="size-6 text-yellow-400" />
                    </button>
                </div>

                {/** div 2 */}
                <div className="bg-[#6767C826] p-5 rounded-[33px] w-[auto] relative flex justify-center items-center">
                    <span className="bg-[#292967] absolute top-0 mt-[-20px] text-white py-3 px-36 rounded-t-xl ">
                        ISC + IIT JEE
                    </span>

                    <p className="text-center font-normal text-sm w-auto ">
                        IITs are one of the most prestigious colleges in the country. All
                        Engineering aspirants wish to get into one of the IITs, but getting
                        into such an institution is a challenging task. A lot of hard work
                        andhard and dedication is required to ace JEE Main and JEE Advanced
                        to get into IIT or some other top educational institution in the
                        country.
                        <br /> <br />
                        Powered by IITPACE, Universal High School Dahisar will prepare
                        students for both ISC and IITJEE ( and other engineering exams)
                        within the comfort of their school premises. Our coursework is
                        specially created for the ISC curriculum to create a synergy between
                        Board and NEET exam preparations during school hours
                    </p>

                    <button className="bg-[#292967] mb-[-20px] flex justify-center items-center gap-3 absolute bottom-0 text-white p-4 rounded-full ">
                        Enquire Now{" "}
                        <IoArrowForwardCircleSharp className="size-6 text-yellow-400" />
                    </button>
                </div>
            </div>
        </>
    );
};
export default Program;
