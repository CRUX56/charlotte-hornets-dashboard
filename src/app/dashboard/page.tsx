import { auth0 } from "../../lib/auth0";
import { redirect } from "next/navigation";
import { fetchDashboardTeam } from "@/lib/fetchDashboardTeam";
import { fetchDashboardTeamRoster } from "@/lib/fetchDashboardTeamRoster";
import { getMockStatistics } from "@/lib/fetchMockStatistics";
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
  const mockStatistics = await getMockStatistics();

  console.log("mockStatistics", JSON.stringify(mockStatistics, null, 2));

  return (
    <>
      <DashboardClient
        externalTeamData={externalTeamData}
        teamRoster={teamRoster}
        mockStatistics={mockStatistics}
      />
    </>
  );
}
