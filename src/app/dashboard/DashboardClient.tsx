"use client";

interface TeamData {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

interface DashboardClientProps {
  externalTeamData: TeamData[];
}

export default function DashboardClient({
  externalTeamData,
}: DashboardClientProps) {
  console.log("External Team Data (client):", externalTeamData);

  return (
    <div>
      {/* You can render or inspect externalTeamData here */}
      <pre>{JSON.stringify(externalTeamData, null, 2)}</pre>
    </div>
  );
}
