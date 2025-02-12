import React from "react";
import Image from 'next/image';
import logoLyngdal from '@/public/logo1.png';
import logoSogne from '@/public/logo4.png';
import logoLaudal from '@/public/logo3.png';
import logoKristiansand from '@/public/logo2.png';

export default function Kontakt() {
  return (
    <main className="w-full h-screen p-10 pt-44 bg-gray-100 flex justify-center items-center">
        <title>DFS-Nettside | Kontakt Oss</title>
        <div className="container grid grid-cols-2 gap-4 h-full">
            <div className="contact-person bg-blue-100 p-10 rounded-3xl shadow mb-4 h-full">
                <Image src={logoLyngdal} alt="Lyngdal Logo" width={100} height={100} />
                <h1 className="text-2xl font-bold">Lyngdal Skyttelag</h1>
                <p className="text-gray-600">Veibeskrivelse: Skytebaneveien 1, Lyngdal, merket fra rundkjøring på E39.</p>
                <p className="text-gray-600">Skyteretning: Østlig</p>
                <p className="text-gray-600">GPS-koordinater: 58.163580°N, 7.096497°Ø</p>
                <p className="text-gray-600">Kontakt tlf: 905 84 226</p>
                <p className="text-gray-600">Email: lyngdal@skytterlag.no</p>
            </div>
            <div className="contact-person bg-blue-100 p-10 rounded-3xl shadow mb-4 h-full">
                <Image src={logoSogne} alt="Sogne Logo" width={100} height={100} />
                <h1 className="text-2xl font-bold">Søgne Skyttelag</h1>
                <p className="text-gray-600">Veibeskrivelse: Årdalen, merket vei fra Shell Lonielier langs E39.</p>
                <p className="text-gray-600">Skyteretning: Nordlig</p>
                <p className="text-gray-600">GPS-koordinater: 58.110707°N, 7.719182°Ø</p>
                <p className="text-gray-600">Kontakt tlf: 901 14 880</p>
                <p className="text-gray-600">Email: sogne@skytterlag.no</p>
            </div>
            <div className="contact-person bg-blue-100 p-10 rounded-3xl shadow mb-4 h-full">
                <Image src={logoLaudal} alt="Laudal Logo" width={100} height={100} />
                <h1 className="text-2xl font-bold">Laudal Skyttelag</h1>
                <p className="text-gray-600">Veibeskrivelse: Ta Fv455 fra Mandalskrysset på E39, Vestheia 1112, 4534 Marnadal, merket fra Fv455.</p>
                <p className="text-gray-600">Skyteretning: Nordlig</p>
                <p className="text-gray-600">GPS-koordinater: 58.233512°N, 7.469268°Ø</p>
                <p className="text-gray-600">Kontakt tlf: 480 85 744</p>
                <p className="text-gray-600">Email: laudal@skytterlag.no</p>
            </div>
            <div className="contact-person bg-blue-100 p-10 rounded-3xl shadow mb-4 h-full">
                <Image src={logoKristiansand} alt="Kristiansand og Omegn Logo" width={100} height={100} />
                <h1 className="text-2xl font-bold">Kristiansand og Omegn Skyttelag</h1>
                <p className="text-gray-600">Veibeskrivelse: Østre Ålefjærvei 261, Kristiansand, merket fra Timeneskrysset langs E18.</p>
                <p className="text-gray-600">Skyteretning: Nordlig 100m: Østlig</p>
                <p className="text-gray-600">GPS-koordinater: 58.238571°N, 8.064855°Ø</p>
                <p className="text-gray-600">Kontakt tlf: 916 20 275</p>
                <p className="text-gray-600">Email: kom@skytterlag.no</p>
            </div>
        </div>
    </main>
  );
};