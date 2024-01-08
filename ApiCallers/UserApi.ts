"use client";

import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";

export default function RegisterAPI() {
  const { loading, error, data } = useLoading(
    async () =>
      await fetchJSON("http://localhost:8080/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
  );

  return { loading, error, data };
}
