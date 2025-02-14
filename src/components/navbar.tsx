"use client";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

import { animateHomeIn } from "@/app/utils/animations";

import logoIcon from "@/public/logo.svg"
import MenuIcon from "@/public/menu.svg";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPåmeldingOpen, setIsPåmeldingOpen] = useState(false)
    useEffect(() => {
        animateHomeIn()
    }, [])

    return (
        <nav className="fixed bg-indigo-700 w-screen left-0 top-0 flex flex-col justify-center items-center">
            <div className="container flex justify-between items-center p-3 sm:py-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link 
                            href="/hjem" 
                            onClick={() => setIsMenuOpen(false)}
                            >
                                <Image src={logoIcon} alt={logoIcon.src} className="w-fit h-8 sm:h-12 object-cover"/>
                            </Link>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/kontakt" className="text-xs px-2 py-2 bg-white text-indigo-700 hover:bg-indigo-100 sm:px-4 sm:py-2 rounded-md sm:text-sm font-bold uppercase">Kontakt Oss</Link>
                    <button type="button" className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Image className="xl:hidden" src={MenuIcon} alt="Menu"></Image>
                    </button>
                    </div>
            </div>

            {/* Mobile menu */}
            <div className={`w-screen z-10 bg-indigo-700 left-0 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                <nav className="flex flex-col justify-center items-center">
                    <div className="container py-4 flex flex-col gap-2">
                        <Link 
                            href="/livestream" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Live
                        </Link>
                        <Link 
                            href="/resultater" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Resultater
                        </Link>
                        <Link 
                            href="/stevneinfo" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Stevneinfo
                        </Link>
                        <Link 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setIsMenuOpen(false);
                                setIsPåmeldingOpen(!isPåmeldingOpen);
                            }} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Påmelding
                        </Link>
                        <Link 
                            href="/arrangorene" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Arrangørene
                        </Link>
                        <Link 
                            href="/veibeskrivelse" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Veibeskrivelse
                        </Link>
                        <Link 
                            href="/overnatting" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Overnatting
                        </Link>
                        <Link 
                            href="/aktiviteter" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Aktiviteter
                        </Link>
                        <Link 
                            href="https://skyttertidende.no/norgescup-1681983756/sections/29717/articles" 
                            target="_blank" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            NC
                        </Link>
                        <Link 
                            href="/sponsorer" 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Sponsorer
                        </Link>
                    </div>
                </nav>
            </div>
                
                {/* Påmelding */}
                <div className={`w-screen z-10 bg-indigo-100 left-0 overflow-hidden transition-all duration-300 ease-in-out ${isPåmeldingOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <nav className="flex flex-col justify-center items-center">
                        <div className="container py-4 flex flex-col gap-2">
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25811&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Online Påmelding: Kristiansand bane
                            </Link>
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25813&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Online Påmelding: Søgne bane
                            </Link>
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25812&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Online Påmelding: Kristiansand Stang og Felthurtig
                            </Link>
                            {/* Add more påmelding-related links here if needed */}
                        </div>
                    </nav>
                </div>


            <div className=" hidden w-full xl:flex justify-center items-center bg-indigo-100">
                <div className="container flex flex-wrap justify-between item-center py-3 font-bold uppercase">
                <Link href="/livestream" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Live</Link>
                    <Link href="/resultater" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Resultater</Link>
                    <Link href="/stevneinfo" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Stevneinfo</Link>
                    <Link 
                        href="#" 
                        onClick={(e) => {
                            e.preventDefault();
                            setIsPåmeldingOpen(!isPåmeldingOpen)
                        }} 
                        className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200"
                    >
                        Påmelding
                    </Link>
                    <Link href="/arrangorene" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Arrangørene</Link>
                    <Link href="/veibeskrivelse" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Veibeskrivelse</Link>
                    <Link href="/overnatting" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Overnatting</Link>
                    <Link href="/aktiviteter" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Aktiviteter</Link>
                    <Link href="https://skyttertidende.no/norgescup-1681983756/sections/29717/articles" target="blank_" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">NC</Link>
                    <Link href="/sponsorer" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-2 00">Sponsorer</Link>
                </div>
            </div>
        </nav>
    )
}