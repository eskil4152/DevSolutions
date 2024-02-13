"use client";

import apiUrl from "@/app/tools/config";

export default async function RegisterAPI(
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  email: string,
) {
  return await fetch(`${apiUrl}/api/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      email: email,
    }),
    credentials: "include",
  });
}
