"use client";

import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetAllAdminsAPI() {
  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/owner/admins`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
  );

  return { loading, error, response };
}
