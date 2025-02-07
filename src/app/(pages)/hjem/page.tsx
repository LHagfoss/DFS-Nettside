"use client";

import React from "react";
import InfiniteScroll from "@/components/infinite-scroll";
import SisteNyttSlider from "@/components/siste-nytt-slider";
import Image from "next/image";
import dfslogo from "@/public/logoSecond.png";

export default function Home() {
  const dfsnettside = () => {
    window.open("https://dfs.no/info", "_blank");
  };

  return (  
    <>
      <title>DFS-Nettside | Hjem</title>
      <header className="w-screen h-screen flex justify-center items-center">
        <div className="container flex flex-row justify-between items-center">
          <div className="text-indigo-900 flex flex-col leading-[90%] text-4xl sm:text-8xl md:font-bold">
            <h1 className="home-element">DET</h1> 
            <h1 className="home-element">FRIVILLIGE</h1>
            <h1 className="home-element">SKYTTERVESEN</h1>
          </div>
        <Image onClick={dfsnettside} className="w-[450px] hover:scale-105 active:scale-90 duration-300" src={dfslogo} alt="dfslogo"></Image>
      
        </div>
      </header>
      

      <InfiniteScroll />
      <SisteNyttSlider />
      <section className="w-screen h-screen">

      </section>
    </>
  );
};
