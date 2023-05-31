import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen flex flex-col justify-center items-center text-gray-300  bg-[#0b0c10]"
    >
      <div className="w-full max-w-[1000px] px-4 grid grid-cols-2 gap-8">
        <div className="sm:text-right pl-4 pb-8">
          <p className="font-bold text-4xl border-b-4 border-[#66fcf1] inline">
            About
          </p>
        </div>
        <div></div>
      </div>
      <div className="w-full max-w-[1000px] px-4 grid sm:grid-cols-2 gap-8">
        <div className="sm:text-right">
          <p className="font-bold text-4xl">
            Hi, I'm Yuresh. Nice to meet you. Take a look around, if you'd like.
          </p>
        </div>
        <div>
          <p>
            I love building great websites that make a positive impact. My
            specialty is front-end development, serving everyone from
            individuals to big companies. Imagine having a front-end expert
            right at your fingertips. What would you do with that kind of skill?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
