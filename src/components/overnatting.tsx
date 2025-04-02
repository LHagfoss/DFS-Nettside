import Image from "next/image";

import arosActivityimage from "@/public/aros.png";

import image1 from "@/public/arosimage1.jpg";
import image2 from "@/public/arosimage2.jpg";
import image3 from "@/public/arosimage3.jpg";
import image4 from "@/public/arosimage4.jpg";
import image5 from "@/public/arosimage5.jpg";
import image6 from "@/public/arosimage6.jpg";

import Link from "next/link";
export default function Overnatting() {
  return (

    <div className="w-full max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-32 py-12 sm:py-16 lg:py-20">
      <Image
        src={arosActivityimage}
        alt="åros feriesenter"
        className="w-80 mx-auto lg:mt-0 xl:mt-10"
      />
      <h1 className="p-3 sm:text-xl text-[#002f67] lg:text-2xl sm:leading-9 leading-7 lg:leading-10">

    <div className="w-full max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 lg:text-2xl">
      <Image
        src={arosActivityimage}
        alt="åros feriesenter"
        className="w-1/3 mx-auto lg:mt-0 xl:mt-10"
      />
      <h1 className="p-3 md:text-lg text-[#002f67] ">

        Arrangørene anbefaler overnatting på Åros Feriesenter i Søgne, Åros
        ligger pent ute i den sørlandske skjærgården i Søgne og midt i smørøyet
        i forhold til banene det skal skytes på. På Åros har de både
        campingplasser for vogner, bobiler o.l., hytter og leiligheter, så det
        burde være noe for enhver smak. Ellers finnes det basseng, badestrand,
        sandvolleyball, minigolf, lekeplass, kiosk, restaurant, elbil-lader og
        alt annet som hører med!
      </h1>


      <h1 className="p-3 sm:text-xl text-[#002f67] lg:text-2xl sm:leading-9 lg:leading-10 leading-7 font-bold">
        Vi setter veldig pris på om at du oppgir kodeordet "Norgescup" ved
        booking så drypper det litt tilbake til arrangørlagene fra Åros
        Feriesenter.{" "}
        <Link
          href="https://www.aaros.no"
          className="w-[50vw] sm:text-xl text-blue-700 hover:text-blue-800 hover:underline lg:text-2xl font-normal"

      <h1 className="p-3 md:text-xl text-[#002f67]">
        Vi setter veldig pris på om at du oppgir kodeordet Norgescup ved booking
        så drypper det litt tilbake til arrangørlagene fra Åros Feriesenter.{" "}
        <Link
          href="https://www.aaros.no"
          className="w-[50vw] text-xl text-blue-700 hover:text-blue-800 hover:underline"

        >
          Besøk Åros Feriesenter sine hjemmesider for mer info og booking.
        </Link>
      </h1>


      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        {[image1, image2, image3, image4, image5, image6].map(
          (image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <div className="aspect-[4/3] w-full">
                <Image
                  src={image}
                  alt={`Åros feriesenter bilde ${index + 1}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div />
            </div>
          )
        )}

      <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {[image1, image2, image3, image4, image5, image6].map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg shadow-lg group"
              >
                <div className="aspect-[4/3] w-full">
                  <Image
                    src={image}
                    alt={`Åros feriesenter bilde ${index + 1}`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
    </div>
  );
}
