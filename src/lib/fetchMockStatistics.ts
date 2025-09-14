import path from "path";
import fs from "fs/promises";

const mockStatsPath = path.join(
  process.cwd(),
  "src",
  "lib",
  "mockStatistics.json"
);

export async function getMockStatistics() {
  try {
    const file = await fs.readFile(mockStatsPath, "utf-8");
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error("Error reading mockStatistics.json:", error);
    return null;
  }
}
