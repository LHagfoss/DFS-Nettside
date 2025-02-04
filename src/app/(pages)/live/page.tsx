import React from "react";

interface Result {
  name: string;
  rank: string;
  points: string;
  team: string;
  city: string;
  testShots: string;
  total: string;
  range: string;
  round: string;
  distance: string;
  targetImage: string;
}

interface ShootingResultsProps {
  results: Result[];
}

const ShootingResults: React.FC<ShootingResultsProps> = ({ results }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary mb-6">Live Rifle Shooting Results</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-red-100 border border-red-400 p-4 rounded-lg shadow-lg"
          >
            <div className="mb-4 flex justify-center">
              <img src={result.targetImage} alt="Blink" className="h-24 w-24 rounded-full border border-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-red-600 mb-2">{result.name}</h2>
              <p className="text-red-800"><strong>Rank:</strong> {result.rank}</p>
              <p className="text-red-800"><strong>Tabell på poeng:</strong> {result.points}</p>
              <p className="text-red-800"><strong>Hvilket lag:</strong> {result.team}</p>
              <p className="text-red-800"><strong>Sted (by):</strong> {result.city}</p>
              <p className="text-red-800"><strong>Prøveskudd:</strong> {result.testShots}</p>
              <p className="text-red-800"><strong>Total:</strong> {result.total}</p>
              <p className="text-red-800"><strong>Bane (1, 2 eller 3 lsm):</strong> {result.range}</p>
              <p className="text-red-800"><strong>Runde:</strong> {result.round}</p>
              <p className="text-red-800"><strong>Avstand:</strong> {result.distance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LivePage() {
    const results: Result[] = [
        {
          name: "John Doe",
          rank: "1",
          points: "98",
          team: "Team A",
          city: "Oslo",
          testShots: "10",
          total: "108",
          range: "1",
          round: "Final",
          distance: "50m",
          targetImage: "https://via.placeholder.com/48"
        }
    ];
    
    return (
        <main className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
            <ShootingResults results={results} />
        </main>
    );
}
