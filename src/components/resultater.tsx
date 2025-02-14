
export default function Resultater() {
    const LyngdalLink = "https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" //OPPDATER!!
    const SøgneLink = "https://res.megalink.no/event/asheim-skl/StartFrame.htm" //OPPDATER!!
    const KristiansandLink = "https://livevisning.com/lismarken/NC_Bane_Lismarken_2024/index1.html#" //OPPDATER!!
    return(
        <div className=" w-screen h-screen mt-40 flex flex-col items-center p-14">
        <div className=" flex justify-between container">
            <h1 className="text-2xl sm:text-4xl leading-[90%] mb-4 flex font-bold">Resultater Bane</h1>
        </div>
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container text-white">
            <p className="flex-1">Lyngdal</p>
            <p className="flex-1 flex justify-center">Søgne</p>
            <p className="flex-1 flex justify-end">Kristiansand og Omegn</p>
            </div>

        </div>
        <div className="w-screen h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
                <div className=" flex justify-between container">
                <a href={LyngdalLink} className="flex-1">Resultat</a>
                <a href={SøgneLink} className="flex-1 flex justify-center">Resultat</a>
                <a href ={KristiansandLink}className="flex-1 flex justify-end">Resultat</a>
                </div>
            </div>

        <div className="w-screen h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container">
            <a href="https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" className="flex-1">Livevisning</a>
            <a href="https://res.megalink.no/event/asheim-skl/StartFrame.htm" className="flex-1 flex justify-center">Livevisning</a>
            <a href ="https://live.megalink.no/#!/kristiansand-og-omegn-skl" target="blank_" className="flex-1 flex justify-end">Livevisning</a>                </div>
            </div>
            
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className="flex items-center text-white">
            <a href="https://mittdfs.no/hovedside/aktuelt-na/arrangementer-og-resultater/nc-bane-arkiv/nc-sammenlagt/" className="text-1xl sm:text-2xl leading-[90%] mb-4 flex font-bold">SAMLET RESULTAT</a>
            </div>
        </div>
        <div className=" flex justify-between container">
            <h1 className="text-2xl sm:text-3xl leading-[90%] mb-4 flex font-bold">Resultater stang og felthurtig</h1>
        </div>
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container text-white">
            <p className="flex-1">Laudal 1</p>
            <p className="flex-1 flex justify-center">Laudal 2 </p>
            <p className="flex-1 flex justify-end">Kristiansand og Omegn</p>
            </div>

        </div>
        <div className="w-screen h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
                <div className=" flex justify-between container">
                <a href={LyngdalLink} className="flex-1">Resultat</a>
                <a href={SøgneLink} className="flex-1 flex justify-center">Resultat</a>
                <a href ={KristiansandLink}className="flex-1 flex justify-end">Resultat</a>
                </div>
            </div>

        <div className="w-screen h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container">
            <a href="https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" className="flex-1">Livevisning</a>
            <a href="https://res.megalink.no/event/asheim-skl/StartFrame.htm" className="flex-1 flex justify-center">Livevisning</a>
            <a href ="https://live.megalink.no/#!/kristiansand-og-omegn-skl" target="blank_" className="flex-1 flex justify-end">Livevisning</a>                </div>
            </div>
            
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className="flex items-center text-white">
            <a href="https://mittdfs.no/hovedside/aktuelt-na/arrangementer-og-resultater/nc-s-fh-arkiv/nc-s-fh-arkivet/Sammenlagt-fc-s-fh/" className="text-1xl sm:text-2xl leading-[90%] mb-4 flex font-bold">SAMLET RESULTAT</a>
            </div>
        </div>
        </div>
        
        
        
    );
}