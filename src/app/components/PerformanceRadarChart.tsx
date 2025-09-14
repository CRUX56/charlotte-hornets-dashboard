import { useState } from "react";
import { MockStatEntry } from "../../lib/models";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type PerformanceRadarChartProps = {
  mockStatistics: MockStatEntry[];
};

const statCategories = [
  { key: "pts", label: "Points" },
  { key: "reb", label: "Rebounds" },
  { key: "ast", label: "Assists" },
  { key: "stl", label: "Steals" },
  { key: "blk", label: "Blocks" },
  { key: "turnover", label: "Turnovers" },
  { key: "min", label: "Minutes" },
];

function PerformanceRadarChart({ mockStatistics }: PerformanceRadarChartProps) {
  const [selectedId, setSelectedId] = useState<number>(
    mockStatistics[0]?.id ?? 1
  );
  const selectedPlayer = mockStatistics.find(
    (entry) => entry.id === selectedId
  );

  const data = {
    labels: statCategories.map((cat) => cat.label),
    datasets: [
      {
        label:
          selectedPlayer?.player?.first_name &&
          selectedPlayer?.player?.last_name
            ? `${selectedPlayer.player.first_name} ${selectedPlayer.player.last_name}`
            : "Player Stats",
        data: statCategories.map((cat) => {
          if (cat.key === "min") {
            // Convert minutes string to number
            return selectedPlayer?.min ? parseInt(selectedPlayer.min) : 0;
          }
          return selectedPlayer
            ? selectedPlayer[cat.key as keyof MockStatEntry] ?? 0
            : 0;
        }),
        backgroundColor: "rgba(32, 23, 71, 0.2)",
        borderColor: "#201747",
        pointBackgroundColor: "#00848E",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Player Performance Across Categories",
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        angleLines: { display: true },
        suggestedMin: 0,
      },
    },
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="mb-4 flex text-align: center">
        <label htmlFor="player-select" className="mr-2 font-semibold">
          Select Player:
        </label>
        <select
          id="player-select"
          value={selectedId}
          onChange={(e) => setSelectedId(Number(e.target.value))}
          className="border rounded px-2 py-1"
        >
          {mockStatistics.map((entry) => (
            <option key={entry.id} value={entry.id}>
              {entry.player?.first_name} {entry.player?.last_name}
            </option>
          ))}
        </select>
      </div>
      <Radar data={data} options={options} />
    </div>
  );
}

export default PerformanceRadarChart;
