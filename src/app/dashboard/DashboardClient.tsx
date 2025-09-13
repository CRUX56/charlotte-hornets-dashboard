"use client";

import { TeamData, PlayerData } from "@/lib/models";

interface DashboardClientProps {
  externalTeamData: TeamData[];
  teamRoster: PlayerData[];
}

export default function DashboardClient({
  externalTeamData,
  teamRoster,
}: DashboardClientProps) {
  return (
    <div>
      {/* You can render or inspect externalTeamData here */}
      <pre>{JSON.stringify(externalTeamData, null, 2)}</pre>
      <pre>{JSON.stringify(teamRoster, null, 2)}</pre>
    </div>
  );
}
