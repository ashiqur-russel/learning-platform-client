import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import { Button } from "flowbite-react";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4  z-10 text-black bg-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          E-Lehrer
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="border-0">
          <Link to="/courses">Courses</Link>
        </li>
        <li className="border-0">
          <Link to="/blog">Blog</Link>
        </li>
        {user.uid ? (
          <>
            <span>{user?.displayName}</span>
            <li className="border-0">
              <Button onClick={handleLogOut}>Sign Out</Button>
            </li>
          </>
        ) : (
          <li className="border-0">
            <Link to="/login">Sign In</Link>
          </li>
        )}
      </ul>
      <div className="hidden md:flex">
        {user?.photoURL ? (
          <>
            <span>{user}</span>
            <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
              <img
                src={user?.photoURL}
                alt="user.displayName"
                class="absolute -left-1 w-12 h-12 text-gray-400"
              />
            </div>
          </>
        ) : (
          <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <svg
              class="absolute -left-1 w-12 h-12 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        )}
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1> Travel-Buddy</h1>
          <li className="border-b">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="border-b">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="border-0">
            <Link to="/blog">Blog</Link>
          </li>{" "}
          {user.uid ? (
            <>
              <span>{user?.displayName}</span>
              <li className="border-0">
                <Button onClick={handleLogOut}>Sign Out</Button>
              </li>
            </>
          ) : (
            <li className="border-0">
              <Link to="/login">Sign In</Link>
            </li>
          )}
          <div className="hidden md:flex">
            {user?.photoURL ? (
              <>
                <span>{user}</span>
                <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <img
                    src={user?.photoURL}
                    alt="user.displayName"
                    class="absolute -left-1 w-12 h-12 text-gray-400"
                  />
                </div>
              </>
            ) : (
              <div class="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                <svg
                  class="absolute -left-1 w-12 h-12 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
