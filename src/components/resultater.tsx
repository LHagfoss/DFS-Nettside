
export default function Resultater() {
    return(
        <div className=" w-full flex flex-col items-center">
        <div className=" flex justify-between container">
            <h1 className="text-2xl sm:text-5xl leading-[90%] mb-4 flex font-bold">RESULTATER</h1>
        </div>
        <div className="w-full h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container">
            <p className="flex-1">Elverum</p>
            <p className="flex-1 flex justify-center">Åsheim</p>
            <p className="flex-1 flex justify-end">Lismarken</p>
            </div>

        </div>
        <div className="w-full h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
                <div className=" flex justify-between container">
                <a href="https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#" className="flex-1">Resultat</a>
                <a href="https://res.megalink.no/event/asheim-skl/StartFrame.htm" className="flex-1 flex justify-center">Resultat</a>
                <a href ="https://livevisning.com/lismarken/NC_Bane_Lismarken_2024/index1.html#"className="flex-1 flex justify-end">Resultat</a>
                </div>
            </div>
        </div>
    );
}