import { error, status } from "@/interfaces/global-redux";
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
  status: status;
  error: error;
}
