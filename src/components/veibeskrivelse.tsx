import Image from "next/image"
import sorlandet from "@/public/sorlandet.png"

export default function Veibeskrivelse() {
    return (
        <div className="w-screen flex flex-col justify-center items-center mt-52">
            <div className="container gap-10 flex justify-between items-start">
                        
                        <Image src={sorlandet} alt="sorlandetlogo" className="w-1/2 object-cover"/>
                <div className="flex-col flex w-1/2">                    
                        
                        <div className="flex flex-col text-3xl text-[#002f67] font-bold ">En kompakt stevnehelg på Sørlandet</div>
                        <div className="flex flex-col mt-3 text-2xl font-medium text-[#002f67]">Skytterlagene i Lyngdal, Laudal, Søgne og Kristiansand ønsker velkommen til en langhelg på Sørlandet med relativt korte avstander. Alle stevnene ligger relativt nære E39/E18 med en liten avstikker for å skyte de to rundene med stang og felthurting som går i Laudal.</div>   
                </div>
            </div>
            <div className="container mt-20 gap-10 flex flex-col justify-between items-start">
                <div className="flex flex-col"> 

                <div className="flex flex-col text-3xl text-[#002f67] font-bold">Lyngdal Skytterlag - Lyngdal Skytebane</div>
                <div className="flex flex-col mt-3 text-2xl font-medium text-[#002f67]">Skytebaneanlegget i Lyngdal ligger sentralt til, like ved E39. Anlegget har 14 skiver på 200m og 12 skiver på 100m med elektronikk fra KME. Banene og bygningsmassen er fra 1990 tallet, men er godt ivaretatt og vedlikeholdt, skytterhuset har kafeteria og live visning.</div>

            </div>
                 <div className="container flex justify-between">
                    <div className="flex flex-col w-1/2">
                <iframe frameBorder="0" height="250" scrolling="no" width="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;&amp;zoom=13"></iframe>
                <a className="text-blue-700 hover:underline mt-2" href="https://www.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.16357985855411,7.096496735361301&zoom=13" target="_blank">Vis vei</a>
                </div>
                <div className="relative overflow-x-auto"> 
            <table className="text-[#002f67] ml-20">
                    <thead className="text-xl bg-indigo-100 border"> 
                        <tr>
                            <th className="px-5 py-2 border-r">BANE</th>
                            <th className="px-5 py-2 border-r">SKYTERETNING I GRADER</th>
                            <th className="px-5 py-2">LENGDE</th>
                        </tr>
                    </thead>
                <tbody>
                        <tr className="text-lg">
                            <td className="px-10 border-r border-l">200M</td>
                            <td className="px-28 py-1 border-r">69 grader</td>
                            <td className="px-5 py-1 border-r">192 meter</td>
                        </tr>

                         <tr className="text-lg">
                            <td className="px-10 border-r border-l border-b">100M</td>
                            <td className="px-28 py-1 border-r border-b">73 grader</td>
                            <td className="px-5 py-1 border-r border-b">100 meter</td>
                        </tr>
                </tbody>
            </table>
           
                     </div>
                </div>
            </div>

        <div className="container mt-20 gap-10 flex flex-col justify-between items-start">
            <div className="flex flex-col"> 
 
                    <div className="flex flex-col text-3xl text-[#002f67] font-bold">Laudal Skytterlag - Laudal Skytebane</div>
                    <div className="flex flex-col mt-3 text-2xl font-medium text-[#002f67]">Laudal skal bygge et helt nytt stang og felthurtig anlegg i løpet av 2024/2025 med utstyr fra Megalink, Skytterhuset har kafeteria med kapasitet på inntil ca 80 personer, det er tilrettelagt tilgang til skytterhuset og toalett for rullestolbrukere. Laudal har internettforbindelse og vil kunne levere live resultater.</div>
            </div>
        </div>
        <div className="container flex justify-between mt-10">
                    <div className="flex flex-col w-1/2">
                <iframe frameBorder="0" height="250" scrolling="no" width="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"></iframe>
                <a className="text-blue-700 hover:underline mt-2" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23351176865408,7.4692684384200865&amp;&amp;zoom=13" target="_blank">Vis vei</a>
                </div>
                <div className="relative overflow-x-auto"> 
            <table className="text-[#002f67] ml-20">
                    <thead className="text-xl bg-indigo-100 border"> 
                        <tr>
                            <th className="border-r">BANE</th>
                            <th className="border-r">SKYTERETNING I GRADER</th>
                            <th className="px-5 py-2">LENGDE</th>
                        </tr>
                    </thead>
                <tbody>
                        <tr className="text-lg">
                            <td className="px-10 border-r border-l">200M</td>
                            <td className="px-20 py-1 border-r">325 grader</td>
                            <td className="px-5 py-1 border-r">200 meter</td>
                        </tr>

                         <tr className="text-lg">
                            <td className="px-10 border-r border-l">100M</td>
                            <td className="px-20 py-1 border-r">352 grader</td>
                            <td className="px-5 py-1 border-r">100 meter</td>
                        </tr>
                        
                        <tr className="text-lg">
                            <td className="px-10 border-r border-l">STANG</td>
                            <td className="px-24 py-1 border-r">Nordlig</td>
                            <td className="px-5 py-1 border-r"></td>
                        </tr>

                        <tr className="text-lg">
                            <td className="px-10 border-r border-l border-b">FELTHURTIG</td>
                            <td className="px-24 py-1 border-r border-b">Nordlig</td>
                            <td className="px-5 py-1 border-r border-b"></td>
                        </tr>
                </tbody>
            </table>
           
                     </div>
                </div>
                <div className="container mt-20 gap-10 flex flex-col justify-between items-start">
            <div className="flex flex-col"> 
 
                    <div className="flex flex-col text-3xl text-[#002f67] font-bold">Søgne Skytterlag - Søgne og Greipstad Sparebank Arena</div>
                    <div className="flex flex-col mt-3 text-2xl font-medium text-[#002f67]">Flott og moderne skyteanlegg som blir ferdigstilt i 2024 med 10 elektroniske skiver på både 100 og 200 meter fra Kongsberg. Anlegget har store voller på begge sider i skyteretningen på både 100 og 200 meter, noe som gjør at skytteren blir lite utsatt for vind. Anlegget har et moderne og lyst skytterhus med stor takhøyde i kafeteria og god kapasitet for besøkende og livevisning og live resultater under stevnet.</div>
            </div>
        </div>
        <div className="container flex justify-between mt-10">
                    <div className="flex flex-col w-1/2">
                <iframe frameBorder="0" height="250" scrolling="no" width="100%" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13"></iframe>
                <a className="text-blue-700 hover:underline mt-2" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13" target="_blank">Vis vei</a>
                </div>
                <div className="relative overflow-x-auto"> 
            <table className="text-[#002f67] ml-20">
                    <thead className="text-xl bg-indigo-100 border"> 
                        <tr>
                            <th className="px-5 py-2 border-r">BANE</th>
                            <th className="px-5 py-2 border-r">SKYTERETNING I GRADER</th>
                            <th className="px-5 py-2">LENGDE</th>
                        </tr>
                    </thead>
                <tbody>
                        <tr className="text-lg">
                            <td className="px-10 border-r border-l">200M</td>
                            <td className="px-20 py-1 border-r">360 grader</td>
                            <td className="px-5 py-1 border-r">190 meter</td>
                        </tr>

                         <tr className="text-lg">
                            <td className="px-10 border-r border-l border-b">100M</td>
                            <td className="px-20 py-1 border-r border-b">360 grader</td>
                            <td className="px-5 py-1 border-r border-b">100 meter</td>
                        </tr>
                </tbody>
            </table>
           
                </div>
            </div>
        </div>
        
    )
}