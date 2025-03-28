import Image from "next/image";
import NorgesCupenLogo from "@/public/norgescup.png";
import Tidsplan from "@/public/tidsplan.jpg";

export default function Stevneinfo() {
  return (
    <div className="w-full max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
    
      <div className="space-y-8 sm:space-y-12">
        <div className="flex flex-col items-center">
          <Image
            src={NorgesCupenLogo}
            alt="Norges Cupen Logo"
            className="w-64 sm:w-72 lg:w-96 h-auto"
            priority
          />
        </div>

    
        <div className="prose prose-lg text-[#002f67] max-w-none">
          <p className="text-lg sm:text-xl lg:text-2xl text-center sm:text-left">
            Velkommen til første runde av Norgescupen 2025. Stevnene arrangeres i
            langhelgen torsdag 29. mai - søndag 1. juni på Sørlandet. Lyngdal
            Skytterlag, Søgne Skytterlag og Kristiansand og Omegn Skytterlag
            arrangerer banestevnene. Laudal Skytterlag arrangerer 2 stang og
            felthurtig stevner og Kristiansand og Omegn Skytterlag arrangerer det
            siste stevnet.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src={Tidsplan}
            alt="Tidsplan"
            className="w-full max-w-3xl rounded-lg shadow-lg"
            priority
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002f67]">
            Forhåndspåmelding
          </h2>
          <div className="text-lg text-[#002f67] space-y-4">
            <p>
              Forhåndspåmelding gjelder for grupper på{" "}
              <span className="underline">
                minst åtte personer som reiser og skyter samlet hvor de har lang
                reisevei
              </span>
              .
            </p>
            <p>
              Eksakte skytetider kan ikke garanteres da flere kan ha ønsket samme
              tider i forhåndspåmelding.
            </p>
            <p>
              Forhåndspåmelding sendes arrangør på e-post{" "}
              <a
                href="mailto:kom@skytterlag.no"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                kom@skytterlag.no
              </a>{" "}
              <span className="underline">
                i tidsrommet 8. april - 26. april kl 21.00
              </span>
              .
            </p>
            <p className="font-semibold">
              Ordinær påmelding åpner 29. april i MittDFS.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002f67]">
            Priser
          </h2>
          <p className="text-xl text-[#002f67]">Priser for baneskytingen</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-[10px] sm:text-sm">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-[#002f67]">Klasse</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-[#002f67]">Totalpris</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-[#002f67]">Herav arr avgift</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-[#002f67]">Premieinnskudd</th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center font-semibold text-[#002f67]">Sentral avgift DFS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[#002f67]">Kl. 3-5, V55, V65 og V73</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">200,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">75,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">75,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">50,-</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[#002f67]">Kl. 1 og 2, HK-416, kikkert, jeger</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">150,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">75,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">75,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">-</td>
                </tr>
                <tr>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-[#002f67]">Kl. R, ER, J, EJ, NU, SK1, SK2, Åpen</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">80,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">40,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">40,-</td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-[#002f67]">-</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg text-[#002f67] mt-4">
            Stang og Felthurtig koster 90 kr (arr.avgift: kr 40,- og
            premieinnskudd kr 50,-).
          </p>
        </div>
      </div>
    </div>
  );
}
