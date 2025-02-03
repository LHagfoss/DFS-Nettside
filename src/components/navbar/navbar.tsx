"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import Image from "next/image";

import MenuLink from "@/components/navbar/navbar-link";

import logoIcon from "@/public/logo.svg"
import logoSecondIcon from "@/public/logoSecond.png"

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
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [time, setLocalTime] = useState("00.00.00");

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
        <nav className="menu-container">
            <div className="menu-bar">
                <div className="menu-logo mt-4">
                    <Link href="/hjem" className=""><Image src={logoSecondIcon} alt={logoIcon.src} className="w-12 h-12 object-cover aspect-square" /></Link>
                </div>
                <div className="menu-open aspect-square flex justify-center items-center rounded-full cursor-pointer" onClick={toggleMenu}>
                    <p className="text-red-100 bg-[--accent] rounded-full aspect-square flex items-center justify-center w-20 max-w-20">Meny</p>
                </div>
            </div>
            <div className="menu-overlay bg-[--accent]">
                <div className="menu-overlay-bar">
                    <div className="menu-logo z-10">
                        <Link href="/hjem" className=""><Image src={logoIcon} alt={logoIcon.src} className="w-12 h-12 object-cover aspect-square" /></Link>
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
                                        onClick={toggleMenu}
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
    );
};