import { createHash } from "crypto";

const MARVEL_API_PARAMS = Object.freeze({
  API_URL: "https://gateway.marvel.com:443/v1/public/",
  PRIVATE_KEY: "635de7065008cffc26c33dd559b8ab368220697a",
  PUBLIC_KEY: "77989cd1b9b55360e5dad825e78d3f52",
  GET: "GET",
  POST: "POST",
});

interface BodyParams {
  limit?: string;
  orderBy?: string;
}

export const client = (uri: string, bodyParams: BodyParams = {}) => {
  const timestamp = new Date().toISOString();
  const hash = createHash("md5")
    .update(
      timestamp + MARVEL_API_PARAMS.PRIVATE_KEY + MARVEL_API_PARAMS.PUBLIC_KEY,
    )
    .digest("hex");
  const params = new URLSearchParams({
    apikey: MARVEL_API_PARAMS.PUBLIC_KEY,
    ts: timestamp,
    hash: hash,
    ...bodyParams,
  });

  const fetchURI = (requestInit: RequestInit = {}) =>
    fetch(`${MARVEL_API_PARAMS.API_URL}${uri}?${params}`, requestInit).then(
      (res) => res.json(),
    );
  const get = () => fetchURI({ method: MARVEL_API_PARAMS.GET });
  const post = () => fetchURI({ method: MARVEL_API_PARAMS.POST });

  return { get, post };
};
