"use client";

import Image from "next/image"

import { animateHomeIn } from "@/app/utils/animations";

import logoIcon from "@/public/logo.svg"
import { useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    
    useEffect(() => {
        animateHomeIn()
    }, [])

    return (
        <nav className="fixed bg-indigo-700 w-screen flex flex-col justify-center items-center">
            <div className="container flex justify-between items-center py-3">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        {/* Logo placeholder */}
                        <Link href="/hjem"><Image src={logoIcon} alt={logoIcon.src} className="w-12 h-12"/></Link>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-white hover:bg-indigo-600 px-3 py-2 rounded-md text-sm font-bold bg-indigo-800 ">VIS ENHETER</button>
                    <button className="bg-white text-indigo-700 hover:bg-indigo-100 px-4 py-2 rounded-md text-sm font-bold">LOGG INN</button>
                </div>
            </div>

            <div className="w-screen flex justify-center items-center bg-indigo-100">
                <div className="container flex justify-between item-center py-3 font-bold uppercase">
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Resultater</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Påmelding</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Stevneinfo</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Arrangørene</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Veibeskrivelse</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Overnatting</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Aktiviteter</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200" target="_blank" rel="noopener noreferrer">NC</a>
                    <a href="#" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-2 00">Sponsorer</a>
                </div>
            </div>
        </nav>
    )
}