"use client";

import apiUrl from "@/app/tools/config";
import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProducts() {
  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/all`)
  );

  return { loading, error, response };
}
