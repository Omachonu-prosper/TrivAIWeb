"use client";
import React from "react";
import Image from "next/image";

// images
import logo from "../../public/Logo.png";
import FilledButton from "./Buttons/FIlledButton";
import TextButton from "./Buttons/TextButton";
import OutlinedButton from "./Buttons/OutlinedButton";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  return (
    <nav className="container relative lg:w-[830px] h-[90px] z-50 mx-auto bg-[#1e1e1e] bg-opacity-30 lg:rounded-[28px] lg:px-[42px] px-5 py-[15px] lg:mt-[30px] text-[#fefefe] flex justify-between lg:justify-normal items-center">
      <Image src={logo} />
      <ul className="ml-[70px] hidden lg:flex gap-[28px] items-center">
        <li>
          <TextButton text={"How to play"} />
        </li>
        <li>
          <TextButton text={"About Us"} />
        </li>
        <li>
          <OutlinedButton text="Join a game" />
        </li>
        <li>
          <FilledButton text="Create a game" />
        </li>
      </ul>
      <button className="lg:hidden block" onClick={()=>setShowMenu(!showMenu)}>
        {!showMenu ? (
          <HiMenu size={25} color="#fefefe" />
        ) : (
          <IoMdClose size={25} color="#fefefe" />
        )}
      </button>
      {showMenu && (
        <div className="absolute p-2 left-0 top-[100%] bg-[#1e1e1e] bg-opacity-80 w-full">
          <ul className="flex flex-col items-center gap-5">
            <li>
              <TextButton text={"How to play"} />
            </li>
            <li>
              <TextButton text={"About Us"} />
            </li>
            <li>
              <OutlinedButton text="Join a game" />
            </li>
            <li>
              <FilledButton text="Create a game" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

// cetaphil - 17k

export default Navbar;
