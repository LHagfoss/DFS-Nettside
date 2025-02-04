import { StaticImageData } from "next/image";
import Image from "next/image";
import { useState } from "react";

import logo1 from "@/public/logo1.png"
import logo2 from "@/public/logo2.png"
import logo3 from "@/public/logo3.png"
import logo4 from "@/public/logo4.png"

export default function InfiniteScroll() {
    return (
        
        <div className="w-screen flex justify-center items-center py-8 flex-col ">
            <div className="sleading-[90%] text-2xl sm:text-4xl md:font-bold p-6 ">
                <h1>Norges Cupen 2025</h1></div> 
            <div className="container flex justify-center items-center">
                <div className="slider w-[200vw] flex gap-5 items-center text-xl leading-none">
                    <Card contentNumber={1} imageSrc={logo1} />
                    <Card contentNumber={2} imageSrc={logo2} />
                    <Card contentNumber={3} imageSrc={logo3} />
                    <Card contentNumber={4} imageSrc={logo4} />
                    <Card contentNumber={5} imageSrc={logo1} />
                    <Card contentNumber={6} imageSrc={logo2} />
                    <Card contentNumber={7} imageSrc={logo3} />
                    <Card contentNumber={8} imageSrc={logo4} />
                </div>
            </div>
        </div>
    );
};

const Card = ({contentNumber, imageSrc}: {contentNumber: number, imageSrc: StaticImageData}) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <div 
            className="scroll-item flex justify-center items-center"
            style={{ '--pos': contentNumber } as React.CSSProperties}
        >   <button 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{ 
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s ease-in-out'
                }}
            >
                <Image src={imageSrc} alt={imageSrc.src} className="object-cover aspect-square" />
            </button>
        </div>
    );
};