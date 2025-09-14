import filterMatchingPlayers from "./utilFunctions";

describe("filterMatchingPlayers", () => {
  const dummyTeam = {
    id: 1,
    abbreviation: "CHA",
    city: "Charlotte",
    conference: "East",
    division: "Southeast",
    full_name: "Charlotte Hornets",
    name: "Hornets",
  };

  const dummyPlayer = {
    id: 1,
    first_name: "",
    last_name: "",
    position: "G",
    height: 80, // inches
    weight: 200, // lbs
    team: dummyTeam,
    college: "",
    birth_date: "",
    birth_city: "",
    birth_country: "",
    jersey_number: 1,
    country: "USA",
    draft_year: 2020,
    draft_round: 1,
    draft_number: 3,
  };

  const apiPlayers = [
    { ...dummyPlayer, id: 1, first_name: "LaMelo", last_name: "Ball" },
    { ...dummyPlayer, id: 2, first_name: "Miles", last_name: "Bridges" },
    { ...dummyPlayer, id: 3, first_name: "John", last_name: "Doe" },
    { ...dummyPlayer, id: 4, first_name: "Nick", last_name: "Smith Jr." },
  ];

  it("returns matching players from apiPlayers", () => {
    const currentPlayers = ["LaMelo Ball", "Miles Bridges"];
    const result = filterMatchingPlayers(currentPlayers, apiPlayers);
    expect(result).toEqual([
      apiPlayers[0],
      apiPlayers[1],
    ]);
  });

  it("returns empty array if no matches", () => {
    const currentPlayers = ["Nonexistent Player"];
    const result = filterMatchingPlayers(currentPlayers, apiPlayers);
    expect(result).toEqual([]);
  });

  it("is case-insensitive and trims names", () => {
    const currentPlayers = ["  lamelo ball  ", "MILES BRIDGES"];
    const result = filterMatchingPlayers(currentPlayers, apiPlayers);
    expect(result).toEqual([
      apiPlayers[0],
      apiPlayers[1],
    ]);
  });

  it("handles empty currentPlayers array", () => {
    const result = filterMatchingPlayers([], apiPlayers);
    expect(result).toEqual([]);
  });

  it("handles empty apiPlayers array", () => {
    const currentPlayers = ["LaMelo Ball", "Miles Bridges"];
    const result = filterMatchingPlayers(currentPlayers, []);
    expect(result).toEqual([]);
  });
});
