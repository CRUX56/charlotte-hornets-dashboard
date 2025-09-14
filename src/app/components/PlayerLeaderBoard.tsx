import { PlayerData } from "../../lib/models";

export default function PlayerLeaderBoard({
  teamRoster,
}: {
  teamRoster: PlayerData[];
}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-[var(--hornetsTeal)] text-white">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Position</th>
              <th className="py-2 px-4 text-left">Height</th>
              <th className="py-2 px-4 text-left">Weight</th>
              <th className="py-2 px-4 text-left">Jersey Number</th>
              <th className="py-2 px-4 text-left">College</th>
              <th className="py-2 px-4 text-left">Country of Origin</th>
              <th className="py-2 px-4 text-left">Draft Year</th>
              <th className="py-2 px-4 text-left">Draft Round</th>
              <th className="py-2 px-4 text-left">Draft Pick Number</th>
              <th className="py-2 px-4 text-left">Team</th>
              {/* Add more columns as needed */}
            </tr>
          </thead>
          <tbody>
            {teamRoster.map((player) => (
              <tr
                key={player.id}
                className="border-b hover:bg-[var(--hornetsGray)]"
              >
                <td className="py-2 px-4">
                  {player.first_name} {player.last_name}
                </td>
                <td className="py-2 px-4">{player.position || "N/A"}</td>
                <td className="py-2 px-4">
                  {player.height
                    ? `${player.height}' ${player.height}"`
                    : "N/A"}
                </td>
                <td className="py-2 px-4">
                  {player.weight ? `${player.weight} lbs` : "N/A"}
                </td>
                <td className="py-2 px-4">{player.jersey_number || "N/A"}</td>
                <td className="py-2 px-4">{player.college || "N/A"}</td>
                <td className="py-2 px-4">{player.country || "N/A"}</td>
                <td className="py-2 px-4">{player.draft_year || "N/A"}</td>
                <td className="py-2 px-4">{player.draft_round || "N/A"}</td>
                <td className="py-2 px-4">{player.draft_number || "N/A"}</td>
                <td className="py-2 px-4">{player.team.name || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
