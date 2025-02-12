"use client";

import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

import { animateHomeIn } from "@/app/utils/animations";

import logoIcon from "@/public/ukrlogo.png"
import MenuIcon from "./assets/menu.svg";
// import logoIcon2 from "@/public/logo.svg"


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        animateHomeIn()
    }, [])

    return (
        <nav className="fixed bg-indigo-700 w-screen left-0 top-0 flex flex-col justify-center items-center">
            <div className="container flex justify-between items-center p-3 sm:py-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* Logo placeholder */}
                        <Link href="/hjem"><Image src={logoIcon} alt={logoIcon.src} className="w-fit h-8 sm:h-12 object-cover"/></Link>
                        {/* <Link href="/hjem"><Image src={logoIcon2} alt={logoIcon2.src} className="w-fit h-12 object-cover"/></Link> */}
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-xs px-2 py-2 bg-white text-indigo-700 hover:bg-indigo-100 sm:px-4 sm:py-2 rounded-md sm:text-sm font-bold uppercase">Kontakt Oss</button>
                    <button className="" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <Image className="sm:hidden" src={MenuIcon} alt="Menu"></Image>
                    </button>
                    </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <nav className="fixed w-screen z-10 bg-indigo-700 top-16 left-0 flex flex-col justify-center items-center">
                    <div className="container py-4 flex flex-col gap-2">
                        <Link href="/resultater" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Resultater</Link>
                        <Link href="/stevneinfo" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Stevneinfo</Link>
                        <Link href="https://mittdfs.no/pamelding/" target="_blank" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Påmelding</Link>
                        <Link href="/arrangorene" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Arrangørene</Link>
                        <Link href="/veibeskrivelse" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Veibeskrivelse</Link>
                        <Link href="/overnatting" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Overnatting</Link>
                        <Link href="/aktiviteter" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Aktiviteter</Link>
                        <Link href="https://skyttertidende.no/norgescup-1681983756/sections/29717/articles" target="blank_" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">NC</Link>
                        <Link href="/sponsorer" className="text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm">Sponsorer</Link>
                    </div>
                </nav>
            )}


            <div className=" hidden w-full sm:flex justify-center items-center bg-indigo-100">
                <div className="container flex flex-wrap justify-between item-center py-3 font-bold uppercase">
                    <Link href="/resultater" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Resultater</Link>
                    <Link href="/stevneinfo" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Stevneinfo</Link>
                    <Link href="https://mittdfs.no/pamelding/?293143__dateTo=2025-03-11&293143__dateFrom=2025-02-11&293143__tab=all" target="blank_" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Påmelding</Link>
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