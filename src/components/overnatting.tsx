import Image from "next/image"

import arosActivityimage from "@/public/bildefraaros.jpg"
import Link from "next/link";
export default function Overnatting() {
    return (
        <div className="w-full min-h-screen p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-3xl">
                <Image 
                    src={arosActivityimage} 
                    alt="åros feriesenter" 
                    className="w-full rounded mt-40 md:mt-32 lg:mt-40"/>
                
                <div className="mt-6 space-y-4">
                    <p className="text-sm md:text-lg text-[#002f67]">
                        Arrangørene anbefaler overnatting på Åros Feriesenter i Søgne, Åros ligger pent ute i den sørlandske skjærgården i Søgne og midt i smørøyet i forhold til banene det skal skytes på. På Åros har de både campingplasser for vogner, bobiler o.l., hytter og leiligheter, så det burde være noe for enhver smak. Ellers finnes det basseng, badestrand, sandvolleyball, minigolf, lekeplass, kiosk, restaurant, elbil-lader og alt annet som hører med!
                    </p>
                    
                    <div className="text-base md:text-xl text-[#002f67]">
                        <p>Vi setter veldig pris på om at du oppgir kodeordet Norgescup ved booking så drypper det litt tilbake til arrangørlagene fra Åros Feriesenter.</p>
                        <Link href="https://www.aaros.no" className="text-blue-700 hover:underline">
                            Besøk Åros Feriesenter sine hjemmesider for mer info og booking.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}