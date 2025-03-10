"use client";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { animateHomeIn } from "@/app/utils/animations";

import logoIcon from "@/public/logo.svg"
import MenuIcon from "@/public/menu.svg";


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isPåmeldingOpen, setIsPåmeldingOpen] = useState(false)
    
    const pathname = usePathname();

    const handleNavClick = () => {
        setIsMenuOpen(false);
        setIsPåmeldingOpen(false);
    }

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
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            DirekteSending
                        </Link>
                        <Link 
                            href="/resultater" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Resultater
                        </Link>
                        <Link 
                            href="/stevneinfo" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Stevneinfo
                        </Link>
                        <Link 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setIsPåmeldingOpen(!isPåmeldingOpen);
                            }} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Påmelding
                        </Link>
                        {/* Påmelding dropdown for mobile */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isPåmeldingOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                            <div className="pl-4 flex flex-col gap-2">
                                <Link 
                                    href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25831&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Lyngdal bane
                                </Link>
                                <Link 
                                    href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25813&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Søgne bane
                                </Link>
                                <Link 
                                    href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25811&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Kristiansand bane
                                </Link>
                                <Link 
                                    href=" https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25828&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Laudal 1 Stang og Felthurtig
                                </Link>
                                <Link 
                                    href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25829&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Laudal 2 Stang og Felthurtig
                                </Link>
                                <Link 
                                    href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25812&arrType=STEVNE" 
                                    target="_blank" 
                                    onClick={handleNavClick}
                                    className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                                >
                                    Kristiansand Stang og Felthurtig
                                </Link>
                            </div>
                        </div>
                        <Link 
                            href="/arrangorene" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Arrangørene
                        </Link>
                        <Link 
                            href="/veibeskrivelse" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Veibeskrivelse
                        </Link>
                        <Link 
                            href="/overnatting" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Overnatting
                        </Link>
                        <Link 
                            href="/aktiviteter" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Aktiviteter
                        </Link>
                        <Link 
                            href="https://skyttertidende.no/norgescup-1681983756/sections/29717/articles" 
                            target="_blank" 
                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            NC
                        </Link>
                        <Link 
                          
                            href="/kontakt" 

                            onClick={handleNavClick} 
                            className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm"
                        >
                            Kontakt oss
                        </Link>
                    </div>
                </nav>
            </div>
                
                

            <div className="hidden w-full xl:flex justify-center items-center bg-indigo-100">
                <div className="container flex flex-wrap justify-between item-center py-3 font-bold uppercase">
                <Link 
                    href="/livestream" 
                    onClick={handleNavClick} 
                    className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 
                    ${pathname === "/livestream" ? "text-indigo-500 underline" : "underline-none"}`}
                >
                    DirekteSending
                </Link>
                    <Link href="/resultater" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/resultater" ? "text-indigo-500 underline" : "underline-none"}`}>Resultater</Link>
                    <Link href="/stevneinfo" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/stevneinfo" ? "text-indigo-500 underline" : "underline-none"}`}>Stevneinfo</Link>
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
                    <Link href="/arrangorene" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/arrangorene" ? "text-indigo-500 underline" : "underline-none"}`}>Arrangørene</Link>
                    <Link href="/veibeskrivelse" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/veibeskrivelse" ? "text-indigo-500 underline" : "underline-none"}`}>Veibeskrivelse</Link>
                    <Link href="/overnatting" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/overnatting" ? "text-indigo-500 underline" : "underline-none"}`}>Overnatting</Link>
                    <Link href="/aktiviteter" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/aktiviteter" ? "text-indigo-500 underline" : "underline-none"}`}>Aktiviteter</Link>
                    <Link href="/kontakt" onClick={handleNavClick} className={`text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200 ${pathname === "/kontakt" ? "text-indigo-500 underline" : "underline-none"}`}>Kontakt Oss</Link>
                </div>
            </div>

            {/* Påmelding */}
            <div className={`hidden md:flex border-y border-indigo-600 w-screen z-10 bg-indigo-100 left-0 overflow-hidden transition-all duration-300 ease-in-out ${isPåmeldingOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                    <nav className="flex flex-col justify-center items-center">
                        <div className="container py-4 flex flex-col gap-2">
                        <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25831&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Lyngdal bane
                            </Link>
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25813&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Søgne bane
                            </Link>
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25811&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Kristiansand bane
                            </Link>
                            
                            <Link 
                                href=" https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25828&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Laudal 1 Stang og Felthurtig
                            </Link>
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25829&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Laudal 2 Stang og Felthurtig
                            </Link>
                            
                            <Link 
                                href="https://www.mittdfs.no/hovedside/aktuelt-na/arrangementskalender/pamelding/?eventId=25812&arrType=STEVNE" 
                                target="_blank" 
                                onClick={() => setIsPåmeldingOpen(false)}
                                className="text-indigo-700 hover:bg-indigo-200 px-4 py-2 rounded-md text-sm"
                            >
                                Kristiansand Stang og Felthurtig
                            </Link>
                            {/* Add more påmelding-related links here if needed */}
                        </div>
                    </nav>
                </div>
        </nav>

    )
}