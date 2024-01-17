"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProductsById(id: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/${id}`)
  );

  return { loading, error, response };
}
