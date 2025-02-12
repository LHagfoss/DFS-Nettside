import Image from "next/image"
import sorlandet from "@/public/sorlandet.png"

export default function Veibeskrivelse() {
    return (
        <div className="w-screen flex flex-col justify-center items-center mt-15">
            <div className="container gap-10 flex justify-between items-start">
                        
                        <Image src={sorlandet} alt="sorlandetlogo" className="w-1/2 object-cover"/>
                <div className="flex-col flex w-1/2">                    
                        
                        <div className="flex flex-col text-3xl text-[#002f67] font-bold ">En kompakt stevnehelg på Sørlandet</div>
                        <div className="flex flex-col mt-3 text-xl font-medium text-[#002f67]">Skytterlagene i Lyngdal, Laudal, Søgne og Kristiansand ønsker velkommen til en langhelg på Sørlandet med relativt korte avstander. Alle stevnene ligger relativt nære E39/E18 med en liten avstikker for å skyte de to rundene med stang og felthurting som går i Laudal.</div>   
                    </div>

                </div>
            </div>
    )
}