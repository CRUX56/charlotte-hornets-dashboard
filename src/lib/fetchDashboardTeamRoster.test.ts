import { fetchDashboardTeamRoster } from "./fetchDashboardTeamRoster";
import filterMatchingPlayers from "./utilFunctions";

jest.mock("./utilFunctions");

const mockFetch = jest.fn();
global.fetch = mockFetch;

const mockApiPlayers = [
  { first_name: "LaMelo", last_name: "Ball" },
  { first_name: "Miles", last_name: "Bridges" },
  { first_name: "John", last_name: "Doe" },
];

describe("fetchDashboardTeamRoster", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    process.env.EXTERNAL_API_KEY = "bc84883a-043a-4e45-beb3-361834bed0f2y";
    process.env.EXTERNAL_API_URL = "https://api.example.com";
    (filterMatchingPlayers as jest.Mock).mockReturnValue([
      mockApiPlayers[0],
      mockApiPlayers[1],
    ]);
  });

  it("throws if EXTERNAL_API_KEY is missing", async () => {
    process.env.EXTERNAL_API_KEY = "";
    await expect(fetchDashboardTeamRoster(4)).rejects.toThrow(
      "EXTERNAL_API_KEY is not defined"
    );
  });

  it("throws if EXTERNAL_API_URL is missing", async () => {
    process.env.EXTERNAL_API_URL = "";
    await expect(fetchDashboardTeamRoster(4)).rejects.toThrow(
      "EXTERNAL_API_URL is not defined"
    );
  });

  it("throws if fetch response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });
    await expect(fetchDashboardTeamRoster(4)).rejects.toThrow(
      "Failed to fetch team roster"
    );
  });

  it("returns matching players when fetch is successful", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ data: mockApiPlayers }),
    });
    const result = await fetchDashboardTeamRoster(4);
    expect(result).toEqual([mockApiPlayers[0], mockApiPlayers[1]]);
    expect(filterMatchingPlayers).toHaveBeenCalledWith(
      expect.arrayContaining(["Miles Bridges", "LaMelo Ball"]),
      mockApiPlayers
    );
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.example.com/players?team_ids[]=4&per_page=100",
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer bc84883a-043a-4e45-beb3-361834bed0f2y",
          "Content-Type": "application/json",
        }),
      })
    );
  });
});
