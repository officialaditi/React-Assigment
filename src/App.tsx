import About1 from "./myComponents/About1";
import About2 from "./myComponents/About2";
import CampusCarousel from "./myComponents/CampusCarousel";
import Footer from "./myComponents/Footer";
import Header from "./myComponents/Header";
import Hero1Left from "./myComponents/Hero1Left";
import Hero1Right from "./myComponents/Hero1Right";
import LearningApproach from "./myComponents/LearningApproach";
import Prep from "./myComponents/Prep";
import Program from "./myComponents/Program";
import StudentsCaraousel from "./myComponents/StudentsCaraousel";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <>
      <Header />
      {/* Hero 1 */}
      <div className="relative bg-hero-pattern bg-cover mt-3 bg-center w-auto h-[1089.9px]">
        <div className="mx-4 z-10 flex flex-col gap-14">
          <div className=" flex md:flex-row flex-col md:justify-between md:mx-34 mx-5 items-center md:mt-24 mt-4">
            <Hero1Left />
            <img
              src="public\hero1\hero-center.png"
              className=" md:absolute w-[580.73px] top-[30%] left-0 right-0 ml-auto mr-auto"
            />
            <Hero1Right />
          </div>
          <LearningApproach />
          <About1/>
          <About2/>
          <Program/>
          <Prep/>
        </div>
        <StudentsCaraousel />
        <CampusCarousel />
        <Footer/>
      </div>
    </>
  );
}

export default App;
