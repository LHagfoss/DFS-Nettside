import Image from "next/image"

import logoIcon from "@/public/logo.svg"

export default function Navbar() {
    return (
        <nav className="fixed bg-indigo-700 w-screen flex flex-col justify-center items-center">
            <div className="container flex justify-between items-center py-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* Logo placeholder */}
                        <Image src={logoIcon} alt={logoIcon.src} className="w-12 h-12"/>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-medium">VIS ENHETER</button>
                    <button className="bg-white text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-medium">LOGG INN</button>
                </div>
            </div>

            <div className="w-screen flex justify-center items-center bg-indigo-100">
                <div className="container flex justify-between item-center py-3 font-bold">
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Resultater</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Stevneinfo</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Påmelding</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Arrangørene</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Veibeskrivelse</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Overnatting</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Aktiviteter</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm" target="_blank" rel="noopener noreferrer">NC (åpnes i ny fane)</a>
                    <a href="#" className="text-indigo-600 hover:bg-indigo-300 px-3 py-2 rounded-md text-sm">Sponsorer</a>
                </div>
            </div>
        </nav>
    )
}