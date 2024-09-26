"use client";

import Hero from "./Components/hero";
import About from "./Components/about";
import Features from "./Components/features";
import Discount from "./Components/discount";
import Fleet from "./Components/fleet";
import Venue from "./Components/venue";
import Contact from "./Components/contact";
import Footer from "./Components/footer";
import Header from "./Components/header";
import { useState, useEffect } from "react";

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleScroll = () => {
    // Calculate half the height of the viewport
    const halfWindowHeight = window.innerHeight / 2;
    
    // Set header visibility based on scroll position
    setIsHeaderVisible(window.scrollY > halfWindowHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isHeaderVisible && (
        <div className="sticky top-0 z-50 StickHeader">
          <Header />
        </div>
      )}

      <Hero />
      <About />
      <Features />
      <Discount />
      <Fleet />
      <Venue />
      <Contact />
      <Footer />
    </>
  );
}
