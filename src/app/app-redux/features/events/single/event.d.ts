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
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
