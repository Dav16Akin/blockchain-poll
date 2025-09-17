export type PollType = {
  question: string;
  options: string[];
  image: string;
  votes: number[];
  voted: boolean;
  id: number;
};
