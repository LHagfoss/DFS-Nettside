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
                    <Link href="/resultater" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Resultater</Link>
                    <Link href="/pamelding" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Påmelding</Link>
                    <Link href="/stevneinfo" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Stevneinfo</Link>
                    <Link href="/arrangorene" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Arrangørene</Link>
                    <Link href="/veibeskrivelse" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Veibeskrivelse</Link>
                    <Link href="/overnatting" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Overnatting</Link>
                    <Link href="/aktiviteter" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">Aktiviteter</Link>
                    <Link href="/nc" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-200">NC</Link>
                    <Link href="/sponsorer" className="text-indigo-600 hover:text-indigo-500 hover:underline underline-offset-8 px-3 py-2 rounded-md text-sm active:scale-90 duration-2 00">Sponsorer</Link>
                </div>
            </div>
        </nav>
    )
}