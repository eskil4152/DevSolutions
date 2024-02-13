"use client";

import fetchJSON from "@/app/tools/FetchJson";
import GetAuthorizationToken from "@/app/tools/GetAuthorizationToken";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function GetAllAdminsAPI() {
  const hasToken = GetAuthorizationToken();

  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/owner/admins`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${hasToken}`,
        },
        credentials: "include",
      }),
  );

  return { loading, error, response };
}
