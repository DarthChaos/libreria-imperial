export interface Character {
  title: string;
  image: string;
  update: string;
  desc: string;
  comics: string[];
  events: string[];
  stories: string[];
}
export interface CharacterState {
  character: Character;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
