import { error, status } from "@/interfaces/global-redux";

export interface Character {
  title: string;
  image: string;
  update: string;
  desc: string;
  comics: string[];
  events: string[];
  stories: string[];
}

export interface CharacterGroup {
  id: string;
  title: string;
  image: string;
  desc: string;
}
export interface CharacterState {
  character: Character;
  characters: CharacterGroup[];
  status: status;
  error: error;
}
