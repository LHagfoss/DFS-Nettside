import Image from "next/image"
import norgescupen from "@/public/logoSecond.png"
import dfs from "@/public/dfslogo.png"
import pil from "@/public/pil.png"
import youtubeImage from "@/public/youtube.png"
import linkedinImage from "@/public/linkedin.png"

export default function Footer() {
    const tiltoppen = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const youtube = () => {
          window.open("https://www.youtube.com/@det.frivillige.skyttervesen", "_blank");
        };

    const linkedin = () => {
          window.open("https://no.linkedin.com/company/det-frivillige-skyttervesen", "_blank");
        };


    return (
        <footer className="w-screen h-64 bg-indigo-100 mt-20 flex flex-col p-10">
        <div className="flex-[2] flex justify-between">

            <div className="flex gap-4 mb-12">
                <Image src={norgescupen} alt="Norgescupenlogo" className="w-fit h-14 object-cover"/>
                <Image src={dfs} alt="dfslogo" className="w-fit h-14 object-cover"/>
            </div>

             <button onClick={tiltoppen} className="flex items-center p-3 gap-2 h-[40px] bg-white hover:bg-gray-100">
                <p>Gå til toppen</p>
                 <Image src={pil} alt="pil" className="w-fit h-7 object-cover"/>
             </button>

        </div>

        <div className="w-full ">Laget av <a href="https://lhagfoss.com/" target="blank_" className="text-blue-700 hover:underline">LHagfoss</a>, <a href="https://testportfolio-gilt.vercel.app/" target="blank_" className="text-blue-700 hover:underline">
                MelyGuy</a> og <a href="https://github.com/07Siddi" target="blank_" className="text-blue-700 hover:underline">07Siddi</a>
        </div>

        <div className="w-full h-[1px] bg-black my-2">
        </div>

        <div className="flex-[2] flex justify-between">
        
                <div className="flex-[1]">Copyright © 2025 All Right Reserved
                </div>

                <div className="flex gap-4">
                   <Image onClick={youtube} src={youtubeImage} alt="youtubelogo" title="YouTube" className="w-fit h-6 object-cover cursor-pointer"/>
                   <Image onClick={linkedin} src={linkedinImage} alt="linkedinlogo" title="LinkedIn" className="w-fit h-6 object-cover cursor-pointer"/>
                </div>
        </div>
        </footer>
    )

}