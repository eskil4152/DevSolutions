"use client";

import apiUrl from "@/app/tools/config";
import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetFaq() {
  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/faq`)
  );

  return { loading, error, response };
}
