
export default function Resultater() {
    const LyngdalLink = "https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" //OPPDATER!!
    const SøgneLink = "https://res.megalink.no/event/asheim-skl/StartFrame.htm" //OPPDATER!!
    const KristiansandLink = "https://livevisning.com/lismarken/NC_Bane_Lismarken_2024/index1.html#" //OPPDATER!!
    return(
        <div className=" w-screen flex flex-col items-center p-14">
        <div className=" flex justify-between container">
            <h1 className="text-2xl sm:text-5xl leading-[90%] mb-4 flex font-bold">RESULTATER</h1>
        </div>
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container text-white">
            <p className="flex-1">Lyngdal</p>
            <p className="flex-1 flex justify-center">Søgne</p>
            <p className="flex-1 flex justify-end">Kristiansand</p>
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
            <a href="https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" className="flex-1">Live</a>
            <a href="https://res.megalink.no/event/asheim-skl/StartFrame.htm" className="flex-1 flex justify-center">Live</a>
            <a href ="https://live.megalink.no/#!/kristiansand-og-omegn-skl/100m" target="blank_" className="flex-1 flex justify-end">Live(100m)</a>                </div>
            </div>
            
        <div className="w-screen h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className="flex items-center text-white">
            <a href="https://mittdfs.no/hovedside/aktuelt-na/arrangementer-og-resultater/nc-bane-arkiv/nc-sammenlagt/" className="text-1xl sm:text-2xl leading-[90%] mb-4 flex font-bold">SAMLET RESULTAT</a>
            </div>
        </div>
        </div>
        
        
        
    );
}