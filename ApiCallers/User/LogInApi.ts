import apiUrl from "@/app/tools/config";

export default async function LogInAPI(username: string, password: string) {
  return await fetch(`${apiUrl}/api/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
    credentials: "include",
  });
}
