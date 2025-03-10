import Image from "next/image";
import sorlandet from "@/public/sorlandet.png";

import lyngdalparkering from "@/public/lyngdalparkering.png";
import laudalparkering from "@/public/laudalparkering.png";
import sogneparkering from "@/public/sogneparkering.png";
import kristiansandparkering from "@/public/kristiansandparkering.png";
import Link from "next/link";

export default function Veibeskrivelse() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-24 md:mt-52 px-4 md:px-0">
      <div className="container gap-5 md:gap-10 flex flex-col-reverse md:flex-row justify-between items-center md:items-start px-4 md:px-32">
        <Image
          src={sorlandet}
          alt="sorlandetlogo"
          className="object-cover w-full md:w-3/5"
        />
        <div className="flex-col flex w-full md:w-auto">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold md:text-left">
            En kompakt stevnehelg på Sørlandet
          </div>
          <div className="flex flex-col mt-4 text-base md:text-xl font-medium text-[#002f67]">
            Skytterlagene i Lyngdal, Laudal, Søgne og Kristiansand ønsker
            velkommen til en langhelg på Sørlandet med relativt korte avstander.
            Alle stevnene ligger relativt nære E39/E18 med en liten avstikker
            for å skyte de to rundene med stang og felthurting som går i Laudal.
          </div>
        </div>
      </div>

      <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Reiser du med campingvogn?
          </div>
          <div className="mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Flere av banene (Lyngdal, Laudal og Søgne) har ikke plass til at du
            tar med campingvogn helt frem til skytebanen, vi anbefaler de som
            reiser med vogn å parkere denne på overnattingsstedet, hvis dette
            ikke er mulig eller veldig upraktisk ifbm ankomst eller avreise så
            tilrettelegger arrangørlagene plasser man kan sette fra seg vogn
            litt lenger unna banen og kjøre til banen med bilen. Arrangøren har
            inngått samarbeid med Åros Feriesenter i Søgne og anbefaler
            skytterne om å samle seg der, {" "}
            <Link href="/overnatting" className="hover:underline text-blue-700">
              les mer her.
            </Link>
          </div>
        </div>
      </div>

      <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Lyngdal Skytterlag - Lyngdal Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Skytebaneanlegget i Lyngdal ligger sentralt til, like ved E39. Banen
            har adresse Skytebaneveien 1, Lyngdal, det vil bli skiltet fra
            rundkjøring på E39, etter at du har tatt av E39 tar du første vei
            til høyre følg veien til venstre til enden for å komme til
            skytebanen. Det er ca 850 meter fra rundkjøringen på E39 til
            skytebanen.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://www.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.16357985855411,7.096496735361301&amp;zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
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

      <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Laudal Skytterlag - Laudal Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Den enkleste måten å komme seg til skytebanen i Laudal er å ta FV455
            nordover fra Mandalskrysset (der den nye E39 motorveien
            begynner/slutter). Etter knappe 20 km er det skiltet avkjøring på
            Oppsalveien til man kommer til skytebanen etter knappe 4 km.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&q=58.23351176865408,7.4692684384200865&&zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23351176865408,7.4692684384200865&amp;&amp;zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
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

      <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Søgne Skytterlag - Søgne og Greipstad Sparebank Arena
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            For å komme til den nye utendørsbanen til Søgne tar du av E39 ved
            Shell stasjonen på Lonelier, herifra er det skiltet gjennom
            nyetablert industriområde og et skogholt frem til skytebanen. Banen
            ligger drøye 2 km fra avkjøringen fra E39.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.11070720483179,7.719182523271993&amp;&amp;zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
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

      <div className="container mt-10 md:mt-20 gap-5 md:gap-10 flex flex-col justify-between items-start px-4 md:px-32">
        <div className="flex flex-col">
          <div className="flex flex-col text-xl md:text-2xl text-[#002f67] font-bold">
            Kristiansand og Omegn Skytterlag - Farvannet Skytebane
          </div>
          <div className="flex flex-col mt-3 text-base md:text-xl font-medium text-[#002f67]">
            Skytebanen på Farvannet ligger på Østre Ålefjærvei 261. Den beste
            veien går fra Timeneskrysset på E18 øst for byen, langs RV41 til
            Ryenkrysset (ca 8 kilometer), herifra tar du til venstre inn på Østre
            Ålefjærvei og følger denne (ca 4 km) frem til skytebanen. Det vil
            være skiltet fra Timeneskrysset.
          </div>
        </div>

        <div className="container flex flex-col md:flex-row justify-between w-full gap-5 md:gap-10">
          <div className="flex flex-col w-full">
            <iframe
              className="w-full h-[250px] md:h-[300px]"
              frameBorder="0"
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13"
            ></iframe>
            <a
              className="text-blue-700 hover:underline mt-2"
              href="https://maps.google.com/maps?key=AIzaSyB_fgcY7vCBUkr_R2r4f0fEvN0AndGjGhY&amp;q=58.23857099311238,8.064855103360074&amp;&amp;zoom=13"
              target="_blank"
            >
              Vis vei
            </a>
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

        <div className="container mt-5 gap-5 md:gap-10 flex flex-col justify-between items-start">
          <div className="flex flex-col px-4 md:px-32">
            <div className="flex flex-row gap-8 items-start">
              <div className="flex flex-col flex-1">
                <div className="flex flex-col text-lg md:text-xl text-[#002f67] font-bold">
                  Fly / kollektivtransport
                </div>
                <div className="flex flex-col mt-3 text-base md:text-lg font-medium text-[#002f67]">
                  Nærmeste flyplass er Kjevik, som ligger bare minutter å kjøre
                  fra skytebanen i Kristiansand. Det er også mulig å komme seg
                  til Sørlandet med tog og ekspressbusser fra både Oslo og
                  Stavanger. Skyttere som kommer med kollektivtrafikk anbefales
                  imidlertid å avtale samkjøring skyttere som har bil nede på
                  Sørlandet eller leiebil, da det ikke er lett og komme seg helt
                  frem til skytebanene med kollektivtransport.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
