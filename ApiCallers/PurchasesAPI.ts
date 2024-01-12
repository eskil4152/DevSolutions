"use client";

import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";

export default function PurchasesAPI() {
  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON("http://localhost:8080/api/purchases", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
  );

  return { loading, error, response };
}
