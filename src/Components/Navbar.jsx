import React from "react";
import Image from "next/image";

// images
import logo from "../../public/Logo.png";
import FilledButton from "./Buttons/FIlledButton";
import TextButton from "./Buttons/TextButton";
import OutlinedButton from "./Buttons/OutlinedButton";

const Navbar = () => {
  return (
    <nav className="container w-[830px] h-[90px] z-50 mx-auto bg-[#1e1e1e] bg-opacity-30 rounded-[28px] px-[42px] py-[15px] mt-[30px] text-[#fefefe] flex items-center">
      <Image src={logo} />
      <ul className="ml-[70px] flex gap-[28px] items-center">
        <li>
          <TextButton text={"How to play"}/>
        </li>
        <li>
          <TextButton text={"About Us"}/>
        </li>
        <li>
          <OutlinedButton text="Join a game" />
        </li>
        <li>
          <FilledButton text="Create a game" />
        </li>
      </ul>
    </nav>
  );
};

// cetaphil - 17k

export default Navbar;
