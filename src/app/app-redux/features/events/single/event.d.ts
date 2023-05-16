import { error, status } from "@/interfaces/global-redux";

export interface EventState {
  event: {
    date: string;
    title: string;
    desc: string;
    img: string;
    wiki: URL | null;
    detail: URL | null;
    lastCharacter: string;
  };
  status: status;
  error: error;
}
