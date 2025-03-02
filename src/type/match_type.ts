export type Match = {
  awayScore: number;
  awayTeam: Team;
  homeScore: number;
  homeTeam: Team;
  status: string;
  time: string;
  title: string;
};

export type Team = {
  name: string;
  place: number;
  players: Player[];
  points: number;
  total_kills: number;
}

export type Player = {
  kills: number;
  username: string;
}
