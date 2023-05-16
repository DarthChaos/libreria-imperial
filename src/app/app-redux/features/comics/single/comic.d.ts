import { error, status } from "@/interfaces/global-redux";

export interface RoleNameElement {
  role: string;
  name: string;
}
export interface IdNameElement {
  id: string;
  name: string;
}
export interface Comic {
  title: string;
  image: string;
  update: string;
  desc: string;
  price: string;
  credits: RoleNameElement[];
  characters: NameElement[];
  cover: RoleNameElement[];
}
export interface ComicState {
  comic: Comic;
  status: status;
  error: error;
}
