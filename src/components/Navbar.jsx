import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Yuresh.png";

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
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
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
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* social icons */}
      <ul className="hidden lg:flex flex-col fixed top-[35%] left-0">
        <li className="flex items-center w-[160px] h-[60px] bg-[#0270ad] ml-[-100px] hover:ml-[-10px] duration-300">
          <a className="w-full flex justify-between items-center" href="/">
            linkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#23282d] ml-[-100px] hover:ml-[-10px] duration-300">
          <a className="w-full flex justify-between items-center" href="/">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#6fc2b0] ml-[-100px] hover:ml-[-10px] duration-300">
          <a className="w-full flex justify-between items-center" href="/">
            Email <AiOutlineMail size={30} />
          </a>
        </li>
        <li className="flex items-center w-[160px] h-[60px] bg-[#565f69] ml-[-100px] hover:ml-[-10px] duration-300">
          <a className="w-full flex justify-between items-center" href="/">
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
