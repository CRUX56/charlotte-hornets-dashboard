export async function fetchDashboardTeam() {
  // Grab data from external API
  const apiKey = process.env.EXTERNAL_API_KEY;
  const apiUrl = process.env.EXTERNAL_API_URL;

  if (!apiKey) {
    throw new Error("EXTERNAL_API_KEY is not defined");
  }

  console.log("Using EXTERNAL_API_KEY:", apiKey);

  if (!apiUrl) {
    throw new Error("EXTERNAL_API_URL is not defined");
  }

  console.log("Fetching team data from:", apiUrl);

  const res = await fetch(`${apiUrl}/teams/4`, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch team data: ${res.status} ${res.statusText}`
    );
  }

  const allTeams = await res.json();

  console.log("All Teams from Balldontlie:", allTeams);

  return allTeams;
}
