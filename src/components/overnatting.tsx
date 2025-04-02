
import Image from "next/image"

import arosActivityimage from "@/public/aros.png"


import image1 from "@/public/arosimage1.jpg"
import image2 from "@/public/arosimage2.jpg"
import image3 from "@/public/arosimage3.jpg"
import image4 from "@/public/arosimage4.jpg"
import image5 from "@/public/arosimage5.jpg"
import image6 from "@/public/arosimage6.jpg"

import Link from "next/link";
export default function Overnatting() {
    return (
        <div className=" w-screen min-h-full flex flex-col items-center justify-center mt-32">
            <Image src={arosActivityimage} alt="åros feriesenter" className="w-[50vw] md:w-[20vw]" /> 
            <h1 className="w-[70vw] md:w-[50vw] p-3 text-sm md:text-lg text-[#002f67] ">Arrangørene anbefaler overnatting på Åros Feriesenter i Søgne, Åros ligger pent ute i den sørlandske skjærgården i Søgne og midt i smørøyet i forhold til banene det skal skytes på. På Åros har de både campingplasser for vogner, bobiler o.l., hytter og leiligheter, så det burde være noe for enhver smak. Ellers finnes det basseng, badestrand, sandvolleyball, minigolf, lekeplass, kiosk, restaurant, elbil-lader og alt annet som hører med!</h1>
              
            <h1 className="w-[70vw] md:w-[50vw] p-3 text-base md:text-xl text-[#002f67]">Vi setter veldig pris på om at du oppgir kodeordet Norgescup ved booking så drypper det litt tilbake til arrangørlagene fra Åros Feriesenter. <Link href="https://www.aaros.no" className="w-[50vw] text-xl text-[#2084ff]">Besøk Åros Feriesenter sine hjemmesider for mer info og booking.</Link></h1>
            
            <div className="w-screen h-full grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-5 mt-16 md-16">
                <Image src={image1} alt="åros feriesenter" className=" w-[30]md:w-[20vw]" />
                <Image src={image2} alt="åros feriesenter" className="w-[30]md:w-[20vw]" />
                <Image src={image3} alt="åros feriesenter" className="w-[30]md:w-[20vw]" />
                <Image src={image4} alt="åros feriesenter" className="w-[30]md:w-[20vw]" />
                <Image src={image5} alt="åros feriesenter" className="w-[30]md:w-[20vw]" />
                <Image src={image6} alt="åros feriesenter" className="w-[30]md:w-[20vw]" />
            </div>

        </div>

    )
}