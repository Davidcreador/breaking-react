export type EpisodeType = {
  air_date: string;
  characters: Array<string>;
  episode: string;
  episode_id: string;
  season: string;
  series: string;
  title: string;
}

export type CharacterType = {
  appearance: [number];
  better_call_saul_appearance: [];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: [string];
  portrayed: string;
  status: string;
}

export type DeathType = {
  cause: string;
  death: string;
  death_id: number;
  episode: number;
  last_words: string;
  number_of_deaths: number;
  responsible: string;
  season: string;
}
