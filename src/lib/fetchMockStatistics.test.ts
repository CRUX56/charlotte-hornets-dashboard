import { getMockStatistics } from "./fetchMockStatistics";
import fs from "fs/promises";

jest.mock("fs/promises");

const mockReadFile = fs.readFile as jest.Mock;

describe("getMockStatistics", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("returns parsed data when file read is successful", async () => {
    const mockData = { player: "LaMelo Ball", points: 25 };
    mockReadFile.mockResolvedValueOnce(JSON.stringify(mockData));
    const result = await getMockStatistics();
    expect(result).toEqual(mockData);
    expect(mockReadFile).toHaveBeenCalledWith(
      expect.stringContaining("mockStatistics.json"),
      "utf-8"
    );
  });

  it("returns null and logs error when file read fails", async () => {
    const error = new Error("File not found");
    mockReadFile.mockRejectedValueOnce(error);
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    const result = await getMockStatistics();
    expect(result).toBeNull();
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error reading mockStatistics.json:",
      error
    );
    consoleSpy.mockRestore();
  });
});
