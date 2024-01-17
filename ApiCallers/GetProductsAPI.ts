"use client";

import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";
require("dotenv").config();

export default function GetProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  console.log("API URL: ", apiUrl);

  const { loading, error, response } = useLoading(
    async () => await fetchJSON(`${apiUrl}/api/products/all`)
  );

  return { loading, error, response };
}
