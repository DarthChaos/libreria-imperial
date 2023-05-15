import { Comic } from "../single/comic";

export interface ComicsState {
  comics:
    | {
        id: string;
        title: string;
        desc: string;
        image: string;
        tag: string | boolean;
      }[]
    | [];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
