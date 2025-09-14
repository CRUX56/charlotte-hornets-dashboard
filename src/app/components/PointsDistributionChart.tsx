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

type PointsDistributionChartProps = {
  mockStatistics: MockStatEntry[];
};

function PointsDistributionChart({
  mockStatistics,
}: PointsDistributionChartProps) {
  const labels = mockStatistics.map((entry) =>
    `${entry.player?.first_name ?? ""} ${entry.player?.last_name ?? ""}`.trim()
  );
  const pointsData = mockStatistics.map((entry) => entry.pts ?? 0);

  const data = {
    labels,
    datasets: [
      {
        label: "Points Per Game",
        data: pointsData,
        backgroundColor: "#201747",
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
        text: "Points Distribution Per Player",
      },
      tooltip: {
        callbacks: {
          label: function (context: import("chart.js").TooltipItem<"bar">) {
            return `${context.label}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Points",
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

export default PointsDistributionChart;
