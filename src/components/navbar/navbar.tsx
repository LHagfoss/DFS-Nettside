"use client";
import Image from "next/image";
import logo from "@/public/logo.svg"
import hamburger from "@/public/hamburger.svg"
export default function Navbar() {
    return (
        <>
            <div className=" fixed top-0 w-full h-24 flex items-center justify-between p-5  bg-[--accent]">
                <Image className="h-16 sm:h-22" alt="Logo til norgescuppen" src={logo} />
                <Image className="h-16  sm:h-22 sm:hidden block" alt="Logo SQL" src={hamburger} />
            </div>
        </>
    );
};