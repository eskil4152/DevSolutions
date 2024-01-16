"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/all`)
  );

  return { loading, error, response };
}
