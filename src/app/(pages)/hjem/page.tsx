"use client";

import React from "react";
import InfiniteScroll from "@/components/infinite-scroll";
import SisteNyttSlider from "@/components/siste-nytt-slider";

export default function Home() {
  
  return (  
    <>
      <title>DFS-Nettside | Hjem</title>
      <header className="w-screen h-screen p-10 flex items-center">
        <div className="flex flex-col leading-[90%] text-4xl sm:text-8xl md:font-bold ">
          <h1>DET</h1> 
          <h1>FRIVILLIGE</h1>
          <h1>SKYTTERVESEN</h1>
          <p className="sm:text-xl text-sm">- Forsvar, sport og god våpenkultur</p> 
        </div>
      </header>
      <InfiniteScroll />
      <SisteNyttSlider />
      <section className="w-screen h-screen">

      </section>
    </>
  );
};
