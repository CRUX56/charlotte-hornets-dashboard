import { auth0 } from "../../lib/auth0";
import { redirect } from "next/navigation";
import PerformanceRadarChart from "../components/PerformanceRadarChart";
import PlayerLeaderBoard from "../components/PlayerLeaderBoard";
import PointsDistributionChart from "../components/PointsDistributionChart";
import ShootingEfficiencyChart from "../components/ShootingEfficiencyChart";
import { fetchDashboardTeam } from "@/lib/fetchDashboardTeam";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await auth0.getSession();
  const user = session?.user;

  if (!user) {
    redirect("/auth/login");
  }

  const externalTeamData = await fetchDashboardTeam();
  console.log("External Team Data:", externalTeamData);

  return (
    <div>
      <h1>Welcome to the Dashboard, {user.name}!</h1>
      <DashboardClient externalTeamData={externalTeamData} />
      <PerformanceRadarChart />
      <PlayerLeaderBoard />
      <PointsDistributionChart />
      <ShootingEfficiencyChart />
    </div>
  );
}
