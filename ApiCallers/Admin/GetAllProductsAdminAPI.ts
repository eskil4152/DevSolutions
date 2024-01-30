"use client";

import apiUrl from "@/app/tools/config";
import fetchJSON from "../../app/tools/FetchJson";
import useLoading from "../../app/tools/UseLoading";
import GetAuthorizationToken from "@/app/tools/GetAuthorizationToken";

export default function GetProductsAdmin() {
  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/admin/products/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${GetAuthorizationToken()}`,
        },
      }),
  );

  return { loading, error, response };
}
