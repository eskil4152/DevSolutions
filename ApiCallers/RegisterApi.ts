"use client";

export default async function RegisterAPI(
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  email: string
) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

  const data = await fetch(`${apiUrl}/api/register`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      firstname: firstname,
      lastname: lastname,
      username: username,
      password: password,
      email: email,
    }),
  });

  return data;
}
