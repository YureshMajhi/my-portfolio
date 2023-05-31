import React from "react";
import form from "../assets/Form.png";
import youtube from "../assets/Youtube.png";
import card from "../assets/card.png";
import todoList from "../assets/todo-list.png";
import game from "../assets/RockPaperScissor.png";
import library from "../assets/library.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen bg-[#0b0c10] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4">
        {/* info */}
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-[#66fcf1] inline">
            Work
          </p>
          <p className="py-6">// Check out my recent work!</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${form})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Form /*HTML CSS*/
              </span>
              <div className="pt-8 text-gray-700 text-lg ">
                <a
                  href="https://yureshmajhi.github.io/HTML-CSS-Form/code.html"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/YureshMajhi/HTML-CSS-Form"
                  target="_blank"
                >
                  <button className="rounded-lg px-4 py-3 m-2 bg-white font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${youtube})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Youtube /*HTML CSS*/
              </span>
              <div className="pt-8 text-gray-700 text-lg ">
                <a
                  href="https://yureshmajhi.github.io/File/test.html"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/YureshMajhi/File" target="_blank">
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${card})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Card /*CSS Animation*/
              </span>
              <div className="pt-8 text-gray-700 text-lg ">
                <a
                  href="https://yureshmajhi.github.io/Invisible-Card/invisiblecard.html"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/YureshMajhi/Invisible-Card"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todoList})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Todo List /*JS Webpack*/
              </span>
              <div className="pt-8 text-gray-700 text-lg ">
                <a
                  href="https://yureshmajhi.github.io/todoList/dist/index.html"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/YureshMajhi/todoList"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${game})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Rock Paper Scissor /*JS*/
              </span>
              <div className="pt-8 text-gray-700 text-lg ">
                <a
                  href="https://yureshmajhi.github.io/Rock-Paper-Scissors/code.html"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/YureshMajhi/Rock-Paper-Scissors"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${library})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Library /*JS*/
              </span>
              <div className="pt-8 text-gray-700 text-lg">
                <a
                  href="https://yureshmajhi.github.io/odin-project-library"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/YureshMajhi/odin-project-library"
                  target="_blank"
                >
                  <button className=" rounded-lg px-4 py-3 m-2 bg-white font-bold ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
