import apiUrl from "@/app/tools/config";

export default async function LogInAPI(username: string, password: string) {
  const data = await fetch(`${apiUrl}/api/login`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  if (data.ok) {
    const jwtToken = data.headers.get("Authorization");
    if (jwtToken) localStorage.setItem("Authorization", jwtToken);

    return data;
  }

  return data;
}
