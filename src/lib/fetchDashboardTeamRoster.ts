import filterMatchingPlayers from "./utilFunctions";

export async function fetchDashboardTeamRoster(teamId: number) {
  // Get Team Roster for a specific team, pass the teamID
  const apiKey = process.env.EXTERNAL_API_KEY;
  const apiUrl = process.env.EXTERNAL_API_URL;
  const metadata = {
    next_cursor: null,
    per_page: 100,
  };

  if (!apiKey) {
    throw new Error("EXTERNAL_API_KEY is not defined");
  }

  if (!apiUrl) {
    throw new Error("EXTERNAL_API_URL is not defined");
  }

  const res = await fetch(
    `${apiUrl}/players?team_ids[]=${teamId}&per_page=${metadata.per_page}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch team roster");
  }

  //Players/active api is not in the free tier. So I mapped the incoming data to find the current roster
  // Note: This is a temporary solution until I can access the active players endpoint.
  // This is not ideal as it requires manual updates to the currentPlayersList array.
  // A better solution would be to have access to the active players endpoint.
  // For now, this will have to suffice.

  const currentPlayersList = [
    "Miles Bridges",
    "LaMelo Ball",
    "Grant Williams",
    "DeQuan Jones",
    "Nick Smith Jr.",
    "Sion James",
    "Kon Knueppel",
    "Collin Sexton",
    "Wendell Moore Jr.",
    "Josh Green",
    "Ryan Kalkbrenner",
    "Antonio Reeves",
    "Drew Peterson",
    "Moussa Diabaté",
    "Pat Connaughton",
    "Mason Plumlee",
    "Tre Mann",
    "Brandon Miller",
    "Kj Simpson",
    "Spencer Dinwiddie",
    "Seth Curry",
    "Tidjane Salaün",
    "Liam McNeeley",
    "Taj Gibson",
  ];

  const roster = await res.json();
  const apiPlayers = roster.data;

  const matchingPlayers = filterMatchingPlayers(currentPlayersList, apiPlayers);

  return matchingPlayers;
}
