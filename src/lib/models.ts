export interface TeamData {
  id: number;
  conference: string;
  division: string;
  city: string;
  name: string;
  full_name: string;
  abbreviation: string;
}

export interface PlayerData {
  id: number;
  first_name: string;
  last_name: string;
  position: string;
  height: number | null;
  weight: number | null;
  jersey_number: number | null;
  college: string | null;
  country: string | null;
  draft_year: number | null;
  draft_round: number | null;
  draft_number: number | null;
  team: TeamData;
}

export interface DashboardClientProps {
  externalTeamData: TeamData[];
  teamRoster: PlayerData[];
}

export interface PlayerLeaderBoardProps {
  teamRoster: PlayerData[];
}
