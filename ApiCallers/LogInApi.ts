"use client";

export default async function LogIn(username: string, password: string) {
  const data = await fetch("http://localhost:8080/api/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  return data;
}
