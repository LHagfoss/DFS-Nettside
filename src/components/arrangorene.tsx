"use client";

import Image from "next/image";
import lyngdalparkering from "@/public/lyngdalparkering.png";
import laudalparkering from "@/public/laudalparkering.png";
import sogneparkering from "@/public/sogneparkering.png";
import kristiansandparkering from "@/public/kristiansandparkering.png";

import sognelogo from "@/public/logo1.png";
import kristiansandlogo from "@/public/logo2.png";
import lyngdallogo from "@/public/logo3.png";
import laudallogo from "@/public/logo4.png";

export default function Arrangorene() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 200;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center mt-16 sm:mt-20 md:mt-32 lg:mt-52 px-2 sm:px-4 md:px-0">
      <div className="w-full max-w-[1440px] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-4 md:px-16 lg:px-32">
        <div className="flex flex-col items-center">
          <Image
            src={lyngdallogo}
            alt="lyngdallogo"
            className="w-[60px] sm:w-[70px] md:w-[90px] lg:w-[110px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("lyngdal")}
          />
          <span className="text-xs sm:text-sm md:text-base text-[#002f67] mt-2 text-center font-bold">
            Lyngdal
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={laudallogo}
            alt="laudallogo"
            className="w-[60px] sm:w-[70px] md:w-[90px] lg:w-[110px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("laudal")}
          />
          <span className="text-xs sm:text-sm md:text-base text-[#002f67] mt-2 text-center font-bold">
            Laudal
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={sognelogo}
            alt="sognelogo"
            className="w-[60px] sm:w-[70px] md:w-[90px] lg:w-[110px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("sogne")}
          />
          <span className="text-xs sm:text-sm md:text-base text-[#002f67] mt-2 text-center font-bold">
            Søgne
          </span>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={kristiansandlogo}
            alt="kristiansandlogo"
            className="w-[60px] sm:w-[70px] md:w-[90px] lg:w-[110px] h-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection("kristiansand")}
          />
          <span className="text-xs sm:text-sm md:text-base text-[#002f67] mt-2 text-center font-bold">
            Kristiansand
          </span>
        </div>
      </div>

      {/* Lyngdal Section */}
      <div
        id="lyngdal"
        className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32"
      >
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Lyngdal Skytterlag - Lyngdal Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Skytebaneanlegget i Lyngdal ligger sentralt til, like ved E39.
            Anlegget har 14 skiver på 200m og 12 skiver på 100m med elektronikk
            fra KME. Banene og bygningsmassen er fra 1990 tallet, men er godt
            ivaretatt og vedlikeholdt, skytterhuset har kafeteria og live
            visning.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full md:w-1/3">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.16357985855411,7.096496735361301&&zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
          </div>
          <div className="relative overflow-x-auto w-full md:w-2/3">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">BANE</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    SKYTERETNING I GRADER
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">LENGDE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.16357985855411,7.096496735361301&&zoom=13"
                      target="_blank"
                    >
                      200M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    69 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    192 meter
                  </td>
                </tr>

                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.16381166882256,7.096308456529875&&zoom=13"
                      target="_blank"
                    >
                      100M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    73 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    100 meter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
        <div className="flex flex-col px-4 md:px-32">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
            <Image
              src={lyngdalparkering}
              alt="parkering"
              className="object-cover w-full lg:w-[600px] rounded-lg"
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-col text-lg md:text-xl text-[#002f67] font-bold">
                Parkering i Lyngdal
              </div>
              <div className="flex flex-col mt-3 text-base md:text-lg font-medium text-[#002f67]">
                Det er begrenset med parkeringplasser på selve skytebanen, men
                det planlegges 2 parkeringsplasser på nærliggende
                industriområder.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="laudal"
        className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32"
      >
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Laudal Skytterlag - Laudal Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Laudal skal bygge et helt nytt stang og felthurtig anlegg i løpet av
            2024/2025 med utstyr fra Megalink, Skytterhuset har kafeteria med
            kapasitet på inntil ca 80 personer, det er tilrettelagt tilgang til
            skytterhuset og toalett for rullestolbrukere. Laudal har
            internettforbindelse og vil kunne levere live resultater.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full md:w-1/3">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
          </div>

          <div className="relative overflow-x-auto w-full md:w-2/3">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    BANE
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    SKYTERETNING I GRADER
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    LENGDE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23343632529335,7.46890842119455&&zoom=13"
                      target="_blank"
                    >
                      200M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    325 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    200 meter
                  </td>
                </tr>
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"
                      target="_blank"
                    >
                      100M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    325 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    100 meter
                  </td>
                </tr>
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23343632529335,7.46890842119455&&zoom=13"
                      target="_blank"
                    >
                      STANG
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    Nordlig
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    -
                  </td>
                </tr>
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23343632529335,7.46890842119455&&zoom=13"
                      target="_blank"
                    >
                      FELTHURTIG
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    Nordlig
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    -
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
        <div className="flex flex-col px-4 md:px-32">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
            <Image
              src={laudalparkering}
              alt="parkering"
              className="object-cover w-full lg:w-[600px] rounded-lg"
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-col text-lg md:text-xl text-[#002f67] font-bold">
                Parkering i Laudal
              </div>
              <div className="flex flex-col mt-3 text-base md:text-lg font-medium text-[#002f67]">
                Det er ikke plass til å parkere campingvogner på skytebanen,
                disse kan parkeres på parkeringsplassen til nedlagt Heidelberg
                Elementfabrikk som ligger langs FV455 rett før avkjøringen mot
                skytebanen. For bobiler er det greit å parkere disse på begge
                sider av innkjørselen til parkeringsplassen til skytebanen, og
                ellers på anvist plass på skytebanen.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="sogne"
        className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32"
      >
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Søgne Skytterlag - Søgne og Greipstad Sparebank Arena
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Flott og moderne skyteanlegg som blir ferdigstilt i 2024 med 10
            elektroniske skiver på både 100 og 200 meter fra Kongsberg. Anlegget
            har store voller på begge sider i skyteretningen på både 100 og 200
            meter, noe som gjør at skytteren blir lite utsatt for vind. Anlegget
            har et moderne og lyst skytterhus med stor takhøyde i kafeteria og
            god kapasitet for besøkende og livevisning og live resultater under
            stevnet.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full md:w-1/3">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.11070720483179,7.719182523271993&&zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
          </div>
          <div className="relative overflow-x-auto w-full md:w-2/3">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">BANE</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    SKYTERETNING I GRADER
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">LENGDE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.11070720483179,7.719182523271993&&zoom=13"
                      target="_blank"
                    >
                      200M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    360 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    190 meter
                  </td>
                </tr>

                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.11075712854847,7.719581047027041&&zoom=13"
                      target="_blank"
                    >
                      100M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    360 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    100 meter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
        <div className="flex flex-col px-4 md:px-32">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
            <Image
              src={sogneparkering}
              alt="parkering"
              className="object-cover w-full lg:w-[600px] rounded-lg"
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-col text-lg md:text-xl text-[#002f67] font-bold">
                Parkering i Søgne
              </div>
              <div className="flex flex-col mt-3 text-base md:text-lg font-medium text-[#002f67]">
                Skytebanen har begrenset med parkering, og ingen plass til
                campingvogner, campingvogner må parkeres på anvist parkering som
                vil bli avklart på et sener tidspunkt.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="kristiansand"
        className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32"
      >
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Kristiansand og Omegn Skytterlag - Farvannet Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Farvannet skytebane er et moderne anlegg fra 2013 med stor kapasitet
            på elektroniske skiver, 20 på 100m og 25 skiver på 200m i tillegg
            til elektronisk stang og felthurtig anlegg, alt fra Megalink. Banene
            og bygningsmassen er meget godt ivaretatt og vedlikeholdt,
            skytterhuset har en stor kafeteria som i de senere år har blitt
            påbygd med en stor veranda for ytterligere kapasitet, det vil være
            livevisning og resultater på skytterhuset.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full md:w-1/3">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23857099311238,8.064855103360074&&zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
          </div>

          <div className="relative overflow-x-auto w-full md:w-2/3">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">BANE</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">
                    SKYTERETNING I GRADER
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3">LENGDE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23857099311238,8.064855103360074&&zoom=13"
                      target="_blank"
                    >
                      200M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    10 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    200 meter
                  </td>
                </tr>

                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23755452489302,8.067036521039766&&zoom=13"
                      target="_blank"
                    >
                      100M
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    95 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    100 meter
                  </td>
                </tr>

                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23755452489302,8.067036521039766&&zoom=13"
                      target="_blank"
                    >
                      STANG
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    95 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">-</td>
                </tr>

                <tr className="text-xs md:text-sm">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    <a
                      className="hover:underline text-blue-700"
                      href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23755452489302,8.067036521039766&&zoom=13"
                      target="_blank"
                    >
                      FELTHURTIG
                    </a>
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">
                    95 grader
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container mt-10 gap-5 md:gap-10 flex flex-col justify-between items-start">
        <div className="flex flex-col px-4 md:px-32">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start">
            <Image
              src={kristiansandparkering}
              alt="parkering"
              className="object-cover w-full lg:w-[650px] rounded-lg"
            />
            <div className="flex flex-col flex-1">
              <div className="flex flex-col text-lg md:text-xl text-[#002f67] font-bold">
                Parkering i Kristiansand
              </div>
              <div className="flex flex-col mt-3 text-base md:text-lg font-medium text-[#002f67]">
                Det er stor parkeringsplass på Farvannet med plass til bobiler
                og campingvogner for dem som har med seg dette. Det er kort
                avstand fra parkeringsplassen til skytterhus og standplassene.
                Skytter med nedsatt bevegelighet kan kontakte arrangøren for å
                få henvist parkering umiddelbart utenfor standplass, øvrige
                parkerer på stor grus parkeringsplass.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
