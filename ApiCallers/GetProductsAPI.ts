"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
  console.log("API URL: ", apiUrl);

  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/all`)
  );

  return { loading, error, response };
}
