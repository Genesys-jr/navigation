"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import arrowDown from "/public/arrowDown.svg"
import logo from "../../public/logo.svg";
import desktop from "../../public/desktop.png";
import mobile from "../../public/mobile.png";
import menu from "../../public/menu.svg";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setIsMobileView(isMobile);
    };

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main>
      <nav className="flex justify-between">
        <Image src={logo} alt={""} className="object-contain" />
        <ul className="flex">
          <li className="flex"><a href="">Features</a><Image src={arrowDown} alt={""} className="object-contain"/> </li>
          <li className="flex ">Company <Image src={arrowDown} alt={""} className="object-contain"/></li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <Image
          src={menu}
          alt={""}
          className="object-contain"
          onClick={menuClick}
        />
      </nav>

      <div className="bg-white md:flex md:flex-row-reverse md:p-5 items-center rounded-xl">
        <div>
          {isMobileView ? (
            <Image src={mobile} alt="" className="object-contain w-full" />
          ) : (
            <Image src={desktop} alt="" className="object-contain w-full" />
          )}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-extrabold">
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity sour
        </p>
        <button>Learn more</button>
      </div>
    </main>
  );
}
