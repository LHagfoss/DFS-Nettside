
import Image from "next/image"

import arosActivityimage from "@/public/aros.png"
import Link from "next/link";
export default function Overnatting() {
    return (
        <div className=" w-screen h-screen flex flex-col items-center justify-center">
            <Image src={arosActivityimage} alt="åros feriesenter" className="w-[50vw]" /> 
            <h1 className="w-[50vw] p-3 text-lg text-[#002f67] ">Arrangørene anbefaler overnatting på Åros Feriesenter i Søgne, Åros ligger pent ute i den sørlandske skjærgården i Søgne og midt i smørøyet i forhold til banene det skal skytes på. På Åros har de både campingplasser for vogner, bobiler o.l., hytter og leiligheter, så det burde være noe for enhver smak. Ellers finnes det basseng, badestrand, sandvolleyball, minigolf, lekeplass, kiosk, restaurant, elbil-lader og alt annet som hører med!</h1>
              
            <h1 className="w-[50vw] p-3 text-xl text-[#002f67]">Vi setter veldig pris på om at du oppgir kodeordet Norgescup ved booking så drypper det litt tilbake til arrangørlagene fra Åros Feriesenter. <Link href="https://www.aaros.no" className="w-[50vw] text-xl text-[#2084ff]">Besøk Åros Feriesenter sine hjemmesider for mer info og booking.</Link></h1>

        </div>

    )
}