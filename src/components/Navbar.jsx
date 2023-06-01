import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Yuresh.png";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0b0c10] text-gray-300">
      <div>
        <img src={Logo} alt="Yuresh Logo" className="w-[150px]" />
      </div>

      {/* menu bar */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Home
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="group relative"
          >
            About
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Skills
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Work
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Contact
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 text-2xl text-[#66fcf1] cursor-pointer"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0b0c10] flex flex-col justify-center items-center"
        }
      >
        <li className="my-6 text-4xl">
          <Link
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Home
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
            className="group relative"
          >
            About
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Skills
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link
            onClick={handleClick}
            to="work"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Work
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
        <li className="my-6 text-4xl">
          <Link
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
            className="group relative"
          >
            Contact
            <span className="absolute bg-[#45a29e] w-0 h-[3px] left-0 bottom-[-10px] group-hover:w-full duration-300"></span>
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <ul className="hidden lg:flex flex-col fixed top-[35%] left-0 text-gray-300">
        <li className="flex items-center w-[160px] h-[60px] bg-[#0270ad] ml-[-100px] hover:ml-[-10px] duration-300 px-5">
          <a
            className="w-full flex justify-between items-center"
            href="https://www.linkedin.com/in/yuresh-majhi-9206b61a1/"
            target="_blank"
          >
            linkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#23282d] ml-[-100px] hover:ml-[-10px] duration-300 px-5">
          <a
            className="w-full flex justify-between items-center"
            href="https://github.com/YureshMajhi"
            target="_blank"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300 px-5">
          <a
            className="w-full flex justify-between items-center"
            href="mailto:yureshmee@gmail.com"
          >
            Email <AiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300 px-5">
          <a
            className="w-full flex justify-between items-center"
            href="/"
            target="_blank"
          >
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
