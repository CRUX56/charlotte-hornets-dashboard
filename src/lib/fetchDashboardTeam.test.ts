import { fetchDashboardTeam } from "./fetchDashboardTeam";

// Mock global fetch
const mockFetch = jest.fn();
global.fetch = mockFetch;

describe("fetchDashboardTeam", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    process.env.EXTERNAL_API_KEY = "bc84883a-043a-4e45-beb3-361834bed0f2y";
    process.env.EXTERNAL_API_URL = "https://api.example.com";
  });

  it("throws if EXTERNAL_API_KEY is missing", async () => {
    process.env.EXTERNAL_API_KEY = "";
    await expect(fetchDashboardTeam()).rejects.toThrow(
      "EXTERNAL_API_KEY is not defined"
    );
  });

  it("throws if EXTERNAL_API_URL is missing", async () => {
    process.env.EXTERNAL_API_URL = "";
    await expect(fetchDashboardTeam()).rejects.toThrow(
      "EXTERNAL_API_URL is not defined"
    );
  });

  it("throws if fetch response is not ok", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found",
    });
    await expect(fetchDashboardTeam()).rejects.toThrow(
      "Failed to fetch team data: 404 Not Found"
    );
  });

  it("returns team data when fetch is successful", async () => {
    const mockData = { id: 4, name: "Hornets" };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });
    const result = await fetchDashboardTeam();
    expect(result).toEqual(mockData);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://api.example.com/teams/4",
      expect.objectContaining({
        headers: expect.objectContaining({
          Authorization: "Bearer bc84883a-043a-4e45-beb3-361834bed0f2y",
          "Content-Type": "application/json",
        }),
      })
    );
  });
});
