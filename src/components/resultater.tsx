
export default function Resultater() {
    return(
        <div className=" w-full flex flex-col items-center">
        <div className=" flex justify-between container">
            <h1 className="text-2xl sm:text-5xl leading-[90%] mb-4 flex font-bold">RESULTATER</h1>
        </div>
        <div className="w-full h-12 bg-indigo-400 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
            <div className=" flex justify-between container">
            <p>Elverum</p>
            <p>Åsheim</p>
            <p>Lismarken</p>
            </div>

        </div>
        <div className="w-full h-12 flex justify-center text-lg sm:text-2xl leading-[90%] items-center">
                <div className=" flex justify-between container">
                <a href="https://www.livevisning.com/elverum/NC%20Elverum%202024%201%20runde%20bane/index1.html#">Resultat</a>
                <p>2</p>
                <p>3</p>
                </div>
            </div>
        </div>
    );
}