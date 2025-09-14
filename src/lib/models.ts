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
  mockStatistics: MockStatistics | null;
}

export interface PlayerLeaderBoardProps {
  teamRoster: PlayerData[];
}

export interface MockStatistics {
  data: MockStatEntry[];
  meta: {
    next_cursor: number;
    per_page: number;
  };
}

export interface MockStatEntry {
  id: number;
  min: string;
  fgm: number;
  fga: number;
  fg_pct: number;
  fg3m: number;
  fg3a: number;
  fg3_pct: number;
  ftm: number;
  fta: number;
  ft_pct: number;
  oreb: number;
  dreb: number;
  reb: number;
  ast: number;
  stl: number;
  blk: number;
  turnover: number;
  pf: number;
  pts: number;
  player: {
    id: number;
    first_name: string;
    last_name: string;
    position: string;
    height: string;
    weight: string;
    jersey_number: string;
    college: string;
    country: string;
    draft_year: number;
    draft_round: number;
    draft_number: number;
    team_id: number;
  };
  team: {
    id: number;
    conference: string;
    division: string;
    city: string;
    name: string;
    full_name: string;
    abbreviation: string;
  };
  game: {
    id: number;
    date: string;
    season: number;
    status: string;
    period: number;
    time: string;
    postseason: boolean;
    home_team_score: number;
    visitor_team_score: number;
    home_team_id: number;
    visitor_team_id: number;
  };
}
