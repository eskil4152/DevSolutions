"use client";

import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";
import apiUrl from "@/app/tools/config";

export default function OrdersAPI() {
  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/order/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
  );

  return { loading, error, response };
}
