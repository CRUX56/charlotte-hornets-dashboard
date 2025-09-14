"use client";

import { DashboardClientProps } from "@/lib/models";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import PointsDistributionChart from "../components/PointsDistributionChart";
import ShootingEfficiencyChart from "../components/ShootingEfficiencyChart";
import PlayerLeaderBoard from "../components/PlayerLeaderBoard";
import Card from "../components/Card";

export default function DashboardClient({
  externalTeamData,
  teamRoster,
}: DashboardClientProps) {
  return (
    <div className="min-h-screen w-full bg-[var(--hornetsGray)] flex flex-col items-center justify-start p-8">
      <div className="w-full h-full flex flex-col items-left justify-start">
        <h1 className="text-4xl font-bold text-[var(--hornetsPurple)] mb-8">
          Charlotte Hornets Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <Card title="Player Leaderboard" className="col-span-1 md:col-span-2">
          <PlayerLeaderBoard teamRoster={teamRoster} />
        </Card>
        <Card title="Performance Radar Chart">
          <PerformanceRadarChart />
        </Card>
        <Card title="Points Distribution Chart">
          <PointsDistributionChart />
        </Card>
        <Card title="Shooting Efficiency Chart">
          <ShootingEfficiencyChart />
        </Card>
      </div>
      {/* Optionally render team data and roster for debugging */}
      {/* <pre>{JSON.stringify(externalTeamData, null, 2)}</pre>
      <pre>{JSON.stringify(teamRoster, null, 2)}</pre> */}
    </div>
  );
}
