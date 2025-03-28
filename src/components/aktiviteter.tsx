import Image from "next/image";

export default function Aktiviteter() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 mt-20 sm:mt-24 lg:mt-32">
      <div className="prose prose-lg text-[#002f67] max-w-none">
        <p className="text-base sm:text-lg lg:text-xl text-center sm:text-left leading-relaxed">
          Senvåren/tidlig sommer på Sørlandet er fantastisk, så vi håper
          skytterne tar med seg familien og tar en langhelg med skyting og
          opplevelser nede på solkysten. Vi har samlet noen aktuelle lenker
          under her, enda mer finner dere på websiden til Visit Sørlandet:{" "}
          <a
            href="https://www.visitsorlandet.com/"
            className="text-blue-600 hover:text-blue-800 hover:underline break-words"
          >
            https://www.visitsorlandet.com/
          </a>
        </p>

        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Lyngdal */}
          <section>
            <div className="space-y-5 sm:space-y-5">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#002f67] mt-12 sm:mt-16">
                Lyngdal
              </h2>
              <div className="text-base sm:text-lg text-[#002f67] space-y-4 mt-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Undervannsrestauranten Under:{" "}
                  <a
                    href="https://under.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://under.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Sørlandsbadet badeland:{" "}
                  <a
                    href="https://sorlandsbadet.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://sorlandsbadet.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Nasjonalt Villakssenter Kvåsfossen:{" "}
                  <a
                    href="https://kvasfossen.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://kvasfossen.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Rosfjord Adventure Golf:{" "}
                  <a
                    href="https://www.rosfjord.no/adventuregolf/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.rosfjord.no/adventuregolf/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Shopping:{" "}
                  <a
                    href="https://hoytlavt.no/kristiansand/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://hoytlavt.no/kristiansand/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Sherpatrapp og dagstur hytte:{" "}
                  <a
                    href="https://ut.no/turforslag/1112159758/sherpahytta-dagsturhytta-i-lyngdal-kommune?fbclid=IwZXh0bgNhZW0CMTAAAR1d8d08KDPqIDxfiATcUdNxP8dEnKedp1BkZXcahpBixhzqMdDxsMoKZlA_aem_cPMYWfcu4ZjbEp3hiCCBaQ"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://ut.no/turforslag/1112159758/sherpahytta-dagsturhytta-i-lyngdal-kommune
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Laudal */}
          <section>
            <div className="space-y-5 sm:space-y-5">
              <h2 className="mt-20 text-2xl sm:text-3xl font-bold text-[#002f67]">
                Laudal
              </h2>
              <div className="text-lg text-[#002f67] space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Adventure Norway (Rafting, paintball ++):{" "}
                  <a
                    href="https://www.adventurenorway.net/ "
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.adventurenorway.net/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Marnar Laksesenter:{" "}
                  <a
                    href="https://www.facebook.com/MarnarLaksesenter/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.facebook.com/MarnarLaksesenter/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Lindland Gård Familiepark:{" "}
                  <a
                    href="https://www.lindlandgård.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.lindlandgård.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Shopping i og opplev Sørlandsperlen Mandal:{" "}
                  <a
                    href="https://www.visitsorlandet.com/destinasjoner/mandal-lindesnes/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.visitsorlandet.com/destinasjoner/mandal-lindesnes/
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Søgne */}
          <section>
            <div className="space-y-5 sm:space-y-5">
              <h2 className="mt-20 text-2xl sm:text-3xl font-bold text-[#002f67]">
                Søgne
              </h2>
              <div className="text-lg text-[#002f67] space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Shopping:{" "}
                  <a
                    href="https://www.tangvallarena.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.tangvallarena.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Ny-Hellesund:{" "}
                  <a
                    href="https://www.visitnorway.no/reisemal/sorlandet/kristiansand/listings-kristiansand/ny-hellesund/223867/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.visitnorway.no/reisemal/sorlandet/kristiansand/listings-kristiansand/ny-hellesund/223867/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Kunst og kultursenter Søgne gamle prestegård:{" "}
                  <a
                    href="https://www.sognegamleprestegard.no/?fbclid=IwZXh0bgNhZW0CMTAAAR3P1DCLqzb10DYMeVs8lvgUmL_1mufCYsYv5LPw1DdAtG0LlSVp28nfPfM_aem_NGltKLEhgeAGDMZesZebmw"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.sognegamleprestegard.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Badestrand på Årossanden med spisested og overnatting på Åros
                  Feriesenter:{" "}
                  <a
                    href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.aaros.no%2F%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR1RNgxBy3J5vNRiE-cGAWOaO9jKY2GqeAGrhRw_qcCxVLj56AYheG8_i4o_aem_Fil1Zt_ZXEXTHtV4kHdqFQ&h=AT2IgMA6Nz3X8WZQo1D1meL0M2E1gjXoouRZlQ0aBn2-yb1F-xHp1eu86B9OH5DrgaSXlNsSTe2vVbNzFuHQYDuDvuOnHUiVpFZjNCupQSeZo-pDXWjdPjv0fxC1-GVhJZsx_VwG"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.aaros.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Høllesanden med Høllen båthavn og spisestedet Skagen Pub
                  Søgne:{" "}
                  <a
                    href="https://skagenpub.no/?fbclid=IwZXh0bgNhZW0CMTAAAR1Nk1c_6ILQJ6Xn6oGJqNpKXNSDUBwDcZZsrKrSmLVbMjD45MrCroaRH-8_aem_tRWuoWrMhgC6z4fICivbPA"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://skagenpub.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Badetur ut i skjærgåren med rutebåten fra Høllen:{" "}
                  <a
                    href="https://skanav.no/Ruteplan-S%C3%B8gne.html?fbclid=IwZXh0bgNhZW0CMTAAAR1RNgxBy3J5vNRiE-cGAWOaO9jKY2GqeAGrhRw_qcCxVLj56AYheG8_i4o_aem_Fil1Zt_ZXEXTHtV4kHdqFQ"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://skanav.no/Ruteplan-S%C3%B8gne.html
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Åros ridesenter:{" "}
                  <a
                    href="https://aarosridesenter.no/?fbclid=IwZXh0bgNhZW0CMTAAAR1d8d08KDPqIDxfiATcUdNxP8dEnKedp1BkZXcahpBixhzqMdDxsMoKZlA_aem_cPMYWfcu4ZjbEp3hiCCBaQ"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://aarosridesenter.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Spennende Via ferrata, kontakt Søgne klatreklubb:{" "}
                  <a
                    href="https://www.sogneklatreklubb.no/?fbclid=IwZXh0bgNhZW0CMTAAAR0OF27BMac0fl6LIY8oiK1v6cTc5NOM3ENAQZENk5zNgWg8zIDJnpcUJAA_aem_4gUXeZvEHQh0kTqoeSXFQg"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.sogneklatreklubb.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Tangvald sentrum med masse butikker og spisesteder:{" "}
                  <a
                    href="https://www.tangvallarena.no/?fbclid=IwZXh0bgNhZW0CMTAAAR0OF27BMac0fl6LIY8oiK1v6cTc5NOM3ENAQZENk5zNgWg8zIDJnpcUJAA_aem_4gUXeZvEHQh0kTqoeSXFQg"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.tangvallarena.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Masse fine turløyper i terrenget rundt om i Søgne:{" "}
                  <a
                    href="https://www.visitsorlandet.com/listing/turl%C3%B8yper-i-s%C3%B8gne/139786306/?fbclid=IwZXh0bgNhZW0CMTAAAR1JUIrJUjRN3_Wu9S9F5cQUX0s-xvdwjKSF7g2x2EWHN7aciy_kMEShlxk_aem_aRKojO7ETcOmNgfBxg7JJA"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.visitsorlandet.com/listing/turl%C3%B8yper-i-s%C3%B8gne/139786306/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Kunst og kultursenter Søgne gamle prestegård:{" "}
                  <a
                    href="https://www.sognegamleprestegard.no/?fbclid=IwZXh0bgNhZW0CMTAAAR3P1DCLqzb10DYMeVs8lvgUmL_1mufCYsYv5LPw1DdAtG0LlSVp28nfPfM_aem_NGltKLEhgeAGDMZesZebmw"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.sognegamleprestegard.no/
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/*Kristiansand*/}
          <section>
            <div className="space-y-5 sm:space-y-5">
              <h2 className="mt-20 text-2xl sm:text-3xl font-bold text-[#002f67]">
                Kristiansand
              </h2>
              <div className="text-lg text-[#002f67] space-y-4">
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Dyreparken og badelandet:{" "}
                  <a
                    href="https://www.dyreparken.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.dyreparken.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Aquarama badeland:{" "}
                  <a
                    href="https://www.aquarama.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.aquarama.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Kanonmuseet:{" "}
                  <a
                    href="https://www.vestagdermuseet.no/kanonmuseum/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.vestagdermuseet.no/kanonmuseum/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Kunstsiloen:{" "}
                  <a
                    href="https://www.kunstsilo.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.kunstsilo.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Høyt og Lavt klatrepark:{" "}
                  <a
                    href="https://hoytlavt.no/kristiansand/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://alti.no/lyngdal/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Kino:{" "}
                  <a
                    href="https://www.nfkino.no/?city=kristiansands"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.nfkino.no/?city=kristiansands
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Shopping:{" "}
                  <a
                    href="https://sorlandssenteret.no/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://sorlandssenteret.no/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Turer i Kristiansandsområdet:{" "}
                  <a
                    href="https://www.facebook.com/labbeturer/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.facebook.com/labbeturer/
                  </a>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-2">
                  Og mye mer på Visit Sørlandet:{" "}
                  <a
                    href="https://www.visitsorlandet.com/destinasjoner/kristiansand/"
                    className="text-blue-600 hover:text-blue-800 hover:underline break-words"
                  >
                    https://www.visitsorlandet.com/destinasjoner/kristiansand/
                  </a>
                </p>
              </div>
            </div>
          </section>

          <div className="text-lg underline text-[#002f67] space-y-4">
            <p className="flex flex-col sm:flex-row sm:items-center gap-2">
              I tillegg kan vi anbefale turer innom koselige sørlandsbyer som
              for eksempel Mandal og Lillesand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
