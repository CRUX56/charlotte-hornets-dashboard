import { auth0 } from "../../lib/auth0";
import { redirect } from "next/navigation";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import PlayerLeaderBoard from "../components/PlayerLeaderBoard";
import PointsDistributionChart from "../components/PointsDistributionChart";
import ShootingEfficiencyChart from "../components/ShootingEfficiencyChart";
import { fetchDashboardTeam } from "@/lib/fetchDashboardTeam";
import { fetchDashboardTeamRoster } from "@/lib/fetchDashboardTeamRoster";
//import { fetchPlayerStats } from "@/lib/fetchPlayerStats";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!user) {
    redirect("/auth/login");
  }

  // Get data for the dashboard
  const externalTeamData = await fetchDashboardTeam();
  const teamRoster = await fetchDashboardTeamRoster(4);
  //const playerStats = await fetchPlayerStats();
  console.log("Team Roster Data:", JSON.stringify(teamRoster, null, 2));
  //console.log("Player Stats Data:", JSON.stringify(playerStats, null, 2));

  return (
    <div>
      <h1>Welcome to the Dashboard, {user.name}!</h1>
      <DashboardClient
        externalTeamData={externalTeamData}
        teamRoster={teamRoster}
      />
      <PerformanceRadarChart />
      <PlayerLeaderBoard />
      <PointsDistributionChart />
      <ShootingEfficiencyChart />
    </div>
  );
}
