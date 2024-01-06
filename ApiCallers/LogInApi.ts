"use client";

import postJSON from "@/app/tools/PostJson";
import fetchJSON from "../app/tools/FetchJson";
import useLoading from "../app/tools/UseLoading";

export default function LogIn(username: string, password: string) {
  const { loading, error, data } = useLoading(
    async () =>
      await postJSON("http://localhost:8080/api/login", {
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
  );
  return data;
}
