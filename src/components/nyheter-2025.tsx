import Image from "next/image";
import imageOne from "@/public/norgescupbaneskyting2025.png"

const Nyheter = () => {
    return (
        <section className="w-[9in] bg-zinc-100 p-10 my-36 rounded-xl">
            <p className="text-lg text-zinc-500">Lokalt innhold fra</p>
            <a href="https://dfs.no/nc-2025-runde-1" className="text-2xl font-bold">NC 2025 - Runde 1</a>
            <div className="w-full h-px bg-zinc-950 my-4 rounded-full"></div>
            <h1 className="text-6xl text-center mb-10 text-zinc-700 font-bold">
                Annonse med praktisk info om NC 2025 runde 1 på Sørlandet
            </h1>

            <Card />

            <p className="mb-10">
                Arrangørlagene på Sørlandet har startet forberettelsene til den første runden av norgescupen i 2025, 
                og annonsen med mye nyttig info sendes snart ut fra DFS. Vi håper en langhelg på Sørlandet til våren 
                frister og gleder oss til å ta imot dere. Annonsen ligger også som PDF under for nedlasting for dem som ønsker det. 
            </p>

            <p className="font-bold text-3xl mb-4">Velkommen til Sørlandet!</p>

            <a href="https://s3-mittlag-prod.innocode.dev/production/uploads/attachment/file/49913/Norgescupannonser_runde1-2.pdf" className="bg-blue-200 p-3 rounded text-sm font-bold text-blue-500 hover:bg-blue-300">Norgescupannonser_runde1-2.pdf </a>

            <div className="w-full h-px bg-zinc-950 my-4 rounded-full"></div>
            <div className="w-full flex items-end justify-between">
                <div className="">
                    <p className="text-lg text-zinc-500">Lokalt innhold fra</p>
                    <a href="https://dfs.no/nc-2025-runde-1" className="text-2xl font-bold">NC 2025 - Runde 1</a>
                </div>
                <p className="text-sm text-zinc-500">30 Jan 2025</p>
            </div>
        </section>
    )
}

export default Nyheter;

const Card = () => {
    return (
        <div className="">
            <Image src={imageOne} alt={imageOne.src} className="mb-10 rounded-xl" />
        </div>
    )
}