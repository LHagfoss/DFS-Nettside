import { StaticImageData } from "next/image";
import Image from "next/image";

import logo1 from "@/public/logo1.png"
import logo2 from "@/public/logo2.png"
import logo3 from "@/public/logo3.png"
import logo4 from "@/public/logo4.png"

export default function InfiniteScroll() {
    return (
        
        <div className="w-full flex justify-center items-center flex-col ">
            <div className="container flex justify-center items-center slider-container">
                <div className="slider w-[200vw] flex gap-5 items-center text-xl leading-none">
                    <Card contentNumber={1} imageSrc={logo1} link="https://dfsgrasrot.no/soegne-skytterlag" />
                    <Card contentNumber={2} imageSrc={logo2} link="https://dfsgrasrot.no/kristiansand-og-omegn-skytterlag" />
                    <Card contentNumber={3} imageSrc={logo3} link="https://mittdfs.no/lyngdal"/>
                    <Card contentNumber={4} imageSrc={logo4} link="https://laudalskytterlag.no/"/>
                    <Card contentNumber={5} imageSrc={logo1} link="https://dfsgrasrot.no/soegne-skytterlag"/>
                    <Card contentNumber={6} imageSrc={logo2} link="https://dfsgrasrot.no/kristiansand-og-omegn-skytterlag" />
                    <Card contentNumber={7} imageSrc={logo3} link="https://mittdfs.no/lyngdal"/>
                    <Card contentNumber={8} imageSrc={logo4} link="https://laudalskytterlag.no/"/>
                </div>
            </div>
        </div>
    );
};

const Card = ({contentNumber, imageSrc, link}: {contentNumber: number, imageSrc: StaticImageData, link: string}) => {
    
    const handleClick=() => {
        window.open(link, '_blank');
    }
    return (
            <div onClick={handleClick}
            className="scroll-item flex justify-center items-center hover:scale-125 transform transition-transform duration-300"
            style={{ '--pos': contentNumber } as React.CSSProperties}
        >   <button>
                <Image src={imageSrc} alt={imageSrc.src} className="object-cover aspect-square" />
            </button>
        </div>
        
    );
};