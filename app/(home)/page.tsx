import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-background transition-all duration-700 ">
      <div className="max-w-7xl mx-auto">
       <Navbar  />
      <Hero />
      <About />
      </div>
    </div>
  );
}
