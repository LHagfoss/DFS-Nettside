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
            <div className="leading-[90%] text-2xl sm:text-4xl md:font-bold p-6 ">
                <h1>Norges Cupen 2025</h1></div> 
            <div className="container flex justify-center items-center">
                <div className="slider w-[200vw] flex gap-5 items-center text-xl leading-none">
                    <Card contentNumber={1} imageSrc={logo1} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/" />
                    <Card contentNumber={2} imageSrc={logo2} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/" />
                    <Card contentNumber={3} imageSrc={logo3} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/"/>
                    <Card contentNumber={4} imageSrc={logo4} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/"/>
                    <Card contentNumber={5} imageSrc={logo1} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/"/>
                    <Card contentNumber={6} imageSrc={logo2} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/" />
                    <Card contentNumber={7} imageSrc={logo3} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/"/>
                    <Card contentNumber={8} imageSrc={logo4} link="https://mittdfs.no/hovedside/Skytterlagssider/sorlandskretsen/agder/kristiansand-og-omegn/"/>
                </div>
            </div>
        </div>
    );
};

const Card = ({contentNumber, imageSrc, link}: {contentNumber: number, imageSrc: StaticImageData, link: string}) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleClick=() => {
        window.open(link, '_blank');
    }
    return (
            <div onClick={handleClick}
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