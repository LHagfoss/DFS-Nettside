import Image from "next/image"
import sorlandet from "@/public/sorlandet.png"
import parkering from "@/public/parkering.png"

export default function Veibeskrivelse() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-20 md:mt-52 px-4 md:px-0">
            <div className="container gap-5 md:gap-10 flex flex-col md:flex-row justify-between items-center md:items-start">
                <Image 
                    src={sorlandet} 
                    alt="sorlandetlogo" 
                    className="object-cover w-full md:w-1/3 md:ml-32"
                />
                <div className="flex-col flex md:mr-32">
                    <div className="flex flex-col text-2xl md:text-3xl text-[#002f67] font-bold md:text-left">
                        En kompakt stevnehelg på Sørlandet
                    </div>
                    <div className="flex flex-col mt-4 text-lg md:text-2xl font-medium text-[#002f67]">
                        Skytterlagene i Lyngdal, Laudal, Søgne og Kristiansand ønsker velkommen til en langhelg på Sørlandet med relativt korte avstander. Alle stevnene ligger relativt nære E39/E18 med en liten avstikker for å skyte de to rundene med stang og felthurting som går i Laudal.
                    </div>
                </div>
            </div>

            <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
                <div className="flex flex-col">
                    <div className="flex flex-col text-2xl md:text-3xl text-[#002f67] font-bold">Lyngdal Skytterlag - Lyngdal Skytebane</div>
                    <div className="flex flex-col mt-3 text-lg md:text-2xl font-medium text-[#002f67]">
                        Skytebaneanlegget i Lyngdal ligger sentralt til, like ved E39. Anlegget har 14 skiver på 200m og 12 skiver på 100m med elektronikk fra KME. Banene og bygningsmassen er fra 1990 tallet, men er godt ivaretatt og vedlikeholdt, skytterhuset har kafeteria og live visning.
                    </div>
                </div>
                
                <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
                    <div className="flex flex-col w-full md:w-1/3">
                        <iframe 
                            className="w-full h-[250px] md:h-[300px]"
                            frameBorder="0" 
                            scrolling="no" 
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;&amp;zoom=13"
                        ></iframe>
                        <a className="text-blue-700 hover:underline mt-2" href="https://www.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.16357985855411,7.096496735361301&zoom=13" target="_blank">Vis vei</a>
                    </div>
                    <div className="relative overflow-x-auto w-full md:w-2/3"> 
                        <table className="text-[#002f67] w-full text-sm md:text-base">
                            <thead className="text-base md:text-xl bg-indigo-100 border"> 
                                <tr>
                                    <th className="px-2 md:px-5 py-1 border-r">BANE</th>
                                    <th className="px-2 md:px-5 py-1 border-r">SKYTERETNING I GRADER</th>
                                    <th className="px-2 md:px-5 py-1">LENGDE</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr className="text-sm md:text-lg">
                                        <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                            <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;&amp;zoom=13" target="_blank">
                                                200M
                                            </a>
                                        </td>
                                        <td className="px-2 md:px-5 py-1 border-r text-center">69 grader</td>
                                        <td className="px-2 md:px-5 py-1 border-r text-center">192 meter</td>
                                    </tr>

                                     <tr className="text-sm md:text-lg">
                                        <td className="px-2 md:px-5 py-1 border-r border-l border-b text-center">
                                            <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16381166882256,7.096308456529875&amp;&amp;zoom=13" target="_blank">
                                                100M
                                            </a>
                                        </td>
                                        <td className="px-2 md:px-5 py-1 border-r border-b text-center">73 grader</td>
                                        <td className="px-2 md:px-5 py-1 border-r border-b text-center">100 meter</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
                <div className="flex flex-col">
                    <div className="flex flex-col text-2xl md:text-3xl text-[#002f67] font-bold">Laudal Skytterlag - Laudal Skytebane</div>
                    <div className="flex flex-col mt-3 text-lg md:text-2xl font-medium text-[#002f67]">
                        Laudal skal bygge et helt nytt stang og felthurtig anlegg i løpet av 2024/2025 med utstyr fra Megalink, Skytterhuset har kafeteria med kapasitet på inntil ca 80 personer, det er tilrettelagt tilgang til skytterhuset og toalett for rullestolbrukere. Laudal har internettforbindelse og vil kunne levere live resultater.
                    </div>
                </div>
            </div>

            <div className="container flex flex-col md:flex-row justify-between mt-10 md:mt-20 px-4 md:px-32">
                <div className="flex flex-col w-full md:w-1/3">
                    <iframe 
                        className="w-full h-[250px] md:h-[300px]" 
                        frameBorder="0" 
                        scrolling="no" 
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"
                    ></iframe>
                    <a className="text-blue-700 hover:underline mt-2" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23351176865408,7.4692684384200865&amp;&amp;zoom=13" target="_blank">Vis vei</a>
                </div>

                <div className="relative overflow-x-auto w-full md:w-2/3"> 
                    <table className="text-[#002f67] w-full text-sm md:text-base">
                            <thead className="text-base md:text-xl bg-indigo-100 border"> 
                                <tr>
                                    <th className="px-2 md:px-5 py-1 border-r">BANE</th>
                                    <th className="px-2 md:px-5 py-1 border-r">SKYTERETNING I GRADER</th>
                                    <th className="px-2 md:px-5 py-1">LENGDE</th>
                                </tr>
                            </thead>
                        <tbody>
                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23343632529335,7.46890842119455&amp;&amp;zoom=13" target="_blank">
                                            200M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">325 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">200 meter</td>
                                </tr>

                                 <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23351176865408,7.4692684384200865&amp;&amp;zoom=13" target="_blank">
                                            100M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">352 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">100 meter</td>
                                </tr>
                                
                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23343632529335,7.46890842119455&amp;&amp;zoom=13" target="_blank">
                                            STANG
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">Nordlig</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center"></td>
                                </tr>

                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l border-b text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23343632529335,7.46890842119455&amp;&amp;zoom=13" target="_blank">
                                            FELTHURTIG
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center">Nordlig</td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center"></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
                <div className="flex flex-col">
                    <div className="flex flex-col text-2xl md:text-3xl text-[#002f67] font-bold">Søgne Skytterlag - Søgne og Greipstad Sparebank Arena</div>
                    <div className="flex flex-col mt-3 text-lg md:text-2xl font-medium text-[#002f67]">
                        Flott og moderne skyteanlegg som blir ferdigstilt i 2024 med 10 elektroniske skiver på både 100 og 200 meter fra Kongsberg. Anlegget har store voller på begge sider i skyteretningen på både 100 og 200 meter, noe som gjør at skytteren blir lite utsatt for vind. Anlegget har et moderne og lyst skytterhus med stor takhøyde i kafeteria og god kapasitet for besøkende og livevisning og live resultater under stevnet.
                    </div>
                </div>
            </div>

            <div className="container flex flex-col md:flex-row justify-between mt-10 md:mt-20 px-4 md:px-32">
                <div className="flex flex-col w-full md:w-1/3">
                    <iframe 
                        className="w-full h-[250px] md:h-[300px]" 
                        frameBorder="0" 
                        scrolling="no" 
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13"
                    ></iframe>
                    <a className="text-blue-700 hover:underline mt-2" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13" target="_blank">Vis vei</a>
                </div>
                    <div className="relative overflow-x-auto w-full md:w-2/3"> 
                        <table className="text-[#002f67] w-full text-sm md:text-base">
                            <thead className="text-base md:text-xl bg-indigo-100 border"> 
                                <tr>
                                    <th className="px-2 md:px-5 py-1 border-r">BANE</th>
                                    <th className="px-2 md:px-5 py-1 border-r">SKYTERETNING I GRADER</th>
                                    <th className="px-2 md:px-5 py-1">LENGDE</th>
                                </tr>
                            </thead>
                        <tbody>
                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13" target="_blank">
                                            200M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">360 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">190 meter</td>
                                </tr>

                                 <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l border-b text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11075712854847,7.719581047027041&amp;&amp;zoom=13" target="_blank">
                                            100M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center">360 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center">100 meter</td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
                <div className="flex flex-col">
                    <div className="flex flex-col text-2xl md:text-3xl text-[#002f67] font-bold">Kristiansand og Omegn Skytterlag - Farvannet Skytebane</div>
                    <div className="flex flex-col mt-3 text-lg md:text-2xl font-medium text-[#002f67]">
                        Farvannet skytebane er et moderne anlegg fra 2013 med stor kapasitet på elektroniske skiver, 20 på 100m og 25 skiver på 200m i tillegg til elektronisk stang og felthurtig anlegg, alt fra Megalink. Banene og bygningsmassen er meget godt ivaretatt og vedlikeholdt, skytterhuset har en stor kafeteria som i de senere år har blitt påbygd med en stor veranda for ytterligere kapasitet, det vil være livevisning og resultater på skytterhuset.
                    </div>
                </div>
                
                <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
                    <div className="flex flex-col w-full md:w-1/3">
                        <iframe 
                            className="w-full h-[250px] md:h-[300px]" 
                            frameBorder="0" 
                            scrolling="no" 
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13"
                        ></iframe>
                        <a className="text-blue-700 hover:underline mt-2" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13" target="_blank">Vis vei</a>
                    </div>

                    <div className="relative overflow-x-auto w-full md:w-2/3"> 
                        <table className="text-[#002f67] w-full text-sm md:text-base">
                            <thead className="text-base md:text-xl bg-indigo-100 border"> 
                                <tr>
                                    <th className="px-2 md:px-5 py-1 border-r">BANE</th>
                                    <th className="px-2 md:px-5 py-1 border-r">SKYTERETNING I GRADER</th>
                                    <th className="px-2 md:px-5 py-1">LENGDE</th>
                                </tr>
                            </thead>
                        <tbody>
                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13" target="_blank">
                                            200M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">325 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">200 meter</td>
                                </tr>

                                 <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23755452489302,8.067036521039766&amp;&amp;zoom=13" target="_blank">
                                            100M
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">352 grader</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">100 meter</td>
                                </tr>
                                
                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23755452489302,8.067036521039766&amp;&amp;zoom=13" target="_blank">
                                            STANG
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center">Nordlig</td>
                                    <td className="px-2 md:px-5 py-1 border-r text-center"></td>
                                </tr>

                                <tr className="text-sm md:text-lg">
                                    <td className="px-2 md:px-5 py-1 border-r border-l border-b text-center">
                                        <a className="hover:underline text-blue-700" href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23755452489302,8.067036521039766&amp;&amp;zoom=13" target="_blank">
                                            FELTHURTIG
                                        </a>
                                    </td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center">Nordlig</td>
                                    <td className="px-2 md:px-5 py-1 border-r border-b text-center"></td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
            <div className="flex flex-col px-4 md:px-32">
                <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">Parkering i Kristiansand</div>
                <div className="flex flex-col mt-3 text-lg md:text-xl font-medium text-[#002f67]">
                    Det er stor parkeringsplass på Farvannet med plass til bobiler og campingvogner for dem som har med seg dette. Det er kort avstand fra parkeringsplassen til skytterhus og standplassene. Skytter med nedsatt bevegelighet kan kontakte arrangøren for å få henvist parkering umiddelbart utenfor standplass, øvrige parkerer på stor grus parkeringsplass.
                </div>
                <Image src={parkering} alt="parkering" className="object-cover w-full mt-10"/>
            </div>

            <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
                <div className="flex flex-col px-4 md:px-32">
                    <div className="flex flex-col text-3xl text-[#002f67] font-bold">Fly / kollektivtransport</div>
                    <div className="flex flex-col mt-3 text-2xl font-medium text-[#002f67]">
                        Nærmeste flyplass er Kjevik, som ligger bare minutter å kjøre fra skytebanen i Kristiansand. Det er også mulig å komme seg til Sørlandet med tog og ekspressbusser fra både Oslo og Stavanger. Skyttere som kommer med kollektivtrafikk anbefales imidlertid å avtale samkjøring skyttere som har bil nede på Sørlandet eller leiebil, da det ikke er lett og komme seg helt frem til skytebanene med kollektivtransport.
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
    