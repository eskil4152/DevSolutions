"use client";

import fetchJSON from "./FetchJson";
import useLoading from "./UseLoading";

export default function GetFromAPI(url: string) {
  const { loading, error, data } = useLoading(async () => await fetchJSON(url));

  return data;
}
