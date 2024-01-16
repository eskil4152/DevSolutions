"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProductsById(id: string) {
  const { loading, error, response } = useLoading(
    async () => await fetchJSON("http://localhost:8080/api/products/" + id)
  );

  return { loading, error, response };
}
