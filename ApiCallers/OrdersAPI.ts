"use client";

import fetchJSON from "@/app/tools/FetchJson";
import useLoading from "@/app/tools/UseLoading";

export default function OrdersAPI() {
  const apiUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

  const { loading, error, response } = useLoading(
    async () =>
      await fetchJSON(`${apiUrl}/api/order/all`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
  );

  return { loading, error, response };
}
