import { MockStatEntry } from "../../lib/models";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ShootingEfficiencyChartProps = {
  mockStatistics: MockStatEntry[];
};

function ShootingEfficiencyChart({
  mockStatistics,
}: ShootingEfficiencyChartProps) {
  const labels = mockStatistics.map((entry) =>
    `${entry.player?.first_name ?? ""} ${entry.player?.last_name ?? ""}`.trim()
  );
  const fgData = mockStatistics.map((entry) =>
    typeof entry.fg_pct === "number" ? +(entry.fg_pct * 100).toFixed(1) : 0
  );
  const fg3Data = mockStatistics.map((entry) =>
    typeof entry.fg3_pct === "number" ? +(entry.fg3_pct * 100).toFixed(1) : 0
  );

  const data = {
    labels,
    datasets: [
      {
        label: "FG%",
        data: fgData,
        backgroundColor: "#201747", // hornetsPurple
      },
      {
        label: "3P%",
        data: fg3Data,
        backgroundColor: "#00848E", // hornetsTeal
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Shooting Efficiency by Player",
      },
      tooltip: {
        callbacks: {
          label: function (context: import("chart.js").TooltipItem<"bar">) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: "%",
        },
      },
    },
  };

  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
}

export default ShootingEfficiencyChart;
