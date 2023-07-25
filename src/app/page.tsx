"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu";

import logo from "../../public/logo.svg";
import desktop from "../../public/desktop.png";
import mobile from "../../public/mobile.png";

export default function Home() {
  const [isMobileView, setIsMobileView] = useState(false);

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

  return (
    <main>
      <Image src={logo} alt={""} className="object-contain " />
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}

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
        <h1>
          Make <br /> remote work
        </h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity sour
        </p>
        <button type="button">Learn more</button>
      </div>
    </main>
  );
}
