import { error, status } from "@/interfaces/global-redux";

export interface EventsState {
  events:
    | {
        id: string;
        title: string;
        desc: string;
        image: string;
        tag: string | boolean;
      }[]
    | [];
  status: status;
  error: error;
}
