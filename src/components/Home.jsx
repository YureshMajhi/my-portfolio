import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="h-full flex flex-col justify-center max-w-[1000px] mx-auto px-8">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-white text-4xl sm:text-7xl font-bold">
          Yuresh Majhi
        </h1>
        <h2 className="text-[#8892b0] text-4xl sm:text-7xl font-bold">
          I'm a Front End Developer
        </h2>
        <p className="text-[#8892b0] max-w-[700px] my-4">
          Skilled in front end development, Experienced with development cycle
          for dynamic web projects. Well-versed in numerous programming
          languages including HTML5, PHP, JavaScript, CSS. Worked in multiple
          personal projects of HTML5 CSS and JavaScript.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="flex items-center group text-white border-2 px-6 py-3 my-2 hover:bg-pink-600 hover:border-pink-600">
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
