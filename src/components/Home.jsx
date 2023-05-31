import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0b0c10]">
      {/* container */}
      <div className="h-full flex flex-col justify-center max-w-[1000px] mx-auto px-8">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-[#66fcf1] text-4xl sm:text-7xl font-bold">
          Yuresh Majhi
        </h1>
        <h2 className="text-[#c5c6c7] text-4xl sm:text-7xl font-bold">
          I'm a Front End Developer
        </h2>
        <p className="text-white max-w-[700px] my-4">
          I'm a Front-End Developer with expertise in development for dynamic
          web projects. I'm skilled in various programming languages like HTML5,
          PHP, JavaScript, and CSS. I've worked on multiple personal projects
          involving HTML5, CSS, and JavaScript.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="flex items-center group text-white border-2 border-[#45a29e] px-6 py-3 my-2 hover:bg-[#45a29e]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
