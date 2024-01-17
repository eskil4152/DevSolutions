"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetFaq() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/faq`)
  );

  return { loading, error, response };
}
