"use client"

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

import MenuLink from "@/components/navbar/navbar-link";
import { springPopup } from "@/app/utils/animations";

const menuLinks = [
    { path: "/home", label: "Home" },
]

type GSAPTimeline = {
    play: () => void;
    reverse: () => void;
};

export default function Navbar() {
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [time, setLocalTime] = useState("00.00.00");
    const [isViewMorePopupOpen, setIsViewMorePopupOpen] = useState(false);

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

    const toggleViewMorePopup = () => {
        setIsViewMorePopupOpen(!isViewMorePopupOpen);
    };

    return (
        <nav className="menu-container">
            <div className="menu-bar">
                <div className="menu-logo mt-6">
                    <Link href="/" className="nav-item opacity-0 text-zinc-100 p-4 uppercase">LHagfoss</Link>
                </div>
                <div className="menu-open nav-item opacity-0 bg-zinc-900 aspect-square flex justify-center items-center rounded-full cursor-pointer" onClick={toggleMenu}>
                    <p className="text-[#f4f4f5] p-4 uppercase">Menu</p>
                </div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo z-10">
                        <Link href="/" className="text-[#f4f4f5] p-4 uppercase">LHagfoss</Link>
                    </div>
                    <div className="menu-close bg-[#f4f4f5] aspect-square flex justify-center items-center rounded-full cursor-pointer z-20" onClick={toggleMenu}>
                        <p className="text-zinc-900 p-4 uppercase">Close</p>
                    </div>
                </div>
                <div className="menu-close-icon text-[#f4f4f5] z-10" onClick={toggleMenu}>
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
                            <a href="https://x.com/lhagfoss" target="_blank">Twitter &#8599;</a>
                            <a href="#">Instagram &#8599;</a>
                            <a href="#">LinkedIn &#8599;</a>
                            <a href="#">GitHub &#8599;</a>
                            <a href="#">Discord &#8599;</a>
                        </div>                  
                        <div className="menu-info-col">
                            <p>Local Time</p>
                            <p>{time}</p>
                        </div>
                        <div className="menu-info-col">
                            <p>lhagfoss@gmail.com</p>
                            <p>+47 47 66 99 01</p>
                        </div>      
                    </div>
                </div>
                <div className="menu-preview text-[#f4f4f5] absolute bottom-10 right-10 inset-0">
                    <ViewMorePopup isOpen={isViewMorePopupOpen} />
                    <p className="cursor-pointer sm:block hidden" onClick={toggleViewMorePopup}>{isViewMorePopupOpen ? "Close view" : "View more"}</p>
                    <p className="cursor-pointer sm:hidden block" onClick={toggleViewMorePopup}>{isViewMorePopupOpen ? "Close" : "More"}</p>
                </div>
            </div>
        </nav>
    );
};

const ViewMorePopup = ({ isOpen }: { isOpen: boolean }) => {
    const popupRef = useRef<HTMLDivElement>(null);
    
    useGSAP(() => {
        if (popupRef.current) {
            springPopup(popupRef.current, isOpen);
        }
    }, { dependencies: [isOpen], scope: popupRef });

    return (
        <div ref={popupRef} className="max-w-[200px] menu-preview-popup absolute bottom-10 pointer-events-none opacity-0 bg-zinc-950 p-5 rounded-xl">
            <p className="text-zinc-100">This is a popup.</p>
            <p className="text-zinc-500 mb-48">This is a popup message.</p>
            <p className="text-zinc-500">I am very sigma</p>
        </div>
    );
};