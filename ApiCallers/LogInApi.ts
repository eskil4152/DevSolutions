import apiUrl from "@/app/tools/config";

export default async function LogInAPI(username: string, password: string) {
  const data = await fetch(`${apiUrl}/api/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  return data;
}
