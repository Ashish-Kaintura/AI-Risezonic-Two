import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import {
  FaRobot,
  FaChalkboardTeacher,
  FaLightbulb,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useFormPopup } from "../context/FormContext";
const Navbar = () => {
  const { openForm } = useFormPopup();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      {" "}
      <div
        className="bg-gradient-to-r from-pink-700 via-pink-600 to-blue-700 text-white text-sm px-8 py-5 md:flex hidden flex-wrap justify-between items-center "
        style={{ minHeight: "40px" }}
      >
        <div className="flex items-center space-x-3">
          <span className="font-medium tracking-wide">Follow us:</span>
          <a
            href="https://www.facebook.com/risezonicofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300  transition-colors bg-blue-600/80 rounded-full w-8 h-8 flex items-center justify-center p-1"
          >
            <FaFacebookF size={14} />
          </a>
          <a
            href="https://in.linkedin.com/company/risezonic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-colors bg-blue-800/80 rounded-full w-8 h-8 flex items-center justify-center p-1"
          >
            <FaLinkedinIn size={14} />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2Frisezonicofficial%2F&source=omni_redirect"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition-colors bg-pink-700/80 rounded-full w-8 h-8 flex items-center justify-center p-1"
          >
            <FaInstagram size={14} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors bg-blue-500/80 rounded-full w-8 h-8 flex items-center justify-center p-1"
          >
            <FaTwitter size={14} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition-colors bg-red-600/80 rounded-full w-8 h-8 flex items-center justify-center p-1"
          >
            <FaYoutube size={14} />
          </a>
        </div>
        <div className="flex items-center space-x-6 text-sm flex-wrap">
          <div className="flex items-center space-x-2">
            <FiPhone size={27} className="text-blue-200" />
            <span className="font-semibold">+91 8178857250</span>
          </div>
          <div className="flex items-center space-x-2">
            <FiMail size={27} className="text-gray-200" />
            <span className="font-semibold">info@risezonic.com</span>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-md font-sans items-center">
        <div className="max-w-8xl mx-auto px-12 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold -mt-[10px] ">
            <img
              className="w-48"
              src="https://i.postimg.cc/qqtCN8Gg/Whats-App-Image-2025-06-27-at-3-38-13-PM-removebg-preview.png"
              alt="Logo"
            />
          </Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex space-x-6 items-center uppercase  font-light">
            <li>
              <Link to="/" className={linkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={linkClass("/about")}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/ai-solution-and-product"
                className={linkClass("/ai-solution-and-product")}
              >
                AI Solutions & Products
              </Link>
            </li>

            {/* <li>
              <Link to="/blogs" className={linkClass("/blogs")}>
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                to="/painpoint"
                className={`block ${linkClass("/painpoint")}`}
              >
                PainPointForm
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/learn-with-ai-risezonic"
                className={linkClass("/learn-with-ai-risezonic")}
              >
                {" "}
                <button
                  className="flex items-center gap-1  hover:text-blue-600 focus:outline-none uppercase"
                  onClick={() => setDropdownOpen((open) => !open)}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Learn with AI Risezonic
                  <FiChevronDown className="mr-1" />
                </button>
              </Link>
              <div
                className={`absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50 ${
                  dropdownOpen ? "block" : "hidden"
                } group-hover:block`}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/ai-apps"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  AI Apps We Build
                </Link>
                <Link
                  to="/ai-education"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaChalkboardTeacher className="mr-2 text-blue-500" />
                  AI in Education
                </Link>
                <Link
                  to="/robotics-ai"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaRobot className="mr-2 text-blue-500" />
                  Robotics + AI
                </Link>
                <Link
                  to="/consulting"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  Consulting for Institutions
                </Link>
              </div>
            </li>
          </ul>
          <button
            onClick={openForm}
            className="hidden md:flex px-8 py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Book Your Seat
          </button>
        </div>
        {isOpen && (
          <ul className="md:hidden px-4 pb-4 space-y-2 bg-white">
            <li>
              <Link to="/" className={`block ${linkClass("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={`block ${linkClass("/about")}`}>
                About
              </Link>
            </li>

            <li>
              <button
                className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 focus:outline-none "
                onClick={() => setDropdownOpen((open) => !open)}
              >
                <Link to="/ai-solution-and-product">
                  {/* <FiChevronDown className="mr-1" /> */}
                  AI Solutions & Products
                </Link>
              </button>
              {/* {dropdownOpen && (
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  to="/ai-apps"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  AI Apps We Build
                </Link>
                <Link
                  to="/ai-education"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaChalkboardTeacher className="mr-2 text-blue-500" />
                  AI in Education
                </Link>
                <Link
                  to="/robotics-ai"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaRobot className="mr-2 text-blue-500" />
                  Robotics + AI
                </Link>
                <Link
                  to="/consulting"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  Consulting for Institutions
                </Link>
                <Link
                  to="/ai-apps"
                  className="flex items-center px-2 py-1 text-gray-700 hover:bg-gray-100"
                >
                  <FaLightbulb className="mr-2 text-blue-500" />
                  AI Apps We Build
                </Link>
              </div>
            )} */}
            </li>

            <li>
              <Link
                to="/pinpoint"
                className={`block ${linkClass("/pinpoint")}`}
              >
                PinPointForm
              </Link>
            </li>
            <li>
              <Link to="/contact" className={`block ${linkClass("/contact")}`}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={`block ${linkClass("/blogs")}`}>
                Blog
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
