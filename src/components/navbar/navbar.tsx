"use client"

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import BaneSelector from "@/components/live/bane-selector"
import { animatePageOut } from "@/app/utils/animations"

import MenuLink from "@/components/navbar/navbar-link";

import logoIcon from "@/public/logo.svg"

const menuLinks = [
    { path: "/hjem", label: "Hjem" },
    { path: "/live", label: "Live" },
    { path: "/info", label: "Info" },
    { path: "/kontakt", label: "Kontakt" },
]

type GSAPTimeline = {
    play: () => void;
    reverse: () => void;
};

export default function Navbar() {
    const router = useRouter()
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBaneSelectorOpen, setIsBaneSelectorOpen] = useState(false);
    const [time, setLocalTime] = useState("00.00.00");
    const pathname = usePathname()
    const isLiveRoute = pathname === "/live" || pathname.startsWith("/live/")

    useEffect(() => {
        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = { 
                timeZone: "Europe/Oslo", 
                hour: "numeric", 
                minute: "2-digit", 
                second: "2-digit", 
                hour12: false 
            };
            setLocalTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    const tl = useRef<GSAPTimeline | null>(null);

    const handleNavigation = async (href: string) => {
        await animatePageOut(href, router, () => {
            setIsMenuOpen(false)
        })
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleBaneSelector = () => {
        setIsBaneSelectorOpen(!isBaneSelectorOpen)
    }

    useGSAP(() => {
        gsap.set(".menu-link-link-holder", { y: 100});

        tl.current = gsap.timeline({ paused: true})
            .to(".menu-overlay", {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
            })
            .to(".menu-link-link-holder", {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power4.inOut",
                delay: -0.75,
            });
        }, 
        { scope: container.current || undefined },
    );

    useEffect(() => {
        if (isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }

    }, [isMenuOpen]);

    return (
        <>
            <nav className="menu-container">
                <div className="menu-bar bg-[--accent] px-5 py-2">
                    <div className="menu-logo mt-2">
                        <div onClick={() => handleNavigation("/hjem")} className="cursor-pointer">
                            <Image src={logoIcon} alt={logoIcon.src} className="w-16 h-16 object-cover aspect-square" />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {isLiveRoute && (
                            <div className="aspect-square flex justify-center items-center rounded-full cursor-pointer" onClick={toggleBaneSelector}>
                                <p className="text-[--accent] bg-red-100 rounded-full aspect-square flex items-center justify-center w-20 max-w-20">Se baner</p>
                            </div>
                        )}
                        <div className="aspect-square flex justify-center items-center rounded-full cursor-pointer" onClick={toggleMenu}>
                            <p className="text-[--accent] bg-red-100 rounded-full aspect-square flex items-center justify-center w-20 max-w-20">Meny</p>
                        </div>
                    </div>
                </div>
                <div className="menu-overlay bg-[--accent] px-5 py-2">
                    <div className="menu-overlay-bar">
                        <div className="menu-logo z-10">
                            <div onClick={() => handleNavigation("/hjem")} className="cursor-pointer">
                                <Image src={logoIcon} alt={logoIcon.src} className="w-16 h-16 object-cover aspect-square" />
                            </div>
                        </div>
                        <div className="menu-close bg-[#f4f4f5] aspect-square flex justify-center items-center rounded-full cursor-pointer z-20" onClick={toggleMenu}>
                            <p className="text-[--accent] bg-red-100 rounded-full aspect-square flex items-center justify-center w-20 max-w-20">Lukk</p>
                        </div>
                    </div>
                    <div className="menu-close-icon text-[#f4f4f5] opacity-0 pointer-events-none" >
                        <p>&#x2715;</p>
                    </div>
                    <div className="menu-copy text-[#f4f4f5]">
                        <div className="menu-links z-10">
                            {menuLinks.map((link, index) => (
                                <div key={index} className="menu-link-item">
                                    <div className="menu-link-link-holder">
                                        <MenuLink 
                                            href={link.path} 
                                            label={link.label} 
                                            className="menu-link" 
                                            onClick={() => handleNavigation(link.path)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="menu-info">
                            <div className="menu-info-col">
                                <p className="font-bold">Utvilkere</p>
                                <a href="#">LHagfoss &#8599;</a>
                                <a href="#">MelyGuy&#8599;</a>
                                <a href="#">00Siddi&#8599;</a>
                            </div>                  
                            <div className="menu-info-col">
                                <p>{time}</p>
                            </div>
                            <div className="menu-info-col">
                                <p>+69 69 69 69</p>
                                <p>Copyright © 2025</p>
                            </div>      
                        </div>
                    </div>
                </div>
            </nav>
            
            {isLiveRoute && <BaneSelector isOpen={isBaneSelectorOpen} onClose={() => setIsBaneSelectorOpen(false)} />}
        </>
    );
};