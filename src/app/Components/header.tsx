"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const MenuData = [
    { menuItem: "The Winter Fest", menuUri: "#winterfest" },
    { menuItem: "Upcoming Fleet", menuUri: "#fleet" },
    { menuItem: "The Venue", menuUri: "#venue" },
    { menuItem: "Lumo Shop", menuUri: "https://en.wikipedia.org/wiki/Winter_clothing" },
  ];


  

  return (
    <>
      <div className="grid grid-cols-12 gap-4 container mx-auto md:px-8 mt-8">
        <div className="col-span-6 md:col-span-3 lg:col-span-2">
          <a href="#"><Image src="/logo.png" width="150" height="150" alt="Lumo Logo" /></a>
        </div>
        <div className="hidden lg:block lg:col-span-8">
          <nav className="navbar">
            {MenuData.map((item, index) => (
              <a key={index} href={item.menuUri} className="nav-item">
                {item.menuItem}
              </a>
            ))}
          </nav>
        </div>
        <div className="lumobutton hidden lg:block lg:col-span-2">
          <a href="#contact">
            <Image
              src="/btn-arrow.png"
              width="23"
              height="23"
              alt="Lumo Button Arrow"
            />{" "}
            Book Your Seat
          </a>
        </div>
        <div className="block lg:hidden col-span-6 md:col-span-1 md:col-start-12 hamburger mt-4">
          <a onClick={toggleMenu}>
            <Image
              src="/hamburger.png"
              width="40"
              height="40"
              alt="Lumo Hamburger"
            />
          </a>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-2/3 max-w-sm transform ${
          menuOpen ? "translate-x-0 navbarmobile" : "translate-x-full"
        } transition-transform duration-430 ease-in-out lg:hidden`}
      >
        <nav className="flex flex-col p-4 space-y-4">
            {MenuData.map((item, index) => (
              <a key={index} href={item.menuUri} className="nav-item">
                {item.menuItem}
              </a>
            ))}
        </nav>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-2xl"
        >
          <Image
            src="/close.png"
            width="60"
            height="60"
            alt="Lumo Close Side Menu"
          />
        </button>
        <div className="lumobutton">
          <a href="#contact">
            <Image
              src="/btn-arrow.png"
              width="23"
              height="23"
              alt="Lumo Button Arrow"
            />{" "}
            Book Your Seat
          </a>
        </div>
      </div>
    </>
  );
}
