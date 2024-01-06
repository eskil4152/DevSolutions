"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function GetProducts() {
  const { loading, error, data } = useLoading(
    async () => await fetchJSON("http://localhost:8080/api/product/all")
  );
  return data;
}