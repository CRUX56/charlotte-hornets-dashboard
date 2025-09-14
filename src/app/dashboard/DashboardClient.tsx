"use client";

import { DashboardClientProps } from "@/lib/models";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import PointsDistributionChart from "../components/PointsDistributionChart";
import ShootingEfficiencyChart from "../components/ShootingEfficiencyChart";
import PlayerLeaderBoard from "../components/PlayerLeaderBoard";
import PlayerStatsBoard from "../components/PlayerStatsBoard";
import Card from "../components/Card";

export default function DashboardClient({
  teamRoster,
  mockStatistics,
}: DashboardClientProps) {
  return (
    <div className="w-full min-h-screen bg-[var(--lightGray)] px-2 md:px-8 py-4 md:py-8">
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--hornetsPurple)] mb-4 md:mb-0">
          Charlotte Hornets Dashboard
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 w-full">
        <Card title="Player Leaderboard" className="col-span-1 sm:col-span-2">
          <PlayerLeaderBoard teamRoster={teamRoster} />
        </Card>
        <Card
          title="Shooting Efficiency Chart"
          className="col-span-1 sm:col-span-2"
        >
          <ShootingEfficiencyChart
            mockStatistics={mockStatistics?.data ?? []}
          />
        </Card>
        <Card title="Performance Radar Chart">
          <PerformanceRadarChart mockStatistics={mockStatistics?.data ?? []} />
        </Card>
        <Card title="Current Roster 2025">
          <PlayerStatsBoard mockStatistics={mockStatistics?.data ?? []} />
        </Card>
        <Card
          title="Points Distribution Chart"
          className="col-span-1 sm:col-span-2"
        >
          <PointsDistributionChart
            mockStatistics={mockStatistics?.data ?? []}
          />
        </Card>
      </div>
    </div>
  );
}
