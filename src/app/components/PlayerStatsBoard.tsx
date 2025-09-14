import { MockStatEntry } from "../../lib/models";

export default function PlayerStatsBoard({
  mockStatistics,
}: {
  mockStatistics: MockStatEntry[];
}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-[var(--hornetsTeal)] text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Points</th>
              <th className="py-2 px-4 text-left">Rebounds</th>
              <th className="py-2 px-4 text-left">Assists</th>
              <th className="py-2 px-4 text-left">FG%</th>
              <th className="py-2 px-4 text-left">Minutes</th>
            </tr>
          </thead>
          <tbody>
            {mockStatistics.map((entry) => (
              <tr key={entry.id} className="border-b hover:bg-[var(--hornetsGray)]">
                <td className="py-2 px-4">
                  {entry.player?.first_name || ""} {entry.player?.last_name || ""}
                </td>
                <td className="py-2 px-4">{entry.pts ?? "N/A"}</td>
                <td className="py-2 px-4">{entry.reb ?? "N/A"}</td>
                <td className="py-2 px-4">{entry.ast ?? "N/A"}</td>
                <td className="py-2 px-4">{typeof entry.fg_pct === "number" ? `${(entry.fg_pct * 100).toFixed(1)}%` : "N/A"}</td>
                <td className="py-2 px-4">{entry.min ?? "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
