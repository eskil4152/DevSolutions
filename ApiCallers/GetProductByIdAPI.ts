"use client";

import apiUrl from "@/app/tools/config";
import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProductsById(id: string) {
  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/${id}`)
  );

  return { loading, error, response };
}
