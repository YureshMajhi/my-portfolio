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
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Yuresh Logo" className="w-[150px]" />
      </div>

      {/* menu bar */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <ul className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <li className="flex items-center w-[160px] h-[60px] bg-[#0270ad] ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="w-full flex justify-between items-center"
            href="https://www.linkedin.com/in/yuresh-majhi-9206b61a1/"
            target="_blank"
          >
            linkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#23282d] ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="w-full flex justify-between items-center"
            href="https://github.com/YureshMajhi"
            target="_blank"
          >
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="w-full flex justify-between items-center"
            href="mailto:yureshmee@gmail.com"
          >
            Email <AiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300">
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
