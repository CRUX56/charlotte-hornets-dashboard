import { PlayerData } from "./models";

export default function filterMatchingPlayers(
  currentPlayers: string[],
  apiPlayers: PlayerData[]
) {
  const nameSet = new Set(
    currentPlayers.map((name) => name.trim().toLowerCase())
  );

  return apiPlayers.filter((player) => {
    const fullName = `${player.first_name} ${player.last_name}`
      .trim()
      .toLowerCase();
    return nameSet.has(fullName);
  });
}
