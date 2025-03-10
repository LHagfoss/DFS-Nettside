"use client";

import React from "react";
import InfiniteScroll from "@/components/infinite-scroll";
// import SisteNyttSlider from "@/components/siste-nytt-slider";
import Image from "next/image";
import dfslogo from "@/public/logoSecond.png";
import AnimateIn from "@/components/animate-in";
import ScrapeData from "@/components/scrape-content";

export default function Home() {
  const dfsnettside = () => {
    window.open("https://skyttertidende.no/norgescup-1681983756/sections/29717/articles", "_blank");
  };

  return (  
    <main className="w-screen flex flex-col items-center">
      <title>NC 2025 - Runde 1 | Hjem</title>
      <header className="w-full h-screen flex justify-center items-center">
        <div className="container flex flex-row justify-between items-center">
          <div className="text-[#002f67] flex flex-col leading-[90%] text-4xl sm:text-8xl md:font-bold">
            <h1 className="home-element">NORGES<span className="text-transparent outline-dotted custom-outline  ">CUPEN</span></h1>
            <h1 className="home-element text-6xl sm:text-7xl">SØRLANDET 2025</h1>
            <h1 className=" text-2xl sm:text-4xl">29. mai - 01.juni</h1>
          </div>
          <Image onClick={dfsnettside} className=" hidden xl:flex w-[320px] custom-rotate" src={dfslogo} alt="dfslogo"></Image>
          </div>
        </header>
        
        <AnimateIn>
          <div className="text-[#002f67] flex flex-col justify-center items-center m-8 leading-[90%] text-4xl sm:text-8xl md:font-bold">
            <h1 className="text-2xl sm:text-4xl"> Arrangørene</h1>
          </div>
          <InfiniteScroll />
        </AnimateIn>

        <AnimateIn>
          <ScrapeData />
        </AnimateIn>

       {/* <AnimateIn>
          <SisteNyttSlider />
        </AnimateIn>*/}

      </main>
    );
};
