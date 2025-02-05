"use client";

import React from "react";
import InfiniteScroll from "@/components/infinite-scroll";
import SisteNyttSlider from "@/components/siste-nytt-slider";
import Overnatting from "@/components/overnatting";
import Image from "next/image";
import dfslogo from "@/public/dfslogo.png";

export default function Home() {
  const dfsnettside = () => {
    window.open("https://dfs.no/info", "_blank");
  };

  return (  
    <>
      <title>DFS-Nettside | Hjem</title>
      <header className="w-screen h-screen flex justify-center items-center">
        <div className="container flex flex-row leading-[90%] text-4xl sm:text-8xl md:font-bold justify-between items-center ">
          <div className="">
          <h1>DET</h1> 
          <h1>FRIVILLIGE</h1>
          <h1>SKYTTERVESEN</h1>
          <p className="sm:text-xl text-sm">- Forsvar, sport og god våpenkultur</p>
          </div>
        <Image onClick={dfsnettside} className="w-[350px] hover:scale-105 active:scale-90 duration-300" src={dfslogo} alt="dfslogo"></Image>
      
        </div>
      </header>
      

      <InfiniteScroll />
      <SisteNyttSlider />
      <section className="w-screen h-screen">

      </section>
    </>
  );
};
