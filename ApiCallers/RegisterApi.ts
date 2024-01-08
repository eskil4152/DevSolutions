"use client";

export default async function RegisterAPI(
  username: string,
  password: string,
  email: string
) {
  const data = await fetch("http://localhost:8080/api/register", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: username,
      password: password,
      email: email,
    }),
  });

  return data;
}
