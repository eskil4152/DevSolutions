"use client";

import fetchJSON from "./FetchJson";
import useLoading from "./UseLoading";

export default function GetProducts() {
  const { loading, error, data } = useLoading(
    async () => await fetchJSON("http://localhost:8080/api/product/all")
  );
  return data;
}
