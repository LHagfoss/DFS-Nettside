"use client";

import React from "react";
import InfiniteScroll from "@/components/infinite-scroll";
import SisteNyttSlider from "@/components/siste-nytt-slider";
import Image from "next/image";
import dfslogo from "@/public/logoSecond.png";
import AnimateIn from "@/components/animate-in";

export default function Home() {
  const dfsnettside = () => {
    window.open("https://skyttertidende.no/norgescup-1681983756/sections/29717/articles", "_blank");
  };

  return (  
    <>
      <title>DFS-Nettside | Hjem</title>
      <header className="w-screen h-screen flex justify-center items-center">
        <div className="container flex flex-row justify-between items-center">
          <div className="text-[#002f67] flex flex-col leading-[90%] text-4xl sm:text-8xl md:font-bold">
            <h1 className="home-element">NORGES</h1> 
            <h1 className="home-element">CUPPEN</h1>
            <h1 className="home-element">2025</h1>
          </div>
        <Image onClick={dfsnettside} className="w-[350px] hover:scale-105 active:scale-90 duration-300" src={dfslogo} alt="dfslogo"></Image>
      
        </div>
      </header>
      

      <AnimateIn>
        <InfiniteScroll />
      </AnimateIn>

      <AnimateIn>
        <SisteNyttSlider />
      </AnimateIn>

      <section className="w-screen h-screen">

      </section>
    </>
  );
};
